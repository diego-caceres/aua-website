import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu as MenuIcon } from "lucide-react";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  const mainContent = document.querySelector("main");
  if (element && mainContent) {
    // Get the actual header height including mobile menu if open
    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 80;
    const elementTop = element.offsetTop - headerHeight - 20; // Extra padding
    mainContent.scrollTo({ top: elementTop, behavior: "smooth" });
  }
};

const scrollToTop = () => {
  const mainContent = document.querySelector("main");
  if (mainContent) {
    mainContent.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-blue-950 text-white">
      <div className="px-10  py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="flex items-start flex-col">
              <img
                src="/images/aua_white.png"
                alt="AUA Logo"
                className="h-14 mr-2"
              />
              <p className="text-xs text-blue-300">Filial AIDA Uruguay</p>
              <h1 className="text-xl font-semibold hidden">
                Asociación Uruguaya de Apneistas
              </h1>
            </div>
          </Link>
        </div>
        <div className="flex items-center">
          <nav className="hidden md:flex space-x-8 mr-6">
            <Link
              to="/gallery"
              className="text-white hover:text-blue-300 transition-colors duration-300"
            >
              Galería
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-blue-300 transition-colors duration-300"
            >
              Sobre Nosotros
            </Link>
            <Link
              to="/activities"
              className="text-white hover:text-blue-300 transition-colors duration-300"
            >
              Actividades
            </Link>
          </nav>
          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300 mr-2"
          >
            Contacto
          </Link>
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <MenuIcon size={24} />
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-900 px-4 py-2">
          <nav>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-left py-1 px-2 hover:bg-blue-800 rounded"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-left py-1 px-2 hover:bg-blue-800 rounded"
                >
                  Galería
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-left py-1 px-2 hover:bg-blue-800 rounded"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/activities"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-left py-1 px-2 hover:bg-blue-800 rounded"
                >
                  Actividades
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection("apnea");
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-1 px-2 hover:bg-blue-800 rounded"
                >
                  ¿Qué es la Apnea?
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollToSection("asociate");
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-1 px-2 hover:bg-blue-800 rounded"
                >
                  Asociate
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};
export default Header;
