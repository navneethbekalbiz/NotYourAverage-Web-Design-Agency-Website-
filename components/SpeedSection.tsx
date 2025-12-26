import React from 'react';
import { Card } from './Card';
import { Timer, Zap, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { EncryptedText } from './ui/encrypted-text';

export const SpeedSection: React.FC = () => {
  return (
    <section id="protocol" className="py-20 md:py-24 bg-background relative z-10">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
           <h2 className="text-4xl md:text-5xl font-display font-black mb-6 leading-tight">
            <EncryptedText 
                text="FROM BRIEF TO LIVE" 
                revealedClassName="text-white"
                revealDelayMs={50}
            /> <br/> 
            <span className="text-primary">
                <EncryptedText 
                    text="IN 72 HOURS." 
                    revealedClassName="text-primary"
                    revealDelayMs={50}
                />
            </span>
           </h2>
           <p className="text-text-muted text-base md:text-lg">
             No 3-week discovery phases. No project manager ping-pong. Just rapid, elite execution that ships a complete sales system, not just a website.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: 72 Hours Focus */}
          <Card className="md:col-span-2 bg-gradient-to-br from-surface to-[#0f0f0f]">
             <div className="flex flex-col md:flex-row items-center justify-between h-full gap-8">
                <div className="space-y-4 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-primary font-bold tracking-widest uppercase text-xs md:text-sm">
                    <Timer className="w-4 h-4" />
                    <span>THE SPRINT (72 HOURS)</span>
                  </div>
                  <h3 className="text-5xl md:text-7xl font-display font-black text-white leading-none">
                    72 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Hours.</span>
                  </h3>
                  <p className="text-text-muted max-w-md text-sm md:text-base">
                    We deploy your complete brand infrastructure, 3D assets, conversion architecture, and premium UI in a single focused sprint. Zero agency bloat. Maximum impact.
                  </p>
                </div>
                
                {/* Abstract Countdown Visual */}
                <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 shrink-0">
                  <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#333" strokeWidth="8" />
                    <motion.circle 
                      cx="50" cy="50" r="45" fill="none" stroke="#F70670" strokeWidth="8" 
                      strokeDasharray="283"
                      strokeDashoffset="283"
                      whileInView={{ strokeDashoffset: 40 }}
                      transition={{ duration: 2, ease: "easeOut" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center font-display font-bold text-xl">
                    72H
                  </div>
                </div>
             </div>
          </Card>

          {/* Card 2: Speed */}
          <Card className="bg-[#080808]">
             <div className="h-full flex flex-col justify-between gap-6">
               <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center mb-6">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-3 uppercase leading-tight">BUILT FOR SPEED, ENGINEERED FOR CONVERSIONS</h3>
                    <p className="text-text-muted text-sm">
                      Sub-100ms load times globally. Edge-deployed infrastructure. Because every second of lag costs you high-ticket leads.
                    </p>
                  </div>
               </div>
               <div className="mt-auto h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                 <motion.div 
                   className="h-full bg-primary"
                   initial={{ width: 0 }}
                   whileInView={{ width: '100%' }}
                   transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                 />
               </div>
             </div>
          </Card>

           {/* Card 3: Launch */}
           <Card className="md:col-span-3 bg-gradient-to-r from-surface to-[#0a0508]">
              <div className="flex flex-col md:flex-row items-center gap-8 py-4">
                 <div className="p-4 rounded-full bg-primary/10 border border-primary/20 shrink-0">
                    <Rocket className="w-8 h-8 text-primary" />
                 </div>
                 <div className="text-center md:text-left">
                    <h3 className="text-2xl font-display font-bold mb-2 uppercase">LAUNCH-READY FROM DAY ONE</h3>
                    <p className="max-w-xl text-text-muted text-sm md:text-base">
                      Your site ships with SEO schema, Vercel metadata, analytics dashboards, and conversion tracking pre-configured. You're not getting a website, you're getting a revenue instrument.
                    </p>
                 </div>
              </div>
           </Card>
        </div>
      </div>
    </section>
  );
};