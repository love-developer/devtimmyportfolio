
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowRight, Sparkles, Smartphone } from 'lucide-react';
import Button from '../Ui/Button';
import Badge from '../Ui/Badge';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headlineRef.current, { y: 60, opacity: 0, duration: 1.2, ease: 'power4.out' });
      gsap.from('.hero-content p', { y: 30, opacity: 0, duration: 1, delay: 0.2 });
      gsap.from('.hero-cta-group', { y: 20, opacity: 0, duration: 1, delay: 0.4 });
      gsap.from('.hero-floating', { x: 50, opacity: 0, duration: 1.5, delay: 0.6 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden px-4 pt-20">
      {/* Background Decorative Patterns from Public Folder */}
      <div 
        className="absolute inset-0 -z-20 opacity-40 dark:opacity-20 pointer-events-none"
        style={{ backgroundImage: 'url(/public/assets/patterns/grid.svg)', backgroundSize: '100px 100px' }}
      ></div>
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary-500/10 blur-[130px] rounded-full animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="hero-content text-left">
          <Badge className="mb-8" variant="primary">
            <Sparkles size={12} className="inline mr-2" /> Areotech: Your Startup Partner
          </Badge>
          <h1 ref={headlineRef} className="text-5xl lg:text-7xl font-extrabold font-jakarta mb-8 leading-tight tracking-tight">
            From Idea to <br />
            <span className="gradient-text">App Store Launch</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-lg leading-relaxed">
            I specialize in building modern AI-powered sites, scalable MVPs, and converting <strong>Lovable</strong> projects into native iOS & Android apps.
          </p>
          <div className="hero-cta-group flex flex-wrap gap-5">
            <Link to="/contact">
              <Button size="lg" icon={<ArrowRight size={20} />}>Start My Project</Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" size="lg">View Showcase</Button>
            </Link>
          </div>
        </div>

        <div className="hidden lg:block relative hero-floating">
          <div className="glass p-10 rounded-[40px] shadow-2xl relative z-10 border-white/20">
            <div className="flex items-center justify-between mb-10">
              <div className="w-14 h-14 rounded-2xl bg-primary-600 flex items-center justify-center shadow-lg text-white">
                <Smartphone size={28} />
              </div>
              <Badge variant="success">Live: Mobile Port</Badge>
            </div>
            <div className="space-y-5 mb-10">
              <div className="h-5 w-3/4 bg-slate-200 dark:bg-white/10 rounded-full animate-pulse"></div>
              <div className="h-5 w-full bg-slate-200 dark:bg-white/10 rounded-full animate-pulse"></div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="p-5 rounded-3xl border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/5">
                <p className="text-3xl font-bold font-grotesk text-primary-600">99.9%</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Uptime</p>
              </div>
              <div className="p-5 rounded-3xl border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/5">
                <p className="text-3xl font-bold font-grotesk text-primary-600">Native</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Ports</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
