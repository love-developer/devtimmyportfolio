
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge?: string;
  title: string | React.ReactNode;
  description?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ badge, title, description, centered = true, className = "" }) => {
  return (
    <div className={`${centered ? 'text-center' : 'text-left'} mb-16 lg:mb-24 ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-600 text-xs font-black uppercase tracking-[0.3em] mb-6"
        >
          {badge}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl lg:text-6xl font-extrabold font-jakarta mb-6 leading-tight tracking-tight"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`text-slate-500 dark:text-slate-400 text-lg lg:text-xl leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
