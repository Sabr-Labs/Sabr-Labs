import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar bg-deep-navy text-white shadow-lg">
      <div className="container mx-auto">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-xl font-bold text-primary-cyan">
            Sabr Labs
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#about" className="hover:text-primary-cyan">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-primary-cyan">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary-cyan">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
