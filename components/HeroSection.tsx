import React from 'react';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-20 bg-linear-to-b from-brand-beige to-brand-peach/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-800 dark:text-gray-100">
              Learning Blooms with{' '}
              <span className="text-brand-gold">Saroj Vidyalaya</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Discover knowledge freely in our digital garden. Saroj Vidyalaya 
              nurtures curiosity through joyful exploration, not rigid paths.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/lotus.png" 
                  alt="Lotus Flower representing Saroj - beauty rising from challenges" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;