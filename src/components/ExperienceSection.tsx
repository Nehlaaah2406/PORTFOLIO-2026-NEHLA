import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { experiences } from "../data";
import { Calendar, Briefcase, Plus, Minus, ArrowUpRight } from "lucide-react";

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>("ksum"); // Default open KSUM

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 md:py-32 w-full bg-transparent border-t border-black/5 px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-16 md:mb-24 flex flex-col items-start border-b border-black/5 pb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-[#E85002]" />
            <span className="font-mono text-xs tracking-[0.25em] text-[#E85002] uppercase">
              02 . Path
            </span>
          </div>
          <h2 className="font-condensed font-black text-5xl md:text-7xl text-[#0F0F0F] tracking-tight uppercase">
            Professional Experience
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-black/10 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {experiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            
            return (
              <div key={exp.id} className="relative">
                {/* Timeline node dot */}
                <span className="absolute -left-[45px] md:-left-[61px] top-4 w-4 h-4 bg-white border-2 border-[#E85002] rounded-none z-10 flex items-center justify-center">
                  <motion.span
                    animate={{ scale: isExpanded ? 1 : 0 }}
                    className="w-1.5 h-1.5 bg-[#E85002]"
                  />
                </span>

                {/* Experience Card */}
                <motion.div
                  layout
                  onClick={() => toggleExpand(exp.id)}
                  className={`cursor-pointer p-6 md:p-8 glass border ${
                    isExpanded ? "border-[#E85002] bg-[#E85002]/5 shadow-md" : "border-black/10 hover:border-[#E85002]/40 shadow-sm bg-white"
                  } transition-all duration-300 relative group`}
                  id={`experience-${exp.id}`}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      {/* Company & Duration */}
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2 font-mono text-[10px] tracking-widest uppercase text-[#E85002]">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={11} />
                          {exp.duration}
                        </span>
                        <span className="hidden sm:inline opacity-50">•</span>
                        <span>{exp.company}</span>
                      </div>

                      {/* Role Title */}
                      <h3 className="font-display font-bold text-lg md:text-xl text-[#000000] group-hover:text-[#E85002] transition-colors">
                        {exp.role}
                      </h3>
                    </div>

                    {/* Expand/Collapse Button */}
                    <button
                      className="w-8 h-8 rounded-none border border-black/10 group-hover:border-[#E85002]/50 flex items-center justify-center text-[#000000]/60 group-hover:text-[#000000] transition-all"
                      aria-label={isExpanded ? "Collapse description" : "Expand description"}
                    >
                      {isExpanded ? <Minus size={14} /> : <Plus size={14} />}
                    </button>
                  </div>

                  {/* Summary Description */}
                  <p className="mt-4 text-xs md:text-sm font-light text-[#000000]/70 leading-relaxed max-w-2xl">
                    {exp.description}
                  </p>

                  {/* Expanded Content Section */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        {/* Achievements Bullet Points */}
                        <div className="pt-6 mt-6 border-t border-black/5 space-y-4">
                          <h4 className="font-mono text-[10px] tracking-wider uppercase text-[#000000]/50">
                            Core Achievements & Metrics
                          </h4>
                          <ul className="space-y-3 pl-1">
                            {exp.achievements.map((ach, i) => (
                              <motion.li
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.08 }}
                                key={i}
                                className="flex items-start gap-3 text-xs md:text-sm font-light text-[#000000]/80 leading-relaxed"
                              >
                                <span className="w-1.5 h-1.5 bg-[#E85002] mt-2 shrink-0" />
                                <span>{ach}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Subtle hover corner trigger */}
                  <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-transparent border-t border-r border-transparent group-hover:border-[#E85002] transition-all" />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
