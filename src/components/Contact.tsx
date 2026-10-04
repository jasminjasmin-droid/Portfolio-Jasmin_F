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
    <section id="contact" className="py-20 lg:py-28 border-t border-[#222222] bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Contact Channels */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-2 block">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Let's build something.
            </h2>
            <div className="w-12 h-1 bg-[#D4AF37] rounded-full mb-6 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />

            <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed mb-8 max-w-lg">
              Whether you want to discuss a project, collaborate on open tech, exchange hackathon ideas, or connect about client/business growth—I would love to hear from you.
            </p>

            {/* Direct Connect Cards */}
            <div className="space-y-3.5 max-w-lg">
              {/* Email Card with Copy button */}
              <div className="bg-[#141414] border border-[#262626] rounded-xl p-4 flex items-center justify-between shadow-md hover:border-[#D4AF37]/50 transition-colors">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#737373]">Email</p>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-[#D4AF37] truncate block transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#1A1A1A] hover:bg-[#262626] border border-[#333333] text-white transition-colors shrink-0 ml-2"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#A3A3A3]" />
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
                className="group bg-[#141414] border border-[#262626] rounded-xl p-4 flex items-center justify-between shadow-md hover:border-[#D4AF37]/50 transition-colors block"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#737373]">LinkedIn</p>
                    <p className="text-sm sm:text-base font-semibold text-white group-hover:text-[#D4AF37] truncate transition-colors">
                      {personal.linkedinHandle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#737373] group-hover:text-[#D4AF37] shrink-0" />
              </a>

              {/* GitHub Card */}
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#141414] border border-[#262626] rounded-xl p-4 flex items-center justify-between shadow-md hover:border-[#D4AF37]/50 transition-colors block"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#737373]">GitHub</p>
                    <p className="text-sm sm:text-base font-semibold text-white group-hover:text-[#D4AF37] truncate transition-colors">
                      {personal.githubHandle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#737373] group-hover:text-[#D4AF37] shrink-0" />
              </a>

              {/* Resume Card */}
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#D4AF37]/10 border border-[#D4AF37]/35 rounded-xl p-4 flex items-center justify-between shadow-md hover:border-[#D4AF37] transition-colors block hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#141414] border border-[#D4AF37]/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <FileText className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37]">Curriculum Vitae</p>
                    <p className="text-sm sm:text-base font-semibold text-white group-hover:text-[#D4AF37] truncate transition-colors">
                      View Official Resume (PDF)
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#D4AF37] shrink-0" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Quick Message Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-7 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-1">
                Send a Quick Note
              </h3>
              <p className="text-xs sm:text-sm text-[#A3A3A3] mb-6">
                Fill in below and click send to open directly in your mail app.
              </p>

              <form onSubmit={handleDirectEmail} className="space-y-4">
                <div>
                  <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-[#A3A3A3] mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    placeholder="e.g. Hackathon collaboration / Tech inquiry"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1A1A1A] border border-[#2E2E2E] text-sm text-white placeholder:text-[#525252] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#A3A3A3] mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Hello Jasmin, I wanted to reach out regarding..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1A1A1A] border border-[#2E2E2E] text-sm text-white placeholder:text-[#525252] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-[#0A0A0A] bg-[#D4AF37] hover:bg-[#E6C265] rounded-xl transition-all duration-200 shadow-md hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
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
