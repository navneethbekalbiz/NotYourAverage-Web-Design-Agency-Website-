import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';
import { EncryptedText } from './ui/encrypted-text';
import { Button } from './Button';

export const StatusSection: React.FC = () => {
  return (
    <section id="problem" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 md:space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-primary font-display font-bold text-xl uppercase tracking-widest mb-4">
                The Problem
              </h2>
              <h3 className="text-4xl md:text-6xl font-display font-black leading-tight mb-6">
                <EncryptedText 
                    text="You Look Like" 
                    className="block"
                    revealedClassName="text-white"
                    revealDelayMs={60}
                /> 
                <span className="text-primary">
                     <EncryptedText 
                        text="A Risk." 
                        revealedClassName="text-primary"
                        encryptedClassName="text-primary/40"
                        revealDelayMs={60}
                    />
                </span>
              </h3>
              <p className="text-text-muted text-base md:text-lg leading-relaxed">
                In the high-stakes world of premium deals, investors and high-ticket clients make split-second judgments. A generic, template-based website doesn't just look cheap—it screams unreliable.
              </p>
              <p className="text-white font-bold text-base md:text-lg leading-relaxed mt-4">
                We turn you into the obvious choice.
              </p>
              <p className="text-text-muted text-base md:text-lg leading-relaxed mt-4">
                Your product might be world-class, but if your website doesn't reflect that caliber, you're losing deals before the conversation even starts.
              </p>
            </motion.div>

            {/* Comparison Table for CRO */}
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div>
                    <h4 className="font-bold text-white mb-4 border-b border-white/10 pb-2">Traditional Agency</h4>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-text-muted text-sm"><XCircle className="w-4 h-4 text-red-500/50 shrink-0" /> 6–8 week timelines</li>
                        <li className="flex items-center gap-2 text-text-muted text-sm"><XCircle className="w-4 h-4 text-red-500/50 shrink-0" /> Cookie-cutter templates</li>
                        <li className="flex items-center gap-2 text-text-muted text-sm"><XCircle className="w-4 h-4 text-red-500/50 shrink-0" /> Pretty websites that don't sell</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-primary mb-4 border-b border-primary/20 pb-2">NotYourAverage</h4>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-white text-sm"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> <span className="font-bold">72-hour delivery</span></li>
                        <li className="flex items-center gap-2 text-white text-sm"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Custom Made, High-End Animations</li>
                        <li className="flex items-center gap-2 text-white text-sm"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Conversion-focused sales systems</li>
                    </ul>
                </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
            >
                <Button 
                    variant="outline"
                    data-cal-namespace="unicorn-website-strategy-call"
                    data-cal-link="navneethbekalbiz/unicorn-website-strategy-call"
                    data-cal-config='{"layout":"month_view","theme":"dark"}'
                    className="w-full md:w-auto"
                >
                    Stop Being Invisible
                </Button>
            </motion.div>
          </div>

          {/* Visual Content - 3D Phone Render Mockup */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, rotateY: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="relative w-full max-w-[300px] h-[600px] bg-black rounded-[50px] border-4 border-gray-800 shadow-2xl overflow-hidden transform-gpu rotate-[-5deg] hover:rotate-0 transition-transform duration-500 group">
               {/* Glossy Overlay */}
               <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-[46px]" />
               
               {/* Screen Content */}
               <div className="absolute inset-0 z-10 bg-surface flex flex-col">
                  {/* Status Bar Mock */}
                  <div className="h-8 w-full flex justify-between items-center px-6 text-[10px] text-white/50">
                    <span>9:41</span>
                    <div className="flex gap-1">
                        <div className="w-3 h-3 bg-white/20 rounded-full" />
                        <div className="w-3 h-3 bg-white/20 rounded-full" />
                    </div>
                  </div>

                  {/* App UI */}
                  <div className="flex-1 p-4 flex flex-col gap-4 overflow-hidden relative">
                     {/* Decorative Glowing Elements */}
                     <div className="absolute top-20 left-10 w-32 h-32 bg-primary blur-[60px] opacity-40 animate-pulse" />
                     
                     <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 z-10 mt-10">
                        <div className="text-4xl font-black text-white mb-2">$10M+</div>
                        <div className="text-xs text-text-muted uppercase tracking-widest">Client Revenue Unlocked</div>
                     </div>

                     <div className="flex gap-2 z-10 mt-4">
                        <div className="h-32 flex-1 bg-white/5 rounded-2xl border border-white/10 p-4 flex flex-col justify-end">
                             <div className="w-8 h-8 rounded-full bg-primary/20 mb-2 flex items-center justify-center text-primary text-xs">A</div>
                             <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                <div className="w-3/4 h-full bg-primary" />
                             </div>
                        </div>
                        <div className="h-32 flex-1 bg-white/5 rounded-2xl border border-white/10 p-4 flex flex-col justify-end">
                            <div className="w-8 h-8 rounded-full bg-purple-500/20 mb-2 flex items-center justify-center text-purple-500 text-xs">B</div>
                             <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                <div className="w-1/2 h-full bg-purple-500" />
                             </div>
                        </div>
                     </div>

                     <div className="mt-auto bg-gradient-to-t from-primary/20 to-transparent p-6 rounded-2xl border border-primary/30 z-10 group-hover:bg-primary/30 transition-colors">
                        <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center mb-3 shadow-[0_0_15px_#F70670]">
                          <CheckCircle2 className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-white font-bold text-xl">Authority Verified</div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Background Glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-primary/20 blur-[80px] -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};