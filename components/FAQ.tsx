import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { EncryptedText } from './ui/encrypted-text';

const faqs = [
  {
    question: "How is it possible to deliver a $10,000+ level site in only 72 hours?",
    answer: "The Push: Most agencies take 6 weeks because they are stuck in \"Scoping Chaos\" and manual labor. We use a Skeleton Strategy and high-speed Vibe Coding. We don't spend 40 hours \"discussing wireframes\"; we spend 72 hours deploying high-performance code. We aren't just faster; we are more efficient at bridging your \"Gap\"."
  },
  {
    question: "My current site \"works.\" Why do I need a 'Market Leader' aesthetic?",
    answer: "The Push: In the eyes of an investor, a generic website signals operational immaturity and high risk. If your site looks like a $500 template, you are stuck in \"Obscurity\". \"Market Leader\" aesthetics create a Price-to-Value Discrepancy. When you look like a $100M company, you can charge $100M prices. If you look average, you are invisible."
  },
  {
    question: "Is this just a glorified template?",
    answer: "The Push: No. Templates are \"Legacy Code\" before you even scale. We build a custom Digital Infrastructure. We use \"Luxury UI Libraries\" (Aceternity, ShadCN) to create immersive experiences that templates physically cannot handle. We don't just \"change colors\"; we architect Visual Dominance."
  },
  {
    question: "Will a better design actually help me close high-ticket deals?",
    answer: "The Push: Yes. As Alex Hormozi says, \"People buy based on perception\". High-ticket clients judge your ability to deliver by the quality of your \"Digital Handshake\". A professional rebrand can increase your perceived valuation instantly, making it \"stupid to say no\" to your offers."
  },
  {
    question: "What happens if I’m not 100% satisfied with the transformation?",
    answer: "The Push: We call this our \"Trampoline\" (Safety Net). Because we work in 72-hour sprints, we have 100% conviction in our delivery. If we don't meet the \"Market Leader\" standard we promised, we iterate until we do—or we don't get paid. We keep the \"skin in the game\" so you don't have to."
  },
  {
    question: "Who is the \"72-Hour Unicorn Protocol\" NOT for?",
    answer: "The Push: We are Polarizing by design. This is not for small local businesses, hobbyists, or founders who prefer \"6-week committee meetings\" over speed. We only work with founders who view their website as a Psychological Weapon for growth and dominance."
  },
  {
    question: "Do I need to provide all the content, or do you handle that?",
    answer: "The Push: We solve the \"Problem of Effort\". You give us the \"Skeleton\" of your vision, and we handle the VFX, UI/UX, and Conversion-First Architecture. We don't want you stuck in \"WORTHLESS DISTRACTIONS\" like content writing; we want you focused on your \"Desired Situation\": Scaling your business."
  }
];

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-background max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-display font-black text-center mb-16">
            <EncryptedText 
                text="Frequently Asked" 
                revealedClassName="text-white"
                revealDelayMs={50}
            /> <span className="text-white/20">
                <EncryptedText 
                    text="Questions" 
                    revealedClassName="text-white/20"
                    revealDelayMs={50}
                />
            </span>
        </h2>
        
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className="border border-white/10 rounded-2xl bg-surface/20 overflow-hidden">
                    <button 
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                    >
                        <span className="font-bold text-lg md:text-xl pr-4">{faq.question}</span>
                        {activeIndex === index ? <Minus className="text-primary shrink-0" /> : <Plus className="text-text-muted shrink-0" />}
                    </button>
                    <AnimatePresence>
                        {activeIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 pt-0 text-text-muted leading-relaxed border-t border-white/5">
                                    {faq.answer.startsWith("The Push:") ? (
                                        <span>
                                            <strong className="text-primary font-bold tracking-wide uppercase text-xs mr-2 border border-primary/30 px-2 py-0.5 rounded bg-primary/10">The Push</strong>
                                            {faq.answer.replace("The Push:", "").trim()}
                                        </span>
                                    ) : (
                                        faq.answer
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    </section>
  );
};