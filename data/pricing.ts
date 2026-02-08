
import { PricingPlan } from '../types';

export const PRICING_PLANS: PricingPlan[] = [
  { 
    name: 'Startup MVP', 
    price: '$2.5k+', 
    features: ['Lovable UI/UX Build', 'Supabase Integration', '3-Week Launch', 'Landing Page Included'] 
  },
  { 
    name: 'Mobile Master', 
    price: '$6k+', 
    features: ['Web App Development', 'Full Native Port (iOS/And)', 'App Store Submissions', 'Real-time Backend', 'AI Integration'], 
    featured: true 
  },
  { 
    name: 'Enterprise Core', 
    price: 'Custom', 
    features: ['Full SaaS Ecosystem', 'Multi-tenant Support', 'Automation Workflows', 'Priority Maintenance', 'Custom AI Models'] 
  },
];
