
import React from 'react';
import { Music } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="about" className="bg-spotify-black pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-spotify-gray/20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Music className="h-6 w-6 text-spotify-purple" />
              <h3 className="text-lg font-bold">Moosik</h3>
            </div>
            <p className="text-spotify-lightgray mb-6 max-w-md">
              Breaking barriers between music platforms. Our service lets you share and enjoy music across all platforms.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase text-spotify-lightgray tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-spotify-lightgray hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-spotify-lightgray hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-spotify-lightgray hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase text-spotify-lightgray tracking-wider mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-spotify-lightgray hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="text-spotify-lightgray hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-spotify-lightgray hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-spotify-lightgray text-sm">
            © {new Date().getFullYear()} Moosik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
