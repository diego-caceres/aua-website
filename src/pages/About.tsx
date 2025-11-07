import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { estatutosLink } from "../constants/info";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-white relative">
      <div className="container mx-auto px-6 py-12">
        <div>
          <Link
            to="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-8 md:mb-0 md:fixed md:left-6 md:top-36 md:z-20 md:bg-black md:bg-opacity-40 md:px-3 md:py-1 md:rounded-full md:shadow-lg"
            style={{ pointerEvents: 'auto' }}
          >
            ← Inicio
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8 border-l-4 border-blue-400 pl-3">
          Sobre Nosotros
        </h1>

        <div className="space-y-8">
          <section className="bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Nuestra Historia</h2>
            <p className="text-lg leading-relaxed">
              La Asociación Uruguaya de Apneistas (AUA) es la filial oficial de
              AIDA Uruguay, dedicada a promover y desarrollar el deporte de la
              apnea en nuestro país.
            </p>
          </section>

          <section className="bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
            <p className="text-lg leading-relaxed">
              Fomentar la práctica segura de la apnea y crear una comunidad de apneistas comprometidos con el
              deporte y el medio ambiente marino.
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

          <section className="bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Documentos Importantes</h2>
            <div className="space-y-3">
              <div>
                <a
                  href={estatutosLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300"
                >
                  Estatutos de la AUA
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
