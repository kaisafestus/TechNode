import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { WorksSection } from './components/WorksSection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Toast, ToastData } from './components/Toast';
import { Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [toasts, setToasts] = useState<ToastData[]>([]);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  const handleShowToast = (title: string, message: string, type: 'success' | 'error' | 'loading') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    const newToast: ToastData = { id, title, message, type };
    
    setToasts(prev => [...prev, newToast]);

    if (type !== 'loading') {
      setTimeout(() => {
        handleDismissToast(id);
      }, 4500);
    }
  };

  const handleDismissToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#f5f5f5] selection:bg-[#D4AF37] selection:text-black">
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-[#6b5514] via-[#D4AF37] to-[#f3dfa0] z-[60]" />
      {/* Toast Notification Container (dikie.vercel.app mechanic) */}
      <Toast toasts={toasts} onDismiss={handleDismissToast} />

      {/* Glass Header */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section (#home) */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* About Section (#about) */}
        <AboutSection
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Skills Section (#skills) */}
        <SkillsSection />

        {/* Works Section (#works) */}
        <WorksSection
          onOpenModal={(proj) => setSelectedProject(proj)}
        />

        {/* Call to Action (#cta) */}
        <CtaSection
          onOpenContact={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Contact Section (#contact) */}
        <ContactSection
          onShowToast={handleShowToast}
        />
      </main>

      {/* Footer with Upward Mouse Indicator & Share Modal */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Technical Architecture Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Official ATS Resume / CV Modal with PDF Download */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}
