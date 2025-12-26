import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, MousePointer2, Layout, Code2, LineChart, Bot } from 'lucide-react';
import { Card } from './Card';
import { EncryptedText } from './ui/encrypted-text';
import { Button } from './Button';

export const FunctionSection: React.FC = () => {
  return (
    <section id="capabilities" className="py-20 md:py-32 bg-background relative overflow-hidden">
       {/* Ambient glow from bottom */}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

       <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6 leading-tight">
              <EncryptedText 
                text="FULL-STACK" 
                revealedClassName="text-white"
                revealDelayMs={60}
              /> <br/> 
              <span className="text-primary">
                 <EncryptedText 
                    text="DOMINANCE" 
                    revealedClassName="text-primary"
                    revealDelayMs={60}
                 />
              </span>
            </h2>
            <p className="text-lg text-text-muted">
              End-to-end execution. From the first pixel to the final sale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24">
              <Card className="bg-surface/30">
                  <Layout className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4 font-display uppercase">Hyper-Visual Design</h3>
                  <p className="text-white font-semibold text-sm leading-relaxed mb-2">
                      We don't just look premium—we command attention.
                  </p>
                  <p className="text-text-muted text-sm leading-relaxed mb-6">
                      Immersive WebGL environments, custom 3D assets, and cinematic micro-interactions that make users stop scrolling and start engaging. Your competitors look flat. You look untouchable.
                  </p>
                  <ul className="text-xs text-white/60 space-y-2">
                      <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"/> Custom 3D Modeling & Renders</li>
                      <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"/> Cinematic Motion Design Systems</li>
                      <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"/> Premium UI/UX Architecture</li>
                  </ul>
              </Card>

              <Card className="bg-surface/30">
                  <Code2 className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4 font-display uppercase">Elite Development</h3>
                  <p className="text-white font-semibold text-sm leading-relaxed mb-2">
                      Built on the modern stack. Engineered to scale.
                  </p>
                  <p className="text-text-muted text-sm leading-relaxed mb-6">
                      Clean, future-proof code powered by React, Next.js, and Tailwind. Lightning-fast performance that keeps users engaged and search engines happy.
                  </p>
                   <ul className="text-xs text-white/60 space-y-2">
                      <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"/> Headless CMS Integration</li>
                      <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"/> Custom API Development</li>
                      <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"/> Web3 & Blockchain-Ready Infrastructure</li>
                  </ul>
              </Card>

              <Card className="bg-surface/30">
                  <Bot className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4 font-display uppercase">AI-Powered Sales Automation</h3>
                   <p className="text-white font-semibold text-sm leading-relaxed mb-2">
                      Your website works 24/7—so should your sales team.
                  </p>
                  <p className="text-text-muted text-sm leading-relaxed mb-6">
                      We integrate intelligent chat assistants and automated sales systems that qualify leads, answer questions, and book meetings while you sleep. High-ticket clients expect instant, intelligent responses.
                  </p>
                   <ul className="text-xs text-white/60 space-y-2">
                      <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"/> AI Chat Assistants (Lead Qualification)</li>
                      <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"/> Automated Sales Funnels & Sequences</li>
                      <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"/> Smart CRM Integration & Follow-Up</li>
                  </ul>
              </Card>

              <Card className="bg-surface/30">
                  <LineChart className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4 font-display uppercase">Conversion Engineering</h3>
                   <p className="text-white font-semibold text-sm leading-relaxed mb-2">
                      Beauty without sales is just expensive art.
                  </p>
                  <p className="text-text-muted text-sm leading-relaxed mb-6">
                      We architect every page with psychological triggers, conversion-optimized flows, and data feedback loops that turn traffic into revenue. Your site doesn't just impress—it closes.
                  </p>
                   <ul className="text-xs text-white/60 space-y-2">
                      <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"/> Conversion Rate Optimization (CRO) Audits</li>
                      <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"/> A/B Testing Infrastructure</li>
                      <li className="flex items-center gap-2"><span className="w-1 h-1 bg-primary rounded-full"/> Revenue Funnel Optimization</li>
                  </ul>
              </Card>
          </div>

          {/* CTA In-Flow */}
          <div className="flex justify-center mb-16 md:mb-24">
             <Button 
                className="scale-110 w-full md:w-auto"
                data-cal-namespace="unicorn-website-strategy-call"
                data-cal-link="navneethbekalbiz/unicorn-website-strategy-call"
                data-cal-config='{"layout":"month_view","theme":"dark"}'
            >
                Build Your Infrastructure
            </Button>
          </div>

          {/* Dashboard Visual - Kept for authority signaling */}
          <motion.div 
            className="relative mx-auto max-w-5xl hidden md:block"
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