
export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Frontend' | 'Backend' | 'AI' | 'Fullstack';
  image: string;
  demoUrl: string;
  githubUrl: string;
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readTime: string;
}

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export interface WorkflowStep {
  title: string;
  icon: string;
  desc: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  featured?: boolean;
}

export interface Experience {
  year: string;
  title: string;
  company: string;
  desc: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface DashboardStat {
  label: string;
  value: string;
  icon: string;
  color: string;
  bg: string;
}
