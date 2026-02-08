
import React, { useEffect, useRef } from 'react';
import { Briefcase } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXPERIENCES } from '../../data/about';

gsap.registerPlugin(ScrollTrigger);

const ExperienceTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate line growth
      gsap.from(lineRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          end: 'bottom 70%',
          scrub: 1
        },
        scaleY: 0,
        transformOrigin: 'top center'
      });

      // Staggered items
      gsap.utils.toArray<HTMLElement>('.timeline-item').forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 85%'
          },
          x: -30,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out'
        });
        
        gsap.from(item.querySelector('.timeline-dot'), {
          scrollTrigger: {
            trigger: item,
            start: 'top 85%'
          },
          scale: 0,
          duration: 0.5,
          ease: 'back.out(1.7)',
          delay: 0.2
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <div className="flex items-center gap-4 mb-16">
        <div className="w-14 h-14 rounded-2xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 flex items-center justify-center">
          <Briefcase size={28} />
        </div>
        <h2 className="text-4xl font-extrabold font-jakarta">Professional Journey</h2>
      </div>
      <div className="relative">
        {/* Animated Line */}
        <div 
          ref={lineRef}
          className="absolute left-3.5 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-600 to-primary-300 dark:to-primary-900/20"
        />
        
        <div className="space-y-16">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="timeline-item relative pl-12 pb-4">
              <div className="timeline-dot absolute left-[6px] top-1.5 w-4 h-4 rounded-full bg-primary-600 border-2 border-white dark:border-dark shadow-lg shadow-primary-600/30 z-10" />
              <span className="text-sm font-black text-primary-600 uppercase mb-3 block tracking-widest">{exp.year}</span>
              <h3 className="text-2xl font-extrabold mb-2">{exp.title}</h3>
              <p className="font-bold text-slate-700 dark:text-slate-300 mb-4 text-lg">{exp.company}</p>
              <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
