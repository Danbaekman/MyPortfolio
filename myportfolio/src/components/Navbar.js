import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-bold">SH's Portfolio</a>
        <div className="flex space-x-4">
          <Link to="about" smooth={true} duration={500} className="text-gray-300 hover:text-white cursor-pointer">About Me</Link>
          <Link to="skills" smooth={true} duration={500} className="text-gray-300 hover:text-white cursor-pointer">Skills</Link>
          <Link to="projects" smooth={true} duration={500} className="text-gray-300 hover:text-white cursor-pointer">Projects</Link>
          <Link to="career" smooth={true} duration={500} className="text-gray-300 hover:text-white cursor-pointer">Career</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
