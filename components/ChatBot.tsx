
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, Bot } from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";
import { Button } from './Button';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const SYSTEM_INSTRUCTION = `
You are NOVA, the elite AI Concierge for "NotYourAverage" (NYA), a high-end cyberpunk web design agency.
Your goal is to be a helpful support agent and a persuasive sales representative.

AGENCY PROFILE:
- NYA builds "Market Leader" websites in exactly 72 hours.
- Target Audience: High-ticket founders, stealth startups, and investors who need to look dominant.
- Aesthetic: Cyberpunk, Neon, Glassmorphism, 3D WebGL.
- Value Prop: We don't do templates. We build psychological weapons for growth. 
- Pricing: Premium ($10k+ range implied).
- Key differentiator: Speed (72h) + Authority (High-end design).

TONE:
- Professional, concise, slightly futuristic/edgy, and confident.
- Do not be overly enthusiastic or use too many emojis. Keep it "cool" and high-tech.
- Use terms like "Protocol," "Infrastructure," "Dominance," "Assets."

OBJECTIVES:
1. Answer questions about the agency's process (The 72-hour sprint).
2. Overcome objections about price or speed (Speed = Efficiency, Price = Value/ROI).
3. PUSH FOR THE SALE: Encourage users to book a "Strategy Call" or "View the Unicorn Prototype".

If asked about booking or starting, direct them to use the "Start Project" button in the nav or the scheduling link.
`;

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "System Online. I am NOVA. How can I help you dominate your market today?" }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<Chat | null>(null);

  // Initialize Chat Session
  useEffect(() => {
    if (!process.env.API_KEY) { 
        console.error("API_KEY is missing"); 
        return;
    }
    
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSessionRef.current = ai.chats.create({
      model: 'gemini-3-pro-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || !chatSessionRef.current) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await chatSessionRef.current.sendMessage({ message: userMessage });
      const text = response.text;
      
      if (text) {
        setMessages(prev => [...prev, { role: 'model', text: text }]);
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Connection interrupted. Re-establishing uplink..." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary/20 backdrop-blur-md border border-primary/50 text-white flex items-center justify-center shadow-[0_0_30px_-5px_#F70670] hover:bg-primary/40 transition-all duration-300 group"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
            >
              <MessageSquare className="w-6 h-6 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              {/* Ping Animation */}
              <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-[400px] h-[600px] max-h-[70vh] flex flex-col rounded-3xl overflow-hidden border border-white/10 bg-[#050505]/90 backdrop-blur-xl shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 relative">
                  <Bot className="w-5 h-5 text-primary" />
                  <div className="absolute inset-0 bg-primary/20 blur-md rounded-full animate-pulse" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white tracking-wide">NOVA AI</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-primary/60 font-mono tracking-widest uppercase">Online</span>
                  </div>
                </div>
              </div>
              <div className="p-2 rounded-full bg-white/5 border border-white/10">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-primary text-white rounded-tr-sm shadow-[0_0_15px_-5px_#F70670]'
                        : 'bg-white/10 text-white/90 border border-white/10 rounded-tl-sm backdrop-blur-md'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isLoading && (
                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                    <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-sm flex gap-1">
                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-primary rounded-full" />
                    </div>
                 </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-black/40 border-t border-white/10">
              <div className="relative flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask about our 72h protocol..."
                  className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-3 text-sm text-white placeholder-text-muted focus:outline-none focus:border-primary/50 transition-colors"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-1.5 p-2 bg-primary rounded-full text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#ff1b7e] transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-2 text-center">
                 <p className="text-[10px] text-white/20 uppercase tracking-widest font-mono">Powered by Gemini 3.0 Pro</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
