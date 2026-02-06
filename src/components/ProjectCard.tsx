import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageBg?: string;
  iconType?: 'cloud' | 'pulse' | 'brain';
}

const icons: Record<string, React.ReactNode> = {
  cloud: (
    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  pulse: (
    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  brain: (
    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
    </svg>
  ),
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, imageBg = 'from-blue-50 to-cyan-50', iconType = 'cloud' }) => {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-xl transition-all duration-300">
      {/* Image area */}
      <div className={`bg-gradient-to-br ${imageBg} h-56 flex items-center justify-center relative overflow-hidden`}>
        <div className="text-brand-blue opacity-30 group-hover:opacity-50 transition-opacity">
          {icons[iconType] || icons.cloud}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-brand-dark mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
