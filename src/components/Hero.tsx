import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, Mail, Sparkles, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const { personal } = PORTFOLIO_DATA;

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Tag / Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0EC] border border-[#F2D7CD] text-[#C54E2C] text-xs font-semibold tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D95D39] animate-pulse" />
              <span>{personal.statusBadge}</span>
            </div>

            {/* Tagline pre-heading */}
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#8A8378] mb-3">
              {personal.tagline}
            </p>

            {/* Large Name */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#1A1815] tracking-tight leading-[1.05] mb-5">
              {personal.name}
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#D95D39] tracking-tight mb-6">
              {personal.heroSubtitle}
            </h2>

            {/* Short description */}
            <p className="text-base sm:text-lg text-[#5F5A53] leading-relaxed max-w-xl mb-9">
              {personal.heroSummary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#1A1815] hover:bg-[#D95D39] rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#D95D39] bg-[#FAF0EC] hover:bg-[#D95D39] hover:text-white border border-[#F2D7CD] rounded-full transition-all duration-200 shadow-2xs hover:-translate-y-0.5"
                title="Open Jasmin's Official Resume"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#1A1815] bg-[#FFFFFF] hover:bg-[#F3EFE9] border border-[#E8E2D8] rounded-full transition-all duration-200 shadow-2xs hover:-translate-y-0.5"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-[#D95D39]" />
              </a>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-[#E8E2D8] w-full max-w-lg">
              <span className="text-xs uppercase tracking-wider text-[#8A8378] font-semibold">
                Direct Channels:
              </span>
              <div className="flex items-center gap-4">
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5F5A53] hover:text-[#D95D39] transition-colors p-1"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5F5A53] hover:text-[#D95D39] transition-colors p-1"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-[#5F5A53] hover:text-[#D95D39] transition-colors p-1"
                  aria-label="Send Email"
                  title="Email Jasmin"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Single Portrait Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Subtle background decorative accent border */}
              <div className="absolute -inset-2.5 rounded-3xl bg-[#FAF0EC] -rotate-1 transition-transform hover:rotate-0 duration-300" />

              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden bg-white border border-[#E8E2D8] shadow-md p-2">
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-[#F4EFEB]">
                  {!imgError ? (
                    <img
                      src={personal.profileImage}
                      alt="Jasmin F. Portrait"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-[center_15%] filter contrast-[1.02] transition-transform duration-500 hover:scale-[1.02]"
                      loading="eager"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#F4EFEB]">
                      <div className="w-20 h-20 rounded-full bg-[#FAF0EC] border border-[#F2D7CD] flex items-center justify-center text-[#D95D39] text-2xl font-bold mb-3">
                        JF
                      </div>
                      <p className="font-semibold text-[#1A1815]">Jasmin F.</p>
                      <p className="text-xs text-[#8A8378] mt-1">
                        Place photo at public/images/profile.jpg
                      </p>
                    </div>
                  )}

                  {/* Corner Accent Pill */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs py-2 px-3.5 rounded-lg border border-[#E8E2D8] flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#D95D39]" />
                      <span className="text-xs font-semibold text-[#1A1815]">
                        IEEE Chairperson • B.E. CSE
                      </span>
                    </div>
                    <span className="text-[11px] font-medium text-[#8A8378]">DMI Engg. College</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
