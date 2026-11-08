import React, { useState } from 'react';
import { Github, Linkedin, MessageSquare, Mail, Share2, X, Check, Copy } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenContact }) => {
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://kaisafestus.dev';
  const shareText = encodeURIComponent(`Festus Kaisa - Mobile & Full-Stack Software Engineer Portfolio: ${currentUrl}`);

  return (
    <footer className="relative pt-24 pb-12 border-t border-[#222222] bg-[#060606]">
      
      {/* Scroll to Top Upward Mouse Indicator (exact dikie.vercel.app mechanic) */}
      <div 
        onClick={scrollToTop} 
        className="scroll-indicator scroll-up -top-10 cursor-pointer" 
        role="button" 
        tabIndex={0} 
        aria-label="Scroll to top"
      >
        <div className="arrows">
          <span />
          <span />
        </div>
        <div className="mouse">
          <div className="wheel" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Footer Main Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#222222]">
          
          {/* Logo Group with Real Avatar */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#D4AF37] p-0.5 overflow-hidden shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              <img
                src={PROFILE.photos.avatar}
                alt="Festus Kaisa"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            
            <a 
              href="#home" 
              className="text-lg font-bold text-[#f5f5f5] hover:text-[#D4AF37] transition-colors"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              <span>{PROFILE.name}</span>
            </a>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#9a9a9a]">
            <a href="#home" className="hover:text-[#f5f5f5] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#f5f5f5] transition-colors">About</a>
            <a href="#works" className="hover:text-[#f5f5f5] transition-colors">Projects</a>
            <button onClick={onOpenResume} className="hover:text-[#f5f5f5] transition-colors cursor-pointer">Resume</button>
            <a href="#contact" onClick={onOpenContact} className="hover:text-[#f5f5f5] transition-colors">Contact</a>
          </div>

          {/* Socials & Share Button */}
          <div className="flex items-center gap-3">
            <a 
              href={PROFILE.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              className="w-9 h-9 rounded-full border border-[#222222] flex items-center justify-center text-[#9a9a9a] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
            >
              <Github className="w-4 h-4" />
            </a>

            <a 
              href={PROFILE.linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-[#222222] flex items-center justify-center text-[#9a9a9a] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a 
              href={PROFILE.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full border border-[#222222] flex items-center justify-center text-[#9a9a9a] hover:text-[#25D366] hover:border-[#25D366] transition-all"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <a 
              href={`mailto:${PROFILE.email}`} 
              aria-label="Email"
              className="w-9 h-9 rounded-full border border-[#222222] flex items-center justify-center text-[#9a9a9a] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={() => setShareModalOpen(true)}
              aria-label="Share Portfolio"
              className="w-9 h-9 rounded-full border border-[#222222] flex items-center justify-center text-[#9a9a9a] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Footer Bottom Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#777] gap-4">
          <p>
            © {new Date().getFullYear()} Festus Kaisa. Mobile & Full-Stack Software Engineer.
          </p>
          <p className="flex items-center gap-2">
            <span>Built with React & TypeScript</span>
            <span>•</span>
            <span>Nairobi, Kenya</span>
          </p>
        </div>

      </div>

      {/* Share Modal (exact dikie.vercel.app feature) */}
      {shareModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="fixed inset-0" onClick={() => setShareModalOpen(false)} />
          
          <div className="relative w-full max-w-md bg-[#111111] border border-[#222222] rounded-2xl p-6 shadow-2xl z-10 text-left">
            <div className="flex items-center justify-between mb-4">
              <h3 
                className="text-lg font-bold text-[#f5f5f5]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Share Portfolio
              </h3>
              <button 
                onClick={() => setShareModalOpen(false)}
                className="p-1 text-[#9a9a9a] hover:text-[#f5f5f5] rounded-md transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-[#9a9a9a] mb-5">
              Share Festus Kaisa's software engineering portfolio with hiring teams or colleagues.
            </p>

            {/* URL Box */}
            <div className="flex items-center gap-2 p-2 rounded-lg bg-[#181818] border border-[#222222] mb-5">
              <input
                type="text"
                readOnly
                value={currentUrl}
                className="w-full bg-transparent text-xs text-[#f5f5f5] px-2 outline-none font-mono"
              />
              <button
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded bg-[#D4AF37] text-black text-xs font-semibold hover:opacity-90 flex items-center gap-1 shrink-0 cursor-pointer"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Quick Share Links */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`https://wa.me/?text=${shareText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-[#222222] hover:border-[#25D366] text-xs text-[#f5f5f5] flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-[#222222] hover:border-[#0077b5] text-xs text-[#f5f5f5] flex items-center justify-center gap-2 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#0077b5]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
};
