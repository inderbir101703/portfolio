import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/*
 * Enhanced Three.js particle network.
 *
 * New vs. original:
 *  - 150 multi-colour particles (blue, purple, pink, cyan) via vertexColors
 *  - Gradient connection lines — colour interpolated from the two endpoints
 *  - Mouse REPULSION — particles near the cursor scatter away
 *  - Varying Z depth so some particles appear "in front"
 */
export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    // Fewer particles on mobile — saves battery and GPU
    const isMobile = window.innerWidth < 768;

    // ─── Colour palette ───────────────────────────────────────────────────────
    const palette = [
      new THREE.Color(0x60a5fa), // blue
      new THREE.Color(0xa78bfa), // purple
      new THREE.Color(0xf472b6), // pink
      new THREE.Color(0x22d3ee), // cyan
    ];

    // ─── Particle geometry ────────────────────────────────────────────────────
    const COUNT     = isMobile ? 55 : 150;
    const positions = new Float32Array(COUNT * 3);
    const colors    = new Float32Array(COUNT * 3);
    const velocities = [];

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 110;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 75;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;

      velocities.push({
        x: (Math.random() - 0.5) * 0.012,
        y: (Math.random() - 0.5) * 0.008,
      });

      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3]     = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pGeo.setAttribute('color',    new THREE.BufferAttribute(colors, 3));

    const pMat = new THREE.PointsMaterial({
      vertexColors: true,
      size: 0.45,
      transparent: true,
      opacity: 0.85,
    });
    scene.add(new THREE.Points(pGeo, pMat));

    // ─── Connection lines with per-vertex colour ──────────────────────────────
    const MAX_SEGS  = 3000;
    const lineBuf   = new Float32Array(MAX_SEGS * 6);
    const lineClrs  = new Float32Array(MAX_SEGS * 6);
    const lGeo      = new THREE.BufferGeometry();
    lGeo.setAttribute('position', new THREE.BufferAttribute(lineBuf,  3));
    lGeo.setAttribute('color',    new THREE.BufferAttribute(lineClrs, 3));
    lGeo.setDrawRange(0, 0);

    const lMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.18,
    });
    scene.add(new THREE.LineSegments(lGeo, lMat));

    // ─── Mouse tracking (normalised -1→1) ────────────────────────────────────
    let mouseX = 0, mouseY = 0;
    const onMouse  = e => { mouseX = (e.clientX / window.innerWidth - 0.5) * 2; mouseY = (e.clientY / window.innerHeight - 0.5) * 2; };
    const onResize = () => { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); };

    document.addEventListener('mousemove', onMouse);
    window.addEventListener('resize', onResize);

    const DIST      = 20;   // connection distance
    const REPEL_R   = 12;   // mouse repulsion radius (world units)
    const REPEL_F   = 0.35; // repulsion force
    let rafId;

    function animate() {
      rafId = requestAnimationFrame(animate);

      // Mouse world position (approximate for z=0 plane)
      const wmx =  mouseX * 55;
      const wmy = -mouseY * 38;

      for (let i = 0; i < COUNT; i++) {
        // Mouse repulsion
        const px = positions[i * 3], py = positions[i * 3 + 1];
        const dx = px - wmx, dy = py - wmy;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < REPEL_R && d > 0) {
          const f = ((REPEL_R - d) / REPEL_R) * REPEL_F;
          positions[i * 3]     += (dx / d) * f;
          positions[i * 3 + 1] += (dy / d) * f;
        }

        // Drift
        positions[i * 3]     += velocities[i].x;
        positions[i * 3 + 1] += velocities[i].y;

        // Wrap
        if (positions[i * 3]      >  55) positions[i * 3]     = -55;
        if (positions[i * 3]      < -55) positions[i * 3]     =  55;
        if (positions[i * 3 + 1]  >  38) positions[i * 3 + 1] = -38;
        if (positions[i * 3 + 1]  < -38) positions[i * 3 + 1] =  38;
      }
      pGeo.attributes.position.needsUpdate = true;

      // Rebuild colour-interpolated connection lines
      let seg = 0;
      for (let i = 0; i < COUNT && seg < MAX_SEGS; i++) {
        for (let j = i + 1; j < COUNT && seg < MAX_SEGS; j++) {
          const dx = positions[i*3] - positions[j*3];
          const dy = positions[i*3+1] - positions[j*3+1];
          if (Math.sqrt(dx*dx + dy*dy) < DIST) {
            const b = seg * 6;
            lineBuf[b]   = positions[i*3];   lineBuf[b+1] = positions[i*3+1]; lineBuf[b+2] = positions[i*3+2];
            lineBuf[b+3] = positions[j*3];   lineBuf[b+4] = positions[j*3+1]; lineBuf[b+5] = positions[j*3+2];
            lineClrs[b]   = colors[i*3];   lineClrs[b+1] = colors[i*3+1]; lineClrs[b+2] = colors[i*3+2];
            lineClrs[b+3] = colors[j*3];   lineClrs[b+4] = colors[j*3+1]; lineClrs[b+5] = colors[j*3+2];
            seg++;
          }
        }
      }
      lGeo.setDrawRange(0, seg * 2);
      lGeo.attributes.position.needsUpdate = true;
      lGeo.attributes.color.needsUpdate    = true;

      // Parallax camera
      camera.position.x += (mouseX * 4   - camera.position.x) * 0.025;
      camera.position.y += (-mouseY * 2.5 - camera.position.y) * 0.025;

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} id="bg" />;
}
