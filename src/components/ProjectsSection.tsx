import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data";
import { Project } from "../types";
import { X, ArrowRight, Github, ExternalLink, Sparkles, AlertTriangle } from "lucide-react";

export default function ProjectsSection() {
  const [selectedProj, setSelectedProj] = useState<Project>(projects[0]);
  const [activeOverlay, setActiveOverlay] = useState<Project | null>(null);

  // Disable background scrolling when modal overlay is active
  useEffect(() => {
    if (activeOverlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeOverlay]);

  const handleCardClick = (proj: Project) => {
    setSelectedProj(proj);
    const targetUrl = proj.liveUrl || proj.githubUrl;
    if (targetUrl) {
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="projects" className="py-24 md:py-32 w-full bg-[#000000] text-white relative overflow-hidden select-none">
      
      {/* 1. MESH BACKDROP GLOWS (Swapped pink/magenta to website's warm gold amber and terracotta clay orange) */}
      <div className="absolute top-1/4 left-1/12 w-[300px] sm:w-[450px] aspect-square bg-[#E85002] rounded-full mix-blend-screen filter blur-[100px] sm:blur-[130px] opacity-[0.14] animate-pulse pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/12 w-[350px] sm:w-[500px] aspect-square bg-[#C10801] rounded-full mix-blend-screen filter blur-[120px] sm:blur-[150px] opacity-[0.10] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] aspect-square bg-[#F16001] rounded-full mix-blend-screen filter blur-[130px] sm:blur-[160px] opacity-[0.11] pointer-events-none z-0" />

      {/* 2. OVERLAPPING GIANT OUTLINE WATERMARK TEXTS (Using website-matching amber/terracotta strokes) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        <div 
          className="absolute top-20 left-10 font-sans font-black text-[12vw] leading-none text-transparent tracking-widest opacity-[0.05] select-none uppercase whitespace-nowrap"
          style={{ WebkitTextStroke: "1px #E85002" }}
        >
          PROJECTS
        </div>
        <div 
          className="absolute bottom-24 right-5 font-sans font-black text-[14vw] leading-none text-transparent tracking-wider opacity-[0.04] select-none uppercase whitespace-nowrap"
          style={{ WebkitTextStroke: "1.5px #C10801" }}
        >
          CREATIVE
        </div>
        <div 
          className="absolute top-1/3 right-1/10 font-sans font-black text-[9vw] leading-none text-transparent tracking-widest opacity-[0.03] select-none uppercase whitespace-nowrap"
          style={{ WebkitTextStroke: "1px #E85002" }}
        >
          FATHIMA
        </div>
      </div>

      <div className="max-w-7xl mx-auto z-10 relative px-4 sm:px-6 md:px-12">
        
        {/* LOWERCASE SERVICES-STYLE TITLE (Direct matching to 'services' style in screenshot) */}
        <div className="mb-16 md:mb-20 flex flex-col items-start border-b border-white/5 pb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#E85002] rounded-full animate-ping" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#E85002] uppercase font-bold">
              03 . CASE STUDIES
            </span>
          </div>
          <h2 className="font-sans font-black text-6xl sm:text-7xl md:text-8xl text-white tracking-tighter lowercase leading-none">
            projects
          </h2>
          <p className="font-sans text-xs sm:text-sm text-white/50 mt-4 max-w-xl font-light">
            An interactive catalog of engineering prototypes. Click once to highlight a card's layout, click again to visit the codebase on GitHub, or trigger a full case study below.
          </p>
        </div>

        {/* 3. BENTO GRID OF CARDS (Warm Website Color Theme) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
          
          {/* =======================================================
              CARD 01: StopZap (Solid White Card, Terracotta Clay Accent)
              ======================================================= */}
          <motion.div
            onClick={() => handleCardClick(projects[0])}
            whileHover={{ y: -6 }}
            className={`lg:col-span-4 rounded-[2.5rem] p-8 transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[300px] select-none relative overflow-hidden group ${
              selectedProj.id === projects[0].id
                ? "bg-white text-black shadow-[0_20px_50px_rgba(232,80,2,0.25)] ring-4 ring-[#E85002] scale-[1.02]"
                : "bg-white text-black hover:shadow-xl"
            }`}
            id="bento-card-stopzap"
          >
            {/* Elegant Hover Overlay */}
            <div className="absolute inset-0 bg-neutral-950/95 flex flex-col items-center justify-center text-center p-6 transition-all duration-300 z-10 opacity-0 group-hover:opacity-100">
              <ExternalLink size={32} className="text-[#E85002] mb-3 animate-pulse" />
              <h4 className="font-sans font-black text-lg text-white uppercase tracking-tight">
                {projects[0].title}
              </h4>
              <p className="font-mono text-[9px] tracking-widest text-[#E85002] uppercase font-bold mt-1">
                {projects[0].subtitle}
              </p>
              
              <div className="flex flex-col gap-2 mt-6 w-full max-w-[180px]">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (projects[0].liveUrl) {
                      window.open(projects[0].liveUrl, "_blank", "noopener,noreferrer");
                    }
                  }}
                  className="px-4 py-2 bg-[#E85002] hover:bg-white hover:text-black text-white font-mono text-[10px] tracking-wider uppercase font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-lg cursor-pointer"
                >
                  <ExternalLink size={12} />
                  Launch Demo
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveOverlay(projects[0]);
                  }}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-mono text-[10px] tracking-wider uppercase font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 border border-white/10 cursor-pointer"
                >
                  <Sparkles size={12} />
                  Case Study
                </button>
              </div>
            </div>

            <div>
              <span className="font-sans font-black text-5xl sm:text-6xl text-[#E85002] block leading-none">
                01
              </span>
            </div>

            <div className="mt-12">
              <span className="font-mono text-[9px] tracking-widest text-[#E85002] uppercase font-bold block mb-1">
                {projects[0].subtitle}
              </span>
              <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-black tracking-tight leading-none uppercase">
                {projects[0].title}
              </h3>
              <p className="font-sans text-xs text-black/60 mt-3 line-clamp-2 leading-relaxed">
                {projects[0].tagline}
              </p>
            </div>

            {/* Case study trigger */}
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-black/5">
              <span className="font-mono text-[9px] text-black/40 uppercase">
                {selectedProj.id === projects[0].id ? "★ Highlighted" : "Click to select"}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveOverlay(projects[0]);
                }}
                className="px-3.5 py-1.5 bg-[#E85002] text-white font-mono text-[9px] tracking-widest uppercase font-bold rounded-full hover:bg-black transition-all flex items-center gap-1 cursor-pointer"
              >
                Case Study
              </button>
            </div>
          </motion.div>

          {/* =======================================================
              CARD 02: Kerala Innovation Festival (Wide Amber-to-Terracotta Gradient)
              ======================================================= */}
          
