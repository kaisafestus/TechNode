import React from 'react';
import { PROFILE } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto border-t border-[#222222]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Full-Body Photo of Festus Kaisa */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative aspect-[3/4] w-full max-w-md rounded-[24px] overflow-hidden border border-[#222222] bg-[#0d0d0d] shadow-[0_20px_45px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.12)] group">
            <img
              src={PROFILE.photos.about}
              alt="Festus Kaisa - Full-body portrait"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent pointer-events-none" />
            
            {/* Subtle caption */}
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-[#080808]/85 backdrop-blur-md border border-[#222222] text-center">
              <span className="text-xs text-[#f5f5f5] font-medium">Festus Kaisa</span>
              <span className="text-xs text-[#9a9a9a]"> · Nairobi, Kenya</span>
            </div>
          </div>
        </div>

        {/* Right Column: Authentic CV About Content (dikie.vercel.app style) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          <div className="mb-4">
            <span className="section-tag">
              About Me
            </span>
          </div>

          <h2 
            className="text-3xl sm:text-5xl font-bold leading-tight text-[#f5f5f5] mb-6 tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Mobile & Full-Stack Developer, <br />
            <span className="italic text-[#D4AF37]">
              Crafting Production Systems
            </span>
          </h2>

          <p className="text-base text-[#9a9a9a] leading-relaxed mb-4">
            I am a Mobile App Developer and Full-Stack Software Engineer with 2 years of experience 
            designing, testing, and maintaining production Flutter mobile applications and modern web 
            platforms using Dart, TypeScript, Next.js, and SQL databases.
          </p>

          <p className="text-base text-[#9a9a9a] leading-relaxed mb-8">
            As a Full-Stack Engineer at <strong className="text-[#f5f5f5]">Yohpal International Limited</strong>, 
            my responsibilities span software development, systematic QA/testing, release maintenance, 
            technical documentation, and SQL-based data management across production applications. 
            I have also independently engineered specialized projects ranging from encrypted peer-to-peer 
            communication platforms to high-frequency algorithmic quantitative systems.
          </p>

          {/* Stats Row (Dikie style) */}
          <div className="flex flex-wrap items-start gap-8 sm:gap-14 pt-8 border-t border-[#222222] mb-10">
            <div className="flex flex-col">
              <h4 
                className="text-4xl sm:text-5xl font-bold italic text-[#D4AF37] mb-1"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                2+
              </h4>
              <p className="text-xs uppercase tracking-wider text-[#9a9a9a] font-mono">
                Years Building
              </p>
            </div>

            <div className="flex flex-col">
              <h4 
                className="text-4xl sm:text-5xl font-bold italic text-[#D4AF37] mb-1"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                3
              </h4>
              <p className="text-xs uppercase tracking-wider text-[#9a9a9a] font-mono">
                Shipped Mobile Apps
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col gap-1 text-sm sm:text-base italic text-[#f5f5f5] mb-1 font-serif">
                <span>Flutter + Dart</span>
                <span>TypeScript + Next.js</span>
                <span>SQL + Firebase + APIs</span>
              </div>
              <p className="text-xs uppercase tracking-wider text-[#9a9a9a] font-mono">
                Primary Stack
              </p>
            </div>
          </div>

          <div>
            <button onClick={onOpenResume} className="btn btn-outline cursor-pointer">
              View Full CV & Experience
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
