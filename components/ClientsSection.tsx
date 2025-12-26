import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { 
    name: "n8n", 
    url: "https://cdn.simpleicons.org/n8n/EA4B71" 
  },
  { 
    name: "Supabase", 
    url: "https://cdn.simpleicons.org/supabase/3ECF8E" 
  },
  { 
    name: "Vercel", 
    url: "https://cdn.simpleicons.org/vercel/FFFFFF" 
  },
  { 
    name: "Airtable", 
    url: "https://cdn.simpleicons.org/airtable/18BFFF" 
  },
  { 
    name: "Make", 
    url: "https://cdn.simpleicons.org/make/6420AA" 
  }
];

export const ClientsSection: React.FC = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 blur-3xl" />
      <div className="container mx-auto px-4 mb-10 text-center">
        <p className="text-xs font-mono text-white/40 uppercase tracking-[0.3em]">Trusted Experts in</p>
      </div>
      
      <div 
        className="flex overflow-hidden whitespace-nowrap"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        <motion.div 
          className="flex gap-16 md:gap-32 px-16 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {/* Tripling the array to ensure smooth infinite loop without gaps */}
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="relative group shrink-0 flex items-center gap-4 cursor-default">
                {/* 
                   Icon: 
                   Initial: brightness-0 invert (forces white silhouette), opacity-40
                   Hover: filter-none (reveals original color), opacity-100
                */}
                <img 
                    src={logo.url} 
                    alt={logo.name} 
                    className="h-8 w-8 object-contain brightness-0 invert opacity-40 group-hover:filter-none group-hover:opacity-100 transition-all duration-300"
                />
                
                {/* Text Name: Fade in to white on hover */}
                <span className="font-display font-bold text-xl text-white/40 group-hover:text-white transition-colors duration-300">
                    {logo.name}
                </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};