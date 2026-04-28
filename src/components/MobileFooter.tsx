import React, { useState } from "react";
import { Instagram, Mail, Phone } from "lucide-react";
import ContactModal from "./ContactModal";
import DiceBrand from "./diego-caceres/DiceBrand";

const MobileFooter = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  return (
    <>
    <footer className="md:hidden bg-blue-950 text-white py-4 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/aida_uruguay"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://wa.me/59812345678"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors"
            >
              <Phone size={20} />
            </a>
            <button
              onClick={() => setContactModalOpen(true)}
              className="hover:text-blue-300 transition-colors"
            >
              <Mail size={20} />
            </button>
          </div>
          <div className="text-center space-y-2">
            <p className="text-xs text-blue-300">
              © {new Date().getFullYear()} Asociación Uruguaya de Apneistas
            </p>
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

export default MobileFooter;
