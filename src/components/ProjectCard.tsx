import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  features: string[];
  gradient: string;
  imageSrc?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, features, gradient, imageSrc }) => {
  return (
    <div className={`card bg-base-100 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] ${gradient}`}>
      {imageSrc && (
        <figure className="px-6 pt-6">
          <img 
            src={imageSrc} 
            alt={`${title} screenshot`} 
            className="rounded-xl w-full h-48 object-cover shadow-md"
          />
        </figure>
      )}
      <div className="card-body">
        <h3 className="card-title text-3xl font-bold mb-4 text-deep-navy">{title}</h3>
        <p className="text-lg mb-6 text-gray-700 leading-relaxed">{description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-xl mb-3 text-mid-blue">Key Features:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg 
                  className="w-6 h-6 text-primary-cyan mr-2 flex-shrink-0 mt-0.5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary text-white hover:bg-mid-blue transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
