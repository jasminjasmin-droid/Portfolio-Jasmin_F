import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Journey', href: '#journey' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md py-3.5 border-b border-[#E8E2D8] shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 text-base font-bold tracking-wider text-[#1A1815] transition-colors"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#D95D39] transition-transform group-hover:scale-125" />
          <span className="font-extrabold tracking-tight">{PORTFOLIO_DATA.personal.name}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#5F5A53] hover:text-[#1A1815] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D95D39] hover:after:w-full after:transition-all after:duration-250"
            >
              {link.label}
            </a>
          ))}

          {/* Resume Link */}
          <a
            href={PORTFOLIO_DATA.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#D95D39] bg-[#FAF0EC] hover:bg-[#D95D39] hover:text-white border border-[#F2D7CD] rounded-full transition-all duration-200"
            title="View Jasmin's Resume (PDF)"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#1A1815] hover:bg-[#D95D39] rounded-full transition-all duration-200 shadow-xs"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#1A1815] hover:text-[#D95D39] rounded-lg focus:outline-none transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E8E2D8] px-6 py-6 shadow-lg animate-in fade-in duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#38332C] hover:text-[#D95D39] py-1 border-b border-[#F0EBE2] transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#D95D39] bg-[#FAF0EC] border border-[#F2D7CD] rounded-full hover:bg-[#D95D39] hover:text-white transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume (PDF)</span>
            </a>

            <div className="pt-1">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1A1815] rounded-full hover:bg-[#D95D39] transition-colors"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
