import { Briefcase, CalendarDays, MapPin, Award, ChevronDown } from 'lucide-react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

interface ExperienceItemProps {
  role: string;
  company: string;
  dates: string;
  location: string;
  description: string[];
  skills?: string;
  type?: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ role, company, dates, location, description, skills, type }) => (
  <div className="relative pl-12 pr-4 sm:pl-16 sm:pr-6 py-3 group mb-16 last:mb-0">
    <div className="absolute left-[29px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsla(var(--color-border-soft),0.4)] via-[hsl(var(--color-accent-primary))] to-[hsla(var(--color-border-soft),0.4)] group-last:hidden opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="absolute left-[25px] bottom-[-28px] transform z-10 group-last:hidden opacity-60 group-hover:opacity-100 transition-opacity duration-500">
      <div className="w-[18px] h-[18px] rounded-full bg-gradient-to-br from-[hsl(var(--color-accent-primary))] to-[hsl(var(--color-accent-secondary))] flex items-center justify-center shadow-sm">
        <ChevronDown size={14} className="text-white animate-pulse-subtle" />
      </div>
    </div>
    
    <div className="absolute left-[29px] top-5 w-[22px] h-[2px] bg-gradient-to-r from-[hsl(var(--color-accent-primary))] to-[hsla(var(--color-accent-secondary),0.7)] transform origin-left scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>

    <div 
      className="absolute left-[18px] top-5 transform -translate-y-1/2 z-10 flex items-center justify-center"
    >
      <div className="w-[22px] h-[22px] rounded-full bg-gradient-to-br from-[hsl(var(--color-accent-primary))] to-[hsl(var(--color-accent-secondary))] flex items-center justify-center 
                     ring-4 ring-[hsla(var(--color-bg-main),0.9)] group-hover:ring-[hsla(var(--color-bg-alt),0.8)] 
                     shadow-[0_0_10px_rgba(0,0,0,0.1)] transition-all duration-500 ease-in-out 
                     group-hover:shadow-[0_0_15px_hsla(var(--color-accent-primary),0.3)]">
        <div className="w-[8px] h-[8px] rounded-full bg-white opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></div>
      </div>
    </div>

    <div 
      className="ml-10 bg-[hsl(var(--color-bg-card))] p-5 sm:p-6 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04),0_2px_8px_rgb(0,0,0,0.06)] border border-[hsla(var(--color-border-soft),0.6)] 
                 hover:border-[hsla(var(--color-accent-primary),0.5)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.06),0_5px_15px_rgba(0,0,0,0.03),0_0_0_1px_hsla(var(--color-accent-primary),0.15)]
                 transition-all duration-500 ease-[cubic-bezier(0.21,0.85,0.4,0.97)] transform group-hover:-translate-y-1
                 relative backdrop-blur-sm backdrop-saturate-[1.8]"
    >
      <div className="absolute left-[-5px] top-5 transform -translate-y-1/2 w-[10px] h-[10px] rounded-full 
                     bg-[hsl(var(--color-bg-card))] border-[1.5px] border-[hsl(var(--color-accent-primary))]
                     opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
      
      <div className="flex items-center mb-2 group/title">
        <div className="mr-3 text-[hsl(var(--color-accent-primary))] bg-[hsla(var(--color-accent-primary),0.08)] p-1.5 rounded-md group-hover/title:bg-[hsla(var(--color-accent-primary),0.12)] transition-colors duration-300">
          <Briefcase size={20} className="group-hover/title:scale-110 transition-transform duration-300" strokeWidth={2} />
        </div>
        <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-[hsl(var(--color-text-heading))] leading-tight">
          {role}
        </h3>
      </div>
      
      <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:flex-wrap text-sm">
        <div className="flex items-center text-[hsl(var(--color-accent-primary))] font-semibold mr-3 mb-1 sm:mb-0">
          <Award size={15} className="mr-1.5 opacity-90" /> 
          {company}
        </div>
        {type && (
          <span 
            className="text-xs font-medium text-[hsl(var(--color-text-subtle))] bg-[hsla(var(--color-bg-alt),0.5)] 
                       px-3 py-1 rounded-full border border-[hsla(var(--color-border-soft),0.3)]
                       mb-1 sm:mb-0 backdrop-blur-sm"
          >
            {type}
          </span>
        )}
      </div>
      
      <div className="flex flex-col sm:flex-row sm:items-center text-xs text-[hsl(var(--color-text-muted))] mb-5 space-y-1 sm:space-y-0 sm:space-x-3.5">
          <div className="flex items-center">
            <CalendarDays size={14} className="mr-1.5 opacity-75" /> {dates}
          </div>
          <div className="flex items-center">
            <MapPin size={14} className="mr-1.5 opacity-75" /> {location}
          </div>
      </div>
      
      <ul className="font-body text-[0.9rem] sm:text-[0.925rem] text-[hsl(var(--color-text-body))] space-y-2.5 list-disc list-outside ml-5 mb-5 leading-relaxed">
        {description.map((desc, index) => (
          <li key={index} className="pl-1 group/item">
            <span className="group-hover/item:text-[hsl(var(--color-text-heading))] transition-colors duration-300">{desc}</span>
          </li>
        ))}
      </ul>

      {skills && (
        <div className="mt-5 pt-4 border-t border-[hsla(var(--color-border-soft),0.5)]">
          <h4 className="font-body text-xs sm:text-sm font-semibold text-[hsl(var(--color-text-heading))] mb-3">Key Skills & Contributions:</h4>
          <div className="flex flex-wrap gap-x-2 gap-y-2">
            {skills.split(', ').map((skill) => (
              <span 
                key={skill} 
                className="text-[0.65rem] sm:text-xs bg-gradient-to-r from-[hsla(var(--color-bg-alt),0.5)] to-[hsla(var(--color-border-soft),0.4)] 
                           text-[hsl(var(--color-text-muted))] hover:text-[hsl(var(--color-text-body))]
                           px-3 py-1.5 rounded-md border border-[hsla(var(--color-border-soft),0.15)] 
                           font-medium transition-all duration-300 hover:shadow-sm hover:-translate-y-0.5 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);

const experienceData: ExperienceItemProps[] = [
  {
    role: "Associate Product Manager",
    company: "AccuKnox",
    dates: "Sep 2024 - Present",
    location: "Menlo Park, CA (Remote)",
    description: [
      "Continuing to drive product innovation and growth in cloud-native security, focusing on strategic roadmap development and market expansion.",
      "Owned end-to-end product development lifecycle: PRDs, wireframes, UX flows, and feature ideation.",
      "Led cross-functional teams (engineering, design, QA) to deliver high-quality product releases on schedule.",
      "Pioneered and implemented end-to-end 5G security vulnerability scanning, enhancing cloud-native security offerings.",
      "Integrated Semgrep, JIRA, and various security tools into the SaaS platform, streamlining security workflows.",
      "Authored comprehensive documentation and onboarding resources, resulting in smoother user adoption.",
      "Improved user retention by 15% through targeted UX enhancements and data-driven iterative design.",
    ],
    skills: "Product Strategy, Agile Methodologies, UX/UI Design Principles, Market Research, Competitive Analysis, Roadmapping, Jira, Git, Cross-functional Collaboration",
    type: "Full-time"
  },
  {
    role: "Product Quality Engineer",
    company: "i2V Systems",
    dates: "Jul 2023 - Sep 2024 (1 yr 3 mos)",
    location: "Gurugram, Haryana, India",
    description: [
      "Enhanced product strategy using user analytics, leading to a 20% increase in customer satisfaction.",
      "Refined QA and testing workflows, reducing defects by 25% and improving sprint efficiency.",
      "Aligned product messaging with marketing & sales, driving a 15% increase in conversions.",
      "Collaborated with engineering & product teams to improve software quality and performance.",
    ],
    skills: "User Analytics, QA Methodologies, Product Messaging, Software Quality Assurance, Cross-functional Teamwork",
    type: "Full-time"
  },
  {
    role: "Product Associate",
    company: "Techvins Software",
    dates: "Feb 2023 - Jul 2023 (6 mos)",
    location: "Gurugram, Haryana, India",
    description: [
      "Optimized Agile execution, increasing sprint velocity by 15% and improving decision-making efficiency.",
      "Conducted data-driven user research, leading to a 25% boost in engagement and 15% higher retention.",
      "Implemented SEO strategies, enhancing organic traffic growth and search engine visibility.",
    ],
    skills: "Agile Execution, User Research, SEO Strategies, Sprint Velocity Optimization, User Engagement",
    type: "Internship"
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[hsl(var(--color-bg-main))] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimationWrapper>
          <h2 
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 md:mb-20 text-[hsl(var(--color-text-heading))] tracking-tight"
          >
            Professional Journey
          </h2>
        </ScrollAnimationWrapper>
        <div className="max-w-3xl lg:max-w-4xl mx-auto relative">
          {experienceData.map((item, index) => (
            <ScrollAnimationWrapper key={index} delay={`${index * 120}ms`} threshold={0.05}>
              <ExperienceItem {...item} />
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 