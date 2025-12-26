import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ButtonProps } from '../types';

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  icon,
  ...props
}) => {
  const baseStyles = "relative group flex items-center justify-center gap-2 px-8 py-4 rounded-full font-display font-bold tracking-wide transition-all duration-300 ease-out active:scale-95";
  
  const variants = {
    primary: "bg-primary text-white hover:shadow-[0_0_30px_-5px_#F70670] hover:bg-[#ff1b7e]",
    outline: "border border-white/20 hover:border-primary/50 text-white hover:bg-white/5",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
      {icon || <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />}
      
      {/* Glow reflection effect */}
      {variant === 'primary' && (
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-white/40 blur-[1px]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-black/20 blur-[2px]" />
        </div>
      )}
    </button>
  );
};