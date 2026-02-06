import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero min-h-screen bg-gradient-to-br from-deep-navy via-mid-blue to-primary-cyan">
      <div className="hero-content text-center text-white">
        <div className="max-w-4xl">
          <h1 className="text-6xl font-bold mb-8 drop-shadow-lg">
            Welcome to <span className="text-primary-cyan">Sabr Labs</span>
          </h1>
          <p className="text-2xl mb-8 font-light drop-shadow">
            Innovating Healthcare Solutions with Clarity and Energy
          </p>
          <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            We build transformative healthcare technologies that empower individuals 
            and professionals to make informed decisions with confidence.
          </p>
          <a 
            href="#projects" 
            className="btn btn-primary btn-lg text-deep-navy hover:scale-105 transition-transform"
          >
            View Our Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
