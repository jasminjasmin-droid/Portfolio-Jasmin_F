import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Hammer, BrainCircuit, Users, GraduationCap, Briefcase, ChevronRight } from 'lucide-react';

export const About: React.FC = () => {
  const { about, education, internships } = PORTFOLIO_DATA;

  const iconMap = [
    <Hammer className="w-5 h-5 text-[#D95D39]" />,
    <BrainCircuit className="w-5 h-5 text-[#D95D39]" />,
    <Users className="w-5 h-5 text-[#D95D39]" />,
  ];

  return (
    <section id="about" className="py-20 lg:py-28 border-t border-[#E8E2D8] bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Section Header Column */}
          <div className="lg:col-span-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D95D39] mb-2 block">
              Background
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1815] tracking-tight">
              {about.heading}
            </h2>
            <div className="w-12 h-1 bg-[#D95D39] rounded-full mt-4 mb-6" />

            {/* Quick Education Card */}
            <div className="bg-white border border-[#E8E2D8] rounded-2xl p-5 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-[#F4EFEB]">
                <GraduationCap className="w-4 h-4 text-[#D95D39]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#1A1815]">
                  Education
                </h3>
              </div>
              {education.map((edu) => (
                <div key={edu.institution} className="space-y-0.5">
                  <p className="text-xs font-bold text-[#1A1815]">{edu.institution}</p>
                  <p className="text-xs text-[#5F5A53]">{edu.degree}</p>
                  {edu.details && (
                    <p className="text-[11px] font-medium text-[#D95D39]">{edu.details}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Section Narrative & Pillar Cards */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="space-y-4 text-base sm:text-lg text-[#5F5A53] leading-relaxed">
              {about.paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>

            {/* Three Personal Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
              {about.attributes.map((attr, idx) => (
                <div
                  key={attr.title}
                  className="bg-white border border-[#E8E2D8] rounded-xl p-5 hover:border-[#D95D39]/50 transition-all duration-200 shadow-2xs hover:shadow-xs group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FAF0EC] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    {iconMap[idx % iconMap.length]}
                  </div>
                  <h3 className="text-base font-bold text-[#1A1815] mb-1.5">
                    {attr.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5F5A53] leading-relaxed">
                    {attr.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Internships Strip */}
            <div className="bg-white border border-[#E8E2D8] rounded-2xl p-6 shadow-2xs">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#F4EFEB]">
                <Briefcase className="w-4 h-4 text-[#D95D39]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#1A1815]">
                  Internship Experience
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {internships.map((intern) => (
                  <div key={intern.id} className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8]">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D95D39] bg-[#FAF0EC] px-2 py-0.5 rounded">
                        {intern.type}
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#8A8378]" />
                    </div>
                    <p className="text-sm font-bold text-[#1A1815]">{intern.role}</p>
                    <p className="text-xs text-[#5F5A53]">{intern.company}</p>
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
