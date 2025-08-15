import React from 'react';
import { Link } from 'react-router-dom';

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  const mainContent = document.querySelector('main');
  if (element && mainContent) {
    // Get the actual header height including mobile menu if open
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 80;
    const elementTop = element.offsetTop - headerHeight - 20; // Extra padding
    mainContent.scrollTo({ top: elementTop, behavior: 'smooth' });
  }
};

const scrollToTop = () => {
  const mainContent = document.querySelector('main');
  if (mainContent) {
    mainContent.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const Sidebar = () => {
  return <aside className="hidden md:block w-64 bg-blue-900 text-white p-6 flex-shrink-0 sticky top-0 h-screen overflow-y-auto">
      <nav>
        <ul className="space-y-4">
          <li>
            <button 
              onClick={scrollToTop}
              className="block w-full text-left py-2 px-4 hover:bg-blue-800 rounded-md transition-colors duration-200 border-l-4 border-transparent hover:border-blue-300"
            >
              Inicio
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('sobre-nosotros')}
              className="block w-full text-left py-2 px-4 hover:bg-blue-800 rounded-md transition-colors duration-200 border-l-4 border-transparent hover:border-blue-300"
            >
              Sobre Nosotros
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('apnea')}
              className="block w-full text-left py-2 px-4 hover:bg-blue-800 rounded-md transition-colors duration-200 border-l-4 border-transparent hover:border-blue-300"
            >
              ¿Qué es la Apnea?
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('actividades')}
              className="block w-full text-left py-2 px-4 hover:bg-blue-800 rounded-md transition-colors duration-200 border-l-4 border-transparent hover:border-blue-300"
            >
              Actividades
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('galeria')}
              className="block w-full text-left py-2 px-4 hover:bg-blue-800 rounded-md transition-colors duration-200 border-l-4 border-transparent hover:border-blue-300"
            >
              Galería
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('asociate')}
              className="block w-full text-left py-2 px-4 hover:bg-blue-800 rounded-md transition-colors duration-200 border-l-4 border-transparent hover:border-blue-300"
            >
              Asociate
            </button>
          </li>
        </ul>
      </nav>
    </aside>;
};
export default Sidebar;
