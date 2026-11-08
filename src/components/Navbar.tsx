import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'skills', 'works', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 px-6 sm:px-12 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled 
          ? 'bg-[#080808]/90 backdrop-blur-md border-b border-[#222222] py-3.5 shadow-2xl' 
          : 'bg-[#080808]/40 backdrop-blur-sm border-b border-[#222222]/40'
      }`}
    >
      {/* Brand / Logo */}
      <a 
        href="#home" 
        className="flex items-center gap-3 text-lg sm:text-xl font-bold tracking-tight text-[#f5f5f5] hover:text-[#D4AF37] transition-colors"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.6)]" />
        <span>{PROFILE.name}</span>
      </a>

      {/* Desktop Navigation Links (dikie.vercel.app style) */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#9a9a9a]">
        <a 
          href="#home" 
          className={`transition-colors hover:text-[#f5f5f5] ${activeSection === 'home' ? 'text-[#D4AF37] font-semibold' : ''}`}
        >
          Home
        </a>
        <a 
          href="#about" 
          className={`transition-colors hover:text-[#f5f5f5] ${activeSection === 'about' ? 'text-[#D4AF37] font-semibold' : ''}`}
        >
          About
        </a>
        <a 
          href="#works" 
          className={`transition-colors hover:text-[#f5f5f5] ${activeSection === 'works' ? 'text-[#D4AF37] font-semibold' : ''}`}
        >
          Projects
        </a>
        <a 
          href="#skills" 
          className={`transition-colors hover:text-[#f5f5f5] ${activeSection === 'skills' ? 'text-[#D4AF37] font-semibold' : ''}`}
        >
          Skills
        </a>
        <button
          onClick={onOpenResume}
          className="transition-colors hover:text-[#f5f5f5] cursor-pointer text-[#9a9a9a]"
        >
          Resume
        </button>
        <a 
          href="#contact" 
          className={`transition-colors hover:text-[#f5f5f5] ${activeSection === 'contact' ? 'text-[#D4AF37] font-semibold' : ''}`}
        >
          Contact
        </a>
      </nav>

      {/* Right Action: Hire Me Button (dikie.vercel.app) */}
      <div className="hidden md:flex items-center gap-4">
        <a
          href="#contact"
          onClick={onOpenContact}
          className="btn btn-primary text-xs sm:text-sm font-semibold !py-2.5 !px-6"
        >
          Hire Me
        </a>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="flex md:hidden items-center gap-3">
        <a
          href="#contact"
          onClick={onOpenContact}
          className="btn btn-primary text-xs font-semibold !py-1.5 !px-3.5"
        >
          Hire Me
        </a>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="p-2 text-[#9a9a9a] hover:text-[#f5f5f5] rounded-md transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#080808]/98 border-b border-[#222222] py-6 px-8 flex flex-col gap-4 text-base font-medium shadow-2xl md:hidden">
          <a 
            href="#home" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#f5f5f5] hover:text-[#D4AF37] py-2 border-b border-[#222222]/50"
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#f5f5f5] hover:text-[#D4AF37] py-2 border-b border-[#222222]/50"
          >
            About
          </a>
          <a 
            href="#works" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#f5f5f5] hover:text-[#D4AF37] py-2 border-b border-[#222222]/50"
          >
            Projects
          </a>
          <a 
            href="#skills" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#f5f5f5] hover:text-[#D4AF37] py-2 border-b border-[#222222]/50"
          >
            Skills
          </a>
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="text-left text-[#f5f5f5] hover:text-[#D4AF37] py-2 border-b border-[#222222]/50 cursor-pointer"
          >
            Resume
          </button>
          <a 
            href="#contact" 
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="text-[#f5f5f5] hover:text-[#D4AF37] py-2"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};
