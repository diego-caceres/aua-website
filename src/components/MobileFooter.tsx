import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";

const MobileFooter = () => {
  return (
    <footer className="md:hidden bg-blue-950 text-white py-4 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="https://instagram.com"
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
            <a
              href="mailto:contacto.aidauruguay@gmail.com"
              className="hover:text-blue-300 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
          <div className="text-center">
            <p className="text-xs text-blue-300 mb-1">
              © {new Date().getFullYear()} Asociación Uruguaya de Apneistas
            </p>
            <Link
              to="/legales"
              className="text-xs text-blue-300 hover:underline"
            >
              Términos legales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MobileFooter;
