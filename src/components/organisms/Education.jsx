import SectionHeader from '../atoms/SectionHeader';
import FadeIn from '../atoms/FadeIn';
import EduCard from '../molecules/EduCard';
import { education } from '../../data/resume';

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <SectionHeader label="// education" title="Education" />

        <FadeIn>
          <EduCard {...education} />
        </FadeIn>
      </div>
    </section>
  );
}
