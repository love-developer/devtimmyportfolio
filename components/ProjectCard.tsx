
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  layout?: 'grid' | 'feature';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, layout = 'grid' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group flex flex-col h-full"
    >
      <div className={`relative ${layout === 'feature' ? 'aspect-[16/10]' : 'aspect-[4/3]'} rounded-[40px] overflow-hidden mb-8 shadow-2xl`}>
        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
        <div className="absolute inset-0 bg-dark/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
           <a href={project.demoUrl} className="p-4 bg-white text-dark rounded-full hover:scale-110 transition-transform shadow-xl">
              <ExternalLink size={24} />
           </a>
           <a href={project.githubUrl} className="p-4 bg-white/20 text-white rounded-full hover:scale-110 transition-transform backdrop-blur-md border border-white/20">
              <Github size={24} />
           </a>
        </div>
        <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/90 dark:bg-dark/90 text-dark dark:text-white text-[10px] font-black uppercase tracking-widest backdrop-blur-md">
          {project.category}
        </div>
      </div>
      
      <div className="px-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-black uppercase tracking-widest">{tag}</span>
          ))}
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold mb-3 flex items-center justify-between group-hover:text-primary-600 transition-colors">
          {project.title}
          <ArrowUpRight size={22} className="text-slate-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
