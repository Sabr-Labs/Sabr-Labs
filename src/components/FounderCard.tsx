import React from 'react';

interface FounderCardProps {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

const FounderCard: React.FC<FounderCardProps> = ({ name, role, bio, initials }) => {
  return (
    <div className="card bg-base-100 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]">
      <div className="card-body items-center text-center">
        <div className="avatar placeholder mb-6">
          <div className="bg-gradient-to-br from-primary-cyan to-mid-blue text-white rounded-full w-32 h-32">
            <span className="text-4xl font-bold">{initials}</span>
          </div>
        </div>
        <h3 className="card-title text-3xl font-bold text-deep-navy">{name}</h3>
        <p className="text-lg text-primary-cyan font-semibold mb-4">{role}</p>
        <p className="text-gray-700 leading-relaxed max-w-md">{bio}</p>
      </div>
    </div>
  );
};

export default FounderCard;
