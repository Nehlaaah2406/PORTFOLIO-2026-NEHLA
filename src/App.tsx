import React from "react";
import { motion } from "motion/react";
import BackgroundParticles from "./components/BackgroundParticles";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import TransitionCards from "./components/TransitionCards";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import CertificatesSection from "./components/CertificatesSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  const sections = ["home", "about", "experience", "projects", "skills", "certificates", "contact"];

  // Animation configuration for section entrances
  const scrollEntranceProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="relative min-h-screen bg-transparent text-[#0F0F0F] overflow-x-hidden antialiased select-none">
      {/* 1. Atmospheric Canvas Particles Backdrop */}
      <BackgroundParticles />

      {/* 2. Global Progress Navigation Header */}
      <Header sections={sections} />

      {/* 3. Main Narrative Sections Flow */}
      <main id="storyline-wrapper" className="relative z-10 w-full">
        {/* Landing/Hero Frame (handles its own entrance on mount) */}
        <LandingSection />

        {/* Cinematic Scroll-Triggered Convergence Zone */}
        <motion.div {...scrollEntranceProps}>
          <TransitionCards />
        </motion.div>

        {/* Detailed Human Context */}
        <motion.div {...scrollEntranceProps}>
          <AboutSection />
        </motion.div>

        {/* Career Timeline with Expanding Records */}
        <motion.div {...scrollEntranceProps}>
          <ExperienceSection />
        </motion.div>

        {/* Creation Showcase with Fullscreen Portals */}
        <motion.div {...scrollEntranceProps}>
          <ProjectsSection />
        </motion.div>

        {/* Structured Competencies */}
        <motion.div {...scrollEntranceProps}>
          <SkillsSection />
        </motion.div>

        {/* Certified Verification Cards */}
        <motion.div {...scrollEntranceProps}>
          <CertificatesSection />
        </motion.div>

        {/* Contact/Dialogue Form and Coordinates */}
        <motion.div {...scrollEntranceProps}>
          <ContactSection />
        </motion.div>
      </main>
    </div>
  );
}


