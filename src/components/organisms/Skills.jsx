import SectionHeader from '../atoms/SectionHeader';
import FadeIn from '../atoms/FadeIn';
import SkillCategory from '../molecules/SkillCategory';
import { skills } from '../../data/resume';

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <SectionHeader label="// skills" title="Technical Skills" />

        <FadeIn>
          <div className="skills-grid">
            {skills.map(cat => (
              <SkillCategory key={cat.title} {...cat} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
