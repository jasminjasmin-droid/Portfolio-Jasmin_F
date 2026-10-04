import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, Mail, Sparkles, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Hero3DCanvas } from './Hero3DCanvas';
import { Card3D } from './Card3D';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const { personal } = PORTFOLIO_DATA;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#0A0A0A]"
    >
      {/* 3D Interactive Three.js Background Canvas */}
      <Hero3DCanvas />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Tag / Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse shadow-[0_0_6px_#D4AF37]" />
              <span>{personal.statusBadge}</span>
            </div>

            {/* Tagline pre-heading */}
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#8A8378] mb-3">
              {personal.tagline}
            </p>

            {/* Large Name */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-5">
              {personal.name}
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#D4AF37] tracking-tight mb-6">
              {personal.heroSubtitle}
            </h2>

            {/* Short description */}
            <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed max-w-xl mb-9">
              {personal.heroSummary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-[#0A0A0A] bg-[#D4AF37] hover:bg-[#E6C265] rounded-full transition-all duration-200 shadow-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-0.5"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#D4AF37] bg-[#141414] hover:bg-[#1E1E1E] border border-[#D4AF37]/40 hover:border-[#D4AF37] rounded-full transition-all duration-200 shadow-2xs hover:-translate-y-0.5"
                title="Open Jasmin's Official Resume"
              >
                <FileText className="w-4 h-4 text-[#D4AF37]" />
                <span>View Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#141414] hover:bg-[#1E1E1E] border border-[#2E2E2E] hover:border-[#D4AF37]/50 rounded-full transition-all duration-200 shadow-2xs hover:-translate-y-0.5"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
              </a>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-[#222222] w-full max-w-lg">
              <span className="text-xs uppercase tracking-wider text-[#737373] font-semibold">
                Direct Channels:
              </span>
              <div className="flex items-center gap-4">
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A3A3A3] hover:text-[#D4AF37] transition-colors p-1"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A3A3A3] hover:text-[#D4AF37] transition-colors p-1"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-[#A3A3A3] hover:text-[#D4AF37] transition-colors p-1"
                  aria-label="Send Email"
                  title="Email Jasmin"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Single Portrait Photo with 3D Tilt */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Card3D maxTilt={8} className="w-full max-w-sm sm:max-w-md rounded-2xl">
              <div className="relative w-full">
                {/* Subtle golden background decorative accent border */}
                <div className="absolute -inset-2.5 rounded-3xl bg-[#D4AF37]/15 -rotate-1 transition-transform hover:rotate-0 duration-300 blur-[2px]" />

                {/* Main Photo Card */}
                <div className="relative rounded-2xl overflow-hidden bg-[#141414] border border-[#2A2A2A] shadow-2xl p-2">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-[#1A1A1A]">
                    {!imgError ? (
                      <img
                        src={personal.profileImage}
                        alt="Jasmin F. Portrait"
                        onError={() => setImgError(true)}
                        className="w-full h-full object-cover object-[center_15%] filter contrast-[1.03] transition-transform duration-500 hover:scale-[1.02]"
                        loading="eager"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#141414]">
                        <div className="w-20 h-20 rounded-full bg-[#1F1F1F] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] text-2xl font-bold mb-3">
                          JF
                        </div>
                        <p className="font-semibold text-white">Jasmin F.</p>
                        <p className="text-xs text-[#8A8378] mt-1">
                          Place photo at public/images/profile.jpg
                        </p>
                      </div>
                    )}

                    {/* Corner Accent Pill */}
                    <div className="absolute bottom-3 left-3 right-3 bg-[#0A0A0A]/95 backdrop-blur-md py-2 px-3.5 rounded-lg border border-[#D4AF37]/35 flex items-center justify-between shadow-xl">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                        <span className="text-xs font-semibold text-white">
                          IEEE Chairperson • B.E. CSE
                        </span>
                      </div>
                      <span className="text-[11px] font-medium text-[#A3A3A3]">DMI Engg. College</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
};
