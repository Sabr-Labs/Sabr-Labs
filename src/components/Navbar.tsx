import React, { useEffect, useMemo, useState } from 'react';

interface NavbarProps {
  base?: string;
}

const Navbar: React.FC<NavbarProps> = ({ base = '' }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const hasDarkClass = document.documentElement.classList.contains('dark');
    setIsDark(hasDarkClass);
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    
    if (nextIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const themeIcon = useMemo(() => {
    if (isDark) {
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      );
    }

    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    );
  }, [isDark]);

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href={base || '/'} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-emerald-400 rounded-lg flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="2" width="5" height="5" rx="1" fill="white" opacity="0.9" />
                <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.7" />
                <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.7" />
                <rect x="9" y="9" width="5" height="5" rx="1" fill="white" opacity="0.5" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">Sabr Labs</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href={`${base}#projects`} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Projects
            </a>
            <a href={`${base}#about`} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              About
            </a>
            <a href={`${base}founders`} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Founders
            </a>
          </div>

          {/* CTA + Dark mode toggle */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`${base}founders`}
              className="bg-brand-blue text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-blue-600 transition-colors"
            >
              Meet the Team
            </a>
            <button
              className="w-9 h-9 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
              aria-pressed={isDark}
              onClick={toggleTheme}
              type="button"
            >
              {themeIcon}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-900 dark:text-white">
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
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-800 pt-4 flex flex-col gap-3">
            <a href={`${base}#projects`} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Projects</a>
            <a href={`${base}#about`} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a>
            <a href={`${base}founders`} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Founders</a>
            <a
              href={`${base}founders`}
              className="bg-brand-blue text-white text-sm font-medium px-5 py-2.5 rounded-full text-center hover:bg-blue-600 transition-colors mt-2"
            >
              Meet the Team
            </a>
            <button
              className="w-9 h-9 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors self-start"
              aria-label="Toggle theme"
              aria-pressed={isDark}
              onClick={toggleTheme}
              type="button"
            >
              {themeIcon}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
