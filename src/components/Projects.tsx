import React from 'react';
import { PORTFOLIO_DATA, type Project } from '../data/portfolioData';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-20 lg:py-28 border-t border-[#E8E2D8] bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D95D39] mb-2 block">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1815] tracking-tight">
              Featured Projects
            </h2>
            <div className="w-12 h-1 bg-[#D95D39] rounded-full mt-4" />
          </div>
          <p className="text-sm text-[#5F5A53] max-w-sm">
            Curated systems and applications built across full-stack engineering, generative AI, IoT hardware, and community platforms.
          </p>
        </div>

        {/* Clean Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project: Project, index: number) => (
            <article
              key={project.id}
              className="group bg-white border border-[#E8E2D8] rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-[#D95D39]/60 hover:shadow-sm transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Card Top: Numbering + Highlight Pill + Status Pill */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono font-semibold text-[#8A8378]">
                      0{index + 1}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8E2D8]" />
                    <span className="text-xs font-medium text-[#D95D39] bg-[#FAF0EC] px-2.5 py-0.5 rounded-full">
                      {project.highlight}
                    </span>
                    {project.status && (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-amber-800 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                        {project.status}
                      </span>
                    )}
                  </div>
                  <FolderGit2 className="w-4 h-4 text-[#8A8378] group-hover:text-[#D95D39] transition-colors" />
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-[#1A1815] group-hover:text-[#D95D39] transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#8A8378] mb-3">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#5F5A53] leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-7 pt-4 border-t border-[#F4EFEB]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#FAF8F5] text-[#38332C] border border-[#E8E2D8]"
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
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#1A1815] bg-[#FAF8F5] hover:bg-[#1A1815] hover:text-white border border-[#E8E2D8] rounded-lg transition-all duration-200"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>

                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#D95D39] bg-[#FAF0EC] hover:bg-[#D95D39] hover:text-white border border-[#F2D7CD] rounded-lg transition-all duration-200"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Preview</span>
                    </a>
                  ) : project.status ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-[#8A8378] bg-[#FAF8F5] border border-[#E8E2D8] rounded-lg">
                      In Development
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-[#8A8378] bg-[#FAF8F5] border border-[#E8E2D8] rounded-lg">
                      Hardware Design
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
