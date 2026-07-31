import React from "react";
import { certificates } from "../data";
import { Flame, Sparkles, GraduationCap, Users, Heart } from "lucide-react";

// Conceptual mappings to replicate the exact bold branding header style
const milestoneNarratives: Record<string, {
  concept: string;
  category: string;
  narrative: string;
  impact: string;
  icon: React.ReactNode;
}> = {
  iedc: {
    concept: "TECHNICAL BOOTCAMPS",
    category: "Professional Development",
    narrative: "Participated in various bootcamps covering web development, AI, software engineering, and emerging technologies to strengthen technical fundamentals and practical skills.",
    impact: "Gained hands-on experience in modern development tools, frameworks, and emerging technology stacks.",
    icon: <Flame size={16} />
  },
  icset: {
    concept: "GOOGLE WORKSHOP",
    category: "Innovation & Technology",
    narrative: "Attended a Google-led workshop focused on emerging technologies, innovation, and future-ready development practices under the Antigravity initiative.",
    impact: "Acquired insights into cutting-edge development strategies and forward-thinking engineering practices.",
    icon: <Sparkles size={16} />
  },
  hackathon: {
    concept: "HACKATHONS",
    category: "Competitive Problem Solving",
    narrative: "Participated in 2+ TinkerHub Hackathons and Smart India Hackathon (SIH) twice, collaborating on innovative solutions and real-world problem statements under time-bound challenges.",
    impact: "Developed rapid prototyping skills, team collaboration abilities, and experience in solving complex real-world problems within competitive timelines.",
    icon: <GraduationCap size={16} />
  },
  nss: {
    concept: "CONTINUOUS LEARNING",
    category: "Professional Growth",
    narrative: "Regularly engage in hackathons, workshops, and community events to enhance technical, creative, and collaborative skills in an evolving tech landscape.",
    impact: "Maintained a commitment to lifelong learning and continuous skill development across emerging domains.",
    icon: <Users size={16} />
  },
  ima: {
    concept: "HANDS-ON WORKSHOPS",
    category: "Practical Training",
    narrative: "Attended multiple technical workshops to strengthen practical skills in modern development tools, frameworks, and industry-standard practices.",
    impact: "Built proficiency in real-world implementation of technologies and best practices used in professional development environments.",
    icon: <Heart size={16} />
  }
};

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-24 md:py-32 w-full bg-white border-t border-black/5 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-20 flex flex-col items-start border-b border-black/5 pb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-[#E85002]" />
            <span className="font-mono text-xs tracking-[0.25em] text-[#E85002] uppercase">
              05 . Roadmap
            </span>
          </div>
          <h2 className="font-condensed font-black text-5xl md:text-7xl text-[#000000] tracking-tight uppercase">
            Credentials
          </h2>
          <p className="font-sans text-xs text-neutral-500 mt-2">
            A vertical chronicle of certifications, technical sprints, community leadership, and key milestones.
          </p>
        </div>

        {/* ==========================================
            VERTICAL EDITORIAL STACK (MATCHING DESIGN)
            ========================================== */}
        <div className="flex flex-col border-b border-black/10" id="editorial-stacked-list">
          {certificates.map((cert, index) => {
            const meta = milestoneNarratives[cert.id];
            const itemIndex = `0${index + 1}`;

            return (
              <div
                key={cert.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center py-12 border-t border-black/10 hover:bg-neutral-50/50 transition-all duration-300 px-2 group relative"
                id={`roadmap-item-${cert.id}`}
              >
                {/* Number & Concept Title Column (Left) */}
                <div className="col-span-1 md:col-span-4 flex items-start gap-4">
                  {/* Tiny Orange Accent Serial Number */}
                  <span className="font-mono text-xs md:text-sm font-bold text-[#E85002] pt-1">
                    {itemIndex}
                  </span>
                  
                  {/* Bold Display Concept Label */}
                  <div>
                    <h3 className="font-condensed font-black text-3xl md:text-4xl text-[#000000] tracking-tight leading-none uppercase group-hover:text-[#E85002] transition-colors">
                      {meta?.concept || cert.title}
                    </h3>
                    <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest block mt-1">
                      {cert.issuer}
                    </span>
                  </div>
                </div>

                {/* Narrative Description (Middle) */}
                <div className="col-span-1 md:col-span-8 pr-4">
                  <p className="font-sans text-xs md:text-[13px] text-neutral-600 leading-relaxed font-light">
                    {meta?.narrative || cert.date}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
