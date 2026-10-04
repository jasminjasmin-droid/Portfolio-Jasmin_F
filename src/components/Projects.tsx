import React from 'react';
import { PORTFOLIO_DATA, type Project } from '../data/portfolioData';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Card3D } from './Card3D';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-20 lg:py-28 border-t border-[#222222] bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-2 block">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <div className="w-12 h-1 bg-[#D4AF37] rounded-full mt-4 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
          </div>
          <p className="text-sm text-[#A3A3A3] max-w-sm">
            Curated systems and applications built across full-stack engineering, generative AI, IoT hardware, and community platforms.
          </p>
        </div>

        {/* Clean Project Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project: Project, index: number) => (
            <Card3D
              key={project.id}
              maxTilt={6}
              className="rounded-2xl"
            >
              <article className="group h-full bg-[#141414] border border-[#262626] rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-[#D4AF37]/60 hover:shadow-[0_0_25px_rgba(212,175,55,0.12)] transition-colors duration-300">
                <div>
                  {/* Card Top: Numbering + Highlight Pill + Status Pill */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-mono font-semibold text-[#737373]">
                        0{index + 1}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#333333]" />
                      <span className="text-xs font-medium text-[#D4AF37] bg-[#D4AF37]/15 border border-[#D4AF37]/35 px-2.5 py-0.5 rounded-full">
                        {project.highlight}
                      </span>
                      {project.status && (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#F3CA65] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-2 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                          {project.status}
                        </span>
                      )}
                    </div>
                    <FolderGit2 className="w-4 h-4 text-[#737373] group-hover:text-[#D4AF37] transition-colors" />
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-2">
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#A3A3A3] mb-3">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#D4D4D4] leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-7 pt-4 border-t border-[#222222]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#1A1A1A] text-[#E5E5E5] border border-[#2E2E2E]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* GitHub & Action Buttons */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#1A1A1A] hover:bg-white hover:text-[#0A0A0A] border border-[#333333] hover:border-white rounded-lg transition-all duration-200"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>

                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#0A0A0A] bg-[#D4AF37] hover:bg-[#E6C265] border border-[#D4AF37] rounded-lg transition-all duration-200 shadow-sm"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Preview</span>
                      </a>
                    ) : project.status ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-[#A3A3A3] bg-[#1A1A1A] border border-[#2E2E2E] rounded-lg">
                        In Development
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-[#A3A3A3] bg-[#1A1A1A] border border-[#2E2E2E] rounded-lg">
                        Hardware Design
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};
