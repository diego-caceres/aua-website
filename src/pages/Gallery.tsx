import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const imageSections = {
  "apnea-profundidad": {
    title: "Apnea de Profundidad",
    images: [
      "/gallery/deep1.jpg",
      "/gallery/deep1.jpg",
      "/gallery/deep1.jpg",
      "/gallery/deep1.jpg",
    ],
  },
  "exploracion-submarina": {
    title: "Exploración Submarina",
    images: [
      "/gallery/sea1.jpg",
      "/gallery/sea1.jpg",
      "/gallery/sea1.jpg",
      "/gallery/sea1.jpg",
    ],
  },
  entrenamiento: {
    title: "Entrenamiento",
    images: ["/gallery/pool1.jpg", "/gallery/pool1.jpg", "/gallery/pool1.jpg"],
  },
};

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-white relative">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            ← Volver al inicio
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-8 border-l-4 border-blue-400 pl-3">
          Galería Completa
        </h1>

        {Object.entries(imageSections).map(([sectionId, section]) => (
          <section key={sectionId} className="mb-16">
            <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-400 pl-3">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.images.map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg bg-black bg-opacity-30 backdrop-blur-sm"
                >
                  <img
                    src={image}
                    alt={`${section.title} ${index + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
