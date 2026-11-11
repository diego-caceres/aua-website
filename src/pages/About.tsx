import React, { useEffect } from "react";
import { estatutosLink, actasAsambleasLink } from "../constants/info";
import DirectivaSection from "../components/DirectivaSection";
import BackButton from "../components/BackButton";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-white relative">
      <div className="container mx-auto px-6 py-12">
        <BackButton to="/" />

        <h1 className="text-4xl font-bold mb-8 border-l-4 border-blue-400 pl-3">
          Sobre Nosotros
        </h1>

        <div className="space-y-8">
          <p className="max-w-[60ch] text-xl md:text-2xl leading-relaxed text-white/95">
            La Asociación Uruguaya de Apneistas (AUA) es la filial oficial de
            AIDA Uruguay, dedicada a promover y desarrollar el deporte de la
            apnea en nuestro país.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 pt-8 border-t border-white/15">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Nuestra Misión</h2>
              <p className="text-lg leading-relaxed text-white/90">
                Fomentar la práctica segura de la apnea y crear una comunidad de apneistas comprometidos con el
                deporte y el medio ambiente marino.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Nuestros Valores</h2>
              <ul className="text-lg leading-relaxed text-white/90 space-y-2">
                <li>• Seguridad ante todo</li>
                <li>• Respeto por el medio ambiente</li>
                <li>• Formación continua</li>
                <li>• Compañerismo y apoyo mutuo</li>
              </ul>
            </section>
          </div>

          <DirectivaSection />

          <section className="bg-white/5 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Documentos Importantes</h2>
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
            <div className="space-y-3">
              <div>
                <a
                  href={actasAsambleasLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300"
                >
                  Actas de Asambleas Generales
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
