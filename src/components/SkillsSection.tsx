import React from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { TECHNICAL_SKILLS } from '../data/portfolioData';

const ease = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease } },
};

export const SkillsSection: React.FC = () => {
  const reduce = useReducedMotion();

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto border-t border-[#222222]">
      <motion.div
        className="mb-12 text-left"
        initial={reduce ? undefined : { opacity: 0, y: 16 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mb-3">
          <span className="section-tag">Technical Stack</span>
        </div>
        <h2
          className="text-3xl sm:text-5xl font-bold text-[#f5f5f5] tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Tools & Technologies
        </h2>
        <p className="text-sm sm:text-base text-[#9a9a9a] mt-2 max-w-2xl">
          Core technologies and practices applied across mobile, web, data, and delivery.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TECHNICAL_SKILLS.map((group, gi) => (
          <motion.div
            key={group.category}
            className="rounded-2xl bg-[#0c0c0c] border border-[#222222] p-6 sm:p-7 hover:border-[#D4AF37]/35 transition-colors"
            initial={reduce ? undefined : { opacity: 0, y: 18 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: reduce ? 0 : gi * 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-sm font-semibold tracking-wide text-[#f5f5f5] uppercase font-mono">{group.category}</h3>
              <span className="text-[10px] font-mono text-[#D4AF37]/70">{String(group.items.length).padStart(2, '0')}</span>
            </div>
            <motion.div
              className="flex flex-wrap gap-2.5"
              variants={reduce ? undefined : container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {group.items.map((skill) => (
                <motion.span
                  key={skill}
                  variants={reduce ? undefined : item}
                  whileHover={reduce ? undefined : { y: -2, borderColor: 'rgba(212,175,55,0.55)' }}
                  className="px-3 py-1.5 text-xs sm:text-[13px] rounded-md bg-[#141414] text-[#d0d0d0] border border-[#262626] font-mono cursor-default transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
