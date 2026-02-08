
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Folder, Settings, Bell, ArrowUpRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { DASHBOARD_STATS, RECENT_ACTIVITY } from '../data/dashboard';

const Dashboard: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (!user) return <Navigate to="/auth" />;

  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-dark/40">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-bold font-jakarta mb-2">Welcome back, {user.displayName?.split(' ')[0]}!</h1>
            <p className="text-slate-500 dark:text-slate-400">Here's an overview of your activity and saved items.</p>
          </div>
          <div className="flex items-center gap-3">
             <button className="p-3 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 hover:text-primary-600 transition-all">
                <Bell size={20} />
             </button>
             <button className="p-3 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 hover:text-primary-600 transition-all">
                <Settings size={20} />
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {DASHBOARD_STATS.map((stat, i) => {
            const IconComponent = (Icons as any)[stat.icon] || Folder;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm"
              >
                <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4`}>
                  <IconComponent size={24} />
                </div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-3xl font-bold font-jakarta">{stat.value}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="p-8 rounded-[32px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
               <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold font-jakarta">Recent Activity</h3>
                  <button className="text-sm text-primary-600 font-bold">View all</button>
               </div>
               <div className="space-y-6">
                 {RECENT_ACTIVITY.map(activity => (
                   <div key={activity.id} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 transition-colors">
                         <Folder size={20} className="text-slate-400 group-hover:text-primary-600 transition-colors" />
                      </div>
                      <div className="flex-grow">
                        <p className="font-bold text-sm">{activity.text}</p>
                        <p className="text-xs text-slate-500">{activity.time}</p>
                      </div>
                      <ArrowUpRight size={16} className="text-slate-300 group-hover:text-primary-600 transition-all" />
                   </div>
                 ))}
               </div>
            </div>
          </div>

          <div className="space-y-8">
             <div className="p-8 rounded-[32px] bg-gradient-to-br from-primary-600 to-primary-800 text-white relative overflow-hidden shadow-xl shadow-primary-600/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <h3 className="text-xl font-bold mb-4 relative z-10">Pro Insights</h3>
                <p className="text-white/80 text-sm mb-6 relative z-10 leading-relaxed">Upgrade to Pro to get access to advanced architectural reviews and code optimization tools.</p>
                <button className="w-full py-3 rounded-xl bg-white text-primary-600 font-bold hover:bg-slate-50 transition-all relative z-10">
                   Learn More
                </button>
             </div>

             <div className="p-8 rounded-[32px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <h3 className="text-lg font-bold mb-6">Connected APIs</h3>
                <div className="space-y-4">
                  {['Gemini', 'Firebase', 'OpenAI', 'Vercel'].map(api => (
                    <div key={api} className="flex items-center justify-between p-3 rounded-xl border border-slate-100 dark:border-white/5">
                       <span className="text-sm font-medium">{api} API</span>
                       <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
