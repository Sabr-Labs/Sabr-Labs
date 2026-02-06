import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-brand-blue text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Next Generation Data Science
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight text-brand-dark mb-6">
              Transforming{' '}
              <br className="hidden sm:block" />
              Data into{' '}
              <br className="hidden sm:block" />
              <span className="text-brand-blue">Decisive{' '}</span>
              <br className="hidden sm:block" />
              <span className="text-brand-blue">Intelligence</span>
            </h1>

            <p className="text-lg text-gray-500 mb-8 max-w-lg leading-relaxed">
              Sabr Labs accelerates innovation through advanced machine
              learning, robust data architecture, and custom technology
              solutions tailored for complex enterprise challenges.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-brand-blue text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Explore Our Work
              </a>
              <a
                href="#expertise"
                className="flex items-center gap-2 text-brand-dark font-semibold px-7 py-3.5 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
              >
                View Expertise
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            {/* Dashboard mockup */}
            <div className="bg-brand-dark rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-gray-400 text-xs ml-2">Dashboard</span>
              </div>

              {/* Chart area */}
              <div className="bg-brand-navy/50 rounded-xl p-4 mb-4">
                <div className="flex items-end justify-between h-32 gap-1">
                  {/* SVG area chart */}
                  <svg viewBox="0 0 300 100" className="w-full h-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0B8CE9" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#0B8CE9" stopOpacity="0.05" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,80 Q30,70 60,60 T120,30 T180,45 T240,20 T300,35 V100 H0 Z"
                      fill="url(#chartGrad)"
                    />
                    <path
                      d="M0,80 Q30,70 60,60 T120,30 T180,45 T240,20 T300,35"
                      fill="none"
                      stroke="#0B8CE9"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
              </div>

              {/* Bar chart */}
              <div className="bg-brand-navy/50 rounded-xl p-4">
                <div className="flex items-end gap-2 h-16">
                  {[40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 65].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${h}%`,
                        backgroundColor: i === 6 ? '#0B8CE9' : i % 3 === 0 ? '#06B6D4' : '#1E3A5F',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating accuracy card */}
            <div className="absolute -bottom-4 -right-4 lg:right-0 bg-white rounded-xl shadow-lg border border-gray-100 p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B8CE9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Model Accuracy</p>
                <p className="text-xl font-bold text-brand-dark">99.4%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
