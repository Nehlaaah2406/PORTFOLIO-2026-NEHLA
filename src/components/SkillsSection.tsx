import React from "react";
import { motion } from "motion/react";
import { skillCategories } from "../data";
import { BarChart3, Palette, Code, Users } from "lucide-react";

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Dedicated services matching the Madison "I CAN HELP YOU WITH" screenshot
  const services = [
    {
      id: "01",
      title: "Frontend Development",
      description: "Mainly focused on frontend engineering, building pixel-perfect, highly interactive, and fast user interfaces using React.js, Tailwind CSS, and modern web standards.",
      icon: <Code size={16} className="text-[#E85002]" />
    },
    {
      id: "02",
      title: "UI/UX Design",
      description: "Designing modern visual interfaces and pixel-perfect responsive layouts in Figma. Crafting immersive user flows, empathetic research models, and high-fidelity prototypes.",
      icon: <Palette size={16} className="text-[#E85002]" />
    },
    {
      id: "03",
      title: "Portfolio Designing",
      description: "Crafting custom, aesthetically beautiful digital showcases that narrate unique professional stories through bold typography, seamless transitions, and elegant structures.",
      icon: <Palette size={16} className="text-[#E85002]" />
    },
    {
      id: "04",
      title: "MERN Full-Stack",
      description: "Developing fast, reliable backend structures and real-time state synchronization with MongoDB, Express.js, React, and Node.js.",
      icon: <BarChart3 size={16} className="text-[#E85002]" />
    }
  ];

  return (
    <section id="skills" className="py-24 md:py-32 w-full bg-transparent px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Madison Headline Style: I CAN HELP YOU WITH */}
        <div className="mb-16 md:mb-24 flex flex-col items-start border-b border-black/5 pb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-[#E85002]" />
            <span className="font-mono text-xs tracking-[0.25em] text-[#E85002] uppercase">
              04 . Services
            </span>
          </div>
          <h2 className="font-condensed font-black text-5xl md:text-7xl text-[#000000] tracking-tight uppercase">
            I CAN HELP YOU WITH
          </h2>
        </div>

        {/* 4-Column Numbered Services Layout (Directly Replicating Screenshot) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-24"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.id}
              variants={itemVariants}
              className="flex flex-col items-start group relative"
            >
              {/* Sequential Number Heading */}
              <div className="font-serif-display italic font-light text-5xl md:text-6xl text-[#000000]/15 group-hover:text-[#E85002]/30 group-hover:scale-105 transition-all duration-500 mb-6">
                {svc.id}
              </div>

              {/* Service Title */}
              <div className="flex items-center gap-2 mb-3">
                {svc.icon}
                <h3 className="font-sans font-bold text-sm text-[#000000] uppercase tracking-wider">
                  {svc.title}
                </h3>
              </div>

              {/* Service Description */}
              <p className="text-xs font-light text-[#333333]/70 leading-relaxed">
                {svc.description}
              </p>

              {/* Subtle underline hover effect */}
              <div className="h-[1px] w-0 bg-[#E85002] group-hover:w-full transition-all duration-500 mt-6" />
            </motion.div>
          ))}
        </motion.div>

        {/* Secondary Title: Technical Stack Details */}
        <div className="mb-12 flex flex-col items-start">
          <h3 className="font-mono font-bold text-[11px] tracking-[0.25em] uppercase text-[#333333]/70">
            TECHNICAL TOOLKIT & CAPABILITIES
          </h3>
          <div className="h-[2px] w-8 bg-[#E85002] mt-3" />
        </div>

        {/* Tech Stack Category Badges Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={itemVariants}
              className="p-6 md:p-8 bg-white/40 border border-black/5 hover:border-[#E85002]/30 transition-all duration-300 rounded-2xl shadow-sm relative overflow-hidden group"
            >
              {/* Corner Tag */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-[#E85002]/5 flex items-center justify-center font-mono text-[9px] text-[#E85002]/40 font-bold group-hover:text-[#E85002] transition-colors">
                •
              </div>

              <h4 className="font-mono font-bold text-xs tracking-widest text-[#000000] uppercase mb-6">
                {cat.title}
              </h4>

              {/* Badges Flow */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white border border-black/5 hover:border-[#E85002]/40 hover:bg-[#E85002]/5 hover:text-[#E85002] font-mono text-xs text-[#333333]/80 transition-all cursor-default shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
