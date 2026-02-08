
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
// Added Sparkles to the import list
import { Mail, Lock, User, Github, Chrome, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { auth } from '../services/firebase';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isLogin) {
        await auth.signInWithEmailAndPassword(formData.email, formData.password);
      } else {
        await auth.createUserWithEmailAndPassword(formData.email, formData.password);
      }
      navigate('/dashboard');
    } catch (err) {
      alert('Authentication failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 pt-20">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-[40px] shadow-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-dark">
        {/* Form Section */}
        <div className="p-8 lg:p-16">
          <div className="max-w-sm mx-auto">
            <h1 className="text-3xl font-bold font-jakarta mb-2">{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
            <p className="text-slate-500 dark:text-slate-400 mb-10">Enter your details to access the dashboard.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div>
                  <label className="text-sm font-bold block mb-2 uppercase tracking-widest text-slate-500">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                      type="text" 
                      required
                      placeholder="John Doe"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>
              )}
              
              <div>
                <label className="text-sm font-bold block mb-2 uppercase tracking-widest text-slate-500">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input 
                    type="email" 
                    required
                    placeholder="name@company.com"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-bold block mb-2 uppercase tracking-widest text-slate-500">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input 
                    type="password" 
                    required
                    placeholder="••••••••"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    value={formData.password}
                    onChange={e => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-primary-600 text-white font-bold flex items-center justify-center gap-2 hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20 disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin" /> : (
                  <>
                    {isLogin ? 'Sign In' : 'Create Account'}
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-grow bg-slate-200 dark:bg-white/10"></div>
              <span className="text-sm text-slate-400 uppercase font-bold">Or continue with</span>
              <div className="h-px flex-grow bg-slate-200 dark:bg-white/10"></div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                <Chrome size={18} />
                <span className="text-sm font-bold">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                <Github size={18} />
                <span className="text-sm font-bold">Github</span>
              </button>
            </div>

            <p className="mt-10 text-center text-slate-500 text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="ml-1 text-primary-600 font-bold hover:underline"
              >
                {isLogin ? 'Sign up for free' : 'Sign in here'}
              </button>
            </p>
          </div>
        </div>

        {/* Info Section */}
        <div className="hidden lg:flex flex-col justify-between p-16 bg-primary-600 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-32 -mt-32 blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full -ml-32 -mb-32 blur-[100px]"></div>
          
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8">
              <Sparkles size={24} />
            </div>
            <h2 className="text-4xl font-extrabold font-jakarta mb-6 leading-tight">Join the next <br /> generation of creators.</h2>
            <p className="text-white/80 text-lg">Access exclusive project insights, case studies, and resources designed for the modern developer.</p>
          </div>

          <div className="relative z-10 glass p-6 rounded-3xl bg-white/10 border-white/20">
            <p className="text-sm italic mb-4">"The dashboard experience is seamless. Highly recommended for tracking dev progress!"</p>
            <div className="flex items-center gap-3">
               <img src="https://picsum.photos/seed/face/40/40" className="w-10 h-10 rounded-full" alt="User" />
               <div>
                 <p className="font-bold text-sm">Sarah Jenkins</p>
                 <p className="text-white/60 text-xs">Product Lead @ Velocity</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
