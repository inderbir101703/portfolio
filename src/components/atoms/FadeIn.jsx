import { useReveal } from '../../hooks/useReveal';

export default function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className={`fade-in ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
