import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return <aside className="hidden md:block w-64 bg-blue-900 text-white p-6">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/" className="block py-2 px-4 hover:bg-blue-800 rounded-md transition-colors duration-200 border-l-4 border-transparent hover:border-blue-300">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/sobre-nosotros" className="block py-2 px-4 hover:bg-blue-800 rounded-md transition-colors duration-200 border-l-4 border-transparent hover:border-blue-300">
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link to="/apnea" className="block py-2 px-4 hover:bg-blue-800 rounded-md transition-colors duration-200 border-l-4 border-transparent hover:border-blue-300">
              ¿Qué es la Apnea?
            </Link>
          </li>
          <li>
            <Link to="/actividades" className="block py-2 px-4 hover:bg-blue-800 rounded-md transition-colors duration-200 border-l-4 border-transparent hover:border-blue-300">
              Actividades
            </Link>
          </li>
          <li>
            <Link to="/galeria" className="block py-2 px-4 hover:bg-blue-800 rounded-md transition-colors duration-200 border-l-4 border-transparent hover:border-blue-300">
              Galería
            </Link>
          </li>
          <li>
            <Link to="/asociate" className="block py-2 px-4 hover:bg-blue-800 rounded-md transition-colors duration-200 border-l-4 border-transparent hover:border-blue-300">
              Asociate
            </Link>
          </li>
        </ul>
      </nav>
    </aside>;
};
export default Sidebar;