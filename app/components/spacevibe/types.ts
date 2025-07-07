// Shared types for SpaceVibe cards
import { JSX } from "react";

export interface IntroContent {
  name: string;
  tagline: string;
  description: string;
  avatar: string;
  location: string;
  status: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  status: string;
}

export interface SkillsContent {
  frontend: string[];
  backend: string[];
  mobile: string[];
  tools: string[];
  other: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

export interface ContactContent {
  email: string;
  github: string;
  linkedin: string;
  message: string;
}

export interface CardData {
  id: string;
  type:
    | "intro"
    | "experience"
    | "projects"
    | "skills"
    | "education"
    | "contact";
  title: string;
  content:
    | IntroContent
    | ExperienceItem[]
    | ProjectItem[]
    | SkillsContent
    | EducationItem[]
    | ContactContent;
  gradient: string;
  position: string;
  iconColor: string;
  icon: JSX.Element;
}
