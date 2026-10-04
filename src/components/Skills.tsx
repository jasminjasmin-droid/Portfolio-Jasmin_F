import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { CheckCircle2, Code2, Layers, Cpu, Wrench, Users } from 'lucide-react';

export const Skills: React.FC = () => {
  const { allSkills, skills } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<'categories' | 'all'>('categories');

  const categoryIcons: Record<string, React.ReactNode> = {
    'Technical Skills': <Code2 className="w-4 h-4 text-[#D95D39]" />,
    'Professional & Interpersonal': <Users className="w-4 h-4 text-[#D95D39]" />,
    Languages: <Code2 className="w-4 h-4 text-[#D95D39]" />,
    'Frontend & Mobile': <Layers className="w-4 h-4 text-[#D95D39]" />,
    'Backend & Databases': <Cpu className="w-4 h-4 text-[#D95D39]" />,
    'AI / ML & LLMs': <Cpu className="w-4 h-4 text-[#D95D39]" />,
    'Tools & Version Control': <Wrench className="w-4 h-4 text-[#D95D39]" />,
  };

  return (
    <section id="skills" className="py-20 lg:py-28 border-t border-[#E8E2D8] bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D95D39] mb-2 block">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1815] tracking-tight">
              Skills & Expertise
            </h2>
            <div className="w-12 h-1 bg-[#D95D39] rounded-full mt-4" />
          </div>

          {/* View Toggle */}
          <div className="inline-flex p-1 bg-white border border-[#E8E2D8] rounded-full self-start sm:self-auto">
            <button
              onClick={() => setActiveTab('categories')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                activeTab === 'categories'
                  ? 'bg-[#1A1815] text-white shadow-xs'
                  : 'text-[#5F5A53] hover:text-[#1A1815]'
              }`}
            >
              Categorized
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                activeTab === 'all'
                  ? 'bg-[#1A1815] text-white shadow-xs'
                  : 'text-[#5F5A53] hover:text-[#1A1815]'
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
                className="bg-white border border-[#E8E2D8] rounded-2xl p-6 sm:p-7 hover:border-[#D95D39]/50 transition-all duration-200 shadow-2xs hover:shadow-xs"
              >
                <div className="flex items-center gap-2.5 pb-4 mb-5 border-b border-[#F4EFEB]">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF0EC] flex items-center justify-center">
                    {categoryIcons[group.category] || <Code2 className="w-4 h-4 text-[#D95D39]" />}
                  </div>
                  <h3 className="text-base font-bold text-[#1A1815]">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg bg-[#FAF8F5] text-[#1A1815] border border-[#E8E2D8] hover:border-[#D95D39]/40 hover:bg-[#FAF0EC]/60 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D95D39]" />
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
          <div className="bg-white border border-[#E8E2D8] rounded-2xl p-8 sm:p-10 shadow-2xs animate-in fade-in duration-300">
            <div className="flex flex-wrap gap-3 sm:gap-3.5">
              {allSkills.map((skill) => (
                <div
                  key={skill}
                  className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FAF8F5] hover:bg-[#FAF0EC] border border-[#E8E2D8] hover:border-[#F2D7CD] text-[#1A1815] transition-all duration-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#D95D39] group-hover:scale-110 transition-transform" />
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
