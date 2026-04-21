import { useEffect, useRef } from 'react';

// Thin gradient bar at the very top of the page showing read progress.
export default function ScrollProgress() {
  const ref = useRef(null);

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const pct = scrollTop / (scrollHeight - clientHeight) || 0;
      if (ref.current) ref.current.style.transform = `scaleX(${pct})`;
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return <div ref={ref} className="scroll-progress" aria-hidden="true" />;
}
