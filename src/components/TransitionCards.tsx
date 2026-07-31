import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function TransitionCards() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Slide offsets for the three marquee rows based on user scrolling
  const x1 = useTransform(scrollYProgress, [0, 1], [-150, 50]);
  const x2 = useTransform(scrollYProgress, [0, 1], [50, -150]);
  const x3 = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  return (
    <div
      ref={containerRef}
      className="w-full py-20 md:py-32 bg-white overflow-hidden relative flex flex-col justify-center items-center select-none"
      id="three-pillars-section"
    >
      {/* Absolute top and bottom subtle border separators */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-black/5" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-black/5" />

      {/* Massive Typographic Rows Container */}
      <div className="w-full flex flex-col justify-center space-y-1 sm:space-y-2 md:space-y-4 relative z-0">
        
        {/* Row 1: DEVELOPER FRONTEND */}
        <motion.div
          style={{ x: x1 }}
          className="flex whitespace-nowrap will-change-transform"
        >
          <span className="font-condensed text-[13vw] md:text-[14vw] lg:text-[12rem] font-black leading-none text-[#0F0F0F] tracking-tighter uppercase mr-12 select-none">
            DEVELOPER FRONTEND DEVELOPER FRONTEND DEVELOPER FRONTEND DEVELOPER FRONTEND
          </span>
        </motion.div>

        {/* Row 2: DESIGNER UI */}
        <motion.div
          style={{ x: x2 }}
          className="flex whitespace-nowrap will-change-transform"
        >
          <span className="font-condensed text-[13vw] md:text-[14vw] lg:text-[12rem] font-black leading-none text-[#0F0F0F] tracking-tighter uppercase mr-12 select-none">
            DESIGNER UI DESIGNER UI DESIGNER UI DESIGNER UI DESIGNER UI
          </span>
        </motion.div>

        {/* Row 3: CREATIVE CREATIVE */}
        <motion.div
          style={{ x: x3 }}
          className="flex whitespace-nowrap will-change-transform"
        >
          <span className="font-condensed text-[13vw] md:text-[14vw] lg:text-[12rem] font-black leading-none text-[#0F0F0F] tracking-tighter uppercase mr-12 select-none">
            CREATIVE CREATIVE CREATIVE CREATIVE CREATIVE CREATIVE CREATIVE CREATIVE
          </span>
        </motion.div>

      </div>

      {/* Central Floating Grayscale/Monochrome Profile Portrait Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute z-10 w-[140px] sm:w-[180px] md:w-[240px] lg:w-[280px] aspect-[4/5] bg-neutral-200 border-4 sm:border-8 border-white/95 shadow-[0_15px_45px_rgba(0,0,0,0.18)] overflow-hidden pointer-events-none rounded-sm"
        id="pillar-portrait-card"
      >
        <img
          src="/src/assets/images/photo.jpeg"
          alt="Fathima monochrome portrait match"
          className="w-full h-full object-cover filter grayscale contrast-[1.18] brightness-[0.92]"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </div>
  );
}
