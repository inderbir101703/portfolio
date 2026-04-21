import { useEffect, useRef } from 'react';

// Two-part custom cursor: an instant dot + a lagging ring.
// The ring grows when hovering interactive elements.
export default function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let cx = -100, cy = -100; // off-screen until first move
    let rx = cx, ry = cy;

    const onMove = e => { cx = e.clientX; cy = e.clientY; };
    document.addEventListener('mousemove', onMove);

    // Expand ring on interactive targets
    const TARGETS = 'a, button, .btn, .tag, .skill-cat, .proj-card, .hl-card, .stat-card, .tl-card';
    const expand  = () => ringRef.current?.classList.add('ring-hover');
    const shrink  = () => ringRef.current?.classList.remove('ring-hover');
    document.addEventListener('mouseover', e => { if (e.target.closest(TARGETS)) expand(); });
    document.addEventListener('mouseout',  e => { if (e.target.closest(TARGETS)) shrink(); });

    let rafId;
    const tick = () => {
      rafId = requestAnimationFrame(tick);
      // Dot snaps instantly
      dotRef.current && (dotRef.current.style.transform = `translate(${cx - 4}px, ${cy - 4}px)`);
      // Ring lerps for a silky follow
      rx += (cx - rx) * 0.1;
      ry += (cy - ry) * 0.1;
      ringRef.current && (ringRef.current.style.transform = `translate(${rx - 22}px, ${ry - 22}px)`);
    };
    tick();

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="c-dot"  aria-hidden="true" />
      <div ref={ringRef} className="c-ring" aria-hidden="true" />
    </>
  );
}
