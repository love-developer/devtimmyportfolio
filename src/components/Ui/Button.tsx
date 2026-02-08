
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

// Use HTMLMotionProps instead of React.ButtonHTMLAttributes to avoid conflicts with Framer Motion's internal event types (like onDrag)
interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  icon, 
  fullWidth = false,
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/20",
    secondary: "bg-slate-900 dark:bg-white text-white dark:text-dark hover:opacity-90",
    outline: "border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5",
    ghost: "hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400",
    white: "bg-white text-primary-600 hover:bg-slate-50 shadow-xl"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs rounded-xl",
    md: "px-6 py-3 text-sm rounded-2xl",
    lg: "px-10 py-5 text-base rounded-2xl",
    xl: "px-12 py-6 text-xl rounded-3xl"
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
};

export default Button;
