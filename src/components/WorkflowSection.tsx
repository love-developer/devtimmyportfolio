
import React from 'react';
import * as Icons from 'lucide-react';
import SectionHeader from './SectionHeader';
import { WORKFLOW_STEPS } from '../data/workflow';

const WorkflowSection: React.FC = () => {
  return (
    <section className="py-32 overflow-hidden bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader 
          badge="Areotech Workflow"
          title="The Road to Launch"
          description="A systematic approach to bringing your vision to life."
        />
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 relative">
          <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-primary-600/0 via-primary-600/50 to-primary-600/0 -z-10"></div>
          {WORKFLOW_STEPS.map((step, idx) => {
             const StepIcon = (Icons as any)[step.icon] || Icons.ArrowRight;
             return (
               <div key={idx} className="flex-1 text-center group">
                  <div className="w-24 h-24 rounded-[36px] bg-slate-50 dark:bg-white/5 border-4 border-slate-100 dark:border-white/10 flex items-center justify-center mx-auto mb-10 group-hover:border-primary-600 transition-all shadow-xl relative">
                     <StepIcon className="text-primary-600" size={32} />
                     <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-black text-sm shadow-lg border-4 border-white dark:border-dark">
                        {idx + 1}
                     </div>
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-base px-4 leading-relaxed">{step.desc}</p>
               </div>
             );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
