import Cursor        from './components/atoms/Cursor';
import ScrollProgress from './components/atoms/ScrollProgress';
import FloatingOrbs   from './components/atoms/FloatingOrbs';
import ParticleBackground from './components/organisms/ParticleBackground';
import Nav        from './components/organisms/Nav';
import Hero       from './components/organisms/Hero';
import About      from './components/organisms/About';
import Skills     from './components/organisms/Skills';
import Experience from './components/organisms/Experience';
import Projects   from './components/organisms/Projects';
import Highlights from './components/organisms/Highlights';
import Education  from './components/organisms/Education';
import Footer     from './components/organisms/Footer';

export default function App() {
  return (
    <>
      {/* Background layers (z-index 0) */}
      <ParticleBackground />
      <FloatingOrbs />
      <div className="grid-dots" aria-hidden="true" />

      {/* Chrome (z-index 100+) */}
      <Cursor />
      <ScrollProgress />
      <Nav />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Highlights />
        <Education />
      </main>
      <Footer />
    </>
  );
}
