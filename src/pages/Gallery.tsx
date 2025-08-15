import React from 'react';
const Gallery = () => {
  const images = [{
    url: "/WhatsApp_Image_2025-07-27_at_13.34.05.jpg",
    caption: 'Apnea de profundidad con cuerda guía'
  }, {
    url: "/WhatsApp_Image_2025-07-27_at_13.35.06.jpg",
    caption: 'Exploración submarina en grupo'
  }, {
    url: "/image00063.jpg",
    caption: 'Entrenamiento en piscina'
  }
  // Aquí se podrían agregar más imágenes para la galería completa
  ];
  return <div className="container mx-auto px-6 py-12 text-white">
      <h1 className="text-3xl font-bold mb-8 border-l-4 border-blue-400 pl-3">
        Galería de Imágenes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => <div key={index} className="overflow-hidden rounded-lg bg-blue-900 bg-opacity-50">
            <img src={image.url} alt={image.caption} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            <div className="p-4">
              <p className="text-lg">{image.caption}</p>
            </div>
          </div>)}
      </div>
    </div>;
};
export default Gallery;