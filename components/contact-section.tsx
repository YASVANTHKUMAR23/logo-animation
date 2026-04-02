'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Send } from 'lucide-react';

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const formY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section id="contact" ref={ref} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-32 bg-[#050505] border-t border-white/5">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{ y: bgY }}
      >
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-[#00e1ab]/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[20%] right-[20%] w-[600px] h-[600px] bg-[#6930c3]/20 rounded-full blur-[150px]" />
      </motion.div>

      <motion.div 
        className="relative z-10 w-full max-w-4xl px-6"
        style={{ y: formY }}
      >
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tighter">
            Ready to <span className="font-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#6930c3] to-[#00e1ab] pr-2 -mr-2">collaborate?</span>
          </h2>
          <p className="text-xl text-[#b0b0c0] font-instrument max-w-2xl mx-auto">
            Drop a message and let&apos;s craft an extraordinary digital experience together.
          </p>
        </div>

        <div className="p-8 md:p-12 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-mono text-gray-400 uppercase tracking-wider ml-2">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00e1ab]/50 focus:border-[#00e1ab]/50 transition-all font-sans text-lg" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-mono text-gray-400 uppercase tracking-wider ml-2">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00e1ab]/50 focus:border-[#00e1ab]/50 transition-all font-sans text-lg" 
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-mono text-gray-400 uppercase tracking-wider ml-2">Message</label>
              <textarea 
                rows={4} 
                placeholder="Tell me about your project..." 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00e1ab]/50 focus:border-[#00e1ab]/50 transition-all font-sans text-lg resize-none" 
              />
            </div>
            <button className="mt-4 group relative w-full md:w-auto self-end inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-display font-bold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00e1ab] to-[#00f0b7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 group-hover:text-black transition-colors">Send Message</span>
              <Send size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
