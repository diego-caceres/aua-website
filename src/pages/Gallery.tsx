import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { imageSections } from "../constants/imageSections";
import ImageModal from "../components/ImageModal";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAltText, setSelectedAltText] = useState<string>('');
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleImageLoad = (image: string) => {
    setLoadedImages(prev => new Set(prev).add(image));
  };

  return (
    <div className="text-white relative">
      <div className="container mx-auto px-6 py-12">
        <div>
          <Link
            to="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-8 md:mb-0 md:fixed md:left-6 md:top-36 md:z-20 md:bg-black md:bg-opacity-40 md:px-3 md:py-1 md:rounded-full md:shadow-lg"
            style={{ pointerEvents: 'auto' }}
          >
            ← Inicio
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-8 border-l-4 border-blue-400 pl-3">
          Galería Completa
        </h1>

        {Object.entries(imageSections).map(([sectionId, section]) => (
          <section key={sectionId} className="mb-16">
            <h2 className="text-xl font-semibold mb-5 pb-2 border-b border-white/20">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.images.map((image, index) => {
                const isLoaded = loadedImages.has(image);
                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-lg bg-black bg-opacity-30 backdrop-blur-sm cursor-pointer relative"
                    onClick={() => {
                      if (isLoaded) {
                        setSelectedImage(image);
                        setSelectedAltText(`${section.title} ${index + 1}`);
                      }
                    }}
                  >
                    {/* Skeleton loader */}
                    {!isLoaded && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-blue-800/50 to-blue-900/50 animate-pulse">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      </div>
                    )}

                    <img
                      src={image}
                      alt={`${section.title} ${index + 1}`}
                      className={`w-full h-64 object-cover transition-all duration-500 ${
                        isLoaded
                          ? 'opacity-100 hover:scale-105'
                          : 'opacity-0'
                      }`}
                      onLoad={() => handleImageLoad(image)}
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          altText={selectedAltText}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default Gallery;
