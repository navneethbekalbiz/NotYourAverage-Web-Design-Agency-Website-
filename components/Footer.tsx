import React from 'react';
import { Button } from './Button';

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-32 bg-black border-t border-white/10 overflow-hidden">
      {/* 3D Spline Background Animation */}
      <div className="absolute inset-0 z-0">
         {/* @ts-ignore */}
         <spline-viewer 
            url="https://prod.spline.design/xPLTfarBcf9n75X5/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
         />
         
         {/* Gradient Overlay to ensure text readability */}
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] pointer-events-none" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
         <h2 className="text-5xl md:text-8xl font-display font-black text-white mb-8 tracking-tighter">
            READY TO <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/50 drop-shadow-[0_0_30px_rgba(247,6,112,0.5)]">DOMINATE?</span>
         </h2>
         <p className="text-text-muted text-lg max-w-xl mx-auto mb-12 font-light">
             Stop leaving money on the table with an average website. Join the 1% of brands who understand the power of digital authority.
         </p>
         
         <div className="flex justify-center mb-16">
            <Button 
                className="text-lg px-12 py-6 shadow-[0_0_50px_-10px_#F70670] hover:shadow-[0_0_70px_-5px_#F70670] scale-110"
                data-cal-namespace="unicorn-website-strategy-call"
                data-cal-link="navneethbekalbiz/unicorn-website-strategy-call"
                data-cal-config='{"layout":"month_view","theme":"dark"}'
            >
                Start Your Transformation
            </Button>
         </div>
         
         <div className="flex flex-col md:flex-row justify-between items-center text-text-muted text-xs uppercase tracking-widest gap-4 border-t border-white/5 pt-10">
            <p>&copy; {new Date().getFullYear()} NotYourAverage. All rights reserved.</p>
            <div className="flex gap-8">
               <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
               <a href="#" className="hover:text-primary transition-colors">Twitter / X</a>
            </div>
         </div>
      </div>
    </footer>
  );
};