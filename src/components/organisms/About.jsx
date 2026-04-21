import SectionHeader from '../atoms/SectionHeader';
import StatCard from '../atoms/StatCard';
import FadeIn from '../atoms/FadeIn';
import { stats } from '../../data/resume';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <SectionHeader label="// about" title="Summary" />

        <FadeIn>
          <p className="about-text">
            Frontend-heavy <strong>Full Stack Engineer</strong> with <strong>5+ years</strong> of experience
            building scalable, high-performance web applications. Deep expertise in{' '}
            <strong>React, Next.js, and TypeScript</strong> paired with backend experience in{' '}
            <strong>Node.js and Java (Spring Boot)</strong>. Strong focus on performance engineering,
            system design, and <strong>AI-powered applications</strong>.
          </p>

          <div className="stats-row">
            {stats.map(s => (
              <StatCard key={s.label} number={s.number} label={s.label} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
