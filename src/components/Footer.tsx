import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E8E2D8] bg-[#FAF8F5] py-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Made with Curiosity phrase */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-extrabold text-sm tracking-tight text-[#1A1815]">
            JASMIN F.
          </span>
          <span className="hidden sm:inline text-[#D95D39]">•</span>
          <p className="text-xs sm:text-sm text-[#5F5A53] flex items-center gap-1.5">
            Made with curiosity by Jasmin F.
            <Heart className="w-3.5 h-3.5 text-[#D95D39] fill-[#D95D39]" />
          </p>
        </div>

        {/* Back to top button */}
        <div className="flex items-center gap-4">
          <p className="text-xs text-[#8A8378]">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-white border border-[#E8E2D8] hover:border-[#D95D39] hover:text-[#D95D39] text-[#1A1815] flex items-center justify-center transition-all duration-200 shadow-2xs hover:shadow-xs hover:-translate-y-0.5"
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
