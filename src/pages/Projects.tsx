
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../data/projects';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Frontend', 'Backend', 'AI', 'Fullstack'];

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="text-left">
            <h1 className="text-5xl lg:text-6xl font-extrabold font-jakarta mb-4 tracking-tight">Case Studies</h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg lg:text-xl">A deep dive into my recent projects and contributions.</p>
          </div>
          
          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 dark:bg-white/5 rounded-2xl overflow-hidden">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${activeFilter === f ? 'bg-white dark:bg-primary-600 shadow-sm text-primary-600 dark:text-white' : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Projects;
