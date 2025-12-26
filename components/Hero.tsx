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
    <section ref={containerRef} className="relative w-full h-screen min-h-[900px] flex flex-col items-center justify-center overflow-hidden bg-transparent">
      <motion.div 
        style={{ y: yParticles }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <ParticleSphere />
      </motion.div>
      
      {/* Background Radial Gradients for atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/20 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        style={{ y: yText, opacity: opacityText, scale: scaleText }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center gap-8"
      >
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"/>
            <span className="text-xs font-mono tracking-widest text-primary/80 uppercase">Accepting Q4 Clients</span>
        </motion.div>

        <motion.div variants={fadeInUp} className="max-w-4xl">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
            WE TRANSFORM YOUR <br/>
            <span className="text-white/20">GENERIC WEBSITE</span> INTO A <br/>
            <span className="text-primary drop-shadow-[0_0_20px_rgba(247,6,112,0.4)]">$10,000+ LEADER</span>
          </h1>
        </motion.div>

        <motion.div variants={fadeInUp} className="max-w-xl">
          <p className="text-lg md:text-xl text-text-muted font-light">
            Instantly increase your perceived valuation to attract investors and high-ticket clients. Deployed in <span className="text-white font-semibold">72 hours</span>.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4 mt-8">
          <Button 
            className="scale-110"
            data-cal-namespace="unicorn-website-strategy-call"
            data-cal-link="navneethbekalbiz/unicorn-website-strategy-call"
            data-cal-config='{"layout":"month_view","theme":"dark"}'
          >
            See Your Unicorn Prototype
          </Button>
          <p className="text-xs uppercase tracking-widest text-text-muted opacity-60">
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted">Explore</span>
      </motion.div>
    </section>
  );
};