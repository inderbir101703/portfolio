import { useEffect, useRef } from 'react';

// Adds 'visible' to the returned ref's element when it enters the viewport.
// Used by FadeIn atom and TimelineEntry molecule.
export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          io.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}
