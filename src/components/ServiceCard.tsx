
import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const IconComponent = (Icons as any)[service.icon] || Icons.Zap;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -16 }}
      className="group p-10 lg:p-12 rounded-[48px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-2xl hover:border-primary-500/50 transition-all duration-500"
    >
      <div className="w-20 h-20 rounded-3xl bg-slate-50 dark:bg-white/5 text-primary-600 flex items-center justify-center mb-10 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-primary-600/30">
        <IconComponent size={36} />
      </div>
      <h3 className="text-2xl lg:text-3xl font-bold mb-5 tracking-tight">{service.title}</h3>
      <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-10 text-lg">
        {service.description}
      </p>
      <div className="flex items-center gap-3 text-primary-600 font-black text-sm uppercase tracking-widest cursor-pointer group/link">
        Learn more <Icons.ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform" />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
