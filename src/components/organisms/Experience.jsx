import SectionHeader from '../atoms/SectionHeader';
import TimelineEntry from '../molecules/TimelineEntry';
import { experience } from '../../data/resume';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <SectionHeader label="// experience" title="Work Experience" />

        <div className="timeline">
          {experience.map((job, i) => (
            <TimelineEntry key={`${job.company}-${i}`} {...job} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}
