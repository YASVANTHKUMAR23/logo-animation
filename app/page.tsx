'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import AnimatedLogo from '@/components/AnimatedLogo';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { FinderDesktop, Project } from "@/components/finder-desktop";
import { ProjectCardModal } from "@/components/project-card";
import { AboutSection } from "@/components/about-section";
import { CertificationsSection } from '@/components/certifications-section';
import { TimelineSection } from '@/components/timeline-section';
import { ContactSection } from '@/components/contact-section';
import { StickyFooter } from '@/components/footer';

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const ringsRef = useRef<HTMLDivElement>(null);
  const projectOrbRef = useRef<HTMLDivElement>(null);
  const projectTextRef = useRef<HTMLHeadingElement>(null);
  const projectImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Opening Animations (after 4.5s logo animation)
    const tl = gsap.timeline({ delay: 4.5 });

    // Nav entrance
    tl.fromTo(navRef.current, 
      { y: -50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    // Text entrance (blur to focus + scale down slightly)
    tl.fromTo(textRef.current,
      { filter: 'blur(20px)', scale: 1.1, opacity: 0, y: 30 },
      { filter: 'blur(0px)', scale: 1, opacity: 1, y: 0, duration: 1.5, ease: 'power4.out' },
      "-=0.5"
    );

    // Image entrance
    tl.fromTo(imageRef.current,
      { y: 100, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: 'power3.out' },
      "-=1.2"
    );

    // Rings entrance
    tl.fromTo(ringsRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 0.4, duration: 2, ease: 'power2.out' },
      "-=1.5"
    );

    // Left and Right content entrance
    tl.fromTo(leftContentRef.current,
      { x: -40, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      "-=1"
    );
    
    tl.fromTo(rightContentRef.current,
      { x: 40, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      "-=1"
    );

    // Social buttons stagger
    const socialBtns = gsap.utils.toArray('.social-btn');
    tl.fromTo(socialBtns,
      { y: 20, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)' },
      "-=0.8"
    );

    // CTA button entrance
    tl.fromTo('.cta-btn',
      { y: 20, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.5)' },
      "-=0.6"
    );

    // Parallax Effects
    // Text moves slower than scroll
    gsap.to(textRef.current, {
      yPercent: 40,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

    // Image moves faster than scroll
    gsap.to(imageRef.current, {
      yPercent: -10,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

    // Rings rotate and scale on scroll
    gsap.to(ringsRef.current, {
      rotation: 15,
      scale: 1.1,
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

    // Left and right content parallax
    gsap.to(leftContentRef.current, {
      yPercent: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

    gsap.to(rightContentRef.current, {
      yPercent: -45,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <main ref={containerRef} className="min-h-[150vh] bg-[#050505] text-white relative font-sans flex flex-col items-center overflow-hidden">
      {/* Navbar */}
      <nav ref={navRef} className="fixed top-8 left-1/2 -translate-x-1/2 z-50 px-10 py-4 rounded-full bg-white/5 backdrop-blur-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-white/10 transition-colors duration-500 opacity-0">
        <div className="flex gap-10 text-[13px] font-semibold text-white/70 tracking-[0.15em] uppercase">
          <a href="#home" onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-white cursor-pointer transition-all drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Home</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white cursor-pointer transition-all hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">About Me</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white cursor-pointer transition-all hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Projects</a>
          <a href="#certificates" className="hover:text-white cursor-pointer transition-all hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Certificates</a>
          <a href="#contact" className="hover:text-white cursor-pointer transition-all hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Contact Me</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative w-full h-screen hero-bg-gradient noise-overlay flex items-center justify-center">
        
        {/* Purple glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] z-[0] glow-orb-bg"></div>

        {/* Concentric Rings */}
        <div ref={ringsRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] z-[1] pointer-events-none flex items-center justify-center opacity-0">
          <div className="absolute w-[500px] h-[500px] rounded-full border-[20px] border-[#0a0a0a]/60"></div>
          <div className="absolute w-[850px] h-[850px] rounded-full border-[30px] border-[#0a0a0a]/60"></div>
          <div className="absolute w-[1200px] h-[1200px] rounded-full border-[40px] border-[#0a0a0a]/60"></div>
        </div>

        {/* Massive name typography */}
        <div className="absolute top-[18%] left-0 right-0 text-center text-white whitespace-nowrap z-[2] select-none">
          <h1 ref={textRef} className="hero-name-text text-white drop-shadow-2xl opacity-0">
            yasvanth
          </h1>
        </div>

        {/* Cartoon character image / Portrait */}
        <Image
          ref={imageRef}
          className="absolute bottom-[-150px] left-[58%] -translate-x-1/2 h-[115vh] w-auto object-contain z-[3] hero-image-anim drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-none opacity-0"
          src="https://raw.githubusercontent.com/YASVANTHKUMAR23/AI-STUDIO/main/Screenshot%202026-03-20%20084805.png"
          alt="yasvanth"
          width={1000}
          height={1200}
          priority
        />

        {/* Bottom overlay fade for blending */}
        <div className="absolute bottom-[-2px] left-0 right-0 h-[300px] z-[10] hero-overlay-bg pointer-events-none"></div>

        {/* Left content */}
        <div ref={leftContentRef} className="absolute top-[65%] -translate-y-1/2 left-[5%] xl:left-[60px] z-[5] max-w-[380px] hero-left-anim opacity-0">
          <p className="text-[#b0b0c0] text-[22px] leading-[1.6] mb-8 font-instrument font-medium tracking-wide">
            I create interfaces that blend function with emotion, crafting digital experiences that feel intuitive, seamless, and meaningful.
          </p>
          <div className="flex gap-4">
            {/* Socials */}
            <a href="#" aria-label="Twitter/X" className="social-btn flex items-center justify-center w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white transition-all duration-500 hover:bg-[#6930c3] hover:border-[#6930c3] hover:shadow-[0_10px_30px_rgba(105,48,195,0.6)] group opacity-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white transition-transform duration-500 group-hover:scale-110"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="social-btn flex items-center justify-center w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white transition-all duration-500 hover:bg-[#6930c3] hover:border-[#6930c3] hover:shadow-[0_10px_30px_rgba(105,48,195,0.6)] group opacity-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white transition-transform duration-500 group-hover:scale-110"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" aria-label="YouTube" className="social-btn flex items-center justify-center w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white transition-all duration-500 hover:bg-[#6930c3] hover:border-[#6930c3] hover:shadow-[0_10px_30px_rgba(105,48,195,0.6)] group opacity-0">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white transition-transform duration-500 group-hover:scale-110"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>

        {/* Right content */}
        <div ref={rightContentRef} className="absolute top-[65%] -translate-y-1/2 right-[5%] xl:right-[60px] z-[5] max-w-[380px] text-left hero-right-anim opacity-0">
          <p className="text-[#b0b0c0] text-[22px] leading-[1.6] mb-8 font-instrument font-medium tracking-wide">
            Merging design thinking with human insight to create digital experiences that don&apos;t just look great — they perform effortlessly.
          </p>
          <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }} className="cta-btn relative inline-flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-medium text-[18px] py-3 pl-8 pr-3 rounded-full no-underline transition-all duration-500 hover:shadow-[0_10px_40px_rgba(105,48,195,0.6)] group font-instrument overflow-hidden opacity-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6930c3] to-[#8b4cf6] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
            <span className="relative z-10 tracking-wide">Let&apos;s Talk</span>
            <span className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white shrink-0 text-[#6930c3] transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2.5px] stroke-linecap-round stroke-linejoin-round"><path d="M7 17L17 7M17 7H7.5M17 7v9.5"/></svg>
            </span>
          </a>
        </div>

      </section>

      <AboutSection />

      {/* Projects Section (Macbook Scroll) */}
      <section id="projects" className="relative w-full overflow-x-clip bg-[#050505] z-20 border-t border-white/5">
        <MacbookScroll
          title={
            <span className="text-white font-syne font-bold text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.85] tracking-tighter block w-full text-center px-4">
              Selected Work.<br />
              <span className="text-[#6930c3]">Scroll to explore.</span>
            </span>
          }
          src={<FinderDesktop onFolderClick={setActiveProject} />}
          showGradient={false}
        />
        <ProjectCardModal
          active={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </section>

      <CertificationsSection />
      <TimelineSection />
      <ContactSection />
      <StickyFooter />

      <AnimatedLogo />
    </main>
  );
}
