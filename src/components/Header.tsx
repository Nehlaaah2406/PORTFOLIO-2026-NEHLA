import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  sections: string[];
}

export default function Header({ sections }: HeaderProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // 1. Scroll Progress Tracking
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // 2. Active Section Highlighter
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // High-accuracy window for active element
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    handleScroll(); // Trigger initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [sections]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="main-nav-header"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 bg-white/70 hover:bg-white/95 backdrop-blur-2xl border-b border-black/5 shadow-sm group/header"
    >
      {/* Scroll Progress Indicator at the very top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-black/5">
        <motion.div
          className="h-full bg-[#E85002]"
          style={{ width: `${scrollProgress * 100}%` }}
          layoutId="scroll-progress-bar"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo/Name in Elegant Serif Italic */}
        <button
          onClick={() => scrollToSection("home")}
          className="font-serif-display italic font-extrabold text-2xl tracking-tight text-[#000000] hover:text-[#E85002] transition-colors cursor-pointer"
          id="logo-brand"
        >
          Engr.
        </button>

        {/* Desktop Navigation with high tracking details */}
        <nav className="hidden md:flex items-center space-x-2" id="desktop-nav">
          {sections.filter(sec => sec !== "contact").map((sec) => (
            <button
              key={sec}
              onClick={() => scrollToSection(sec)}
              className={`relative px-4 py-2 text-[11px] font-mono tracking-[0.15em] uppercase transition-colors duration-300 ${
                activeSection === sec
                  ? "text-[#000000] font-bold"
                  : "text-[#333333]/60 hover:text-[#000000]"
              }`}
              id={`nav-link-${sec}`}
            >
              {sec === "home" ? "Home" : sec === "about" ? "About" : sec === "experience" ? "Path" : sec === "projects" ? "Works" : sec === "skills" ? "Services" : "Roadmap"}
              {activeSection === sec && (
                <motion.span
                  className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-[#000000]"
                  layoutId="active-indicator"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Right side contact pill or mobile toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:block px-6 py-2.5 bg-[#000000] text-[#F9F9F9] hover:bg-[#E85002] hover:text-[#000000] text-xs font-mono tracking-widest uppercase font-bold rounded-full transition-all duration-300 active:scale-95 cursor-pointer"
            id="desktop-contact-pill"
          >
            Contact
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#000000] hover:text-[#E85002] transition-colors p-1"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-black/10 shadow-2xl px-6 py-6 flex flex-col space-y-4 md:hidden transition-colors duration-300"
          id="mobile-nav-menu"
        >
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => scrollToSection(sec)}
              className={`text-left text-sm font-mono tracking-widest uppercase py-2 border-b border-black/5 transition-colors ${
                activeSection === sec 
                  ? "text-[#E85002] pl-2 font-semibold" 
                  : "text-[#333333]/70 hover:text-[#E85002]"
              }`}
            >
              {sec}
            </button>
          ))}
        </motion.div>
      )}
    </header>
  );
}
