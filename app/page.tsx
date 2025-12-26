'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { getCalApi } from "@calcom/embed-react";
import { Zap } from 'lucide-react';
import Link from 'next/link';

// Component Imports - Ensure these exist in your project structure
import { Hero } from '@/components/Hero';
import { ClientsSection } from '@/components/ClientsSection';
import { StatusSection } from '@/components/StatusSection';
import { SpeedSection } from '@/components/SpeedSection';
import { FunctionSection } from '@/components/FunctionSection';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { Preloader } from '@/components/Preloader';
import { Starfield } from '@/components/Starfield';
import { LandscapePrompt } from '@/components/LandscapePrompt';
import { ChatBot } from '@/components/ChatBot';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [isMobilePortrait, setIsMobilePortrait] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Nav Links Configuration
  const navLinks = [
    { name: 'The Gap', href: '#problem', id: 'problem' },
    { name: 'Protocol', href: '#protocol', id: 'protocol' },
    { name: 'Services', href: '#capabilities', id: 'capabilities' },
    { name: 'Results', href: '#results', id: 'results' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
  ];

  // Orientation Check Logic
  useEffect(() => {
    const checkOrientation = () => {
      // Define mobile as width <= 850px (covering tablets/phones)
      const isMobileWidth = window.innerWidth <= 850; 
      const isPortrait = window.innerHeight > window.innerWidth;
      
      // Only show prompt if it is a mobile device AND in portrait mode
      setIsMobilePortrait(isMobileWidth && isPortrait);
    };

    // Check immediately
    checkOrientation();

    // Add listeners
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active Section Observer
  useEffect(() => {
    if (loading) return;

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Activate when the section is in the middle of the viewport
      threshold: 0
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Slight delay to ensure DOM is fully painted after loading
    const timer = setTimeout(() => {
        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [loading]);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"unicorn-website-strategy-call"});
      cal("ui", {"theme":"dark","hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
    }
  };

  // If mobile portrait, block everything else and show prompt
  if (isMobilePortrait) {
    return <LandscapePrompt />;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className="min-h-screen">
        {/* Persistent Backgrounds */}
        <Starfield />
        
        {/* Noise Texture Overlay for Cyberpunk feel */}
        <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[100] mix-blend-overlay" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />

        {/* Fixed Navigation */}
        {!loading && (
          <nav 
            className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center transition-all duration-300 border-b ${
              scrolled 
                ? 'bg-background/80 backdrop-blur-md border-white/5 py-4 px-6 shadow-lg' 
                : 'bg-transparent border-transparent py-6 px-6'
            }`}
          >
             <Link href="/" className="font-display font-bold text-2xl tracking-tighter cursor-pointer text-white hover:opacity-80 transition-opacity" onClick={(e) => { 
               if(window.location.pathname === '/') {
                  e.preventDefault(); 
                  window.scrollTo({ top: 0, behavior: 'smooth' }); 
               }
             }}>
                NYA<span className="text-primary">.</span>
             </Link>
             
             <div className="hidden md:flex gap-8 text-sm font-bold tracking-widest uppercase text-white/80">
                {navLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href} 
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className={`relative transition-colors duration-300 hover:text-primary cursor-pointer ${
                        activeSection === link.id ? 'text-primary' : ''
                    }`}
                  >
                    {link.name}
                    {activeSection === link.id && (
                       <motion.div 
                         layoutId="active-nav"
                         className="absolute -bottom-2 left-0 right-0 h-[2px] bg-primary shadow-[0_0_10px_#F70670]"
                         transition={{ type: "spring", stiffness: 380, damping: 30 }}
                       />
                    )}
                  </a>
                ))}
             </div>

             <button 
                className="group relative px-6 py-2 bg-white/5 border border-white/20 rounded-full overflow-hidden transition-all hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                data-cal-namespace="unicorn-website-strategy-call"
                data-cal-link="navneethbekalbiz/unicorn-website-strategy-call"
                data-cal-config='{"layout":"month_view","theme":"dark"}'
             >
                <div className="relative z-10 flex items-center gap-2 uppercase text-xs font-bold tracking-widest">
                  <span>Start Project</span>
                  <Zap className="w-3 h-3 text-primary group-hover:text-black transition-colors" />
                </div>
                {/* Button Glow Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
             </button>
          </nav>
        )}

        {/* Main Content */}
        {!loading && (
          <main className="relative z-0">
            <Hero />
            <div className="relative z-10 bg-background/50 backdrop-blur-[2px]"> 
              <ClientsSection />
              <StatusSection />
              <SpeedSection />
              <FunctionSection />
              <Testimonials />
              <FAQ />
            </div>
            <Footer />
            {/* Inject ChatBot here */}
            <ChatBot />
          </main>
        )}
      </div>
    </>
  );
}