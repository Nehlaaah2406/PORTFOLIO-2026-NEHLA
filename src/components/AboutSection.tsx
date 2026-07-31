import React from "react";
import { motion } from "motion/react";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="about" className="py-12 md:py-20 w-full bg-transparent px-4 sm:px-6 md:px-8 relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
        className="w-full max-w-7xl mx-auto bg-black text-white rounded-[32px] md:rounded-[48px] py-16 px-6 sm:px-12 md:py-28 md:px-20 lg:px-24 relative overflow-hidden shadow-2xl flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-16"
      >
        {/* Ambient atmospheric yellow gradient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,80,20,0.08),transparent_50%)] pointer-events-none" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-[#E85002]/5 rounded-full filter blur-[120px] pointer-events-none" />

        {/* Small header/label: ABOUT US (Left Margin) */}
        <div className="flex-shrink-0 md:w-32 lg:w-40 z-10">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#E85002]" />
            <span className="font-mono text-xs tracking-[0.25em] text-white/60 uppercase">
              ABOUT US
            </span>
          </div>
        </div>

        {/* Massive Typographic Layout (Right Column) */}
        <div className="flex-grow w-full z-10">
          <div className="flex flex-col space-y-4 md:space-y-6 font-display uppercase select-none w-full">
            
            {/* Line 1: IT STARTED */}
            <motion.div variants={lineVariants} className="text-left w-full">
              <h2 className="font-display font-medium text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.95] text-white">
                IT STARTED
              </h2>
            </motion.div>

            {/* Line 2: WITH CURIOSITY. */}
            <motion.div variants={lineVariants} className="text-left w-full">
              <h2 className="font-display font-medium text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.95] text-[#E85002]">
                WITH CURIOSITY.
              </h2>
            </motion.div>

            {/* Line 3: NOW I'M */}
            <motion.div variants={lineVariants} className="text-right w-full">
              <h2 className="font-display font-medium text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.95] text-white">
                NOW I'M
              </h2>
            </motion.div>

            {/* Line 4: BUILDING */}
            <motion.div variants={lineVariants} className="text-right w-full">
              <h2 className="font-display font-medium text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.95] text-white/90">
                BUILDING
              </h2>
            </motion.div>

            {/* Line 5: DIGITAL EXPERIENCES */}
            <motion.div variants={lineVariants} className="text-left w-full">
              <h2 className="font-display font-medium text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.95] text-white">
                DIGITAL EXPERIENCES
              </h2>
            </motion.div>

            {/* Line 6: WHERE CODE MEETS */}
            <motion.div variants={lineVariants} className="text-right w-full">
              <h2 className="font-display font-medium text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.95] text-white/95">
                WHERE CODE MEETS
              </h2>
            </motion.div>

            {/* Line 7: CREATIVITY AND BUSINESS. */}
            <motion.div variants={lineVariants} className="text-right w-full">
              <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.95] text-[#E85002]">
                CREATIVITY AND BUSINESS.
              </h2>
            </motion.div>

          </div>
        </div>

      </motion.div>
    </section>
  );
}
