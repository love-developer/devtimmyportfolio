
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Heart, Rocket, ShieldCheck, Award } from 'lucide-react';
import Button from '../components/Ui/Button';
import Badge from '../components/Ui/Badge';
import ExperienceTimeline from '../components/About/ExperienceTimeline';
import SkillsArsenal from '../components/About/SkillsArsenal';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-8" variant="primary">Mission Statement</Badge>
            <h1 className="text-5xl lg:text-7xl font-extrabold font-jakarta mb-10 leading-tight">
              Rapid Innovation. <br /> <span className="gradient-text">Scalable Results.</span>
            </h1>
            <div className="space-y-8 text-slate-600 dark:text-slate-400 text-xl leading-relaxed">
              <p>
                I'm the founder of <strong>Areotech</strong>, and I don't just build websites – I architect digital business engines. I'm passionate about the intersection of AI, automation, and high-velocity web/app development.
              </p>
              <p>
                My specialty lies in helping startups bridge the gap between a "lovable" idea and a production-ready product.
              </p>
            </div>
            <div className="flex flex-wrap gap-5 mt-12">
               <Button variant="secondary" size="lg" icon={<Download size={22} />}>Download Portfolio</Button>
               <div className="flex items-center gap-4 px-6 py-4 rounded-2xl border border-slate-200 dark:border-white/10">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-bold">Booking for Q3 2024</span>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[64px] overflow-hidden shadow-2xl relative z-10 border-8 border-white dark:border-white/5">
              <img src="/Images/logo.jpeg" alt="Areotech Founder" className="w-full h-full object-cover transition-all duration-1000" />
            </div>
            <div className="absolute inset-0 bg-primary-600/20 rotate-6 rounded-[64px] -z-10 blur-xl"></div>
            
            <div className="absolute -bottom-12 -left-12 p-10 glass rounded-[40px] shadow-2xl z-20 max-w-[300px] border-white/20">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-14 h-14 rounded-2xl bg-primary-600 flex items-center justify-center text-white shadow-lg">
                   <Rocket size={28} />
                 </div>
                 <div>
                    <span className="font-black text-lg block">MVP Speed</span>
                    <span className="text-xs text-slate-500">2x Industry Norm</span>
                 </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">Specialized in taking startups from Bolt.new sketches to App Store dominance.</p>
            </div>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <div className="py-32 mb-40 border-y border-slate-200 dark:border-white/5 relative overflow-hidden">
           <div className="max-w-4xl mx-auto text-center relative z-10">
              <Badge className="mb-10" variant="outline"><Heart size={14} className="inline mr-2" /> The Areotech Oath</Badge>
              <h2 className="text-5xl lg:text-6xl font-extrabold font-jakarta mb-10 italic tracking-tight">"We don't just ship code; we ship business growth."</h2>
              <p className="text-2xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                 I believe the best products are those that solve complex problems with invisible complexity.
              </p>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-40">
          <SkillsArsenal />
          <ExperienceTimeline />
        </div>

        {/* Startup Focus Section */}
        <section className="py-32 bg-slate-900 rounded-[64px] px-10 lg:px-24 overflow-hidden relative text-white">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/20 blur-[150px] rounded-full"></div>
           <div className="flex flex-col lg:flex-row items-center gap-24 relative z-10">
              <div className="w-full lg:w-1/2 text-left">
                 <h2 className="text-5xl lg:text-6xl font-extrabold font-jakarta mb-8 leading-tight">Startup Specialist</h2>
                 <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                    Building a startup is hard. I make the technology part easy.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="p-8 rounded-[32px] bg-white/5 border border-white/10">
                       <ShieldCheck className="text-primary-400 mb-5" size={32} />
                       <h4 className="font-black text-xl mb-3">Enterprise Grade</h4>
                       <p className="text-sm text-slate-400">Security and scalability built into every MVP.</p>
                    </div>
                    <div className="p-8 rounded-[32px] bg-white/5 border border-white/10">
                       <Award className="text-primary-400 mb-5" size={32} />
                       <h4 className="font-black text-xl mb-3">Award Winning</h4>
                       <p className="text-sm text-slate-400">Recognized for excellence in AI implementation.</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default About;
