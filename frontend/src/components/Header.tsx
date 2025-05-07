
import React from 'react';
import { Music } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full flex items-center justify-between py-6 px-6 md:px-12">
      <div className="flex items-center space-x-2">
        <Music className="h-8 w-8 text-spotify-purple" />
        <h1 className="text-xl font-bold">Moosik</h1>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#features" className="text-spotify-lightgray hover:text-white transition-colors duration-200">
          Features
        </a>
        <a href="#how-it-works" className="text-spotify-lightgray hover:text-white transition-colors duration-200">
          How It Works
        </a>
        <a href="#about" className="text-spotify-lightgray hover:text-white transition-colors duration-200">
          About
        </a>
      </nav>
    </header>
  );
};

export default Header;
