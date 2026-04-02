'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ZoomIn, X } from 'lucide-react';
import Image from 'next/image';

const certifications = [
  { id: 1, title: "Google UX Design Professional", desc: "Foundations of UX design, wireframing, and high-fidelity prototyping.", img: "https://picsum.photos/seed/cert1/1200/800" },
  { id: 2, title: "UI/UX Design Specialization", desc: "User-centered design, visual hierarchy, and interaction design.", img: "https://picsum.photos/seed/cert4/1200/800" },
  { id: 3, title: "Advanced Figma Masterclass", desc: "Design systems, auto layout, and advanced prototyping techniques.", img: "https://picsum.photos/seed/cert3/1200/800" },
  { id: 4, title: "Human-Computer Interaction", desc: "Cognitive psychology, usability testing, and accessibility standards.", img: "https://picsum.photos/seed/cert2/1200/800" },
];

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<any>(null);

  return (
    <section id="certificates" className="relative w-full min-h-screen z-10 pt-32 pb-16 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row relative">
        {/* Sticky Left: Title */}
        <div className="md:w-1/3 md:sticky md:top-32 h-auto md:h-[calc(100vh-8rem)] flex flex-col justify-start z-10 mb-16 md:mb-0">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-white"
          >
            <span className="font-accent italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#00e1ab] to-[#6930c3] pr-2 -mr-2">Cert</span>ifications
          </motion.h2>
          <p className="mt-6 text-[#b0b0c0] font-instrument text-lg max-w-sm leading-[1.6] tracking-wide">
            Verified skills and professional achievements. Scroll to explore my design certifications.
          </p>
        </div>

        {/* Scrolling Right: Cards */}
        <div className="md:w-2/3 relative z-10 flex flex-col gap-16 md:gap-24 md:pl-12">
          {certifications.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} onClick={() => setSelectedCert(cert)} />
          ))}
        </div>
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-2xl"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              style={{ transformPerspective: 1000 }}
              className="relative w-full max-w-7xl h-[85vh] bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,225,171,0.15)] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-20 p-3 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors border border-white/10"
                onClick={() => setSelectedCert(null)}
              >
                <X size={24} />
              </button>
              <div className="relative flex-1 w-full bg-black/40">
                <Image src={selectedCert.img} alt={selectedCert.title} fill className="object-contain p-2 md:p-4" unoptimized />
              </div>
              <div className="p-6 md:p-8 bg-white/5 border-t border-white/10">
                <h3 className="text-3xl font-display font-bold text-white">{selectedCert.title}</h3>
                <p className="text-[#b0b0c0] mt-2 text-lg font-instrument">{selectedCert.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function CertCard({ cert, index, onClick }: { cert: any, index: number, onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ y, opacity }}
      className="relative group cursor-pointer"
      onClick={onClick}
    >
      {/* Glowing background orb */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00e1ab]/10 to-[#6930c3]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
      
      <motion.div 
        whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ transformPerspective: 1000 }}
        className="relative p-4 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] overflow-hidden"
      >
        <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden mb-6">
          <Image src={cert.img} alt={cert.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" unoptimized />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          
          {/* Zoom Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-black/60 backdrop-blur-md p-3 rounded-full text-white flex items-center gap-2 border border-white/20 shadow-[0_0_20px_rgba(0,225,171,0.3)]">
              <ZoomIn size={20} className="text-[#00e1ab]" />
              <span className="font-mono text-sm font-bold uppercase tracking-wider pr-2">Zoom</span>
            </div>
          </div>
        </div>
        
        <div className="px-4 pb-4">
          <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-[#00e1ab] transition-colors">{cert.title}</h3>
          <p className="text-[#b0b0c0] font-instrument">{cert.desc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
