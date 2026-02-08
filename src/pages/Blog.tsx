
import React from 'react';
import { motion } from 'framer-motion';
import { ARTICLES } from '../data/blog';
import { Search, Calendar, Clock, ChevronRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
          <div className="max-w-xl">
            <h1 className="text-5xl lg:text-6xl font-extrabold font-jakarta mb-4">Writings</h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Thinking out loud about AI, engineering, and digital product design.</p>
          </div>
          
          <div className="w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search articles..."
                className="w-full md:w-80 pl-12 pr-6 py-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {ARTICLES.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-[40px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary-500/50 transition-all cursor-pointer shadow-sm hover:shadow-xl"
            >
              <div className="flex items-center gap-6 mb-6">
                 <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <Calendar size={14} />
                    {article.date}
                 </div>
                 <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <Clock size={14} />
                    {article.readTime}
                 </div>
              </div>
              <h2 className="text-3xl font-bold mb-4 group-hover:text-primary-600 transition-colors leading-tight">
                {article.title}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                   {article.tags.map(tag => (
                     <span key={tag} className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-400 text-xs font-bold">{tag}</span>
                   ))}
                </div>
                <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:bg-primary-600 group-hover:border-primary-600 group-hover:text-white transition-all">
                   <ChevronRight size={20} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
