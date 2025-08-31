import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-white relative">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            ← Volver al inicio
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-8 border-l-4 border-blue-400 pl-3">
          Sobre Nosotros
        </h1>

        <div className="space-y-8">
          <section className="bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Nuestra Historia</h2>
            <p className="text-lg leading-relaxed">
              La Asociación Uruguaya de Apneistas (AUA) es la filial oficial de AIDA Uruguay, 
              dedicada a promover y desarrollar el deporte de la apnea en nuestro país.
            </p>
          </section>

          <section className="bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
            <p className="text-lg leading-relaxed">
              Fomentar la práctica segura de la apnea, brindar formación de calidad y 
              crear una comunidad de apneistas comprometidos con el deporte y el medio ambiente marino.
            </p>
          </section>

          <section className="bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Nuestros Valores</h2>
            <ul className="text-lg leading-relaxed space-y-2">
              <li>• Seguridad ante todo</li>
              <li>• Respeto por el medio ambiente</li>
              <li>• Formación continua</li>
              <li>• Compañerismo y apoyo mutuo</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
