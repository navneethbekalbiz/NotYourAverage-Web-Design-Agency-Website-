import React from 'react';
import { motion } from 'framer-motion';
import { CardProps } from '../types';

export const Card: React.FC<CardProps> = ({ children, className = '', glow = false }) => {
  return (
    <motion.div 
      className={`
        relative overflow-hidden rounded-3xl bg-surface/50 backdrop-blur-xl border border-white/10
        transition-colors duration-500 group hover:border-primary/50
        ${className}
      `}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Ambient background glow */}
      <div className="absolute -inset-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,#F70670_0%,transparent_60%)] blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 h-full">
        {children}
      </div>
    </motion.div>
  );
};