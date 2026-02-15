import React from "react";

interface HeroProps {
  base?: string;
}

const Hero: React.FC<HeroProps> = ({ base = "" }) => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-white to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 overflow-hidden">
      {/* Subtle radial gradient for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-brand-accent/5 via-transparent to-transparent dark:from-brand-accent/10 dark:via-transparent dark:to-transparent opacity-40" />

      <div className="container relative mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Software for Everyday Life
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight text-gray-900 dark:text-white mb-6">
              Building Tools <br className="hidden sm:block" />
              That Simplify <br className="hidden sm:block" />
              <span className="text-brand-blue">Daily Life</span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed">
              Sabr Labs is two engineers who love creating software that eases
              everyday life. From personal organisation to planning life's
              biggest moments, we build tools born from our own experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-brand-blue text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-blue-600 transition-colors"
              >
                See Our Projects
              </a>
              <a
                href={`${base}founders`}
                className="flex items-center gap-2 text-gray-900 dark:text-white font-semibold px-7 py-3.5 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Meet the Founders
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right visual - Sabr Labs logo */}
          <div className="relative flex items-center justify-center">
            {/* Directional glow with hue variation */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-brand-accent/15 to-transparent dark:from-brand-blue/30 dark:via-brand-accent/25 dark:to-transparent blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-tl from-brand-accent/10 to-transparent dark:from-brand-accent/20 dark:to-transparent blur-2xl" />

            <div className="relative bg-gradient-to-br from-white/60 via-brand-blue/5 to-brand-accent/10 dark:from-gray-800/80 dark:via-gray-800/60 dark:to-gray-800/40 rounded-xl p-12 w-full flex items-center justify-center backdrop-blur-sm border border-gray-200/50 dark:border-transparent shadow-sm dark:shadow-[0_8px_32px_rgba(11,140,233,0.15),0_0_0_1px_rgba(255,255,255,0.02)]">
              <img
                src={`${base}logo.svg`}
                alt="Sabr Labs"
                className="max-w-xs md:max-w-sm w-full h-auto drop-shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
