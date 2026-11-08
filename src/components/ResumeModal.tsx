import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { PROFILE, WORK_EXPERIENCE, EDUCATION, TECHNICAL_SKILLS, PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
# ${PROFILE.name}
${PROFILE.title}
Email: ${PROFILE.email} | Phone: ${PROFILE.phone}
GitHub: ${PROFILE.githubUrl} | Location: ${PROFILE.location}

## PROFESSIONAL SUMMARY
${PROFILE.summary}

## TECHNICAL SKILLS
${TECHNICAL_SKILLS.map(s => `- ${s.category}: ${s.items.join(', ')}`).join('\n')}

## PROFESSIONAL EXPERIENCE
${WORK_EXPERIENCE.map(w => `
### ${w.role} — ${w.company}
${w.period} | ${w.location}
${w.highlights.map(h => `- ${h}`).join('\n')}
`).join('\n')}

## KEY PROJECTS & REPOSITORIES
${PROJECTS.map(p => `
### ${p.title} (${p.category})
${p.description}
Tags: ${p.tags.join(', ')}
GitHub: ${p.githubUrl}
`).join('\n')}

## EDUCATION
${EDUCATION.map(e => `
### ${e.degree}
${e.institution} | ${e.period} | ${e.location}
${e.details}
`).join('\n')}

## REFERENCES
Available upon request.
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0f0f0f] text-[#f5f5f5] rounded-2xl border border-[#222222] shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(212,175,55,0.15)] flex flex-col z-10 overflow-hidden">
        
        {/* Top Control Bar (Hidden in Print) */}
        <div className="print:hidden p-4 sm:p-5 border-b border-[#222222] bg-[#141414] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider">
              Official Curriculum Vitae (CV)
            </span>
            <span className="text-xs text-[#888] hidden sm:inline">· Verified Candidate Profile</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PROFILE.resumePdfUrl}
              download="Festus_Kaisa_Resume_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-black bg-[#D4AF37] hover:bg-[#e2c158] rounded-lg transition-colors cursor-pointer shadow-md"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#f5f5f5] bg-[#222222] hover:bg-[#2c2c2c] rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#f5f5f5] bg-[#222222] hover:bg-[#2c2c2c] rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close CV Modal"
              className="p-1.5 text-[#9a9a9a] hover:text-[#f5f5f5] rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Body */}
        <div className="overflow-y-auto p-6 sm:p-12 space-y-10 text-left bg-[#0c0c0c]">
          
          {/* Header Block */}
          <div className="border-b border-[#222222] pb-8">
            <h1 
              className="text-3xl sm:text-4xl font-bold text-[#f5f5f5] tracking-tight mb-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {PROFILE.name}
            </h1>
            <p className="text-base sm:text-lg text-[#D4AF37] font-medium mb-4">
              {PROFILE.title}
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#9a9a9a] font-mono">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <a href={`tel:${PROFILE.phoneRaw}`} className="hover:text-[#f5f5f5]">{PROFILE.phoneDisplay}</a>
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <a href={`mailto:${PROFILE.email}`} className="hover:text-[#f5f5f5]">{PROFILE.email}</a>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{PROFILE.location}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
                <a href={PROFILE.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#f5f5f5]">
                  github.com/kaisafestus
                </a>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-3">
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-[#ccc]">
              {PROFILE.summary}
            </p>
          </div>

          {/* Technical Skills Matrix */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-4">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TECHNICAL_SKILLS.map((grp) => (
                <div key={grp.category} className="p-4 rounded-xl bg-[#141414] border border-[#222222]">
                  <h3 className="text-xs font-semibold text-[#f5f5f5] mb-2 font-mono">{grp.category}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {grp.items.map(item => (
                      <span key={item} className="px-2 py-0.5 rounded text-[11px] bg-[#1a1a1a] text-[#aaa] border border-[#262626]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-6">
              Work Experience
            </h2>
            <div className="space-y-8">
              {WORK_EXPERIENCE.map((job, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-[#D4AF37]/40 space-y-3">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[#D4AF37]" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-bold text-[#f5f5f5]">{job.role}</h3>
                    <span className="text-xs font-mono text-[#D4AF37]">{job.period}</span>
                  </div>
                  <p className="text-xs text-[#9a9a9a] font-medium">{job.company} · {job.location}</p>
                  
                  <ul className="space-y-2 mt-3 text-xs sm:text-sm text-[#bbb] leading-relaxed list-disc list-outside ml-4">
                    {job.highlights.map((item, hIdx) => (
                      <li key={hIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Shipped Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-6">
              Key Projects & Systems
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-[#141414] border border-[#222222] flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="text-sm font-bold text-[#f5f5f5]">{proj.title}</h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1f1f1f] text-[#D4AF37] shrink-0">
                        {proj.category}
                      </span>
                    </div>
                    <p className="text-xs text-[#aaa] leading-relaxed mb-3">
                      {proj.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-[#222222] text-xs">
                    <span className="text-[11px] text-[#777] font-mono">{proj.tags.slice(0, 3).join(', ')}</span>
                    <a 
                      href={proj.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#D4AF37] hover:underline flex items-center gap-1 font-mono text-[11px]"
                    >
                      <span>Code</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37] mb-4">
              Education
            </h2>
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[#141414] border border-[#222222] space-y-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-bold text-[#f5f5f5]">{edu.degree}</h3>
                  <span className="text-xs font-mono text-[#D4AF37]">{edu.period}</span>
                </div>
                <p className="text-xs text-[#9a9a9a]">{edu.institution} · {edu.location}</p>
                <p className="text-xs text-[#bbb] leading-relaxed mt-2">{edu.details}</p>
              </div>
            ))}
          </div>

          {/* References */}
          <div className="p-4 rounded-xl bg-[#121212] border border-[#222222] text-xs text-[#888] text-center">
            Professional references and academic records from Yohpal International Limited and KISE are available upon request.
          </div>

        </div>

      </div>
    </div>
  );
};
