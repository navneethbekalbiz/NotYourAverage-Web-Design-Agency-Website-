import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { getCalApi } from "@calcom/embed-react";
import { Hero } from './components/Hero';
import { ClientsSection } from './components/ClientsSection';
import { StatusSection } from './components/StatusSection';
import { SpeedSection } from './components/SpeedSection';
import { FunctionSection } from './components/FunctionSection';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';
import { Starfield } from './components/Starfield';
import { Zap } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"unicorn-website-strategy-call"});
      cal("ui", {"theme":"dark","hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className={`min-h-screen bg-background text-text font-sans antialiased selection:bg-primary/30`}>
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
             <a href="#" className="font-display font-bold text-2xl tracking-tighter cursor-pointer text-white hover:opacity-80 transition-opacity">
                NYA<span className="text-primary">.</span>
             </a>
             
             <div className="hidden md:flex gap-8 text-sm font-bold tracking-widest uppercase text-white/80">
                <a href="#problem" className="hover:text-primary transition-colors">The Gap</a>
                <a href="#protocol" className="hover:text-primary transition-colors">Protocol</a>
                <a href="#capabilities" className="hover:text-primary transition-colors">Services</a>
                <a href="#results" className="hover:text-primary transition-colors">Results</a>
                <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
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
          </main>
        )}
      </div>
    </>
  );
}

export default App;