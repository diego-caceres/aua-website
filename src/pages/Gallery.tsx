import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { imageSections } from "../constants/imageSections";
import ImageModal from "../components/ImageModal";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAltText, setSelectedAltText] = useState<string>('');

  useEffect(() => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

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
            <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-400 pl-3">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.images.map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg bg-black bg-opacity-30 backdrop-blur-sm cursor-pointer"
                  onClick={() => {
                    setSelectedImage(image);
                    setSelectedAltText(`${section.title} ${index + 1}`);
                  }}
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
