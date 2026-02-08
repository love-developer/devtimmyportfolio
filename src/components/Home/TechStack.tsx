
import React from 'react';
import { motion } from 'framer-motion';
import { TECH_STACK } from '../../data/home';

const TechStack: React.FC = () => {
  return (
    <section className="py-24 border-t border-slate-200 dark:border-white/5 bg-slate-50/30 dark:bg-dark/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/3">
            <h2 className="text-4xl font-bold font-jakarta mb-6 leading-tight">Fast. Scalable. <br /><span className="text-primary-600">Future-Proof.</span></h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              I build scalable business engines using the most advanced stack in 2024 to get you to market in record time.
            </p>
          </div>
          <div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {TECH_STACK.map((item) => (
              <motion.div key={item.name} whileHover={{ y: -8, rotate: 1 }} className="p-8 rounded-[32px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm transition-all">
                <div className={`w-3 h-3 rounded-full ${item.color} mb-5`}></div>
                <h4 className="font-extrabold text-xl mb-2">{item.name}</h4>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
