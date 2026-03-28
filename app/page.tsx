'use client';

import AnimatedLogo from '@/components/AnimatedLogo';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050505] text-white relative font-sans flex flex-col items-center justify-center overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 px-10 py-4 rounded-full bg-white/5 backdrop-blur-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-white/10 transition-all duration-500">
        <div className="flex gap-10 text-[13px] font-semibold text-white/70 tracking-[0.15em] uppercase">
          <span className="text-white cursor-pointer transition-all drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Home</span>
          <span className="hover:text-white cursor-pointer transition-all hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">About Me</span>
          <span className="hover:text-white cursor-pointer transition-all hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Projects</span>
          <span className="hover:text-white cursor-pointer transition-all hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Certificates</span>
          <span className="hover:text-white cursor-pointer transition-all hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Contact Me</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden hero-bg-gradient noise-overlay">
        
        {/* Purple glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] z-[0] glow-orb-bg"></div>

        {/* Concentric Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] z-[1] pointer-events-none flex items-center justify-center opacity-40">
          <div className="absolute w-[500px] h-[500px] rounded-full border-[20px] border-[#0a0a0a]/60"></div>
          <div className="absolute w-[850px] h-[850px] rounded-full border-[30px] border-[#0a0a0a]/60"></div>
          <div className="absolute w-[1200px] h-[1200px] rounded-full border-[40px] border-[#0a0a0a]/60"></div>
        </div>

        {/* Massive name typography */}
        <div className="absolute top-[12%] left-0 right-0 text-center text-white whitespace-nowrap z-[2] select-none">
          <h1 className="hero-name-text text-white drop-shadow-2xl">
            Nolan Blake
          </h1>
        </div>

        {/* Cartoon character image / Portrait */}
        <img
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[85%] object-contain z-[3] hero-image-anim drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          src="https://raw.githubusercontent.com/YASVANTHKUMAR23/AI-STUDIO/main/Screenshot%202026-03-20%20084805.png"
          alt="Nolan Blake"
          style={{ objectFit: 'contain' }}
        />

        {/* Bottom overlay fade for blending */}
        <div className="absolute bottom-0 left-0 right-0 h-[120px] z-[4] hero-overlay-bg"></div>

        {/* Left content */}
        <div className="absolute top-1/2 -translate-y-1/2 left-[5%] xl:left-[60px] z-[5] max-w-[280px] hero-left-anim">
          <p className="text-[#b0b0c0] text-[15px] leading-[1.6] mb-6 font-instrument">
            I create interfaces that blend function with emotion, crafting digital experiences that feel intuitive, seamless, and meaningful.
          </p>
          <div className="flex gap-3">
            {/* Socials */}
            <a href="#" aria-label="Twitter/X" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#6930c3] text-white transition-all hover:bg-[#7b47d4] hover:-translate-y-1">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#6930c3] text-white transition-all hover:bg-[#7b47d4] hover:-translate-y-1">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" aria-label="YouTube" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#6930c3] text-white transition-all hover:bg-[#7b47d4] hover:-translate-y-1">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>

        {/* Right content */}
        <div className="absolute bottom-[10%] right-[5%] xl:right-[60px] z-[5] max-w-[300px] text-left hero-right-anim">
          <p className="text-[#b0b0c0] text-[15px] leading-[1.6] mb-6 font-instrument">
            Merging design thinking with human insight to create digital experiences that don&apos;t just look great — they perform effortlessly.
          </p>
          <a href="#contact" className="inline-flex items-center gap-4 bg-[#6930c3] text-white font-medium text-[16px] py-2 pl-6 pr-2 rounded-full no-underline transition-all duration-300 hover:bg-[#7b47d4] hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(105,48,195,0.5)] group font-instrument">
            Let&apos;s Talk
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white shrink-0 text-[#6930c3] transition-transform duration-300 group-hover:rotate-45">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[2.5px] stroke-linecap-round stroke-linejoin-round"><path d="M7 17L17 7M17 7H7.5M17 7v9.5"/></svg>
            </span>
          </a>
        </div>

      </section>

      <AnimatedLogo />
    </main>
  );
}
