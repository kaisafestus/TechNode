import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Project, PROJECTS } from '../data/portfolioData';
import { ExternalLink, Code2, Smartphone, Globe, Shield, TrendingUp, Layers } from 'lucide-react';

interface WorksSectionProps {
  onOpenModal: (project: Project) => void;
}

export const WorksSection: React.FC<WorksSectionProps> = ({ onOpenModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const reduce = useReducedMotion();

  const categories = ['All', 'Mobile Apps', 'Full-Stack Web', 'Security & OSINT', 'FinTech & Quant'];

  const filteredProjects = PROJECTS.filter(project => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory;
  });

  return (
    <section id="works" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto border-t border-[#222222]">
      
      {/* Section Header (dikie.vercel.app style) */}
      <motion.div
        className="mb-12 text-left"
        initial={reduce ? undefined : { opacity: 0, y: 16 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mb-3">
          <span className="section-tag">
            Things I've Built
          </span>
        </div>
        <h2 
          className="text-3xl sm:text-5xl font-bold text-[#f5f5f5] tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Featured Projects & Systems
        </h2>
        <p className="text-sm sm:text-base text-[#9a9a9a] mt-2 max-w-2xl">
          Production-grade systems shipped at Yohpal International Limited, along with engineered full-stack platforms, 
          security tooling, and quantitative execution systems. Each project reflects concrete implementation of systems, data models, and constraints.
        </p>
      </motion.div>

      {/* Category Filter Pills (dikie.vercel.app aesthetic) */}
      <div className="flex flex-wrap items-center gap-2.5 mb-16">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#D4AF37] text-black font-semibold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                  : 'bg-[#121212] text-[#9a9a9a] border border-[#222222] hover:text-[#f5f5f5] hover:border-[#D4AF37]/50'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects List: Alternating Work Cards (dikie.vercel.app structure) */}
      <div className="space-y-20 lg:space-y-28">
        {filteredProjects.map((project, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <motion.div
              key={project.id}
              initial={reduce ? undefined : { opacity: 0, y: 22 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center p-6 sm:p-8 rounded-2xl bg-[#0c0c0c] border border-[#222222] hover:border-[#D4AF37]/40 transition-all duration-500 shadow-xl`}
            >
              
  {/* Visual Preview Side (Alternates) */}
              <div className={`lg:col-span-6 ${isReverse ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#101010] border border-[#242424] group shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
                  
                  {/* System UI Frame */}
                  <div className="absolute top-0 left-0 right-0 h-9 bg-[#161616] border-b border-[#242424] px-4 flex items-center justify-between z-10">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#3f3f3f]" />
                      <span className="w-2 h-2 rounded-full bg-[#3f3f3f]" />
                      <span className="w-2 h-2 rounded-full bg-[#3f3f3f]" />
                      <span className="text-[10px] font-mono text-[#6f6f6f] ml-2 uppercase tracking-wider">/{project.id.replace(/-/g,'_')}</span>
                    </div>
                    <span className="text-[9px] uppercase font-mono px-2 py-0.5 rounded-sm bg-black/70 text-[#bfbfbf] border border-[#333333]">
                      {project.category}
                    </span>
                  </div>

                  {/* Project preview image */}
                  <div className="absolute inset-0 pt-9">
                    <motion.img
                      src={project.previewImage || '/connect.png'}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      whileHover={reduce ? undefined : { scale: 1.03 }}
                      transition={{ duration: 0.45, ease: [0.16,1,0.3,1] }}
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/70 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#080808]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                    <button
                      onClick={() => onOpenModal(project)}
                      className="btn btn-primary !py-2 !px-4 text-xs font-semibold cursor-pointer"
                    >
                      Architecture Specs
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline !py-2 !px-4 text-xs font-semibold"
                    >
                      <ExternalLink className="w-3.5 h-3.5 mr-1" />
                      View Repo
                    </a>
                  </div>

                </div>
              </div>

              {/* Information Side (Alternates) */}
              <div className={`lg:col-span-6 flex flex-col text-left ${isReverse ? 'lg:order-1' : 'lg:order-2'}`}>
                
                <span className="text-xs uppercase tracking-widest font-mono text-[#D4AF37] mb-2 font-semibold">
                  {project.category}
                </span>

                <h3 
                  className="text-2xl sm:text-3xl font-bold text-[#f5f5f5] mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#9a9a9a] italic mb-4">
                  {project.subtitle}
                </p>

                <p className="text-sm text-[#9a9a9a] leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded bg-[#161616] text-[#c5c5c5] border border-[#262626] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Action Buttons (dikie.vercel.app style) */}
                <div className="flex items-center gap-4">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-small !py-2.5 !px-5 text-xs font-semibold text-[#f5f5f5] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
                  >
                    <span>View GitHub Repo</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </a>

                  <button
                    onClick={() => onOpenModal(project)}
                    className="btn-outline-small !py-2.5 !px-5 text-xs font-medium text-[#9a9a9a] hover:text-[#f5f5f5] hover:border-[#D4AF37]/60 transition-colors cursor-pointer"
                  >
                    <span>Architecture Deep-Dive</span>
                    <Code2 className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
};
