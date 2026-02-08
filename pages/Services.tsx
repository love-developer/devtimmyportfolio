
import React, { useEffect, useRef } from 'react';
import { SERVICES, FEATURED_PROJECTS } from '../data/services';
import { PRICING_PLANS } from '../data/pricing';
import * as Icons from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import WorkflowSection from '../components/WorkflowSection';
import ProjectCard from '../components/ProjectCard';

gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-project-item', {
        scrollTrigger: {
          trigger: '.gsap-projects-grid',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader 
          badge="Areotech Solutions"
          title={<>Rapid Startup <br /> <span className="gradient-text">Engineering.</span></>}
          description="I specialize in the full lifecycle of modern digital products. From a blank canvas to the App Store, I'm your technical partner."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-40">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>

        {/* Workflow Section */}
        <WorkflowSection />

        {/* Selected Works Section */}
        <div className="py-32 border-t border-slate-200 dark:border-white/5">
           <SectionHeader 
             title="Proven Results"
             description="Take a look at how I've helped other startups achieve their goals."
           />
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gsap-projects-grid">
              {FEATURED_PROJECTS.map((project, idx) => (
                <div key={project.id} className="gsap-project-item">
                  <ProjectCard project={project} index={idx} />
                </div>
              ))}
           </div>
        </div>

        {/* Pricing/Plans Section */}
        <div className="py-24 border-t border-slate-200 dark:border-white/5 mb-32">
           <SectionHeader 
             title="Investment Options"
             description="High-value partnerships for high-growth startups."
           />
           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {PRICING_PLANS.map((plan) => (
                <div 
                  key={plan.name} 
                  className={`p-12 rounded-[56px] border transition-all ${plan.featured ? 'bg-primary-600 border-primary-600 text-white shadow-3xl shadow-primary-600/40 scale-105 relative z-10' : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10'}`}
                >
                   <h4 className={`text-xs font-black uppercase tracking-[0.4em] mb-6 ${plan.featured ? 'text-white/80' : 'text-primary-600'}`}>{plan.name}</h4>
                   <p className="text-5xl font-extrabold font-jakarta mb-10 tracking-tighter">{plan.price}</p>
                   <ul className="space-y-6 mb-12">
                      {plan.features.map(f => (
                        <li key={f} className="flex items-center gap-4 text-base font-medium text-left">
                           <Icons.CheckCircle size={22} className={plan.featured ? 'text-white' : 'text-primary-600'} />
                           <span className={plan.featured ? 'text-white/90' : 'text-slate-600 dark:text-slate-400'}>{f}</span>
                        </li>
                      ))}
                   </ul>
                   <button className={`w-full py-5 rounded-[24px] font-black text-lg transition-all shadow-xl ${plan.featured ? 'bg-white text-primary-600 hover:bg-slate-50' : 'bg-primary-600 text-white hover:bg-primary-700 shadow-primary-600/20'}`}>
                      Select Package
                   </button>
                </div>
              ))}
           </div>
        </div>

        {/* Testimonial Section */}
        <div className="p-16 lg:p-24 rounded-[64px] bg-dark text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="max-w-4xl relative z-10 mx-auto text-center">
            <div className="flex justify-center gap-2 mb-12">
              {[1,2,3,4,5].map(i => <Icons.Star key={i} className="text-yellow-400 fill-yellow-400" size={28} />)}
            </div>
            <blockquote className="text-3xl lg:text-5xl font-jakarta font-medium leading-tight mb-16 italic tracking-tight">
              "Areotech took our Lovable mockup and turned it into a production-grade iOS app with a robust Supabase backend in just 14 days. Absolutely incredible speed and quality."
            </blockquote>
            <div className="flex items-center justify-center gap-6">
              <img src="https://i.pravatar.cc/150?u=ceo" className="w-20 h-20 rounded-full object-cover border-4 border-white/10" alt="CEO" />
              <div className="text-left">
                <p className="font-black text-2xl tracking-tight">David Chen</p>
                <p className="text-primary-400 font-bold uppercase tracking-widest text-sm">Founder @ StealthAI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
