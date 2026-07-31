import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function LandingSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Scroll interactive effect for deep parallax & micro-movements
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end center"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.8, 0.4]);
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const heroRotate = useTransform(scrollYProgress, [0, 1], [0, 2]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="min-h-screen w-full flex flex-col justify-between items-center relative overflow-hidden bg-[#000000] text-white pt-24 pb-8 px-6 sm:px-8 md:px-12 select-none"
    >
      {/* 1. TOP HEADER NAVIGATION ROW */}
      <div className="w-full max-w-7xl flex justify-between items-start z-30 pt-6 px-2 mb-16">
        <div className="flex flex-col items-start">
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-[#E85002] font-black uppercase leading-tight">
            UI/UX & WEB DESIGNER
          </span>
        </div>

        <div className="flex items-center gap-2 group cursor-pointer" onClick={scrollToContact}>
          <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-white/60 group-hover:text-white transition-colors uppercase font-medium text-right leading-tight">
            AVAILABLE FOR FREELANCE & COLLABORATIONS
          </span>
          <span className="text-[#E85002] text-sm group-hover:translate-x-1.5 transition-transform duration-300 shrink-0">
            →
          </span>
        </div>
      </div>

      {/* 2. CORE ASYMMETRIC VISUAL HERO GRID */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity, rotate: heroRotate }}
        className="w-full max-w-7xl relative flex flex-col items-center justify-center flex-grow py-8 sm:py-12 z-10"
      >
        {/* Massive Background watermark "PORTFOLIO" that matches screenshot */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center items-center pointer-events-none select-none z-20 w-full overflow-hidden">
          <h1 className="font-condensed text-[24vw] sm:text-[22vw] lg:text-[18rem] font-bold leading-none text-[#E85002] tracking-wide uppercase select-none opacity-95">
            PORTFOLIO
          </h1>
        </div>

        {/* Seamlessly blended studio portrait - Full viewport */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ scale: bgScale, opacity: bgOpacity }}
          className="fixed inset-0 w-screen h-screen z-0 pointer-events-auto overflow-hidden"
          id="hero-portrait-container"
        >
          <img
            src="/src/assets/images/WhatsApp%20Image%202026-07-12%20at%208.03.04%20PM.jpeg"
            alt="Fathima Nehla Studio Portrait"
            className="w-full h-full object-cover filter grayscale contrast-[1.05] brightness-[0.6] pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        </motion.div>
      </motion.div>

      {/* 3. BOTTOM INFO PANEL */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end z-20 px-2 mt-auto">
        
        {/* LEFT COLUMN: INTRO TEXT */}
        <div className="col-span-1 md:col-span-6 flex flex-col items-start text-left">
          <span className="font-mono text-xs tracking-[0.2em] text-white/50 uppercase block mb-1">
            HI, I'M
          </span>
          <h2 className="font-condensed text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.85] text-white tracking-wide uppercase">
            FATHIMA
            <br />
            NEHLA
          </h2>
          <span className="font-mono text-[10px] sm:text-xs font-bold tracking-[0.25em] text-[#E85002] uppercase mt-4 mb-2 block">
            UI/UX & WEB DESIGNER
          </span>
          <p className="font-sans text-xs sm:text-sm text-white/50 leading-relaxed max-w-sm">
            I craft digital experiences that are not only beautiful, but intuitive, purposeful, and built to perform. From concept to code, I design with clarity, empathy, and impact.
          </p>
        </div>

        {/* RIGHT COLUMN: CIRCULAR BADGE + METADATA TABLE */}
        <div className="col-span-1 md:col-span-6 flex flex-col sm:flex-row md:items-end justify-between items-start sm:items-center gap-6 md:justify-end md:gap-16">
          
          {/* Rotating Circular Stamp Badge ( FN in center ) */}
          <div className="relative w-28 h-28 flex items-center justify-center select-none shrink-0" id="hero-badge-container">
            {/* Center initials */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none">
              <span className="font-condensed text-2xl font-bold tracking-normal text-[#E85002] leading-none uppercase">
                FN
              </span>
            </div>

            {/* Rotating Outer Path text */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
              className="absolute inset-0 w-full h-full"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full pointer-events-none">
                <path
                  id="stampPath"
                  d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                  fill="none"
                />
                <text className="font-mono text-[5.5px] uppercase fill-white/40 tracking-[0.2em] font-medium">
                  <textPath href="#stampPath" startOffset="0%">
                    • DESIGNING DIGITAL EXPERIENCES • THAT MAKE AN IMPACT
                  </textPath>
                </text>
              </svg>
            </motion.div>
          </div>

          {/* Clean Editorial Metadata Table */}
          <div className="w-full sm:w-64 flex flex-col font-mono text-[10px] sm:text-[11px] tracking-wider uppercase divide-y divide-white/10" id="metadata-editorial-table">
            <div className="flex justify-between py-2 text-white">
              <span className="text-white/40">BASED IN</span>
              <span className="font-bold">KERALA, INDIA</span>
            </div>
            <div className="flex justify-between py-2 text-white">
              <span className="text-white/40">EXPERIENCE</span>
              <span className="font-bold">STUDENT & DEV</span>
            </div>
            <div className="flex justify-between py-2 text-white">
              <span className="text-white/40">AVAILABLE</span>
              <span className="font-bold">WORLDWIDE</span>
            </div>
          </div>

        </div>

      </div>

      {/* 4. FOOTER NARRATIVE CALLOUT */}
      <div className="w-full max-w-7xl flex justify-between items-center px-2 pt-8 pb-1 z-30 mt-6 border-t border-white/5 font-mono text-[9px] tracking-widest uppercase text-white/30">
        <span>SCMS SCHOOL OF ENGINEERING & TECHNOLOGY</span>
        
        <motion.div
          onClick={scrollToAbout}
          className="flex items-center gap-2 cursor-pointer text-white/50 hover:text-[#E85002] transition-colors duration-300"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>Scroll to Narrative</span>
          <ArrowDown size={10} className="text-[#E85002]" />
        </motion.div>
      </div>
    </section>
  );
}
