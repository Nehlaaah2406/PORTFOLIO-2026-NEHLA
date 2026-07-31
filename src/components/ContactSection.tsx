import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Github, Linkedin, FileText, Send, CheckCircle, AlertTriangle } from "lucide-react";

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    // Simulate premium server-side contact dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (submitStatus === "error") setSubmitStatus("idle");
  };

  return (
    <section id="contact" className="py-24 md:py-32 w-full bg-transparent border-t border-black/5 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-16 md:mb-24 flex flex-col items-start border-b border-black/5 pb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-[#E85002]" />
            <span className="font-mono text-xs tracking-[0.25em] text-[#E85002] uppercase">
              06 . Dialogue
            </span>
          </div>
          <h2 className="font-condensed font-black text-5xl md:text-7xl text-[#000000] tracking-tight uppercase">
            Get In Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Coordinates and Social Portals (Lg: 5cols) */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <h3 className="font-display font-bold text-xl text-[#000000]">
                Let's construct something meaningful together.
              </h3>
              <p className="text-sm font-light text-[#333333]/70 leading-relaxed">
                Whether you are seeking to explore complex analytical queries, formulate a premium digital application interface, or require a passionate engineering intern—my inbox is always open.
              </p>
            </div>

            {/* Structured Contact info */}
            <div className="space-y-6">
              
              {/* Email Direct link */}
              <a
                href="mailto:nehlafathimah246@gmail.com"
                className="flex items-center gap-4 p-4 glass border border-black/10 hover:border-[#E85002]/40 hover:shadow-md transition-all duration-300 bg-white shadow-sm group"
              >
                <div className="w-10 h-10 bg-[#E85002]/10 border border-[#E85002]/20 flex items-center justify-center text-[#E85002] group-hover:bg-[#E85002] group-hover:text-black transition-colors">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="font-mono text-[8px] text-[#333333]/50 uppercase block">Mail Inquiries</span>
                  <span className="text-xs font-mono text-[#333333]/80 group-hover:text-[#E85002] transition-colors">
                    nehlafathimah246@gmail.com
                  </span>
                </div>
              </a>

              {/* GitHub Link */}
              <a
                href="https://github.com/Nehlaaah240"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 glass border border-black/10 hover:border-[#E85002]/40 hover:shadow-md transition-all duration-300 bg-white shadow-sm group"
              >
                <div className="w-10 h-10 bg-black/5 border border-black/10 flex items-center justify-center text-[#333333]/60 group-hover:bg-[#E85002] group-hover:text-black group-hover:border-[#E85002] transition-colors">
                  <Github size={16} />
                </div>
                <div>
                  <span className="font-mono text-[8px] text-[#333333]/50 uppercase block">Development Node</span>
                  <span className="text-xs font-mono text-[#333333]/80 group-hover:text-[#E85002] transition-colors">
                    github.com/Nehlaaah240
                  </span>
                </div>
              </a>

              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/fathima-nehla"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 glass border border-black/10 hover:border-[#E85002]/40 hover:shadow-md transition-all duration-300 bg-white shadow-sm group"
              >
                <div className="w-10 h-10 bg-black/5 border border-black/10 flex items-center justify-center text-[#333333]/60 group-hover:bg-[#E85002] group-hover:text-black group-hover:border-[#E85002] transition-colors">
                  <Linkedin size={16} />
                </div>
                <div>
                  <span className="font-mono text-[8px] text-[#333333]/50 uppercase block">Professional Graph</span>
                  <span className="text-xs font-mono text-[#333333]/80 group-hover:text-[#E85002] transition-colors">
                    linkedin.com/in/fathima-nehla
                  </span>
                </div>
              </a>

            </div>
          </div>

          {/* Premium Interactive Contact Form (Lg: 7cols) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="font-mono text-[10px] tracking-wider uppercase text-[#333333]/50 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-md border border-black/5 rounded-2xl text-sm text-[#000000] focus:border-[#E85002]/50 focus:bg-white transition-all outline-none shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                    placeholder="Jane Doe"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="font-mono text-[10px] tracking-wider uppercase text-[#333333]/50 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/50 backdrop-blur-md border border-black/5 rounded-2xl text-sm text-[#000000] focus:border-[#E85002]/50 focus:bg-white transition-all outline-none shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                    placeholder="jane@example.com"
                    required
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div className="space-y-2">
                <label htmlFor="subject" className="font-mono text-[10px] tracking-wider uppercase text-[#333333]/50 block">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/50 backdrop-blur-md border border-black/5 rounded-2xl text-sm text-[#000000] focus:border-[#E85002]/50 focus:bg-white transition-all outline-none shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                  placeholder="Internship / Collaboration Opportunities"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label htmlFor="message" className="font-mono text-[10px] tracking-wider uppercase text-[#333333]/50 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formState.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-white/50 backdrop-blur-md border border-black/5 rounded-2xl text-sm text-[#000000] focus:border-[#E85002]/50 focus:bg-white transition-all outline-none resize-none shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                  placeholder="Describe your project requirements or proposal details..."
                  required
                />
              </div>

              {/* Status Indicators */}
              <AnimatePresence mode="wait">
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-[#E85002]/5 border border-[#E85002]/20 text-xs font-mono text-[#000000] flex items-center gap-3 rounded-2xl"
                    id="contact-status-success"
                  >
                    <CheckCircle size={16} className="text-[#E85002]" />
                    <span>Message received successfully. Fathima will contact you shortly.</span>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-red-50/50 border border-red-200/50 text-xs font-mono text-red-700 flex items-center gap-3 rounded-2xl"
                    id="contact-status-error"
                  >
                    <AlertTriangle size={16} />
                    <span>Incomplete form. Please complete all required fields before submission.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Trigger */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 bg-[#E85002] hover:bg-[#C10801] disabled:bg-[#E85002]/50 text-white text-xs font-mono tracking-widest uppercase font-bold transition-all border border-[#E85002] rounded-full hover:shadow-[0_4px_14px_rgba(232,80,2,0.25)] flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:pointer-events-none"
                id="submit-form-button"
              >
                <Send size={12} className={isSubmitting ? "animate-pulse" : ""} />
                {isSubmitting ? "Transmitting..." : "Send Message"}
              </button>

            </form>
          </div>

        </div>

        {/* Footer info line */}
        <div className="mt-24 pt-8 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between font-mono text-[9px] text-[#333333]/55 tracking-widest uppercase">
          <span>&copy; {new Date().getFullYear()} Fathima Nehla P S</span>
          <span className="mt-2 sm:mt-0">Designed & engineered as a continuous narrative.</span>
        </div>

      </div>
    </section>
  );
}
