import SectionHeader from '../atoms/SectionHeader';
import FadeIn from '../atoms/FadeIn';
import ProjectCard from '../molecules/ProjectCard';
import { projects } from '../../data/resume';

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <SectionHeader label="// projects" title="Projects" />

        <div className="projects-grid">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.1} className={p.featured ? 'proj-featured-wrapper' : ''}>
              <ProjectCard {...p} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
