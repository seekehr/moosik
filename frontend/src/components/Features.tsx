
import React from 'react';
import { Music, Play, Share, Heart } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Music className="h-10 w-10 text-spotify-purple" />,
      title: "Universal Player",
      description: "Listen to music from any platform in one place without switching between apps."
    },
    {
      icon: <Share className="h-10 w-10 text-spotify-purple" />,
      title: "Easy Sharing",
      description: "Share music with friends regardless of what service they use."
    },
    {
      icon: <Play className="h-10 w-10 text-spotify-purple" />,
      title: "Quick Conversion",
      description: "Convert links instantly with our lightning-fast processing."
    },
    {
      icon: <Heart className="h-10 w-10 text-spotify-purple" />,
      title: "Playlist Support",
      description: "Convert entire playlists with a single click to your preferred platform."
    }
  ];

  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Use Moosik?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-spotify-darkgray rounded-lg p-6 hover:bg-opacity-80 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 bg-spotify-black/50 rounded-full w-16 h-16 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-spotify-lightgray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
