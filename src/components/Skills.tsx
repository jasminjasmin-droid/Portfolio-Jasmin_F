import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { CheckCircle2, Code2, Layers, Cpu, Wrench, Users } from 'lucide-react';

export const Skills: React.FC = () => {
  const { allSkills, skills } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<'categories' | 'all'>('categories');

  const categoryIcons: Record<string, React.ReactNode> = {
    'Technical Skills': <Code2 className="w-4 h-4 text-[#D4AF37]" />,
    'Professional & Interpersonal': <Users className="w-4 h-4 text-[#D4AF37]" />,
    Languages: <Code2 className="w-4 h-4 text-[#D4AF37]" />,
    'Frontend & Mobile': <Layers className="w-4 h-4 text-[#D4AF37]" />,
    'Backend & Databases': <Cpu className="w-4 h-4 text-[#D4AF37]" />,
    'AI / ML & LLMs': <Cpu className="w-4 h-4 text-[#D4AF37]" />,
    'Tools & Version Control': <Wrench className="w-4 h-4 text-[#D4AF37]" />,
  };

  return (
    <section id="skills" className="py-20 lg:py-28 border-t border-[#222222] bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-2 block">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills & Expertise
            </h2>
            <div className="w-12 h-1 bg-[#D4AF37] rounded-full mt-4 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
          </div>

          {/* View Toggle */}
          <div className="inline-flex p-1 bg-[#141414] border border-[#262626] rounded-full self-start sm:self-auto">
            <button
              onClick={() => setActiveTab('categories')}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-200 ${
                activeTab === 'categories'
                  ? 'bg-[#D4AF37] text-[#0A0A0A] shadow-xs'
                  : 'text-[#A3A3A3] hover:text-white'
              }`}
            >
              Categorized
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-200 ${
                activeTab === 'all'
                  ? 'bg-[#D4AF37] text-[#0A0A0A] shadow-xs'
                  : 'text-[#A3A3A3] hover:text-white'
              }`}
            >
              All Skills ({allSkills.length})
            </button>
          </div>
        </div>

        {/* Tab 1: Grouped by Domains */}
        {activeTab === 'categories' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
            {skills.map((group) => (
              <div
                key={group.category}
                className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-7 hover:border-[#D4AF37]/50 transition-all duration-200 shadow-md"
              >
                <div className="flex items-center gap-2.5 pb-4 mb-5 border-b border-[#222222]">
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center">
                    {categoryIcons[group.category] || <Code2 className="w-4 h-4 text-[#D4AF37]" />}
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg bg-[#1A1A1A] text-[#F5F5F5] border border-[#2E2E2E] hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: All Skills Cloud */}
        {activeTab === 'all' && (
          <div className="bg-[#141414] border border-[#262626] rounded-2xl p-8 sm:p-10 shadow-md animate-in fade-in duration-300">
            <div className="flex flex-wrap gap-3 sm:gap-3.5">
              {allSkills.map((skill) => (
                <div
                  key={skill}
                  className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1A1A1A] hover:bg-[#D4AF37]/10 border border-[#2E2E2E] hover:border-[#D4AF37]/50 text-white transition-all duration-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                  <span className="text-sm sm:text-base font-semibold">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
