import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Calendar, Compass } from 'lucide-react';

export const Journey: React.FC = () => {
  const { journey } = PORTFOLIO_DATA;

  return (
    <section id="journey" className="py-20 lg:py-28 border-t border-[#E8E2D8] bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D95D39] mb-2 block">
            Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1815] tracking-tight">
            Learning Journey
          </h2>
          <div className="w-12 h-1 bg-[#D95D39] rounded-full mt-4 mb-4" />
          <p className="text-sm sm:text-base text-[#5F5A53]">
            A chronicle of hands-on technical exploration, engineering growth, and student leadership.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#E8E2D8] space-y-12 max-w-3xl ml-2 sm:ml-4">
          {journey.map((item) => (
            <div key={item.year} className="relative group">
              {/* Timeline Node Indicator */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-[#D95D39] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                <div className="w-2.5 h-2.5 rounded-full bg-[#D95D39]" />
              </div>

              {/* Year Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0EC] text-[#D95D39] text-xs font-bold tracking-wide mb-3 border border-[#F2D7CD]">
                <Calendar className="w-3.5 h-3.5" />
                <span>{item.year}</span>
              </div>

              {/* Milestone Card */}
              <div className="bg-white border border-[#E8E2D8] rounded-2xl p-6 sm:p-7 hover:border-[#D95D39]/50 transition-all duration-200 shadow-2xs hover:shadow-xs">
                <div className="flex items-center gap-2 mb-2">
                  <Compass className="w-4 h-4 text-[#D95D39]" />
                  <h3 className="text-xl font-bold text-[#1A1815]">
                    {item.title}
                  </h3>
                </div>

                <p className="text-base text-[#5F5A53] leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Focus areas tags */}
                <div className="pt-4 border-t border-[#F4EFEB]">
                  <p className="text-xs uppercase font-semibold text-[#8A8378] tracking-wider mb-2.5">
                    Highlights:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.focusAreas.map((focus) => (
                      <span
                        key={focus}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#FAF8F5] text-[#38332C] border border-[#E8E2D8]"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
