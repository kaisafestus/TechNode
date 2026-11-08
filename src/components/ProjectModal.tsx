import React, { useState } from 'react';
import { X, ExternalLink, ShieldCheck, CheckCircle2, Copy, Check, Terminal, Layers, Cpu } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'invariants' | 'features'>('architecture');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#0e0e0e] text-[#f5f5f5] rounded-2xl border border-[#222222] shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(212,175,55,0.15)] flex flex-col z-10 overflow-hidden">
        
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-[#222222] flex items-start justify-between gap-4 bg-[#141414]">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-mono font-semibold mb-1">
              {project.category} · Technical Specification
            </div>
            <h2 
              className="text-2xl sm:text-3xl font-bold text-[#f5f5f5] tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#9a9a9a] mt-1">
              {project.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-black bg-[#D4AF37] hover:bg-[#e2c158] rounded-lg transition-colors"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="p-1.5 text-[#9a9a9a] hover:text-[#f5f5f5] rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-1 px-6 sm:px-8 pt-2 border-b border-[#222222] bg-[#121212]">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-medium border-b-2 transition-colors cursor-pointer ${
              activeTab === 'architecture'
                ? 'border-[#D4AF37] text-[#D4AF37] font-semibold'
                : 'border-transparent text-[#9a9a9a] hover:text-[#f5f5f5]'
            }`}
          >
            System Architecture
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-medium border-b-2 transition-colors cursor-pointer ${
              activeTab === 'features'
                ? 'border-[#D4AF37] text-[#D4AF37] font-semibold'
                : 'border-transparent text-[#9a9a9a] hover:text-[#f5f5f5]'
            }`}
          >
            Key Features
          </button>
          <button
            onClick={() => setActiveTab('invariants')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-medium border-b-2 transition-colors cursor-pointer ${
              activeTab === 'invariants'
                ? 'border-[#D4AF37] text-[#D4AF37] font-semibold'
                : 'border-transparent text-[#9a9a9a] hover:text-[#f5f5f5]'
            }`}
          >
            Security & Reliability Invariants
          </button>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-left bg-[#0c0c0c]">
          
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="p-5 rounded-xl bg-[#141414] border border-[#222222]">
                <h4 className="text-xs font-mono uppercase text-[#D4AF37] font-bold mb-2">Architectural Blueprint</h4>
                <p className="text-sm text-[#ccc] leading-relaxed">
                  {project.architectureDetails.overview}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-[#9a9a9a] font-bold mb-3">Technical Highlights</h4>
                <div className="space-y-2">
                  {project.architectureDetails.technicalHighlights.map((th, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#141414] border border-[#222222]">
                      <Cpu className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#bbb]">{th}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-[#9a9a9a] font-bold mb-3">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded bg-[#181818] border border-[#262626] text-xs font-mono text-[#D4AF37]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase text-[#D4AF37] font-bold mb-2">Core Product Capabilities</h4>
              <div className="space-y-3">
                {project.architectureDetails.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#141414] border border-[#222222]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#ccc] leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'invariants' && (
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase text-[#D4AF37] font-bold mb-2">Guaranteed Invariants & Constraints</h4>
              <div className="space-y-3">
                {project.architectureDetails.securityReliabilityInvariants.map((inv, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#141414] border border-[#222222]">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#ccc] leading-relaxed">{inv}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-[#222222] bg-[#121212] flex items-center justify-between">
          <span className="text-xs text-[#777] font-mono">
            repo: <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline">{project.githubUrl.replace('https://github.com/', '')}</a>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-[#222222] hover:bg-[#2c2c2c] text-xs text-[#f5f5f5] cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
