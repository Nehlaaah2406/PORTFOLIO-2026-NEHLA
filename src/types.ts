export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  image: string;
  gallery: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
}
