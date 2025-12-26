import React from 'react';
import { PixelatedCanvas } from './ui/pixelated-canvas';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { EncryptedText } from './ui/encrypted-text';

const authorities = [
  {
    id: "hormozi",
    name: "Alex Hormozi",
    quote: "People buy based on perception, not just the product itself. How you frame and communicate value is everything.",
    nya: "If your website looks like a $500 template, your market perceives your service as a commodity. We frame you as a Market Leader in 72 hours. When your \"packaging\" looks like a Ferrari, your prospects find the $5k to work with you instead of the $5k for your competitor.",
    image: "https://raw.githubusercontent.com/navneethbekalbiz/visitflowwebsite/abaa8d29c29cfd0f810419b0276085d684123a64/alex%20hormozi.png"
  },
  {
    id: "cardone",
    name: "Grant Cardone",
    quote: "Obscurity is a bigger problem than money. You can’t get anywhere flying under the radar. Spend less time competing and more time dominating.",
    nya: "An average website is a one-way ticket to obscurity. To get the attention you need, the world must understand you aren't going away. We build \"Aggressive Aesthetics\" to ensure that when a prospect lands on your site, they don't just see a vendor; they see the Industry Authority.",
    image: "https://raw.githubusercontent.com/navneethbekalbiz/visitflowwebsite/abaa8d29c29cfd0f810419b0276085d684123a64/GrantCardone.jpg"
  },
  {
    id: "martell",
    name: "Dan Martell",
    quote: "Build a brand that opens doors. Your reputation precedes you and makes opportunities easier. The right people need to know your name.",
    nya: "High-ticket investors and clients don't have time to \"discover\" your talent—they judge it in 2 seconds. A high-aesthetic, professional site is the \"Digital Handshake\" that earns you respect instantly. We create the brand that opens the doors your current site is keeping locked.",
    image: "https://raw.githubusercontent.com/navneethbekalbiz/visitflowwebsite/145a6026a98631d01125341a54dddb589e2bcc30/DannyMartell.png"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-background relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4">
             {/* Header */}
             <div className="text-center mb-32">
                 <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-4">
                    <EncryptedText 
                        text="Don't Trust Us." 
                        revealedClassName="text-white"
                        revealDelayMs={50}
                    /> <br/> 
                    <span className="text-primary">
                        <EncryptedText 
                            text="Trust Results." 
                            revealedClassName="text-primary"
                            revealDelayMs={50}
                        />
                    </span>
                </h2>
                <p className="text-text-muted text-sm uppercase tracking-widest opacity-60">Leveraging Billion-Dollar Wisdom</p>
             </div>

            <div className="flex flex-col gap-32">
                {authorities.map((item, index) => (
                    <motion.div 
                        key={item.id} 
                        className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                         {/* Text Left */}
                         <div className="space-y-12 order-2 md:order-1">
                             {/* Authority Quote Block */}
                             <div className="relative group">
                                 <Quote className="absolute -top-6 -left-6 w-12 h-12 text-primary/20 -z-10 group-hover:text-primary/40 transition-colors duration-500" />
                                 <h3 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight mb-4">
                                    "{item.quote}"
                                 </h3>
                                 <p className="text-primary font-mono tracking-widest uppercase text-sm font-bold flex items-center gap-2">
                                    <span className="w-8 h-[1px] bg-primary"></span>
                                    {item.name}
                                 </p>
                             </div>

                             {/* Divider */}
                             <div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent" />

                             {/* NYA App Block */}
                             <div className="space-y-4 pl-4 border-l-2 border-white/10 hover:border-primary transition-colors duration-300">
                                 <h4 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em]">The NYA Protocol</h4>
                                 <p className="text-text-muted text-lg leading-relaxed">
                                    {item.nya}
                                 </p>
                             </div>
                         </div>

                         {/* Image Right - Pixelated Canvas */}
                         <div className="w-full flex justify-center order-1 md:order-2">
                              <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]">
                                  {/* Scanline overlay for extra cyberpunk feel */}
                                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] opacity-10 pointer-events-none z-10" />
                                  
                                  <PixelatedCanvas
                                    src={item.image}
                                    width={400}
                                    height={500}
                                    cellSize={4}
                                    dotScale={0.8}
                                    shape="square"
                                    backgroundColor="#0A0A0A"
                                    grayscale={false}
                                    tintColor="#F70670"
                                    tintStrength={0.15}
                                    className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
                                    interactive={true}
                                    distortionStrength={6}
                                    distortionRadius={60}
                                    followSpeed={0.1}
                                  />
                              </div>
                         </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};