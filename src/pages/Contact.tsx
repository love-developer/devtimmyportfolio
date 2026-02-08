
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle, Loader2, MapPin, Phone, Plus } from 'lucide-react';
import { FAQS, CONTACT_INFO } from '../data/contact';

const Contact: React.FC = () => {
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <div>
            <h1 className="text-5xl lg:text-6xl font-extrabold font-jakarta mb-6 leading-tight">
              Let's craft your <br /> <span className="gradient-text">Next Big Idea</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg mb-12 leading-relaxed max-w-lg">
              Whether you need a full SaaS build, AI integration, or a high-performance landing page, I'm here to help.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Email</p>
                  <p className="text-xl font-bold">{CONTACT_INFO.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Phone</p>
                  <p className="text-xl font-bold">{CONTACT_INFO.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Location</p>
                  <p className="text-xl font-bold">{CONTACT_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="p-8 lg:p-12 rounded-[40px] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden">
               {isSent ? (
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="text-center py-20"
                 >
                    <div className="w-20 h-20 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
                    <p className="text-slate-500 dark:text-slate-400 mb-8">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                    <button onClick={() => setIsSent(false)} className="text-primary-600 font-bold">Send another message</button>
                 </motion.div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                         <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Name</label>
                         <input required type="text" placeholder="John Doe" className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-primary-500 transition-all" />
                      </div>
                      <div>
                         <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Email</label>
                         <input required type="email" placeholder="john@company.com" className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-primary-500 transition-all" />
                      </div>
                    </div>
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Subject</label>
                        <select className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-primary-500 transition-all">
                           <option>General Inquiry</option>
                           <option>Project Proposal</option>
                           <option>AI Consulting</option>
                           <option>Hiring / Collaboration</option>
                        </select>
                    </div>
                    <div>
                         <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Message</label>
                         <textarea required rows={4} placeholder="Tell me about your project..." className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-primary-500 transition-all"></textarea>
                    </div>
                    <button 
                      type="submit" 
                      disabled={loading}
                      className="w-full py-5 rounded-2xl bg-primary-600 text-white font-bold flex items-center justify-center gap-3 hover:bg-primary-700 transition-all shadow-xl shadow-primary-600/20"
                    >
                      {loading ? <Loader2 className="animate-spin" /> : (
                        <>Send Message <Send size={20} /></>
                      )}
                    </button>
                 </form>
               )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-24 border-t border-slate-200 dark:border-white/5">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-jakarta mb-4">Common Questions</h2>
              <p className="text-slate-500 dark:text-slate-400">Everything you need to know about working together.</p>
           </div>
           <div className="max-w-3xl mx-auto space-y-4">
              {FAQS.map((faq, i) => (
                <div key={i} className="rounded-3xl border border-slate-200 dark:border-white/10 overflow-hidden">
                   <button 
                     onClick={() => setOpenFaq(openFaq === i ? null : i)}
                     className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                   >
                      <span className="font-bold">{faq.q}</span>
                      <Plus className={`transition-transform duration-300 ${openFaq === i ? 'rotate-45 text-primary-600' : 'text-slate-400'}`} size={20} />
                   </button>
                   <AnimatePresence>
                      {openFaq === i && (
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          className="overflow-hidden"
                        >
                           <div className="px-8 pb-6 text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-4">
                              {faq.a}
                           </div>
                        </motion.div>
                      )}
                   </AnimatePresence>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
