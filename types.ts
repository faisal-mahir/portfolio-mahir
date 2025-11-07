// Fix: Removed unused 'Skill' interface to resolve 'Cannot find namespace JSX' error.
export interface Project {
  id: number;
  title: string;
  period: string;
  description: string;
  tags: string[];
  imageUrl?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Achievement {
  id: number;
  title: string;
  event: string;
}

export interface SkillCategory {
    id: number;
    title: string;
    items: string[];
}


export interface PortfolioData {
  name: string;
  tagline: string;
  heroImageUrl: string;
  showHeroImage: boolean;
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    website: string;
    address: string;
  };
  careerObjective: string;
  portfolioLink: string;
  skills: SkillCategory[];
  academicBackground: {
    id: number;
    degree: string;
    details: string;
    institution: string;
    period: string;
  }[];
  workExperiences: Experience[];
  achievements: Achievement[];
  projects: Project[];
  references: {
    id: number;
    name: string;
    title: string;
    organization: string;
    phone: string;
    email: string;
  }[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}