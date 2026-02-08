
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES } from '../data/services';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import WorkflowSection from '../components/WorkflowSection';
import CTASection from '../components/CTASection';
import Hero from '../components/Home/Hero';
import TechStack from '../components/Home/TechStack';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal sections
      gsap.utils.toArray<HTMLElement>('.gsap-section-reveal').forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });

      // Staggered services
      gsap.from('.gsap-service-card', {
        scrollTrigger: {
          trigger: '.gsap-services-grid',
          start: 'top 80%'
        },
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'back.out(1.2)'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-20">
      <Hero />
      <TechStack />

      {/* Services Preview */}
      <section className="py-32 bg-white dark:bg-dark border-y border-slate-200 dark:border-white/5 gsap-section-reveal">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader 
            title="Expert Offerings"
            description="I specialize in high-performance app development focusing on rapid deployment."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gsap-services-grid">
            {SERVICES.slice(0, 3).map((service, idx) => (
              <div key={service.id} className="gsap-service-card">
                <ServiceCard service={service} index={idx} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <div className="gsap-section-reveal">
        <WorkflowSection />
      </div>

      <div className="gsap-section-reveal">
        <CTASection 
          title={<>Ready to bring your <br /> startup to life?</>}
          primaryButtonText="Get a Free Quote"
          secondaryButtonText="About Areotech"
        />
      </div>
    </div>
  );
};

export default Home;
