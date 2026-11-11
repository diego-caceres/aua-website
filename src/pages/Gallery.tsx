import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import BackButton from "../components/BackButton";
import { imageSections, thumb } from "../constants/imageSections";
import ImageModal from "../components/ImageModal";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAltText, setSelectedAltText] = useState<string>('');
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const { hash } = useLocation();

  // Land on the section named in the URL hash (e.g. /gallery#entrenamiento), otherwise at the top
  useEffect(() => {
    const mainContent = document.querySelector('main');
    if (!mainContent) return;
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (target) {
      const top =
        mainContent.scrollTop +
        target.getBoundingClientRect().top -
        mainContent.getBoundingClientRect().top -
        32;
      mainContent.scrollTo({ top });
    } else {
      mainContent.scrollTo({ top: 0 });
    }
  }, [hash]);

  const handleImageLoad = (image: string) => {
    setLoadedImages(prev => new Set(prev).add(image));
  };

  return (
    <div className="text-white relative">
      <div className="container mx-auto px-6 py-12">
        <BackButton to="/" />
        
        <h1 className="text-4xl font-bold mb-8 border-l-4 border-blue-400 pl-3">
          Galería Completa
        </h1>

        <Link
          to="/inmersion-360"
          className="flex items-center gap-4 mb-10 p-5 rounded-xl bg-blue-900/60 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/60 hover:bg-blue-800/60 transition-all duration-300 group"
        >
          <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
            <Play size={24} className="text-blue-300 ml-1" />
          </div>
          <div className="min-w-0">
            <h2 className="text-lg font-semibold text-white group-hover:text-blue-200 transition-colors duration-300">
              Inmersión en 360°
            </h2>
            <p className="text-blue-300/80 text-sm">
              Explorá una inmersión completa en video esférico filmado con Insta360
            </p>
          </div>
          <span className="ml-auto flex-shrink-0 inline-flex items-center gap-1.5 whitespace-nowrap text-blue-300 group-hover:text-blue-200 transition-colors duration-300 text-sm font-medium">
            <span className="hidden sm:inline">Ver video</span>
            <ArrowRight size={18} />
          </span>
        </Link>

        {Object.entries(imageSections).map(([sectionId, section]) => (
          <section key={sectionId} id={sectionId} className="mb-16">
            <h2 className="text-2xl font-semibold mb-5 pb-2 border-b border-white/20">
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
                      src={thumb(image)}
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
