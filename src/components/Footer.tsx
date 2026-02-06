import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-emerald-400 rounded-lg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="2" width="5" height="5" rx="1" fill="white" opacity="0.9" />
                  <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.7" />
                  <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.7" />
                  <rect x="9" y="9" width="5" height="5" rx="1" fill="white" opacity="0.5" />
                </svg>
              </div>
              <span className="text-lg font-bold">Sabr Labs</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Leading the future of technology and
              data science with precision and
              innovation. Headquartered in Silicon
              Valley.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Capabilities</h4>
            <ul className="space-y-3">
              <li><a href="#expertise" className="text-gray-300 text-sm hover:text-white transition-colors">Computer Vision</a></li>
              <li><a href="#expertise" className="text-gray-300 text-sm hover:text-white transition-colors">Natural Language Processing</a></li>
              <li><a href="#expertise" className="text-gray-300 text-sm hover:text-white transition-colors">Cloud Migrations</a></li>
              <li><a href="#expertise" className="text-gray-300 text-sm hover:text-white transition-colors">Big Data Strategy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Receive insights on the latest technology and data trends.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-white/10 border border-white/10 rounded-l-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue"
              />
              <button
                type="submit"
                className="bg-brand-blue text-white text-sm font-medium px-5 py-2.5 rounded-r-lg hover:bg-blue-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} Sabr Labs Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 text-xs hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-xs hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 text-xs hover:text-gray-300 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
