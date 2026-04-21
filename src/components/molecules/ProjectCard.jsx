import TechTag from '../atoms/TechTag';
import { bold } from '../../utils/bold';
import { useTilt } from '../../hooks/useTilt';

export default function ProjectCard({ title, badge, featured, bullets, desc, tech, link, linkLabel }) {
  const tilt = useTilt(7);

  return (
    <div className={`proj-card${featured ? ' featured' : ''}`} {...tilt}>
      <div className="proj-header">
        <div className="proj-title">{title}</div>
        {badge && <span className="proj-badge">{badge}</span>}
      </div>

      {bullets && (
        <ul className="proj-bullets">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}

      {desc && (
        <p className="proj-desc" dangerouslySetInnerHTML={{ __html: bold(desc) }} />
      )}

      <div className="proj-footer">
        <div className="tech-tags">
          {tech.map(t => <TechTag key={t}>{t}</TechTag>)}
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="proj-link">
            {linkLabel}
          </a>
        )}
      </div>
    </div>
  );
}
