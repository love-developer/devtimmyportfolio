
import React, { useEffect, useRef } from 'react';
import { Code2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SKILLS } from '../../data/about';

gsap.registerPlugin(ScrollTrigger);

const SkillsArsenal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.skill-bar').forEach((bar) => {
        const targetWidth = bar.getAttribute('data-level') + '%';
        gsap.to(bar, {
          scrollTrigger: {
            trigger: bar,
            start: 'top 90%'
          },
          width: targetWidth,
          duration: 1.5,
          ease: 'power3.out'
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <div className="flex items-center gap-4 mb-16">
        <div className="w-14 h-14 rounded-2xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 flex items-center justify-center">
          <Code2 size={28} />
        </div>
        <h2 className="text-4xl font-extrabold font-jakarta">Technical Arsenal</h2>
      </div>
      <div className="space-y-12">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="flex justify-between mb-4">
              <span className="font-black text-lg">{skill.name}</span>
              <span className="text-slate-500 font-bold">{skill.level}%</span>
            </div>
            <div className="h-3 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
              <div
                className="skill-bar h-full bg-gradient-to-r from-primary-500 to-primary-700 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                style={{ width: '0%' }}
                data-level={skill.level}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsArsenal;