<motion.div
  onClick={() => handleCardClick(projects[1])}
  whileHover={{ y: -6 }}
  className={`lg:col-span-8 rounded-[2.5rem] p-8 transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[300px] select-none relative overflow-hidden group ${
    selectedProj.id === projects[1].id
      ? "bg-gradient-to-br from-[#E85002] via-[#F16001] to-[#C10801] text-white shadow-[0_20px_50px_rgba(232,80,2,0.35)] ring-4 ring-white scale-[1.01]"
      : "bg-gradient-to-br from-[#E85002]/90 via-[#F16001]/90 to-[#C10801]/90 text-white hover:shadow-2xl"
  }`}
  id="bento-card-kif-website"
>
  {/* Elegant Hover Overlay */}
  <div className="absolute inset-0 bg-neutral-950/95 flex flex-col items-center justify-center text-center p-6 transition-all duration-300 z-10 opacity-0 group-hover:opacity-100">
    <ExternalLink size={32} className="text-[#E85002] mb-3 animate-pulse" />
    <h4 className="font-sans font-black text-lg text-white uppercase tracking-tight">
      {projects[1].title}
    </h4>
    <p className="font-mono text-[9px] tracking-widest text-[#E85002] uppercase font-bold mt-1">
      {projects[1].subtitle}
    </p>

    <div className="flex flex-col gap-2 mt-6 w-full max-w-[180px]">
      <button
        onClick={(e) => {
          e.stopPropagation();
          window.open("https://kif-26.vercel.app/", "_blank", "noopener,noreferrer");
        }}
        className="px-4 py-2 bg-[#E85002] hover:bg-white hover:text-black text-white font-mono text-[10px] tracking-wider uppercase font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-lg cursor-pointer"
      >
        <ExternalLink size={12} />
        Launch Demo
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setActiveOverlay(projects[1]);
        }}
        className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-mono text-[10px] tracking-wider uppercase font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 border border-white/10 cursor-pointer"
      >
        <Sparkles size={12} />
        Case Study
      </button>
    </div>
  </div>

  <div className="flex justify-between items-start">
    <span className="font-sans font-black text-5xl sm:text-6xl text-white block leading-none">
      02
    </span>
    <span className="px-3 py-1 bg-white/10 rounded-full font-mono text-[8px] tracking-widest text-white/90 uppercase">
      {projects[1].subtitle}
    </span>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-8 items-end">
    <div className="md:col-span-7">
      <span className="font-mono text-[9px] tracking-widest text-white/75 uppercase font-bold block mb-1">
        Event Highlights
      </span>
      <h3 className="font-sans font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-none uppercase">
        {projects[1].title}
      </h3>
    </div>
    <div className="md:col-span-5">
      <p className="font-sans text-xs text-white/90 leading-relaxed font-light">
        {projects[1].tagline}
      </p>
    </div>
  </div>

  {/* Case study trigger */}
  <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/10">
    <span className="font-mono text-[9px] text-white/60 uppercase">
      {selectedProj.id === projects[1].id ? "★ Highlighted" : "Click to select"}
    </span>
    <button
      onClick={(e) => {
        e.stopPropagation();
        setActiveOverlay(projects[1]);
      }}
      className="px-3.5 py-1.5 bg-white text-[#C10801] font-mono text-[9px] tracking-widest uppercase font-bold rounded-full hover:bg-black hover:text-white transition-all flex items-center gap-1 cursor-pointer"
    >
      Case Study
    </button>
  </div>
