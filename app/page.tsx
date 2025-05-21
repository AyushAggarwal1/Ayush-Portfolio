import Hero from '@/sections/Hero';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects';
import Skills from '@/sections/Skills';
import Contact from '@/sections/Contact';
import SectionDivider from '@/components/SectionDivider';
import PageAnimator from '@/components/PageAnimator';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <PageAnimator type="fadeInOnLoad">
        <Hero />
      </PageAnimator>
      <SectionDivider type="wave" colorScheme="gradient" />
      <PageAnimator>
        <div className="bg-primary-50 dark:bg-primary-950/30 py-16 md:py-24">
          <Experience />
        </div>
      </PageAnimator>
      <SectionDivider type="angle" colorScheme="secondary" />
      <PageAnimator>
        <div className="bg-secondary-50 dark:bg-secondary-950/30 py-16 md:py-24">
          <Projects />
        </div>
      </PageAnimator>
      <SectionDivider type="curve" colorScheme="accent" />
      <PageAnimator>
        <div className="bg-accent-50 dark:bg-accent-950/30 py-16 md:py-24">
          <Skills />
        </div>
      </PageAnimator>
      <SectionDivider type="triangles" colorScheme="primary" />
      <PageAnimator>
        <div className="bg-primary-50 dark:bg-primary-950/30 py-16 md:py-24">
          <Contact />
        </div>
      </PageAnimator>
    </main>
  );
} 