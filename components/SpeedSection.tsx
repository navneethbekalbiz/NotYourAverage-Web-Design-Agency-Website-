import React from 'react';
import { Card } from './Card';
import { Timer, Zap, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { EncryptedText } from './ui/encrypted-text';

export const SpeedSection: React.FC = () => {
  return (
    <section id="protocol" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
           <h2 className="text-4xl md:text-5xl font-display font-black mb-6">
            <EncryptedText 
                text="From Zero to Live" 
                revealedClassName="text-white"
                revealDelayMs={50}
            /> <br/> 
            <span className="text-primary">
                <EncryptedText 
                    text="in 72 Hours." 
                    revealedClassName="text-primary"
                    revealDelayMs={50}
                />
            </span>
           </h2>
           <p className="text-text-muted text-lg">
             We stripped away the agency bloat. No 3-week discovery phases. No middle management. Just rapid, elite execution.
           </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1: 72 Hours Focus */}
          <Card className="md:col-span-2 bg-gradient-to-br from-surface to-[#0f0f0f]">
             <div className="flex flex-col md:flex-row items-center justify-between h-full gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm">
                    <Timer className="w-4 h-4" />
                    <span>The Sprint</span>
                  </div>
                  <h3 className="text-5xl md:text-7xl font-display font-black text-white leading-none">
                    72 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Hours.</span>
                  </h3>
                  <p className="text-text-muted max-w-md">We deploy your core infrastructure, branding, and 3D assets in a single 3-day sprint.</p>
                </div>
                
                {/* Abstract Countdown Visual */}
                <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500">
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
             <div className="h-full flex flex-col justify-between">
               <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center mb-6">
                 <Zap className="w-6 h-6 text-primary" />
               </div>
               <div>
                 <h3 className="text-2xl font-display font-bold mb-2">Instant Load Times</h3>
                 <p className="text-text-muted text-sm">We build on the edge. Sub-100ms load times globally ensure you never lose a lead to lag.</p>
               </div>
               <div className="mt-8 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
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
                 <div className="text-left">
                    <h3 className="text-2xl font-display font-bold mb-2">Launch Ready</h3>
                    <p className="max-w-xl text-text-muted">
                      Your site ships with SEO schema, OpenGraph tags, and analytics pre-configured. We don't just hand over code; we hand over a revenue-generating asset.
                    </p>
                 </div>
              </div>
           </Card>
        </div>
      </div>
    </section>
  );
};