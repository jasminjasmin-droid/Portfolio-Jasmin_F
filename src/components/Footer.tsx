import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#222222] bg-[#0A0A0A] py-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Made with Curiosity phrase */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-extrabold text-sm tracking-tight text-white">
            Jasmin F.
          </span>
          <span className="hidden sm:inline text-[#D4AF37]">•</span>
          <p className="text-xs sm:text-sm text-[#A3A3A3] flex items-center gap-1.5">
            Made with curiosity by Jasmin F.
            <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
          </p>
        </div>

        {/* Back to top button */}
        <div className="flex items-center gap-4">
          <p className="text-xs text-[#737373]">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-[#141414] border border-[#262626] hover:border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0A0A] flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-[0_0_12px_rgba(212,175,55,0.4)] hover:-translate-y-0.5"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
