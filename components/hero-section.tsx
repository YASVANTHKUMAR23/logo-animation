"use client";

import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { IconChevronDown } from "@tabler/icons-react";

export const HeroSection = () => {
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center bg-[#050505] overflow-hidden">
      {/* Purple glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#6930c3] blur-[120px] opacity-30 z-[0] pointer-events-none"></div>

      <motion.div
        style={{ opacity, y, scale }}
        className="flex flex-col items-center text-center z-10 px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 4.5 }}
          className="mb-6 px-4 py-1.5 rounded-full bg-[#6930c3]/10 border border-[#6930c3]/20"
        >
          <span className="text-xs font-medium text-[#8b4cf6] uppercase tracking-widest">
            Full Stack Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.6, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 font-syne"
        >
          Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6930c3] to-[#8b4cf6]">Yasvanth</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.7, ease: "easeOut" }}
          className="text-xl md:text-2xl text-[#b0b0c0] max-w-2xl mb-10 font-instrument"
        >
          I create interfaces that blend function with emotion, crafting digital experiences that feel intuitive, seamless, and meaningful.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.8, ease: "easeOut" }}
          onClick={() => {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all duration-300 font-instrument"
        >
          View My Work
        </motion.button>
      </motion.div>

      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <IconChevronDown className="w-6 h-6 text-neutral-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};
