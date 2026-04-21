import SectionHeader from '../atoms/SectionHeader';
import FadeIn from '../atoms/FadeIn';
import HighlightCard from '../molecules/HighlightCard';
import { highlights } from '../../data/resume';

export default function Highlights() {
  return (
    <section id="highlights">
      <div className="container">
        <SectionHeader label="// highlights" title="Key Strengths" />

        <FadeIn>
          <div className="highlights-grid">
            {highlights.map(h => (
              <HighlightCard key={h.title} {...h} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
