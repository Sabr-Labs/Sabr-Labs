import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-emerald-400 rounded-lg flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="2" width="5" height="5" rx="1" fill="white" opacity="0.9" />
                <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.7" />
                <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.7" />
                <rect x="9" y="9" width="5" height="5" rx="1" fill="white" opacity="0.5" />
              </svg>
            </div>
            <span className="text-xl font-bold text-brand-dark">Sabr Labs</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#expertise" className="text-sm font-medium text-gray-600 hover:text-brand-dark transition-colors">
              Expertise
            </a>
            <a href="#projects" className="text-sm font-medium text-gray-600 hover:text-brand-dark transition-colors">
              Projects
            </a>
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-brand-dark transition-colors">
              About
            </a>
          </div>

          {/* CTA + Dark mode toggle */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="bg-brand-blue text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-blue-600 transition-colors"
            >
              Get Started
            </a>
            <button
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Toggle theme"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-700">
              {mobileOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4 flex flex-col gap-3">
            <a href="#expertise" className="text-sm font-medium text-gray-600 hover:text-brand-dark">Expertise</a>
            <a href="#projects" className="text-sm font-medium text-gray-600 hover:text-brand-dark">Projects</a>
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-brand-dark">About</a>
            <a
              href="#contact"
              className="bg-brand-blue text-white text-sm font-medium px-5 py-2.5 rounded-full text-center hover:bg-blue-600 transition-colors mt-2"
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
