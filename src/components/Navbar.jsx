// src/components/Navbar.jsx

import React from 'react';

const Navbar = ({ onNavClick }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <button
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            onClick={() => onNavClick('home')}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            onClick={() => onNavClick('about')}
          >
            About
          </button>
        </li>
        {/* Add more navigation buttons as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
