import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Github, Mail, MessageSquare, Linkedin, Download } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
  const reduce = useReducedMotion();
  const phrase = 'done right.';
  const [typed, setTyped] = useState('');

  useEffect(() => {
    if (reduce) { setTyped(phrase); return; }
    let i = 0;
    let dir = 1;
    let hold = 0;
    const tick = () => {
      if (hold > 0) { hold -= 1; return; }
      i += dir;
      setTyped(phrase.slice(0, i));
      if (i >= phrase.length) { dir = -1; hold = 16; }
      if (i <= 0 && dir === -1) { dir = 1; hold = 6; }
    };
    const id = window.setInterval(tick, 80);
    return () => window.clearInterval(id);
  }, [reduce]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
      
      {/* 2-Column Split: Content & Image (dikie.vercel.app layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full z-10 my-auto">
        
        {/* Left Column: Hero Content */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center text-left"
          initial={reduce ? undefined : { opacity: 0, y: 18 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          
          {/* Subtitle tag (Dikie style) */}
          <div className="mb-4">
            <span className="section-tag">
              {PROFILE.name}
            </span>
          </div>

          {/* Signature Heading */}
          <h1 
            className="text-4xl sm:text-6xl lg:text-[4.75rem] font-bold leading-[1.08] mb-6 text-[#f5f5f5] tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Web & Mobile <br />
            Systems{' '}
            <span className="italic text-[#D4AF37] drop-shadow-[0_0_35px_rgba(212,175,55,0.4)]">
              {typed}
              <motion.span
                aria-hidden="true"
                className="inline-block w-[2px] h-[0.9em] bg-[#D4AF37] ml-1 align-[-0.08em]"
                animate={reduce ? undefined : { opacity: [1, 0, 1] }}
                transition={reduce ? undefined : { duration: 0.9, repeat: Infinity }}
              />
            </span>
          </h1>

          {/* Description from CV */}
          <p className="text-base sm:text-lg text-[#9a9a9a] leading-relaxed mb-8 max-w-xl font-normal">
            Mobile App Developer & Full-Stack Software Engineer building reliable, high-performance Flutter 
            applications, distributed web architectures, and SQL-backed systems.
          </p>

          {/* Button Group (Dikie gold primary and outline) */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a href="#works" className="btn btn-primary">
              See My Work
            </a>
            <a 
              href={PROFILE.resumePdfUrl} 
              download="Festus_Kaisa_Resume_CV.pdf"
              onClick={() => onOpenResume()}
              className="btn btn-outline"
            >
              <Download className="w-4 h-4 mr-1" />
              Download CV
            </a>
          </div>

          {/* Social Links Hero Strip */}
          <div className="flex items-center gap-4">
            <a 
              href={PROFILE.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-full border border-[#222222] bg-white/[0.02] flex items-center justify-center text-[#9a9a9a] hover:text-[#D4AF37] hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>

            <a 
              href={PROFILE.linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-full border border-[#222222] bg-white/[0.02] flex items-center justify-center text-[#9a9a9a] hover:text-[#D4AF37] hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a 
              href={`mailto:${PROFILE.email}`} 
              aria-label="Email Festus Kaisa"
              className="w-10 h-10 rounded-full border border-[#222222] bg-white/[0.02] flex items-center justify-center text-[#9a9a9a] hover:text-[#D4AF37] hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>

            <a 
              href={PROFILE.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="WhatsApp Direct"
              className="w-10 h-10 rounded-full border border-[#222222] bg-white/[0.02] flex items-center justify-center text-[#9a9a9a] hover:text-[#D4AF37] hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
          </div>

        </motion.div>
        {/* Right Column: Real Close-up Photo of Festus Kaisa */}
        <motion.div
          className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none"
          initial={reduce ? undefined : { opacity: 0, scale: 0.985 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#222222] shadow-[0_30px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(212,175,55,0.12)] bg-[#111111]">
            <img
              src={PROFILE.photos.hero}
              alt="Festus Kaisa - Mobile & Full-Stack Software Engineer"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-70"></div>
            <div className="absolute bottom-6 left-6 flex items-center gap-2.5 z-10">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.9)]"></span>
              <span className="text-xs font-medium text-[#f5f5f5] tracking-wide">Available for opportunities</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Dikie Mouse Scroll Indicator pointing to About section */}
      <div 
        onClick={scrollToAbout}
        className="scroll-indicator mt-8 cursor-pointer mx-auto flex flex-col items-center group"
        role="button"
        tabIndex={0}
        aria-label="Scroll to about section"
      >
        <div className="mouse">
          <div className="wheel" />
        </div>
        <div className="arrows">
          <span />
          <span />
        </div>
      </div>

    </section>
  );
};
