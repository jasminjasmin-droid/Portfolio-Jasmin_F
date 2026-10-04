import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Copy, Check, Send, ArrowUpRight, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleDirectEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formSubject || 'Connecting with Jasmin');
    const body = encodeURIComponent(formMessage || 'Hi Jasmin,\n\nI came across your portfolio and wanted to connect.');
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 border-t border-[#E8E2D8] bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Contact Channels */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D95D39] mb-2 block">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1A1815] tracking-tight leading-tight mb-4">
              Let's build something.
            </h2>
            <div className="w-12 h-1 bg-[#D95D39] rounded-full mb-6" />

            <p className="text-base sm:text-lg text-[#5F5A53] leading-relaxed mb-8 max-w-lg">
              Whether you want to discuss a project, collaborate on open tech, exchange hackathon ideas, or connect about client/business growth—I would love to hear from you.
            </p>

            {/* Direct Connect Cards */}
            <div className="space-y-3 max-w-lg">
              {/* Email Card with Copy button */}
              <div className="bg-white border border-[#E8E2D8] rounded-xl p-3.5 flex items-center justify-between shadow-2xs hover:border-[#D95D39]/50 transition-colors">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF0EC] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#D95D39]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8A8378]">Email</p>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-sm sm:text-base font-semibold text-[#1A1815] hover:text-[#D95D39] truncate block transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#FAF8F5] hover:bg-[#F3EFE9] border border-[#E8E2D8] text-[#1A1815] transition-colors shrink-0 ml-2"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#5F5A53]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* LinkedIn Card */}
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-[#E8E2D8] rounded-xl p-3.5 flex items-center justify-between shadow-2xs hover:border-[#D95D39]/50 transition-colors block"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF0EC] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-5 h-5 text-[#D95D39]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8A8378]">LinkedIn</p>
                    <p className="text-sm sm:text-base font-semibold text-[#1A1815] group-hover:text-[#D95D39] truncate transition-colors">
                      {personal.linkedinHandle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8A8378] group-hover:text-[#D95D39] shrink-0" />
              </a>

              {/* GitHub Card */}
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-[#E8E2D8] rounded-xl p-3.5 flex items-center justify-between shadow-2xs hover:border-[#D95D39]/50 transition-colors block"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF0EC] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-5 h-5 text-[#D95D39]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8A8378]">GitHub</p>
                    <p className="text-sm sm:text-base font-semibold text-[#1A1815] group-hover:text-[#D95D39] truncate transition-colors">
                      {personal.githubHandle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8A8378] group-hover:text-[#D95D39] shrink-0" />
              </a>

              {/* Resume Card */}
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#FAF0EC]/70 border border-[#F2D7CD] rounded-xl p-3.5 flex items-center justify-between shadow-2xs hover:border-[#D95D39] transition-colors block"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                    <FileText className="w-5 h-5 text-[#D95D39]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#D95D39]">Curriculum Vitae</p>
                    <p className="text-sm sm:text-base font-semibold text-[#1A1815] group-hover:text-[#D95D39] truncate transition-colors">
                      View Official Resume (PDF)
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#D95D39] shrink-0" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Quick Message Form */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-[#E8E2D8] rounded-2xl p-7 sm:p-8 shadow-2xs">
              <h3 className="text-xl font-bold text-[#1A1815] mb-1">
                Send a Quick Note
              </h3>
              <p className="text-xs sm:text-sm text-[#5F5A53] mb-6">
                Fill in below and click send to open directly in your mail app.
              </p>

              <form onSubmit={handleDirectEmail} className="space-y-4">
                <div>
                  <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-[#5F5A53] mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    placeholder="e.g. Hackathon collaboration / Tech inquiry"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] text-sm text-[#1A1815] placeholder:text-[#A8A29A] focus:outline-none focus:border-[#D95D39] focus:ring-1 focus:ring-[#D95D39] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#5F5A53] mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Hello Jasmin, I wanted to reach out regarding..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] text-sm text-[#1A1815] placeholder:text-[#A8A29A] focus:outline-none focus:border-[#D95D39] focus:ring-1 focus:ring-[#D95D39] transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#1A1815] hover:bg-[#D95D39] rounded-xl transition-all duration-200 shadow-xs hover:shadow-sm"
                  >
                    <span>Launch Email Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
