
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Copy Your Link",
      description: "Copy a music link from your favorite streaming platform like Spotify, YouTube, or SoundCloud."
    },
    {
      number: "02",
      title: "Paste & Convert",
      description: "Paste the link into our converter and let our technology do the magic."
    },
    {
      number: "03",
      title: "Enjoy Anywhere",
      description: "Listen to your music on any platform or share with friends regardless of what service they use."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 bg-spotify-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-spotify-darkgray rounded-lg p-8 h-full">
                <span className="text-5xl font-bold text-spotify-purple opacity-30">{step.number}</span>
                <h3 className="text-2xl font-semibold mt-4 mb-3">{step.title}</h3>
                <p className="text-spotify-lightgray">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg className="w-8 h-8 text-spotify-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
