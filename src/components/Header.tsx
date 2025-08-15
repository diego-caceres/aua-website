import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon } from 'lucide-react';
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return <header className="bg-blue-950 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/WhatsApp_Image_2025-07-27_at_11.06.30.jpg" alt="AUA Logo" className="h-14 mr-2" />
            <div className="hidden md:block">
              <h1 className="text-xl font-semibold">
                Asociación Uruguaya de Apneistas
              </h1>
              <p className="text-xs text-blue-300">Filial AIDA Uruguay</p>
            </div>
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="/contacto" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300 mr-4">
            Contacto
          </Link>
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <MenuIcon size={24} />
          </button>
        </div>
      </div>
      {mobileMenuOpen && <div className="md:hidden bg-blue-900 px-4 py-2">
          <nav>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="block py-1 px-2 hover:bg-blue-800 rounded">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="block py-1 px-2 hover:bg-blue-800 rounded">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/apnea" className="block py-1 px-2 hover:bg-blue-800 rounded">
                  ¿Qué es la Apnea?
                </Link>
              </li>
              <li>
                <Link to="/actividades" className="block py-1 px-2 hover:bg-blue-800 rounded">
                  Actividades
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="block py-1 px-2 hover:bg-blue-800 rounded">
                  Galería
                </Link>
              </li>
              <li>
                <Link to="/asociate" className="block py-1 px-2 hover:bg-blue-800 rounded">
                  Asociate
                </Link>
              </li>
            </ul>
          </nav>
        </div>}
    </header>;
};
export default Header;