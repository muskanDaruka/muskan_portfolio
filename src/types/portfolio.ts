export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "phone" | "location";
}

export interface HeroData {
  name: string;
  title: string;
  taglines: string[];
  intro: string;
  location: string;
  resumeUrl: string;
}

export interface AboutStrength {
  title: string;
  description: string;
}

export interface AboutData {
  summary: string;
  paragraphs: string[];
  strengths: AboutStrength[];
  whatIDo: { title: string; description: string }[];
  stats: { label: string; value: number; suffix?: string }[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  duration: string;
  location: string;
  type: "Full-time" | "Internship";
  responsibilities: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  score?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
}

export interface ContactData {
  email: string;
  phone: string;
  location: string;
  availability: string;
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  skills: SkillCategory[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  achievements: AchievementItem[];
  contact: ContactData;
  social: SocialLink[];
  nav: { label: string; href: string }[];
}
