"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`font-body fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out 
                 py-5 px-6 md:px-10 
                 ${isScrolled 
                   ? 'bg-[hsl(var(--color-bg-card))] shadow-md border-b border-[hsl(var(--color-border-soft))]' 
                   : 'bg-transparent shadow-none border-b border-transparent'}`}
    >
      <nav className="container mx-auto flex justify-between items-center">
        <Link 
          href="/" 
          className={`text-3xl font-bold font-heading tracking-tight transition-colors duration-300 ease-in-out 
                      ${isScrolled ? 'text-[hsl(var(--color-text-heading))] hover:text-[hsl(var(--color-accent-primary))]' : 'text-white hover:text-gray-200'}`}
        >
          AYUSH
        </Link>
        <ul className="flex space-x-6 md:space-x-8 items-center">
          <li><Link href="/#experience" className={`text-sm font-medium transition-colors duration-200 ease-in-out ${isScrolled ? 'text-[hsl(var(--color-text-muted))] hover:text-[hsl(var(--color-accent-primary))]' : 'text-gray-200 hover:text-white'}`}>Experience</Link></li>
          <li><Link href="/#projects" className={`text-sm font-medium transition-colors duration-200 ease-in-out ${isScrolled ? 'text-[hsl(var(--color-text-muted))] hover:text-[hsl(var(--color-accent-primary))]' : 'text-gray-200 hover:text-white'}`}>Projects</Link></li>
          <li><Link href="/#contact" className={`text-sm font-medium transition-colors duration-200 ease-in-out ${isScrolled ? 'text-[hsl(var(--color-text-muted))] hover:text-[hsl(var(--color-accent-primary))]' : 'text-gray-200 hover:text-white'}`}>Contact</Link></li>
          <li>
            <Link 
              href="/resume/Ayush_Aggarwal_PM_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`px-5 py-2.5 rounded-md transition-all duration-200 ease-in-out text-sm font-semibold shadow-sm hover:shadow-md 
                         focus:outline-none focus:ring-2 ring-offset-2 
                         ${isScrolled 
                           ? 'bg-[hsl(var(--color-accent-primary))] text-white hover:bg-[hsl(var(--color-accent-primary-hover))] ring-[hsl(var(--color-accent-primary))] ring-offset-[hsl(var(--color-bg-card))]' 
                           : 'bg-white/20 text-white hover:bg-white/30 ring-white ring-offset-transparent'}`}
            >
              Download CV
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 