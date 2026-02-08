
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'outline';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', className = '' }) => {
  const variants = {
    primary: "bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400",
    success: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    warning: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
    outline: "border border-slate-200 dark:border-white/10 text-slate-500"
  };

  return (
    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
