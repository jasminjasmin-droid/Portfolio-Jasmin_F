import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Hammer, BrainCircuit, Users, GraduationCap, Briefcase, ChevronRight } from 'lucide-react';

export const About: React.FC = () => {
  const { about, education, internships } = PORTFOLIO_DATA;

  const iconMap = [
    <Hammer className="w-5 h-5 text-[#D4AF37]" />,
    <BrainCircuit className="w-5 h-5 text-[#D4AF37]" />,
    <Users className="w-5 h-5 text-[#D4AF37]" />,
  ];

  return (
    <section id="about" className="py-20 lg:py-28 border-t border-[#222222] bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Section Header Column */}
          <div className="lg:col-span-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-2 block">
              Background
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {about.heading}
            </h2>
            <div className="w-12 h-1 bg-[#D4AF37] rounded-full mt-4 mb-6 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />

            {/* Quick Education Card */}
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-5 shadow-lg space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-[#222222]">
                <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                  Education
                </h3>
              </div>
              {education.map((edu) => (
                <div key={edu.institution} className="space-y-0.5">
                  <p className="text-xs font-bold text-white">{edu.institution}</p>
                  <p className="text-xs text-[#A3A3A3]">{edu.degree}</p>
                  {edu.details && (
                    <p className="text-[11px] font-medium text-[#D4AF37]">{edu.details}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Section Narrative & Pillar Cards */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="space-y-4 text-base sm:text-lg text-[#D4D4D4] leading-relaxed">
              {about.paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>

            {/* Three Personal Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
              {about.attributes.map((attr, idx) => (
                <div
                  key={attr.title}
                  className="bg-[#141414] border border-[#262626] rounded-xl p-5 hover:border-[#D4AF37]/50 transition-all duration-200 shadow-md group hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    {iconMap[idx % iconMap.length]}
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    {attr.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                    {attr.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Internships Strip */}
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#222222]">
                <Briefcase className="w-4 h-4 text-[#D4AF37]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                  Internship Experience
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {internships.map((intern) => (
                  <div key={intern.id} className="p-3.5 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#D4AF37]/40 transition-colors">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/15 px-2 py-0.5 rounded border border-[#D4AF37]/25">
                        {intern.type}
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#737373]" />
                    </div>
                    <p className="text-sm font-bold text-white">{intern.role}</p>
                    <p className="text-xs text-[#A3A3A3]">{intern.company}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
