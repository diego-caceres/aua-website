import React, { useState } from "react";
import { Instagram, Mail } from "lucide-react";
import ContactModal from "./ContactModal";
import DiceBrand from "./diego-caceres/DiceBrand";

const Footer = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  return (
    <>
    <footer className="hidden md:block bg-blue-950 text-white py-4 mt-auto">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-center">
          <p className="absolute left-0 text-sm text-blue-300">
            © {new Date().getFullYear()} Asociación Uruguaya de Apneistas
          </p>
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/aida_uruguay"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <button
              onClick={() => setContactModalOpen(true)}
              className="hover:text-blue-300 transition-colors"
            >
              <Mail size={24} />
            </button>
          </div>
          <div className="absolute right-0">
            <DiceBrand 
              href="https://www.diegocaceres.dev/" 
              textColor="#e2e8f0"                  
              separatorColor="#f97316"                                                    
              diceColor="#f97316" 
            />
          </div>
        </div>
      </div>
    </footer>
    {contactModalOpen && <ContactModal onClose={() => setContactModalOpen(false)} />}
    </>
  );
};
export default Footer;
