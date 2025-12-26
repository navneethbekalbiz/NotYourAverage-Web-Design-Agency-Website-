import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, RefreshCcw } from 'lucide-react';
import { EncryptedText } from './ui/encrypted-text';

export const LandscapePrompt: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center p-8 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(247,6,112,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(247,6,112,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] pointer-events-none" />

      {/* Decorative Corners */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/50" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/50" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/50" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/50" />

      <div className="relative z-10 flex flex-col items-center gap-12 text-center max-w-sm">
        
        {/* Animated Icon */}
        <div className="relative">
             <motion.div
                animate={{ rotate: 90 }}
                transition={{ 
                    duration: 2, 
                    ease: "easeInOut", 
                    repeat: Infinity, 
                    repeatDelay: 1,
                    repeatType: "loop"
                }}
             >
                <Smartphone className="w-24 h-24 text-white stroke-[1.5]" />
             </motion.div>
             
             {/* Glow effect */}
             <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
        </div>

        <div className="space-y-4">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"/>
                <span className="text-[10px] font-mono tracking-widest text-red-400 uppercase">Orientation Lock Active</span>
             </div>

            <h2 className="text-3xl font-display font-black uppercase text-white tracking-wider">
                <EncryptedText 
                    text="IMMERSIVE MODE" 
                    revealedClassName="text-primary"
                    revealDelayMs={40}
                /> <br/>
                REQUIRED
            </h2>

            <p className="text-text-muted text-sm leading-relaxed">
                The NYA Protocol requires a landscape viewport for optimal neural rendering. Please rotate your device to initialize connection.
            </p>
        </div>

        {/* Loading Bar Mockup */}
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-8 max-w-[200px]">
            <motion.div 
                className="h-full bg-red-500"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
        </div>

      </div>
    </div>
  );
};