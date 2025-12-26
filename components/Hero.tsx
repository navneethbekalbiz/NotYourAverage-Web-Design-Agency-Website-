import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ParticleSphere } from './ParticleSphere';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Parallax Effects
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);
  const scaleText = useTransform(scrollY, [0, 500], [1, 0.9]);
  
  const yParticles = useTransform(scrollY, [0, 1000], [0, 400]); 

  // Acceleration Animation Config
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] 
      }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5 
      }
    }
  };

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[800px] flex flex-col items-center justify-center overflow-hidden bg-transparent">
      <motion.div 
        style={{ y: yParticles }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <ParticleSphere />
      </motion.div>
      
      {/* Background Radial Gradients for atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-secondary/20 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        style={{ y: yText, opacity: opacityText, scale: scaleText }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center gap-6 md:gap-10"
      >
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"/>
            <span className="text-xs font-mono tracking-widest text-primary/80 uppercase">Accepting Q4 Clients</span>
        </motion.div>

        <motion.div variants={fadeInUp} className="max-w-7xl mx-auto w-full">
          <h1 className="font-display flex flex-col items-center justify-center text-center">
            
            {/* Top Line */}
            <span className="text-2xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white/90 mb-2 md:mb-6">
              TRANSFORM YOUR WEBSITE INTO A
            </span>

            {/* Middle Line - The Hero */}
            <span className="relative z-10 text-5xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-primary via-[#ff4d9e] to-primary/50 drop-shadow-[0_0_20px_rgba(247,6,112,0.4)] md:drop-shadow-[0_0_40px_rgba(247,6,112,0.4)] py-2">
               'MARKET LEADER'
            </span>

            {/* Bottom Line */}
            <span className="text-lg md:text-4xl lg:text-5xl font-medium text-white/60 tracking-tight mt-4 md:mt-8 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
              <span>SITE IN EXACTLY</span>
              <span className="relative group mt-2 md:mt-0">
                <span className="absolute inset-0 bg-white/20 blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative block text-white font-black drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] border border-white/20 bg-white/5 px-4 py-1 rounded-lg backdrop-blur-sm">
                  72 HOURS
                </span>
              </span>
            </span>
          </h1>
        </motion.div>

        <motion.div variants={fadeInUp} className="max-w-2xl mt-4 md:mt-6">
          <p className="text-base md:text-xl text-text-muted font-light leading-relaxed px-4 md:px-0">
            Instantly command the authority and premium polish that attracts serious investors and converts high-ticket clients—by looking like the dominant player in your industry.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4 mt-8 md:mt-10">
          <Button 
            className="scale-105 md:scale-110 shadow-[0_0_30px_-10px_#F70670] md:shadow-[0_0_40px_-10px_#F70670] hover:shadow-[0_0_60px_-5px_#F70670] w-full md:w-auto text-sm md:text-base"
            data-cal-namespace="unicorn-website-strategy-call"
            data-cal-link="navneethbekalbiz/unicorn-website-strategy-call"
            data-cal-config='{"layout":"month_view","theme":"dark"}'
          >
            See Your Unicorn Prototype
          </Button>
          <p className="text-[10px] md:text-xs uppercase tracking-widest text-text-muted opacity-60">
            Trusted by stealth founders & top agencies
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        style={{ opacity: opacityText }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-primary to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted">Explore</span>
      </motion.div>
    </section>
  );
};