import { useEffect, useRef, useState } from 'react';

// Parses "30%", "5+", "<1s" → { prefix, num, suffix }
function parse(val) {
  const hasLt  = val.startsWith('<');
  const rest   = hasLt ? val.slice(1) : val;
  const match  = rest.match(/^(\d+)(.*)/);
  if (!match) return { prefix: '', num: null, suffix: val };
  return { prefix: hasLt ? '<' : '', num: parseInt(match[1]), suffix: match[2] };
}

// Eased count-up that fires once when the element scrolls into view.
function useCountUp(target, duration = 1400) {
  const [count, setCount] = useState(0);
  const ref    = useRef(null);
  const fired  = useRef(false);

  useEffect(() => {
    if (target === null) return;
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || fired.current) return;
      fired.current = true;
      io.unobserve(el);

      let start = null;
      const step = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        setCount(Math.round((1 - Math.pow(1 - p, 3)) * target)); // ease-out cubic
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.5 });

    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return { count, ref };
}

export default function StatCard({ number, label }) {
  const { prefix, num, suffix } = parse(number);
  const { count, ref }          = useCountUp(num);
  const display = num !== null ? `${prefix}${count}${suffix}` : number;

  return (
    <div className="stat-card" ref={ref}>
      <div className="stat-number">{display}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
