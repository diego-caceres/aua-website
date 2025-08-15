import React, { useEffect, useState } from 'react';

const ScrollBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const mainContent = document.querySelector('main');
      if (mainContent) {
        setScrollY(mainContent.scrollTop);
      }
    };

    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.addEventListener('scroll', handleScroll);
      return () => mainContent.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Calculate background color based on scroll position
  const maxScroll = 2000; // Adjust this value based on your content height
  const scrollProgress = Math.min(scrollY / maxScroll, 1);
  
  // Interpolate between light blue and dark blue
  const lightBlue = { r: 59, g: 130, b: 246 }; // blue-500
  const darkBlue = { r: 30, g: 58, b: 138 }; // blue-900
  
  const currentColor = {
    r: Math.round(lightBlue.r + (darkBlue.r - lightBlue.r) * scrollProgress),
    g: Math.round(lightBlue.g + (darkBlue.g - lightBlue.g) * scrollProgress),
    b: Math.round(lightBlue.b + (darkBlue.b - lightBlue.b) * scrollProgress)
  };

  // Fish positions based on scroll
  const fish1X = 50 + Math.sin(scrollY * 0.001) * 30;
  const fish1Y = 20 + Math.cos(scrollY * 0.0008) * 15;
  const fish2X = 80 + Math.sin(scrollY * 0.0012 + Math.PI) * 25;
  const fish2Y = 60 + Math.cos(scrollY * 0.001 + Math.PI) * 20;
  const fish3X = 20 + Math.sin(scrollY * 0.0015 + Math.PI/2) * 35;
  const fish3Y = 80 + Math.cos(scrollY * 0.0009 + Math.PI/2) * 10;

  return (
    <div 
      className="fixed inset-0 -z-10 transition-colors duration-300"
      style={{
        background: `linear-gradient(135deg, 
          rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b}) 0%, 
          rgb(${Math.max(currentColor.r - 40, 0)}, ${Math.max(currentColor.g - 40, 0)}, ${Math.max(currentColor.b - 20, 0)}) 100%)`
      }}
    >
      {/* Fish 1 - Red Snapper */}
      <div
        className="absolute opacity-20 transition-all duration-1000 ease-out"
        style={{
          left: `${fish1X}%`,
          top: `${fish1Y}%`,
          transform: `scale(${0.8 + scrollProgress * 0.4})`
        }}
      >
        <img 
          src="/fishes/fish-shape-of-red-snapper-svgrepo-com.svg" 
          alt="Fish" 
          className="w-24 h-16 filter brightness-0 invert opacity-60"
        />
      </div>

      {/* Fish 2 - Regular Fish */}
      <div
        className="absolute opacity-15 transition-all duration-1000 ease-out"
        style={{
          left: `${fish2X}%`,
          top: `${fish2Y}%`,
          transform: `scale(${1.2 + scrollProgress * 0.3}) scaleX(-1)`
        }}
      >
        <img 
          src="/fishes/fish-2-svgrepo-com.svg" 
          alt="Fish" 
          className="w-18 h-12 filter brightness-0 invert opacity-50"
        />
      </div>

      {/* Fish 3 - Shark */}
      <div
        className="absolute opacity-25 transition-all duration-1000 ease-out"
        style={{
          left: `${fish3X}%`,
          top: `${fish3Y}%`,
          transform: `scale(${0.6 + scrollProgress * 0.5})`
        }}
      >
        <img 
          src="/fishes/shark.svg" 
          alt="Shark" 
          className="w-20 h-14 filter brightness-0 invert opacity-40"
        />
      </div>

      {/* Fish 4 - Manta Ray */}
      <div
        className="absolute opacity-30 transition-all duration-1000 ease-out"
        style={{
          left: `${30 + Math.sin(scrollY * 0.0008 + Math.PI/4) * 20}%`,
          top: `${40 + Math.cos(scrollY * 0.0006 + Math.PI/4) * 25}%`,
          transform: `scale(${1.0 + scrollProgress * 0.2})`
        }}
      >
        <img 
          src="/fishes/manta-ray-svgrepo-com.svg" 
          alt="Manta Ray" 
          className="w-28 h-18 filter brightness-0 invert opacity-30"
        />
      </div>

      {/* Bubbles */}
      <div
        className="absolute opacity-10"
        style={{
          left: `${10 + Math.sin(scrollY * 0.002) * 5}%`,
          top: `${30 + scrollY * 0.05 % 100}%`
        }}
      >
        <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
      </div>
      <div
        className="absolute opacity-10"
        style={{
          left: `${70 + Math.cos(scrollY * 0.0025) * 8}%`,
          top: `${50 + scrollY * 0.03 % 100}%`
        }}
      >
        <div className="w-3 h-3 bg-white rounded-full opacity-40"></div>
      </div>
      <div
        className="absolute opacity-10"
        style={{
          left: `${40 + Math.sin(scrollY * 0.003 + Math.PI/3) * 6}%`,
          top: `${70 + scrollY * 0.04 % 100}%`
        }}
      >
        <div className="w-1 h-1 bg-white rounded-full opacity-80"></div>
      </div>
    </div>
  );
};

export default ScrollBackground;
