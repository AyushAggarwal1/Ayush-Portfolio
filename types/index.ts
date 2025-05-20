import { FC, SVGProps } from "react";

export interface ExperienceType {
  role: string;
  company: string;
  companyUrl: string;
  dates: string;
  location: string;
  description: string[];
  skills: string;
  type: string;
  logoUrl?: string;
}

export interface LinkType {
  url: string;
  label: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  isPrimary?: boolean;
}

export interface ProjectType {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  links: LinkType[];
}

export interface SkillType {
  name: string;
  proficiency?: string; // e.g., 'Advanced', 'Intermediate', 'Familiar'
  description?: string; // Short description or specific tools/contexts
  category: string; // To group skills, e.g., 'Product Strategy', 'Technical', 'Tools'
  icon?: FC<SVGProps<SVGSVGElement>>; // Optional: if a skill has a specific icon
} 