import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Resume } from './components/Resume';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { isDark, toggle } = useTheme();
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar isDark={isDark} onToggleTheme={toggle} onOpenResume={() => setResumeOpen(true)} />
      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      {resumeOpen && <Resume onClose={() => setResumeOpen(false)} />}
    </div>
  );
}
