import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Activities = () => {
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
          Nuestras Actividades
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Apnea de Profundidad</h2>
            <p className="text-lg leading-relaxed mb-4">
              Descensos verticales con cuerda guía para alcanzar las máximas profundidades 
              de forma segura y controlada.
            </p>
            <ul className="space-y-2">
              <li>• Entrenamientos semanales</li>
              <li>• Competencias nacionales</li>
              <li>• Certificaciones AIDA</li>
            </ul>
          </section>

          <section className="bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Exploración Submarina</h2>
            <p className="text-lg leading-relaxed mb-4">
              Inmersiones recreativas para explorar la vida marina y los fondos 
              de nuestras costas uruguayas.
            </p>
            <ul className="space-y-2">
              <li>• Salidas grupales</li>
              <li>• Fotografía submarina</li>
              <li>• Conservación marina</li>
            </ul>
          </section>

          <section className="bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Entrenamiento en Piscina</h2>
            <p className="text-lg leading-relaxed mb-4">
              Sesiones de entrenamiento técnico para mejorar la capacidad pulmonar 
              y las técnicas de apnea.
            </p>
            <ul className="space-y-2">
              <li>• Apnea estática</li>
              <li>• Apnea dinámica</li>
              <li>• Técnicas de respiración</li>
            </ul>
          </section>

          <section className="bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Cursos y Certificaciones</h2>
            <p className="text-lg leading-relaxed mb-4">
              Formación oficial AIDA desde nivel principiante hasta instructor.
            </p>
            <ul className="space-y-2">
              <li>• AIDA 1 - Principiante</li>
              <li>• AIDA 2 - Intermedio</li>
              <li>• AIDA 3 - Avanzado</li>
              <li>• Cursos de instructor</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Activities;
