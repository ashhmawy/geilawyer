import React from 'react';
import { LucideIcon } from 'lucide-react';

// --- Button Component ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  icon: Icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-sans font-semibold transition-all duration-300 tracking-wide";
  
  const variants = {
    primary: "bg-gold-600 text-white hover:bg-navy-900 border border-transparent shadow-md hover:shadow-lg",
    outline: "bg-transparent text-navy-900 border-2 border-navy-900 hover:bg-navy-900 hover:text-white hover:border-navy-900",
    text: "bg-transparent text-gold-600 hover:text-gold-700 underline-offset-4 hover:underline p-0",
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-8 py-3",
    lg: "text-lg px-10 py-4",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${variant !== 'text' ? sizes[size] : ''} ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon className="ml-2 w-5 h-5" />}
    </button>
  );
};

// --- Section Wrapper ---
interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: 'white' | 'light' | 'dark';
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children, 
  background = 'white' 
}) => {
  const bgColors = {
    white: 'bg-white',
    light: 'bg-slate-50',
    dark: 'bg-navy-900 text-white',
  };

  return (
    <section id={id} className={`${bgColors[background]} py-20 md:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

// --- Heading Component ---
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  center = false,
  light = false
}) => {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      {subtitle && (
        <span className={`block text-sm font-bold uppercase tracking-widest mb-3 ${light ? 'text-gold-400' : 'text-gold-600'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`font-serif text-4xl md:text-5xl font-bold leading-tight ${light ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h2>
      <div className={`mt-6 h-1 w-24 bg-gold-600 ${center ? 'mx-auto' : ''}`}></div>
    </div>
  );
};