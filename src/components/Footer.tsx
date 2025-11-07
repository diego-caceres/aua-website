import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";
import { contactEmail } from "../constants/info";

const Footer = () => {
  return (
    <footer className="hidden md:block bg-blue-950 text-white py-4 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            {/* <img
              src="/WhatsApp_Image_2025-07-27_at_11.06.30.jpg"
              alt="AUA Logo"
              className="h-12 mb-2"
            /> */}
            <p className="text-sm text-blue-300">
              © {new Date().getFullYear()} Asociación Uruguaya de Apneistas
            </p>
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors"
            >
              <Instagram size={24} />
            </a>
            
            <a
                href={`mailto:${contactEmail}`}
              className="hover:text-blue-300 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
          <div>
            <Link
              to="/legales"
              className="text-sm text-blue-300 hover:underline"
            >
              Términos legales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
