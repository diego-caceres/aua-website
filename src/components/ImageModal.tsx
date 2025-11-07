import React from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  imageUrl: string;
  altText: string;
  onClose: () => void;
}

const ImageModal = ({ imageUrl, altText, onClose }: ImageModalProps) => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm"
      onClick={onClose}
    >
      <button 
        className="absolute top-4 right-4 text-white hover:text-blue-300 transition-colors"
        onClick={onClose}
      >
        <X size={32} />
      </button>
      <div 
        className="max-w-[90vw] max-h-[90vh] relative"
        onClick={e => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt={altText}
          className="max-w-full max-h-[90vh] object-contain"
        />
      </div>
    </div>
  );
};

export default ImageModal;