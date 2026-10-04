import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Calendar, Compass } from 'lucide-react';
import { Card3D } from './Card3D';

export const Journey: React.FC = () => {
  const { journey } = PORTFOLIO_DATA;

  return (
    <section id="journey" className="py-20 lg:py-28 border-t border-[#222222] bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-2 block">
            Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Learning Journey
          </h2>
          <div className="w-12 h-1 bg-[#D4AF37] rounded-full mt-4 mb-4 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
          <p className="text-sm sm:text-base text-[#A3A3A3]">
            A chronicle of hands-on technical exploration, engineering growth, and student leadership from 2024 through 2026.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#262626] space-y-12 max-w-3xl ml-2 sm:ml-4">
          {journey.map((item) => (
            <div key={item.year} className="relative group">
              {/* Timeline Node Indicator */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#0A0A0A] border-2 border-[#D4AF37] flex items-center justify-center shadow-[0_0_10px_rgba(212,175,55,0.3)] group-hover:scale-110 transition-transform">
                <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
              </div>

              {/* Year Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-bold tracking-wide mb-3 border border-[#D4AF37]/35">
                <Calendar className="w-3.5 h-3.5" />
                <span>{item.year}</span>
              </div>

              {/* Milestone Card with 3D Tilt */}
              <Card3D maxTilt={5} className="rounded-2xl">
                <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-7 hover:border-[#D4AF37]/50 transition-colors duration-200 shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <Compass className="w-4 h-4 text-[#D4AF37]" />
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-base text-[#D4D4D4] leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Focus areas tags */}
                  <div className="pt-4 border-t border-[#222222]">
                    <p className="text-xs uppercase font-semibold text-[#8A8378] tracking-wider mb-2.5">
                      Highlights:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.focusAreas.map((focus) => (
                        <span
                          key={focus}
                          className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#1A1A1A] text-[#E5E5E5] border border-[#2E2E2E]"
                        >
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card3D>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
