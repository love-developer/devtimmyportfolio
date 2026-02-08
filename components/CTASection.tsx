
import React from 'react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string | React.ReactNode;
  primaryButtonText: string;
  secondaryButtonText: string;
}

const CTASection: React.FC<CTASectionProps> = ({ title, primaryButtonText, secondaryButtonText }) => {
  return (
    <section className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-[64px] bg-primary-600 p-16 lg:p-28 text-center relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(124,58,237,0.4)]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-32 -mt-32 blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full -ml-32 -mb-32 blur-[100px]"></div>
          
          <h2 className="text-5xl lg:text-7xl font-extrabold font-jakarta text-white mb-12 relative z-10 leading-[1.1] tracking-tight">
            {title}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 relative z-10">
            <Link to="/contact" className="px-12 py-6 rounded-2xl bg-white text-primary-600 font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl">
              {primaryButtonText}
            </Link>
            <Link to="/about" className="px-12 py-6 rounded-2xl bg-white/10 border border-white/20 text-white font-black text-xl hover:bg-white/20 transition-all backdrop-blur-md">
              {secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