</motion.div>


          {/* =======================================================
              CARD 03: SSET Lumina (Terracotta-to-Amber Mesh Gradient)
              ======================================================= */}
          <motion.div
            onClick={() => handleCardClick(projects[2])}
            whileHover={{ y: -6 }}
            className={`lg:col-span-5 rounded-[2.5rem] p-8 transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[300px] select-none relative overflow-hidden group ${
              selectedProj.id === projects[2].id
                ? "bg-gradient-to-tr from-[#C10801] to-[#E85002] text-white shadow-[0_20px_50px_rgba(232,80,2,0.35)] ring-4 ring-[#E85002] scale-[1.02]"
                : "bg-gradient-to-tr from-[#C10801]/90 to-[#E85002]/90 text-white hover:shadow-2xl"
            }`}
            id="bento-card-sset-lumina"
          >
            {/* Elegant Hover Overlay */}
            <div className="absolute inset-0 bg-neutral-950/95 flex flex-col items-center justify-center text-center p-6 transition-all duration-300 z-10 opacity-0 group-hover:opacity-100">
              <ExternalLink size={32} className="text-[#E85002] mb-3 animate-pulse" />
              <h4 className="font-sans font-black text-lg text-white uppercase tracking-tight">
                {projects[2].title}
              </h4>
              <p className="font-mono text-[9px] tracking-widest text-[#E85002] uppercase font-bold mt-1">
                {projects[2].subtitle}
              </p>
              
              <div className="flex flex-col gap-2 mt-6 w-full max-w-[180px]">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (projects[2].liveUrl) {
                      window.open(projects[2].liveUrl, "_blank", "noopener,noreferrer");
                    }
                  }}
                  className="px-4 py-2 bg-[#E85002] hover:bg-white hover:text-black text-white font-mono text-[10px] tracking-wider uppercase font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-lg cursor-pointer"
                >
                  <ExternalLink size={12} />
                  Launch Demo
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveOverlay(projects[2]);
                  }}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-mono text-[10px] tracking-wider uppercase font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 border border-white/10 cursor-pointer"
                >
                  <Sparkles size={12} />
                  Case Study
                </button>
              </div>
            </div>

            <div className="flex justify-between items-start">
              <span className="font-sans font-black text-5xl sm:text-6xl text-white block leading-none">
                03
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-full font-mono text-[8px] tracking-widest text-white/90 uppercase">
                MERN Full-Stack
              </span>
            </div>

            <div className="mt-8">
              <span className="font-mono text-[9px] tracking-widest text-white/80 uppercase font-bold block mb-1">
                {projects[2].subtitle}
              </span>
              <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-none uppercase">
                {projects[2].title}
              </h3>
              <p className="font-sans text-xs text-white/80 mt-3 line-clamp-2 leading-relaxed">
                {projects[2].tagline}
              </p>
            </div>

            {/* Case study trigger */}
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/10">
              <span className="font-mono text-[9px] text-white/60 uppercase">
                {selectedProj.id === projects[2].id ? "★ Highlighted" : "Click to select"}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveOverlay(projects[2]);
                }}
                className="px-3.5 py-1.5 bg-white text-[#C10801] font-mono text-[9px] tracking-widest uppercase font-bold rounded-full hover:bg-black hover:text-white transition-all flex items-center gap-1 cursor-pointer"
              >
                Case Study
              </button>
            </div>
          </motion.div>

          {/* =======================================================
              CARD 04: WakeUpWarrior (Sleek Dark Charcoal, Terracotta Accent Border)
              ======================================================= */}
          <motion.div
            onClick={() => handleCardClick(projects[3])}
            whileHover={{ y: -6 }}
            className={`lg:col-span-7 rounded-[2.5rem] p-8 transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[300px] select-none relative overflow-hidden group ${
              selectedProj.id === projects[3].id
                ? "bg-[#161619] border-2 border-[#E85002] text-white shadow-[0_20px_50px_rgba(232,80,2,0.2)] scale-[1.01]"
                : "bg-[#121214] border border-white/10 text-white hover:border-white/20 hover:shadow-2xl"
            }`}
            id="bento-card-wakeup-warrior"
          >
            {/* Elegant Hover Overlay */}
            <div className="absolute inset-0 bg-neutral-950/95 flex flex-col items-center justify-center text-center p-6 transition-all duration-300 z-10 opacity-0 group-hover:opacity-100">
              <ExternalLink size={32} className="text-[#E85002] mb-3 animate-pulse" />
              <h4 className="font-sans font-black text-lg text-white uppercase tracking-tight">
                {projects[3].title}
              </h4>
              <p className="font-mono text-[9px] tracking-widest text-[#E85002] uppercase font-bold mt-1">
                {projects[3].subtitle}
              </p>
              
              <div className="flex flex-col gap-2 mt-6 w-full max-w-[180px]">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (projects[3].liveUrl) {
                      window.open(projects[3].liveUrl, "_blank", "noopener,noreferrer");
                    }
                  }}
                  className="px-4 py-2 bg-[#E85002] hover:bg-white hover:text-black text-white font-mono text-[10px] tracking-wider uppercase font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-lg cursor-pointer"
                >
                  <ExternalLink size={12} />
                  Launch Demo
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveOverlay(projects[3]);
                  }}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-mono text-[10px] tracking-wider uppercase font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 border border-white/10 cursor-pointer"
                >
                  <Sparkles size={12} />
                  Case Study
                </button>
              </div>
            </div>

            <div className="flex justify-between items-start">
              <span className="font-sans font-black text-5xl sm:text-6xl text-[#E85002] block leading-none">
                04
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full font-mono text-[8px] tracking-widest text-white/70 uppercase">
                Creative Web Alarm
              </span>
            </div>

            <div className="mt-8">
              <span className="font-mono text-[9px] tracking-widest text-[#E85002] uppercase font-bold block mb-1">
                {projects[3].subtitle}
              </span>
              <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-none uppercase">
                {projects[3].title}
              </h3>
              <p className="font-sans text-xs text-white/50 mt-3 line-clamp-2 leading-relaxed">
                {projects[3].tagline}
              </p>
            </div>

            {/* Case study trigger */}
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/5">
              <span className="font-mono text-[9px] text-white/40 uppercase">
                {selectedProj.id === projects[3].id ? "★ Highlighted" : "Click to select"}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveOverlay(projects[3]);
                }}
                className="px-3.5 py-1.5 bg-[#E85002] text-white font-mono text-[9px] tracking-widest uppercase font-bold rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-1 cursor-pointer"
              >
                Case Study
              </button>
            </div>
          </motion.div>

          {/* =======================================================
              CARD 05: Busify Kerala (Solid White Card, Terracotta Number)
              ======================================================= */}
          <motion.div
            onClick={() => handleCardClick(projects[4])}
            whileHover={{ y: -6 }}
            className={`lg:col-span-12 rounded-[2.5rem] p-8 transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[300px] select-none relative overflow-hidden group ${
              selectedProj.id === projects[4].id
                ? "bg-white text-black shadow-[0_20px_50px_rgba(232,80,2,0.25)] ring-4 ring-[#E85002] scale-[1.02]"
                : "bg-white text-black hover:shadow-xl"
            }`}
            id="bento-card-busify-kerala"
          >
            {/* Elegant Hover Overlay */}
            <div className="absolute inset-0 bg-neutral-950/95 flex flex-col items-center justify-center text-center p-6 transition-all duration-300 z-10 opacity-0 group-hover:opacity-100">
              <ExternalLink size={32} className="text-[#E85002] mb-3 animate-pulse" />
              <h4 className="font-sans font-black text-lg text-white uppercase tracking-tight">
                {projects[4].title}
              </h4>
              <p className="font-mono text-[9px] tracking-widest text-[#E85002] uppercase font-bold mt-1">
                {projects[4].subtitle}
              </p>
              
              <div className="flex flex-col gap-2 mt-6 w-full max-w-[180px]">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (projects[4].liveUrl) {
                      window.open(projects[4].liveUrl, "_blank", "noopener,noreferrer");
                    }
                  }}
                  className="px-4 py-2 bg-[#E85002] hover:bg-white hover:text-black text-white font-mono text-[10px] tracking-wider uppercase font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-lg cursor-pointer"
                >
                  <ExternalLink size={12} />
                  Launch Demo
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveOverlay(projects[4]);
                  }}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-mono text-[10px] tracking-wider uppercase font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 border border-white/10 cursor-pointer"
                >
                  <Sparkles size={12} />
                  Case Study
                </button>
              </div>
            </div>

            <div className="flex justify-between items-start">
              <span className="font-sans font-black text-5xl sm:text-6xl text-[#E85002] block leading-none">
                05
              </span>
              <span className="px-3 py-1 bg-black/5 rounded-full font-mono text-[8px] tracking-widest text-black/60 uppercase">
                Transit Information
              </span>
            </div>

            <div className="mt-8">
              <span className="font-mono text-[9px] tracking-widest text-[#E85002] uppercase font-bold block mb-1">
                {projects[4].subtitle}
              </span>
              <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-black tracking-tight leading-none uppercase">
                {projects[4].title}
              </h3>
              <p className="font-sans text-xs text-black/60 mt-3 line-clamp-2 leading-relaxed">
                {projects[4].tagline}
              </p>
            </div>

            {/* Case study trigger */}
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-black/5">
              <span className="font-mono text-[9px] text-black/40 uppercase">
                {selectedProj.id === projects[4].id ? "★ Highlighted" : "Click to select"}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveOverlay(projects[4]);
                }}
                className="px-3.5 py-1.5 bg-[#E85002] text-white font-mono text-[9px] tracking-widest uppercase font-bold rounded-full hover:bg-black transition-all flex items-center gap-1 cursor-pointer"
              >
                Case Study
              </button>
            </div>
          </motion.div>

        </div>

      </div>

      {/* FULLSCREEN PORTAL MODAL OVERLAYS (For rich case studies in gorgeous warm amber/terracotta aesthetic) */}
      <AnimatePresence>
        {activeOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-2xl flex items-center justify-center p-0 md:p-6"
            id="project-fullscreen-overlay"
          >
            <div className="min-h-screen w-full max-w-6xl border border-white/10 relative flex flex-col md:flex-row shadow-2xl bg-[#121214] text-white rounded-none md:rounded-3xl overflow-hidden">
              
              {/* VISUAL LEFT STICKY FRAME */}
              <div className="w-full md:w-[45%] bg-neutral-950 relative md:sticky md:top-0 h-[300px] md:h-screen border-b md:border-b-0 md:border-r border-white/5">
                <img
                  src={activeOverlay.image}
                  alt={activeOverlay.title}
                  className="w-full h-full object-cover filter contrast-[1.12]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-black/40" />

                {/* Close Button */}
                <button
                  onClick={() => setActiveOverlay(null)}
                  className="absolute top-6 left-6 p-3 bg-black/80 hover:bg-[#E85002] hover:text-white backdrop-blur-md text-white border border-white/10 hover:border-[#E85002] transition-all cursor-pointer group rounded-full shadow-lg"
                  id="close-overlay-button"
                >
                  <X size={16} className="transform group-hover:rotate-90 transition-transform" />
                </button>

                <div className="absolute bottom-8 left-8 right-8">
                  <span className="font-mono text-[10px] tracking-[0.25em] text-[#E85002] uppercase block mb-1 font-bold">
                    {activeOverlay.subtitle}
                  </span>
                  <h2 className="font-sans font-black text-3xl md:text-4xl text-white uppercase tracking-tight">
                    {activeOverlay.title}
                  </h2>
                </div>
              </div>

              {/* DETAILS PANEL RIGHT */}
              <div className="w-full md:w-[55%] p-8 md:p-12 overflow-y-auto max-h-none md:max-h-screen space-y-10 bg-[#121214]">
                
                {/* Overview */}
                <div className="space-y-4">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-[#E85002] uppercase font-bold block">
                    System Overview
                  </span>
                  <p className="text-sm md:text-base font-light text-white/80 leading-relaxed">
                    {activeOverlay.overview}
                  </p>
                </div>

                {/* Problem & Solution */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-white/5">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-orange-300 font-mono text-[10px] tracking-wider uppercase font-bold">
                      <AlertTriangle size={12} />
                      Problem Statement
                    </div>
                    <p className="text-xs font-light text-white/70 leading-relaxed">
                      {activeOverlay.problem}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[#E85002] font-mono text-[10px] tracking-wider uppercase font-bold">
                      <Sparkles size={12} />
                      Engineered Solution
                    </div>
                    <p className="text-xs font-light text-white/70 leading-relaxed">
                      {activeOverlay.solution}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-[#E85002] uppercase font-bold block">
                    Core Capabilities
                  </span>
                  <ul className="space-y-3 pl-1">
                    {activeOverlay.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs md:text-sm font-light text-white/70 leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-[#E85002] mt-2 shrink-0 rounded-full" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-[#E85002] uppercase font-bold block">
                    Technology Stack
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeOverlay.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 border border-white/10 font-mono text-xs tracking-wider uppercase text-white/80 font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-white/5">
                  {activeOverlay.liveUrl ? (
                    <a
                      href={activeOverlay.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 px-6 py-4 bg-[#E85002] hover:bg-[#C10801] text-white font-bold text-xs font-mono tracking-widest uppercase text-center flex items-center justify-center gap-2 rounded-lg transition-all"
                    >
                      <ExternalLink size={14} />
                      Launch Demonstration
                    </a>
                  ) : (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        alert("Demonstration server offline. Review production codebase on GitHub.");
                      }}
                      className="flex-1 px-6 py-4 bg-[#E85002] hover:bg-[#C10801] text-white font-bold text-xs font-mono tracking-widest uppercase text-center flex items-center justify-center gap-2 rounded-lg transition-all"
                    >
                      <ExternalLink size={14} />
                      Launch Demonstration
                    </a>
                  )}
                  {activeOverlay.githubUrl && (
                    <a
                      href={activeOverlay.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-mono tracking-widest uppercase font-bold text-center flex items-center justify-center gap-2 rounded-lg transition-all"
                    >
                      <Github size={14} />
                      View Codebase
                    </a>
                  )}
                </div>

                {/* Close Portal bar */}
                <div className="flex justify-end pt-4">
                  <button
                    onClick={() => setActiveOverlay(null)}
                    className="px-5 py-2.5 bg-white/5 border border-white/10 text-xs font-mono tracking-wider text-white/60 hover:text-[#E85002] hover:border-[#E85002] uppercase transition-colors rounded-lg"
                  >
                    Close Case Study
                  </button>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
