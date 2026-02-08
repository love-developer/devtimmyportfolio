
import { Service, Project } from '../types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Modern Web Apps',
    description: 'Fast, scalable web applications built with Lovable, Next.js, and Vercel for maximum performance.',
    icon: 'Globe'
  },
  {
    id: '2',
    title: 'Mobile App Conversion',
    description: 'Converting your lovable web projects into native iOS and Android apps using Ionic Capacitor.',
    icon: 'Smartphone'
  },
  {
    id: '3',
    title: 'AI & Automation',
    description: 'Custom AI-powered features and automation tools built with Bolt.new and Gemini API.',
    icon: 'Bot'
  },
  {
    id: '4',
    title: 'SaaS MVP Launch',
    description: 'Rapidly bringing your startup ideas to life with pixel-perfect designs and full-stack logic.',
    icon: 'Zap'
  },
  {
    id: '5',
    title: 'Supabase Architecture',
    description: 'Robust backend systems with real-time databases, auth, and secure edge functions.',
    icon: 'Database'
  },
  {
    id: '6',
    title: 'UI/UX Engineering',
    description: 'Creating lovable, premium digital experiences that users actually enjoy using.',
    icon: 'Palette'
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'AreoDash SaaS',
    description: 'A full-stack SaaS MVP built with Supabase and converted to native mobile apps.',
    category: 'Fullstack',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    demoUrl: '#',
    githubUrl: '#',
    tags: ['Lovable', 'Supabase', 'Capacitor']
  },
  {
    id: 'p2',
    title: 'AutoFlow AI',
    description: 'An automation tool using Gemini to handle customer support tickets autonomously.',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    demoUrl: '#',
    githubUrl: '#',
    tags: ['Bolt.new', 'Gemini API', 'Vercel']
  },
  {
    id: 'p3',
    title: 'SwiftConvert Mobile',
    description: 'A platform demonstrating high-performance web-to-app conversions.',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    demoUrl: '#',
    githubUrl: '#',
    tags: ['React', 'Android Studio', 'Iconic']
  }
];
