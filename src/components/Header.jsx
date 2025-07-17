import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/shyft-logo.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      <div className="flex items-center">
        <img src={logo} alt="SHYFT X Logo" className="h-10 mr-3" />
        <span className="text-2xl font-bold text-gray-800">SHYFT X</span>
      </div>
      <nav className="space-x-6">
        <Link to="/" className="text-gray-700 hover:text-black">Home</Link>
        <Link to="/viewer" className="text-gray-700 hover:text-black">Video Player</Link>
        <Link to="/vr" className="text-gray-700 hover:text-black">VR Viewer</Link>
        <Link to="/about" className="text-gray-700 hover:text-black">About</Link>
      </nav>
    </header>
  );
};

export default Header;