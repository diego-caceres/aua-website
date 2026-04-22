import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Activities = () => {
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
          Nuestras Actividades
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white/5 rounded-lg p-8">
            <h2 className="text-xl font-semibold mb-4 text-white">Eventos</h2>
            <p className="text-lg leading-relaxed mb-4">
              Organizamos encuentros, charlas y talleres para compartir experiencias, intercambiar opiniones y seguir aprendiendo del deporte y del medio acuático y la vida que lo habita. Siendo parte de AUA, tenés acceso exclusivo a estos eventos.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Además, organizamos actividades para acercar el deporte al público en general y convocar a interesados a que puedan sumarse a la apnea con nosotros.
            </p>
          </section>

          <section className="bg-white/5 rounded-lg p-8">
            <h2 className="text-xl font-semibold mb-4 text-white">Competiciones</h2>
            <p className="text-lg leading-relaxed mb-4">
              Siendo parte de AUA, tendrás la posibilidad de participar en competiciones nacionales e internacionales (¡incluidos campeonatos mundiales!), representando a Uruguay.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              ¡Estate atento para que sigamos mejorando las marcas del país!
            </p>
          </section>

          <section className="bg-white/5 rounded-lg p-8">
            <h2 className="text-xl font-semibold mb-4 text-white">Intercambio</h2>
            <p className="text-lg leading-relaxed mb-4">
              Formá parte de un extenso grupo de apneistas de todos los niveles con quienes podrás compartir asiduamente, intercambiar experiencias, compartir opiniones respecto de tus entrenamientos, el equipo, tu viaje a través de la apnea, para que sigamos haciendo crecer la comunidad juntos.
            </p>
          </section>

          <section className="bg-white/5 rounded-lg p-8">
            <h2 className="text-xl font-semibold mb-4 text-white">Contacto</h2>
            <p className="text-lg leading-relaxed mb-4">
              Accedé a contactos con escuelas locales e internaciones. Consultanos!
            </p>
          </section>
          
        </div>
      </div>
    </div>
  );
};

export default Activities;
