import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const statusMessages = [
  "INITIALIZING SEQUENCE...",
  "LOADING ASSETS...",
  "ESTABLISHING UPLINK...",
  "SYSTEM READY"
];

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds total load time
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        
        // Update text index based on progress quarters
        const newIndex = Math.min(
            Math.floor((next / 100) * statusMessages.length), 
            statusMessages.length - 1
        );
        setTextIndex(newIndex);

        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, duration + 600); 

    return () => {
      clearInterval(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Background Grid/Cyber lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(247,6,112,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(247,6,112,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] pointer-events-none" />

      {/* Technical HUD Corners */}
      <div className="absolute top-8 left-8 font-mono text-[10px] text-primary/60 tracking-widest hidden md:block select-none">
        <div className="mb-1">SYS.VER.4.0.2</div>
        <div>MEM: 64TB OK</div>
      </div>
      <div className="absolute top-8 right-8 font-mono text-[10px] text-primary/60 tracking-widest hidden md:block text-right select-none">
        <div className="mb-1">SECURE_CONN: TRUE</div>
        <div>LATENCY: 12ms</div>
      </div>
      <div className="absolute bottom-8 left-8 font-mono text-[10px] text-primary/60 tracking-widest hidden md:block select-none">
         <div className="mb-1">ID: 0X8F32A1</div>
         <div className="flex gap-1">
             {[...Array(5)].map((_, i) => (
                 <motion.div 
                    key={i} 
                    className="w-1 h-3 bg-primary/40" 
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                 />
             ))}
         </div>
      </div>

      {/* Central Content */}
      <div className="relative flex flex-col items-center justify-center z-10">
        <motion.div
          className="w-2 h-2 rounded-full bg-primary mb-8"
          initial={{ scale: 0.5, boxShadow: "0 0 0px #F70670" }}
          animate={{ 
            scale: [1, 2, 50], // Explodes at end
            opacity: [1, 1, 0], 
            boxShadow: [
              "0 0 20px 5px rgba(247, 6, 112, 0.5)", 
              "0 0 100px 40px rgba(247, 6, 112, 0.8)", 
              "0 0 0px 0px rgba(247, 6, 112, 0)"
            ]
          }}
          transition={{ 
            duration: 2.5,
            times: [0, 0.8, 1],
            ease: "easeInOut"
          }}
        />
        
        {/* Percentage */}
        <motion.div 
            className="flex flex-col items-center"
            animate={{ opacity: count >= 100 ? 0 : 1 }}
        >
            <span className="font-mono text-6xl md:text-8xl font-black text-white tracking-tighter tabular-nums">
            {Math.round(count).toString().padStart(3, '0')}
            <span className="text-2xl md:text-4xl text-primary align-top ml-2">%</span>
            </span>
            
            {/* Dynamic Futuristic Text */}
            <motion.div 
                className="mt-6 flex items-center gap-3"
            >
                <span className="w-1.5 h-1.5 bg-primary animate-pulse rounded-full shadow-[0_0_10px_#F70670]" />
                <span className="font-mono text-xs md:text-sm tracking-[0.3em] text-primary/80 uppercase w-[240px] text-center">
                    {statusMessages[textIndex]}
                </span>
                <span className="w-1.5 h-1.5 bg-primary animate-pulse rounded-full shadow-[0_0_10px_#F70670]" />
            </motion.div>
        </motion.div>
      </div>

      {/* Bottom Loading Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
        <motion.div 
          className="h-full bg-primary shadow-[0_0_20px_#F70670]"
          style={{ width: `${count}%` }} 
        />
      </div>
    </motion.div>
  );
};