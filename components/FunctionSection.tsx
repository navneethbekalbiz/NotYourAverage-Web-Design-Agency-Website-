import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, MousePointer2, Layout, Code2, LineChart } from 'lucide-react';
import { Card } from './Card';
import { EncryptedText } from './ui/encrypted-text';
import { Button } from './Button';

export const FunctionSection: React.FC = () => {
  return (
    <section id="capabilities" className="py-32 bg-background relative overflow-hidden">
       {/* Ambient glow from bottom */}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

       <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6">
              <EncryptedText 
                text="Full-Stack" 
                revealedClassName="text-white"
                revealDelayMs={60}
              /> <br/> 
              <span className="text-primary">
                 <EncryptedText 
                    text="Dominance" 
                    revealedClassName="text-primary"
                    revealDelayMs={60}
                 />
              </span>
            </h2>
            <p className="text-lg text-text-muted">
              We provide end-to-end execution. From the first pixel to the final conversion event.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
              <Card className="bg-surface/30">
                  <Layout className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4 font-display">Hyper-Visual Design</h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">
                      We break patterns. Using WebGL, 3D assets, and micro-interactions, we create an immersive experience that keeps users glued to the screen.
                  </p>
                  <ul className="text-xs text-white/60 space-y-2">
                      <li>• 3D Modelling & Renders</li>
                      <li>• Motion Design Systems</li>
                      <li>• UI/UX Architecture</li>
                  </ul>
              </Card>
              <Card className="bg-surface/30">
                  <Code2 className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4 font-display">Elite Development</h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">
                      Clean code that scales. We build on the modern stack (React, Next.js, Tailwind) to ensure your site is future-proof and lightning fast.
                  </p>
                   <ul className="text-xs text-white/60 space-y-2">
                      <li>• Headless CMS Integration</li>
                      <li>• API Development</li>
                      <li>• Web3 & Blockchain Ready</li>
                  </ul>
              </Card>
              <Card className="bg-surface/30">
                  <LineChart className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4 font-display">Conversion Engineering</h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">
                      Beauty means nothing without sales. We bake in psychological triggers and data loops to turn visitors into revenue.
                  </p>
                   <ul className="text-xs text-white/60 space-y-2">
                      <li>• CRO Audits</li>
                      <li>• A/B Testing Infrastructure</li>
                      <li>• Funnel Optimization</li>
                  </ul>
              </Card>
          </div>

          {/* CTA In-Flow */}
          <div className="flex justify-center mb-24">
             <Button 
                className="scale-110"
                data-cal-namespace="unicorn-website-strategy-call"
                data-cal-link="navneethbekalbiz/unicorn-website-strategy-call"
                data-cal-config='{"layout":"month_view","theme":"dark"}'
            >
                Build Your Infrastructure
            </Button>
          </div>

          {/* Dashboard Visual - Kept for authority signaling */}
          <motion.div 
            className="relative mx-auto max-w-5xl"
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <div className="relative z-10 bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl">
                
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-6">
                   <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                   </div>
                   <div className="font-mono text-xs text-text-muted">analytics_mainframe_v3</div>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   {/* Metric 1 */}
                   <div className="p-6 rounded-xl bg-white/5 border border-white/5 text-left">
                      <div className="flex items-center gap-2 mb-2 text-text-muted text-sm font-bold uppercase tracking-wider">
                         <TrendingUp className="w-4 h-4 text-primary" />
                         Leads Generated
                      </div>
                      <div className="text-4xl font-display font-bold text-white mb-2">+312%</div>
                      <div className="h-2 w-full bg-black rounded-full overflow-hidden">
                         <div className="h-full w-[85%] bg-primary shadow-[0_0_10px_#F70670]" />
                      </div>
                   </div>

                   {/* Metric 2 */}
                   <div className="p-6 rounded-xl bg-white/5 border border-white/5 text-left">
                      <div className="flex items-center gap-2 mb-2 text-text-muted text-sm font-bold uppercase tracking-wider">
                         <Users className="w-4 h-4 text-purple-400" />
                         Visitor Retention
                      </div>
                      <div className="text-4xl font-display font-bold text-white mb-2">4m 32s</div>
                      <div className="h-2 w-full bg-black rounded-full overflow-hidden">
                         <div className="h-full w-[92%] bg-purple-500" />
                      </div>
                   </div>

                   {/* Metric 3 */}
                   <div className="p-6 rounded-xl bg-white/5 border border-white/5 text-left">
                      <div className="flex items-center gap-2 mb-2 text-text-muted text-sm font-bold uppercase tracking-wider">
                         <MousePointer2 className="w-4 h-4 text-blue-400" />
                         Click Rate
                      </div>
                      <div className="text-4xl font-display font-bold text-white mb-2">18.5%</div>
                      <div className="h-2 w-full bg-black rounded-full overflow-hidden">
                         <div className="h-full w-[65%] bg-blue-500" />
                      </div>
                   </div>
                </div>
             </div>
             {/* Glow behind dashboard */}
             <div className="absolute inset-0 bg-primary/20 blur-[60px] -z-10 rounded-3xl" />
          </motion.div>
       </div>
    </section>
  );
};