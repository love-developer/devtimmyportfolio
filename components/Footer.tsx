
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-zinc-950/50 pt-24 pb-12 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-primary-600/20">
                <img src="/public/assets/logo.svg" alt="Areotech Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-2xl font-black font-jakarta tracking-tighter uppercase">AREOTECH</span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed text-lg">
              Empowering startups with AI-powered web apps and native mobile experiences. Fast, scalable, and lovable.
            </p>
            <div className="flex space-x-5">
              {[Github, Twitter, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 rounded-2xl border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all shadow-sm">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] mb-8 text-primary-600">Company</h4>
            <ul className="space-y-5">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-slate-500 dark:text-slate-400 hover:text-primary-500 transition-colors font-bold">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] mb-8 text-primary-600">Expertise</h4>
            <ul className="space-y-5">
              {['Lovable Apps', 'Native Mobile', 'Supabase Backend', 'AI Integrations', 'MVP Launch'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary-500 transition-colors font-bold">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] mb-8 text-primary-600">Newsletter</h4>
            <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm leading-relaxed">
              Join 1,000+ founders receiving weekly tech and startup tips.
            </p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="founder@startup.com" 
                className="w-full pl-6 pr-16 py-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-primary-500 outline-none transition-all font-bold"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors shadow-lg">
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-bold">
            © {new Date().getFullYear()} Areotech Solutions. Built with Lovable & AI.
          </p>
          <div className="flex space-x-8 text-sm font-bold text-slate-500 dark:text-slate-400">
            <a href="#" className="hover:text-primary-500">Privacy</a>
            <a href="#" className="hover:text-primary-500">Terms</a>
            <a href="#" className="hover:text-primary-500">Licensing</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
