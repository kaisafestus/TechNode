import React from 'react';
import { ArrowRight, Github } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface CtaSectionProps {
  onOpenContact: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="cta" className="py-20 sm:py-28 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="cta-container rounded-[28px] p-8 sm:p-16 lg:p-20 text-center max-w-5xl mx-auto border border-[#222222] bg-[#0c0c0c] relative overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.06)]">
        
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          
          <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-[#222222] text-xs text-[#9a9a9a]">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span>Open for Software Engineering Roles & Opportunities</span>
          </div>

          <h2 
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#f5f5f5] mb-6 leading-tight tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Let's build something <br />
            <span className="italic text-[#D4AF37] drop-shadow-[0_0_30px_rgba(212,175,55,0.35)]">
              exceptional together.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#9a9a9a] mb-10 leading-relaxed font-normal">
            Whether you need a Flutter mobile specialist, full-stack engineer, or systems developer 
            to bring your product to life, let's discuss how I can contribute to your team.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="#contact" 
              onClick={onOpenContact} 
              className="btn btn-primary"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href={PROFILE.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline"
            >
              <Github className="w-4 h-4 mr-1.5" />
              <span>Explore GitHub</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
