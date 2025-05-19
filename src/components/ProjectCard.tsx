import { Github, ExternalLink, FileText, Video, Presentation as PresentationIcon } from 'lucide-react';
import Image from 'next/image'; // Import next/image
import React from 'react';

// New interface for project links
export interface ProjectLink {
  url: string;
  label: string;
  icon?: React.ElementType; // Lucide icon component
  isPrimary?: boolean; // To style a primary link differently, e.g., live demo
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  links: ProjectLink[];
}

interface ProjectCardProps {
  project: Project;
}

// Updated getLinkIcon to be more specific and use LinkIcon as a fallback
const getLinkIcon = (label: string): React.ElementType => {
  const lowerLabel = label.toLowerCase();
  if (lowerLabel.includes('github')) return Github;
  if (lowerLabel.includes('live') || lowerLabel.includes('demo') || lowerLabel.includes('hosted') || lowerLabel.includes('app') || lowerLabel.includes('site') || lowerLabel.includes('azure') || lowerLabel.includes('netlify')) return ExternalLink;
  if (lowerLabel.includes('report') || lowerLabel.includes('paper') || lowerLabel.includes('doc')) return FileText;
  if (lowerLabel.includes('video') || lowerLabel.includes('youtube') || lowerLabel.includes('recording')) return Video;
  if (lowerLabel.includes('presentation') || lowerLabel.includes('slides')) return PresentationIcon;
  if (lowerLabel.includes('api') || lowerLabel.includes('backend')) return ExternalLink;
  return ExternalLink;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div 
      className="group bg-gradient-to-br from-[hsl(var(--color-bg-card))] to-[hsl(var(--color-bg-alt))] rounded-xl shadow-lg hover:shadow-[0_12px_35px_-8px_hsla(var(--color-accent-primary),0.25),_0_6px_20px_-8px_hsla(var(--color-text-heading),0.15)] 
                 border border-[hsl(var(--color-border-soft))] hover:border-[hsl(var(--color-accent-primary),0.7)]
                 transition-all duration-350 ease-in-out overflow-hidden 
                 flex flex-col h-full transform hover:-translate-y-2 active:translate-y-0 active:shadow-lg"
    >
      {project.imageUrl && (
        <div className="w-full h-48 sm:h-52 overflow-hidden relative">
          <Image 
            src={project.imageUrl} 
            alt={`${project.title} screenshot`}
            width={400}
            height={225}
            className="w-full h-full object-cover transition-transform duration-350 ease-in-out group-hover:scale-105 group-active:scale-100"
          />
          {/* Overlay for a slight 'vignette' or to enhance text if overlaid in future */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-350"></div>
          {/* Optional: Title overlaid on image (use with caution for readability) */}
          {/* <h4 className="absolute bottom-3 left-4 font-heading text-lg text-white drop-shadow-md">{project.title}</h4> */}
        </div>
      )}
      
      <div className={`p-5 flex flex-col flex-grow ${!project.imageUrl ? 'pt-6' : ''}`}>
        <h3 
            className={`font-heading text-lg sm:text-xl font-bold text-[hsl(var(--color-text-heading))] mb-2.5 leading-snug 
                        ${!project.imageUrl ? 'mt-1' : ''}`}>
          {project.title}
        </h3>
        <p className="font-body text-xs sm:text-sm text-[hsl(var(--color-text-body))] opacity-90 mb-4 leading-relaxed flex-grow">
          {project.description}
        </p>
        
        {project.technologies.length > 0 && (
          <div className="mb-4">
            <h5 className="text-xs font-semibold text-[hsl(var(--color-text-muted))] mb-1.5">Technologies Used:</h5>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="text-[0.65rem] sm:text-xs bg-[hsl(var(--color-bg-main))] text-[hsl(var(--color-text-muted))] 
                             px-2.5 py-1 rounded-md border border-[hsl(var(--color-border-soft))] 
                             font-medium group-hover:border-[hsl(var(--color-border-medium))] transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.links.length > 0 && (
          <div className="mt-auto pt-4 border-t border-[hsl(var(--color-border-soft))] flex flex-wrap items-center justify-start gap-3">
            {project.links.map((link) => {
              const Icon = link.icon || getLinkIcon(link.label);
              // Determine if primary based on isPrimary flag or specific keywords
              const isPrimary = link.isPrimary === true || 
                              (!link.isPrimary && (link.label.toLowerCase().includes('live') || 
                                                  link.label.toLowerCase().includes('demo') || 
                                                  link.label.toLowerCase().includes('app')));
              
              return (
                <a 
                  key={link.url} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Link to ${link.label} for ${project.title}`}
                  title={link.label}
                  className={`flex items-center text-xs sm:text-sm rounded-md px-3 py-1.5 transition-all duration-250 ease-in-out 
                              transform hover:scale-105 active:scale-95 group/link 
                              ${isPrimary 
                                ? 'bg-[hsl(var(--color-accent-primary))] text-white hover:bg-[hsl(var(--color-accent-primary-hover))] shadow-md hover:shadow-lg' 
                                : 'bg-[hsl(var(--color-bg-alt))] text-[hsl(var(--color-text-body))] hover:text-[hsl(var(--color-accent-primary))] hover:border-[hsl(var(--color-accent-primary),0.5)] border border-transparent'}`}
                >
                  <Icon size={isPrimary ? 15 : 16} strokeWidth={isPrimary ? 2 : 1.75} className={`mr-1.5 ${isPrimary ? '' : 'opacity-70 group-hover/link:opacity-100'}`} />
                  <span className={`${isPrimary ? 'font-semibold' : 'font-medium'}`}>{link.label}</span>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard; 