import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Premium Modern Hero Section with Advanced Visual Effects */}
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Advanced background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#0F172A] to-[#0F1B30]">
          {/* Noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
          
          {/* Animated gradient orbs */}
          <div className="absolute top-0 right-[10%] w-[45%] h-[40%] rounded-full bg-gradient-to-r from-[hsl(var(--color-accent-primary))] to-[hsl(var(--color-accent-secondary))] opacity-[0.07] blur-[80px] animate-float-slow"></div>
          <div className="absolute -bottom-[5%] left-[15%] w-[40%] h-[40%] rounded-full bg-gradient-to-r from-[#4C76CF] to-[#4F46E5] opacity-[0.08] blur-[90px] animate-float-slow-reverse"></div>
          
          {/* Grid lines */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDBoLTFWMTAwSDBoMTAwVjB6IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIi8+PC9zdmc+')]"></div>
        </div>
        
        {/* Content wrapper with backdrop blur card */}
        <div className="container relative z-10 px-6 md:px-8 py-8 md:py-0 flex justify-center">
          <div className="w-full max-w-5xl">
            <div className="flex flex-col md:flex-row md:items-center gap-8 lg:gap-16">
              
              {/* Left content area with backdrop glass effect */}
              <div className="md:w-[60%] relative p-8 md:p-10 rounded-2xl backdrop-blur-sm bg-white/[0.03] border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.1)] overflow-hidden">
                {/* Shine effect overlay */}
                <div className="absolute -inset-[200px] bg-gradient-to-b from-white/5 to-transparent opacity-40 skew-y-12"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent"></div>
                
                {/* Content with staggered animations */}
                <div className="relative">
                  <ScrollAnimationWrapper animationClass="section-animate" delay="0ms">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[hsl(var(--color-accent-primary))] to-[hsl(var(--color-accent-primary-hover))] text-white rounded-full text-sm font-medium mb-6 shadow-lg backdrop-blur-sm">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                      Product Manager
                    </span>
                  </ScrollAnimationWrapper>
                  
                  <ScrollAnimationWrapper animationClass="section-animate" delay="100ms">
                    <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight leading-[1.1] drop-shadow-sm">
                      <span className="inline-block relative">
                        <span className="relative z-10 text-white">Ayush</span>
                        <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[hsl(var(--color-accent-primary))] to-[hsl(var(--color-accent-secondary))] opacity-30 skew-x-12"></span>
                      </span>
                      <br />
                      <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent drop-shadow-sm">Aggarwal</span>
                    </h1>
                  </ScrollAnimationWrapper>
                  
                  <ScrollAnimationWrapper animationClass="section-animate" delay="200ms">
                    <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl drop-shadow-sm">
                      <span className="text-white font-medium">Crafting innovative and user-centric digital experiences</span> that drive growth and deliver tangible value.
                    </p>
                  </ScrollAnimationWrapper>
                  
                  <ScrollAnimationWrapper animationClass="section-animate" delay="300ms">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                      <Link 
                        href="/#experience" 
                        className="w-full sm:w-auto group relative bg-gradient-to-r from-[hsl(var(--color-accent-primary))] to-[hsl(var(--color-accent-primary-hover))] text-white px-8 py-4 rounded-lg overflow-hidden
                                 flex items-center justify-center shadow-[0_5px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_5px_40px_rgba(0,118,255,0.3)] 
                                 transition-all duration-300 border border-white/10"
                      >
                        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></span>
                        <span className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--color-accent-primary))] to-[hsl(var(--color-accent-primary-hover))] opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                        <span className="relative z-10 flex items-center justify-center font-semibold">
                          <span>Explore Experience</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </span>
                      </Link>
                      <a 
                        href="/resume/Ayush_Aggarwal_PM_Resume.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto group relative overflow-hidden bg-white/10 text-white backdrop-blur-sm
                                px-8 py-4 rounded-lg border border-white/20 hover:bg-white/15
                                flex items-center justify-center shadow-sm hover:shadow-lg
                                transition-all duration-300"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></span>
                        <span className="relative z-10 flex items-center justify-center font-semibold">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                          </svg>
                          <span>Download CV</span>
                        </span>
                      </a>
                    </div>
                  </ScrollAnimationWrapper>
                  
                  {/* Animated tech stack symbols - improved visibility */}
                  <ScrollAnimationWrapper animationClass="section-animate" delay="600ms">
                    <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-2">
                      <span className="text-xs text-white/70 font-semibold uppercase tracking-wider mr-2">Tech Stack</span>
                      <div className="flex overflow-hidden">
                        <div className="flex animate-tech-scroll gap-4">
                          <span className="text-white/80 hover:text-white transition-colors duration-200 font-medium">React</span>
                          <span className="text-white/80 hover:text-white transition-colors duration-200 font-medium">Next.js</span>
                          <span className="text-white/80 hover:text-white transition-colors duration-200 font-medium">Figma</span>
                          <span className="text-white/80 hover:text-white transition-colors duration-200 font-medium">Node.js</span>
                          <span className="text-white/80 hover:text-white transition-colors duration-200 font-medium">MongoDB</span>
                          <span className="text-white/80 hover:text-white transition-colors duration-200 font-medium">AWS</span>
                          <span className="text-white/80 hover:text-white transition-colors duration-200 font-medium">TypeScript</span>
                        </div>
                        <div className="flex animate-tech-scroll gap-4" aria-hidden="true">
                          <span className="text-white/80 hover:text-white transition-colors duration-200 font-medium">React</span>
                          <span className="text-white/80 hover:text-white transition-colors duration-200 font-medium">Next.js</span>
                          <span className="text-white/80 hover:text-white transition-colors duration-200 font-medium">Figma</span>
                          <span className="text-white/80 hover:text-white transition-colors duration-200 font-medium">Node.js</span>
                          <span className="text-white/80 hover:text-white transition-colors duration-200 font-medium">MongoDB</span>
                          <span className="text-white/80 hover:text-white transition-colors duration-200 font-medium">AWS</span>
                          <span className="text-white/80 hover:text-white transition-colors duration-200 font-medium">TypeScript</span>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimationWrapper>
                </div>
              </div>
              
              {/* Right side - Replaced with code visualization element */}
              <div className="md:w-[40%] flex flex-col gap-4">
                <ScrollAnimationWrapper animationClass="section-animate" delay="400ms">
                  <div className="relative h-full w-full rounded-2xl overflow-hidden min-h-[520px] backdrop-blur-sm border border-white/10 shadow-lg">
                    {/* Code editor mockup */}
                    <div className="absolute inset-0 bg-[#0d1117] bg-opacity-95">
                      {/* Editor header */}
                      <div className="h-8 bg-[#161b22] border-b border-[#30363d] flex items-center px-4">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                          <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                          <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                        </div>
                        <div className="text-xs text-white/60 mx-auto">portfolio.jsx</div>
                      </div>
                      
                      {/* Code content */}
                      <div className="p-6 font-mono text-sm leading-relaxed">
                        <div className="flex">
                          <span className="text-[#6e7681] mr-4">1</span>
                          <span className="text-[#ff7b72]">const </span>
                          <span className="text-[#c9d1d9]"> {'\u00A0'}ProductManager = () </span>
                          <span className="text-[#ff7b72]">=&gt;</span>
                          <span className="text-[#c9d1d9]"> {`{`}</span>
                        </div>
                        <div className="flex">
                          <span className="text-[#6e7681] mr-4">2</span>
                          <span className="text-[#c9d1d9]">  </span>
                          <span className="text-[#ff7b72]">return{'\u00A0'} </span>
                          <span className="text-[#c9d1d9]"> {` {`}</span>
                        </div>
                        <div className="flex">
                          <span className="text-[#6e7681] mr-4">3</span>
                          <span className="text-[#c9d1d9]">    name: </span>
                          <span className="text-[#a5d6ff]">&apos;Ayush Aggarwal&apos;</span>
                          <span className="text-[#c9d1d9]">,</span>
                        </div>
                        <div className="flex">
                          <span className="text-[#6e7681] mr-4">4</span>
                          <span className="text-[#c9d1d9]">    role: </span>
                          <span className="text-[#a5d6ff]">&apos;Product Manager&apos;</span>
                          <span className="text-[#c9d1d9]">,</span>
                        </div>
                        <div className="flex">
                          <span className="text-[#6e7681] mr-4">5</span>
                          <span className="text-[#c9d1d9]">    experience: </span>
                          <span className="text-[#79c0ff]">&apos;2+&apos;</span>
                          <span className="text-[#c9d1d9]">,</span>
                        </div>
                        <div className="flex">
                          <span className="text-[#6e7681] mr-4">6</span>
                          <span className="text-[#c9d1d9]">    skills: [</span>
                        </div>
                        <div className="flex">
                          <span className="text-[#6e7681] mr-4">7</span>
                          <span className="text-[#c9d1d9]">      </span>
                          <span className="text-[#a5d6ff]">&apos;Python&apos;</span>
                          <span className="text-[#c9d1d9]">,</span>
                        </div>
                        <div className="flex">
                          <span className="text-[#6e7681] mr-4">8</span>
                          <span className="text-[#c9d1d9]">      </span>
                          <span className="text-[#a5d6ff]">&apos;Java&apos;</span>
                          <span className="text-[#c9d1d9]">,</span>
                        </div>
                        <div className="flex">
                          <span className="text-[#6e7681] mr-4">9</span>
                          <span className="text-[#c9d1d9]">      </span>
                          <span className="text-[#a5d6ff]">&apos;SQL&apos;</span>
                          <span className="text-[#c9d1d9]">,</span>
                        </div>
                        <div className="flex">
                          <span className="text-[#6e7681] mr-4">10</span>
                          <span className="text-[#c9d1d9]">      </span>
                          <span className="text-[#a5d6ff]">&apos;PRD Documentation&apos;</span>
                          <span className="text-[#c9d1d9]">,</span>
                        </div>
                        <div className="flex">
                          <span className="text-[#6e7681] mr-4">11</span>
                          <span className="text-[#c9d1d9]">      </span>
                          <span className="text-[#a5d6ff]">&apos;Agile & Scrum&apos;</span>
                          <span className="text-[#c9d1d9]">,</span>
                        </div>
                        <div className="flex">
                          <span className="text-[#6e7681] mr-4">12</span>
                          <span className="text-[#c9d1d9]">      </span>
                          <span className="text-[#a5d6ff]">&apos;and much more&apos;</span>
                          <span className="text-[#c9d1d9]">,</span>
                        </div>
                        <div className="flex">
                          <span className="text-[#6e7681] mr-4">13</span>
                          <span className="text-[#c9d1d9]">    ],</span>
                        </div>
                        <div className="flex">
                          <span className="text-[#6e7681] mr-4">14</span>
                          <span className="text-[#c9d1d9]">    projects: </span>
                          <span className="text-[#79c0ff]">&apos;6+&apos;</span>
                          <span className="text-[#c9d1d9]">,</span>
                        </div>
                        <div className="flex">
                          <span className="text-[#6e7681] mr-4">15</span>
                          <span className="text-[#c9d1d9]">    readyToLearn: </span>
                          <span className="text-[#79c0ff]">&apos;alwaysTrue&apos;</span>
                          <span className="text-[#c9d1d9]">,</span>
                        </div>
                        <div className="flex">
                          <span className="text-[#6e7681] mr-4">16</span>
                          <span className="text-[#c9d1d9]">  {`}`};</span>
                        </div>
                        <div className="flex">
                          <span className="text-[#6e7681] mr-4">17</span>
                          <span className="text-[#c9d1d9]">{`}`};</span>
                        </div>
                        <div className="flex">
                          <span className="text-[#6e7681] mr-4">18</span>
                          <span className="text-[#c9d1d9]"></span>
                        </div>
                        <div className="flex">
                          <span className="text-[#6e7681] mr-4">19</span>
                          <span className="text-[#ff7b72]">export default{'\u00A0'} </span>
                          <span className="text-[#c9d1d9]"> ProductManager;</span>
                        </div>
                        
                        {/* Blinking cursor effect */}
                        <div className="absolute h-5 w-2 bg-white/70 animate-blink"></div>
                      </div>
                    </div>
                    
                    {/* Decorative gradient overlay */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(var(--color-accent-primary))] to-[hsl(var(--color-accent-secondary))]"></div>
                  </div>
                </ScrollAnimationWrapper>
              </div>
            </div>
          </div>
        </div>
        
        {/* Advanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
          <div className="w-7 h-12 border border-white/20 rounded-full flex justify-center items-start p-1 mb-2">
            <div className="w-1 h-2 bg-gradient-to-b from-white to-white/70 rounded-full animate-scroll-down-slow"></div>
          </div>
          <div className="text-white/40 font-medium text-xs tracking-widest uppercase">Scroll</div>
        </div>
      </section>

      {/* Spacer to ensure content below Hero is not initially obscured by fixed header if Hero is not full viewport. */} 
      {/* Or adjust main content padding-top. For now, assuming Hero is effectively full height. */}

      <ExperienceSection />

      <ProjectsSection />

      {/* Enhanced Contact Section with modern design and animations */}
      <section id="contact" className="py-20 md:py-28 bg-[hsl(var(--color-bg-main))] relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[hsla(var(--color-accent-primary),0.03)] to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-to-tr from-[hsla(var(--color-accent-secondary),0.05)] to-transparent blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <ScrollAnimationWrapper>
            <header className="text-center mb-16 md:mb-20">
              <span className="inline-block px-4 py-1.5 bg-[hsla(var(--color-accent-primary),0.08)] text-[hsl(var(--color-accent-primary)] rounded-full text-sm font-medium mb-4">
                Get In Touch
              </span>
              <h2 
                className="font-heading text-4xl md:text-5xl font-bold text-[hsl(var(--color-text-heading))] tracking-tight mb-5"
              >
                Let&apos;s Connect
              </h2>
              <p className="font-body text-lg md:text-xl text-[hsl(var(--color-text-muted))] max-w-2xl mx-auto leading-relaxed">
                My inbox is always open! Whether you have questions, opportunities, or just want to say hello, I&apos;d love to hear from you.
              </p>
            </header>
          </ScrollAnimationWrapper>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            {/* Contact info cards */}
            <ScrollAnimationWrapper delay="150ms">
              <div className="flex flex-col space-y-5">
                {/* Email Card */}
                <div className="group bg-[hsl(var(--color-bg-card))] p-6 rounded-xl shadow-sm border border-[hsla(var(--color-border-soft),0.6)] hover:border-[hsla(var(--color-accent-primary),0.5)] hover:shadow-md transition-all duration-300 flex items-center">
                  <div className="mr-5 w-12 h-12 rounded-lg bg-[hsla(var(--color-accent-primary),0.1)] flex items-center justify-center text-[hsl(var(--color-accent-primary))] group-hover:bg-[hsl(var(--color-accent-primary))] group-hover:text-white transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-medium text-[hsl(var(--color-text-heading))] mb-1">Email</h3>
                    <a href="mailto:ayushaggarwal1136@gmail.com" className="font-body text-[hsl(var(--color-text-muted))] hover:text-[hsl(var(--color-accent-primary))] transition-colors duration-200">ayushaggarwal1136@gmail.com</a>
                  </div>
                </div>
                
                {/* LinkedIn Card */}
                <div className="group bg-[hsl(var(--color-bg-card))] p-6 rounded-xl shadow-sm border border-[hsla(var(--color-border-soft),0.6)] hover:border-[hsla(var(--color-accent-primary),0.5)] hover:shadow-md transition-all duration-300 flex items-center">
                  <div className="mr-5 w-12 h-12 rounded-lg bg-[hsla(var(--color-accent-primary),0.1)] flex items-center justify-center text-[hsl(var(--color-accent-primary))] group-hover:bg-[hsl(var(--color-accent-primary))] group-hover:text-white transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-medium text-[hsl(var(--color-text-heading))] mb-1">LinkedIn</h3>
                    <a href="https://linkedin.com/in/ayushaggarwalin" target="_blank" rel="noopener noreferrer" className="font-body text-[hsl(var(--color-text-muted))] hover:text-[hsl(var(--color-accent-primary))] transition-colors duration-200">linkedin.com/in/ayushaggarwalin</a>
                  </div>
                </div>
                
                {/* GitHub Card */}
                <div className="group bg-[hsl(var(--color-bg-card))] p-6 rounded-xl shadow-sm border border-[hsla(var(--color-border-soft),0.6)] hover:border-[hsla(var(--color-accent-primary),0.5)] hover:shadow-md transition-all duration-300 flex items-center">
                  <div className="mr-5 w-12 h-12 rounded-lg bg-[hsla(var(--color-accent-primary),0.1)] flex items-center justify-center text-[hsl(var(--color-accent-primary))] group-hover:bg-[hsl(var(--color-accent-primary))] group-hover:text-white transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-medium text-[hsl(var(--color-text-heading))] mb-1">GitHub</h3>
                    <a href="https://github.com/AyushAggarwal1" target="_blank" rel="noopener noreferrer" className="font-body text-[hsl(var(--color-text-muted))] hover:text-[hsl(var(--color-accent-primary))] transition-colors duration-200">github.com/AyushAggarwal1</a>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
            
            {/* Contact form/message */}
            <ScrollAnimationWrapper delay="300ms">
              <div className="bg-[hsl(var(--color-bg-card))] p-8 md:p-10 rounded-xl shadow-xl border border-[hsl(var(--color-border-soft))] backdrop-blur-sm relative overflow-hidden">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[hsla(var(--color-accent-primary),0.08)] to-transparent rounded-bl-[100px] pointer-events-none"></div>
                
                <h3 className="font-heading text-2xl font-bold text-[hsl(var(--color-text-heading))] mb-5">
                  What&apos;s Your Story?
                </h3>
                
                <p className="font-body text-[hsl(var(--color-text-body))] mb-6 leading-relaxed">
                  Interested in learning more about my work and insights? Don&apos;t forget to explore my <a href="https://medium.com/@ayushaggarwal1136" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--color-accent-primary))] hover:underline font-semibold transition-all duration-200 hover:opacity-90">Medium</a> and <a href="https://knowing-spoonbill-268.notion.site/Welcome-to-Ayush-s-Notion-World-833e75a9a45b43d0b73971bf5402ff9d" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--color-accent-primary))] hover:underline font-semibold transition-all duration-200 hover:opacity-90">Notion</a>.
                </p>
                
                <p className="font-body text-[hsl(var(--color-text-body))] mb-8 leading-relaxed">
                  Looking to collaborate or discuss a potential role? I&apos;m eager to connect on exciting projects.
                </p>
                
                <a 
                  href="mailto:ayushaggarwal1136@gmail.com" // Replace with your actual email
                  className="group relative w-full flex items-center justify-center bg-[hsl(var(--color-accent-primary))] text-white px-8 py-4 rounded-lg overflow-hidden
                             transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 group-hover:translate-x-1 transition-transform duration-300">
                    <path d="m5 12 14-8v16L5 12Z" />
                  </svg>
                  <span className="font-semibold tracking-wide">Send an Email</span>
                </a>
                
                <div className="mt-8 pt-7 border-t border-[hsla(var(--color-border-soft),0.4)] text-center">
                  <p className="font-body text-sm text-[hsl(var(--color-text-subtle))] mb-5">
                    Or connect with me on these platforms
                  </p>
                  
                  <div className="flex justify-center gap-4">
                    {/* Medium Icon */}
                    <a href="https://www.linkedin.com/in/ayushaggarwalin/" className="w-10 h-10 rounded-full bg-[hsla(var(--color-bg-alt),0.3)] flex items-center justify-center text-[hsl(var(--color-text-muted))] hover:bg-[hsl(var(--color-accent-primary))] hover:text-white hover:scale-110 transition-all duration-300" target="_blank" rel="noopener noreferrer" aria-label="Medium">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 0 1-2 2Zm14-7V7a2 2 0 0 0-2-2H10a2 2 0 0 1-2-2V3a2 2 0 0 0-2 2v11" />
                        <path d="M7 3H5a2 2 0 0 0-2 2" />
                        <path d="M7 3v4" />
                      </svg>
                    </a>
                    
                    {/* Notion Icon */}
                    <a href="https://github.com/AyushAggarwal1" className="w-10 h-10 rounded-full bg-[hsla(var(--color-bg-alt),0.3)] flex items-center justify-center text-[hsl(var(--color-text-muted))] hover:bg-[hsl(var(--color-accent-primary))] hover:text-white hover:scale-110 transition-all duration-300" target="_blank" rel="noopener noreferrer" aria-label="Notion">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5Z" />
                        <path d="M5 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
                        <path d="M8 5v10a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1Z" />
                        <path d="M13 5v10a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1Z" />
                      </svg>
                    </a>
                    
                    {/* Docker Hub Icon */}
                    <a href="https://medium.com/@ayushaggarwal1136" className="w-10 h-10 rounded-full bg-[hsla(var(--color-bg-alt),0.3)] flex items-center justify-center text-[hsl(var(--color-text-muted))] hover:bg-[hsl(var(--color-accent-primary))] hover:text-white hover:scale-110 transition-all duration-300" target="_blank" rel="noopener noreferrer" aria-label="Docker Hub">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 2v8" />
                        <path d="M4 2v8" />
                        <path d="M12 2v8" />
                        <path d="M4 10h8l-4 4-4-4Z" />
                        <path d="M14 5.328A6 6 0 1 0 22 11.828" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>
    </>
  );
}
