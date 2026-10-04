import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Trophy, Award, Users, HeartHandshake, ShieldCheck, Mic, FileText, CheckCircle2, Globe, Sparkles } from 'lucide-react';

export const Achievements: React.FC = () => {
  const { competitionsAndAwards, leadershipExperience } = PORTFOLIO_DATA;
  const [activeFilter, setActiveFilter] = useState<'all' | 'hackathons' | 'leadership'>('all');

  const getAwardIcon = (id: string) => {
    switch (id) {
      case 'dorahacks':
        return <Trophy className="w-5 h-5 text-[#D95D39]" />;
      case 'innovate26':
      case 'hackamath':
        return <Award className="w-5 h-5 text-[#D95D39]" />;
      case 'hackp26':
        return <ShieldCheck className="w-5 h-5 text-[#D95D39]" />;
      case 'voice-dmi':
        return <Mic className="w-5 h-5 text-[#D95D39]" />;
      case 'paper-pres':
        return <FileText className="w-5 h-5 text-[#D95D39]" />;
      default:
        return <Award className="w-5 h-5 text-[#D95D39]" />;
    }
  };

  const getLeadershipIcon = (id: string) => {
    switch (id) {
      case 'ieee-chair':
      case 'ieee-ambassador':
        return <Users className="w-5 h-5 text-[#D95D39]" />;
      case 'gfg':
        return <CheckCircle2 className="w-5 h-5 text-[#D95D39]" />;
      case 'nexbuildon':
        return <Globe className="w-5 h-5 text-[#D95D39]" />;
      case 'internshala':
        return <Sparkles className="w-5 h-5 text-[#D95D39]" />;
      default:
        return <HeartHandshake className="w-5 h-5 text-[#D95D39]" />;
    }
  };

  return (
    <section id="achievements" className="py-20 lg:py-28 border-t border-[#E8E2D8] bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D95D39] mb-2 block">
              Honors & Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1815] tracking-tight">
              Achievements & Competitions
            </h2>
            <div className="w-12 h-1 bg-[#D95D39] rounded-full mt-4" />
          </div>

          {/* Filter Pills */}
          <div className="inline-flex p-1 bg-white border border-[#E8E2D8] rounded-full self-start sm:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                activeFilter === 'all'
                  ? 'bg-[#1A1815] text-white shadow-xs'
                  : 'text-[#5F5A53] hover:text-[#1A1815]'
              }`}
            >
              All Recognitions
            </button>
            <button
              onClick={() => setActiveFilter('hackathons')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                activeFilter === 'hackathons'
                  ? 'bg-[#1A1815] text-white shadow-xs'
                  : 'text-[#5F5A53] hover:text-[#1A1815]'
              }`}
            >
              Hackathons ({competitionsAndAwards.length})
            </button>
            <button
              onClick={() => setActiveFilter('leadership')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                activeFilter === 'leadership'
                  ? 'bg-[#1A1815] text-white shadow-xs'
                  : 'text-[#5F5A53] hover:text-[#1A1815]'
              }`}
            >
              Leadership ({leadershipExperience.length})
            </button>
          </div>
        </div>

        {/* Part 1: Hackathons & Competition Wins */}
        {(activeFilter === 'all' || activeFilter === 'hackathons') && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="w-4 h-4 text-[#D95D39]" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#1A1815]">
                Competitive Hackathons & Events
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {competitionsAndAwards.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-[#E8E2D8] rounded-2xl p-6 hover:border-[#D95D39]/60 transition-all duration-200 shadow-2xs hover:shadow-xs flex flex-col justify-between group hover:-translate-y-0.5"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF0EC] flex items-center justify-center group-hover:scale-105 transition-transform">
                        {getAwardIcon(item.id)}
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#D95D39] bg-[#FAF0EC] px-2.5 py-0.5 rounded-full border border-[#F2D7CD]">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-[#1A1815] mb-1 group-hover:text-[#D95D39] transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs font-semibold text-[#D95D39] mb-1.5">
                      {item.subtitle}
                    </p>

                    <p className="text-xs text-[#8A8378] font-medium mb-3">
                      {item.event}
                    </p>

                    {item.description && (
                      <p className="text-sm text-[#5F5A53] leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Part 2: Leadership & Community Initiatives */}
        {(activeFilter === 'all' || activeFilter === 'leadership') && (
          <div>
            <div className="flex items-center gap-2 mb-6 pt-4">
              <Users className="w-4 h-4 text-[#D95D39]" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#1A1815]">
                Leadership & Community Roles
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {leadershipExperience.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-[#E8E2D8] rounded-2xl p-6 hover:border-[#D95D39]/50 transition-all duration-200 shadow-2xs hover:shadow-xs flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF0EC] flex items-center justify-center group-hover:scale-105 transition-transform">
                        {getLeadershipIcon(item.id)}
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1A1815] bg-[#FAF8F5] px-2.5 py-0.5 rounded-full border border-[#E8E2D8]">
                        {item.tag}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-[#1A1815] mb-1 group-hover:text-[#D95D39] transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs font-semibold text-[#8A8378] mb-2.5">
                      {item.role}
                    </p>

                    <p className="text-sm text-[#5F5A53] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
