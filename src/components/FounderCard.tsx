import React from 'react';

interface FounderCardProps {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

const FounderCard: React.FC<FounderCardProps> = ({ name, role, bio, initials }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="mb-6">
          <div
            className="bg-gradient-to-br from-brand-blue to-brand-accent text-white rounded-full w-28 h-28 flex items-center justify-center"
            aria-label={`${name}'s profile picture`}
          >
            <span className="text-3xl font-bold">{initials}</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-brand-dark">{name}</h3>
        <p className="text-brand-blue font-semibold mb-4">{role}</p>
        <p className="text-gray-500 leading-relaxed max-w-md text-sm">{bio}</p>
      </div>
    </div>
  );
};

export default FounderCard;
