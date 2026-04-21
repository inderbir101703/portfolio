import { useRef } from 'react';

// Adds a subtle 3D perspective tilt to a card on mouse move.
// Disabled automatically on touch-only devices (phones/tablets).
// Usage: const tilt = useTilt(8); → <div {...tilt}>
export function useTilt(strength = 10) {
  const ref = useRef(null);

  // matchMedia is synchronous and stable — safe to read at hook call time
  const isTouch = typeof window !== 'undefined' &&
    window.matchMedia('(hover: none)').matches;

  if (isTouch) return { ref };

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    el.style.transform  = `perspective(900px) rotateY(${x * strength}deg) rotateX(${-y * strength}deg) scale3d(1.02,1.02,1.02)`;
    el.style.transition = 'transform 0.1s ease';
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform  = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)';
    el.style.transition = 'transform 0.6s ease';
  };

  return { ref, onMouseMove, onMouseLeave };
}
