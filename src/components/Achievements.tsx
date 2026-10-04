import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Trophy, Award, Users, HeartHandshake, ShieldCheck, Mic, FileText, CheckCircle2, Globe, Sparkles } from 'lucide-react';
import { Card3D } from './Card3D';

export const Achievements: React.FC = () => {
  const { competitionsAndAwards, leadershipExperience } = PORTFOLIO_DATA;
  const [activeFilter, setActiveFilter] = useState<'all' | 'hackathons' | 'leadership'>('all');

  const getAwardIcon = (id: string) => {
    switch (id) {
      case 'dorahacks':
        return <Trophy className="w-5 h-5 text-[#D4AF37]" />;
      case 'innovate26':
      case 'hackamath':
        return <Award className="w-5 h-5 text-[#D4AF37]" />;
      case 'hackp26':
        return <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />;
      case 'voice-dmi':
        return <Mic className="w-5 h-5 text-[#D4AF37]" />;
      case 'paper-pres':
        return <FileText className="w-5 h-5 text-[#D4AF37]" />;
      default:
        return <Award className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  const getLeadershipIcon = (id: string) => {
    switch (id) {
      case 'ieee-chair':
      case 'ieee-ambassador':
        return <Users className="w-5 h-5 text-[#D4AF37]" />;
      case 'gfg':
        return <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />;
      case 'nexbuildon':
        return <Globe className="w-5 h-5 text-[#D4AF37]" />;
      case 'internshala':
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
      default:
        return <HeartHandshake className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="achievements" className="py-20 lg:py-28 border-t border-[#222222] bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-2 block">
              Honors & Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Achievements & Competitions
            </h2>
            <div className="w-12 h-1 bg-[#D4AF37] rounded-full mt-4 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
          </div>

          {/* Filter Pills */}
          <div className="inline-flex p-1 bg-[#141414] border border-[#262626] rounded-full self-start sm:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-200 ${
                activeFilter === 'all'
                  ? 'bg-[#D4AF37] text-[#0A0A0A] shadow-xs'
                  : 'text-[#A3A3A3] hover:text-white'
              }`}
            >
              All Recognitions
            </button>
            <button
              onClick={() => setActiveFilter('hackathons')}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-200 ${
                activeFilter === 'hackathons'
                  ? 'bg-[#D4AF37] text-[#0A0A0A] shadow-xs'
                  : 'text-[#A3A3A3] hover:text-white'
              }`}
            >
              Hackathons ({competitionsAndAwards.length})
            </button>
            <button
              onClick={() => setActiveFilter('leadership')}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-200 ${
                activeFilter === 'leadership'
                  ? 'bg-[#D4AF37] text-[#0A0A0A] shadow-xs'
                  : 'text-[#A3A3A3] hover:text-white'
              }`}
            >
              Leadership ({leadershipExperience.length})
            </button>
          </div>
        </div>

        {/* Part 1: Hackathons & Competition Wins with 3D Tilt */}
        {(activeFilter === 'all' || activeFilter === 'hackathons') && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="w-4 h-4 text-[#D4AF37]" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Competitive Hackathons & Events
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {competitionsAndAwards.map((item) => (
                <Card3D
                  key={item.id}
                  maxTilt={5}
                  className="rounded-2xl"
                >
                  <div className="h-full bg-[#141414] border border-[#262626] rounded-2xl p-6 hover:border-[#D4AF37]/60 transition-colors duration-200 shadow-md flex flex-col justify-between group hover:shadow-[0_0_20px_rgba(212,175,55,0.12)]">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                          {getAwardIcon(item.id)}
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#F3CA65] bg-[#D4AF37]/15 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/35">
                          {item.badge}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                        {item.title}
                      </h4>

                      <p className="text-xs font-semibold text-[#D4AF37] mb-1.5">
                        {item.subtitle}
                      </p>

                      <p className="text-xs text-[#8A8378] font-medium mb-3">
                        {item.event}
                      </p>

                      {item.description && (
                        <p className="text-sm text-[#D4D4D4] leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </Card3D>
              ))}
            </div>
          </div>
        )}

        {/* Part 2: Leadership & Community Initiatives with 3D Tilt */}
        {(activeFilter === 'all' || activeFilter === 'leadership') && (
          <div>
            <div className="flex items-center gap-2 mb-6 pt-4">
              <Users className="w-4 h-4 text-[#D4AF37]" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Leadership & Community Roles
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {leadershipExperience.map((item) => (
                <Card3D
                  key={item.id}
                  maxTilt={5}
                  className="rounded-2xl"
                >
                  <div className="h-full bg-[#141414] border border-[#262626] rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-colors duration-200 shadow-md flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                          {getLeadershipIcon(item.id)}
                        </div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-white bg-[#1A1A1A] px-2.5 py-0.5 rounded-full border border-[#333333]">
                          {item.tag}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                        {item.title}
                      </h4>

                      <p className="text-xs font-semibold text-[#8A8378] mb-2.5">
                        {item.role}
                      </p>

                      <p className="text-sm text-[#D4D4D4] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card3D>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
