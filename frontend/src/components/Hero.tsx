
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Headphones } from 'lucide-react';
import { toast } from 'sonner';

const Hero: React.FC = () => {
  const [musicLink, setMusicLink] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!musicLink.trim()) {
      toast.error("Please enter a music link");
      return;
    }
    
    // Here you would handle the link submission
    toast.success("Link submitted successfully!");
    setMusicLink('');
  };

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-20">
      {/* Animated backgrounds */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-spotify-purple/20 rounded-full filter blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-spotify-purple/10 rounded-full filter blur-3xl animate-float" />
      
      <div className="max-w-4xl w-full mx-auto text-center z-10">
        <Headphones className="mx-auto h-16 w-16 text-spotify-purple mb-6 animate-float" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-spotify-purple to-spotify-green bg-clip-text text-transparent">
          Transform Your Music Experience
        </h1>
        <p className="text-xl text-spotify-lightgray mb-12 max-w-2xl mx-auto">
          Discover a new way to listen. Simply paste your music link below and let the magic happen.
        </p>
        
        <div className="bg-spotify-darkgray p-1 rounded-full shadow-2xl max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center">
            <input
              type="text"
              className="link-input flex-grow"
              placeholder="Paste your Spotify, YouTube, or SoundCloud link here..."
              value={musicLink}
              onChange={(e) => setMusicLink(e.target.value)}
            />
            <Button 
              type="submit" 
              className="btn-spotify md:ml-2 mt-3 md:mt-0 w-full md:w-auto"
            >
              Convert Link
            </Button>
          </form>
        </div>
        
        <div className="mt-12 text-sm text-spotify-lightgray">
          <p>Works with Spotify, YouTube Music, SoundCloud, Apple Music and more</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
