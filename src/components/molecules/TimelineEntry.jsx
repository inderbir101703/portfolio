import { useReveal } from '../../hooks/useReveal';
import { bold } from '../../utils/bold';

export default function TimelineEntry({ company, role, period, bullets, delay = 0 }) {
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className="timeline-item"
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      <div className="tl-dot" aria-hidden="true" />

      <div className="tl-top">
        <div>
          <div className="tl-company">{company}</div>
          <div className="tl-role">{role}</div>
        </div>
        <span className="tl-date">{period}</span>
      </div>

      <div className="tl-card">
        <ul>
          {bullets.map((b, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: bold(b) }} />
          ))}
        </ul>
      </div>
    </div>
  );
}
