import Hero from '@/sections/Hero';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects';
import Skills from '@/sections/Skills';
import Contact from '@/sections/Contact';
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Hero />
      <SectionDivider type="wave" colorScheme="gradient" />
      <Experience />
      <SectionDivider type="angle" colorScheme="secondary" />
      <Projects />
      <SectionDivider type="curve" colorScheme="accent" />
      <Skills />
      <SectionDivider type="triangles" colorScheme="primary" />
      <Contact />
    </main>
  );
} 