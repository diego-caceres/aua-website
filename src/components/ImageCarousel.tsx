import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { imageSections } from '../constants/imageSections';

const images = [  
  {
    url: imageSections["exploracion-submarina"].images[0],
    caption: 'Exploración submarina en grupo'
  },
  {
    url: imageSections.entrenamiento.images[0],
    caption: 'Entrenamiento en piscina'
  },
  {
    url: imageSections["apnea-profundidad"].images[0],
    caption: 'Apnea de profundidad con cuerda guía'
  }
];
const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return <div className="relative w-full h-96 my-8">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-lg overflow-hidden" style={{
      backgroundImage: `url(${images[currentIndex].url})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
          <p className="text-xl font-semibold mb-2">
            {images[currentIndex].caption}
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('galeria');
              const mainContent = document.querySelector('main');
              if (element && mainContent) {
                const header = document.querySelector('header');
                const headerHeight = header ? header.offsetHeight : 80;
                const elementTop = element.offsetTop - headerHeight - 20;
                mainContent.scrollTo({ top: elementTop, behavior: 'smooth' });
              }
            }}
            className="inline-block text-blue-300 hover:text-blue-200 underline"
          >
            Ver más imágenes
          </button>
        </div>
        <button onClick={goToPrevious} className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70 transition-all">
          <ChevronLeft size={24} />
        </button>
        <button onClick={goToNext} className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70 transition-all">
          <ChevronRight size={24} />
        </button>
        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, idx) => <button key={idx} onClick={() => setCurrentIndex(idx)} className={`w-3 h-3 rounded-full ${idx === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'}`} />)}
        </div>
      </div>
    </div>;
};
export default ImageCarousel;
