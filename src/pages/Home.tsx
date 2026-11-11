import React, { useEffect, useState } from "react";
import ImageCarousel from "../components/ImageCarousel";
import { Link } from "react-router-dom";
import { CalendarDays, ExternalLink, GraduationCap, Trophy, Users, Video } from "lucide-react";
import { imageSections, thumb } from "../constants/imageSections";
import { joinAUALink } from "../constants/info";
import SlidesModal from "../components/SlidesModal";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [slidesOpen, setSlidesOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="text-white relative">
      <div
        id="inicio"
        className="relative flex items-center min-h-[34rem] md:min-h-[78vh]"
      >
        {/* Photo fades out at the bottom so it melts into the animated background */}
        <div
          className="absolute inset-0"
          style={{
            maskImage: "linear-gradient(to bottom, black 62%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 62%, transparent 100%)",
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://uploadthingy.s3.us-west-1.amazonaws.com/c4AkcrZFsUv7y3Z3sBkNga/WhatsApp_Image_2025-07-27_at_13.34.05.jpg')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/85 via-blue-950/55 to-blue-950/25"></div>
        </div>
        <div className="relative container mx-auto px-6 md:px-12 pt-12 pb-24 md:pb-32">
          <p className="text-sm md:text-base text-blue-200 mb-4">
            Filial oficial AIDA en Uruguay
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-5 max-w-4xl leading-[1.05]">
            Asociación Uruguaya de Apneistas
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl text-white/90">
            Promoviendo la apnea recreativa y de competición en Uruguay
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={joinAUALink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-xl"
            >
              Únete a la AUA <ExternalLink size={18} />
            </a>
            <Link
              to="/inmersion-360"
              className="inline-flex items-center justify-center gap-2 border border-white/40 hover:border-blue-400 hover:text-blue-300 text-white/90 px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300"
            >
              <Video size={20} /> Inmersión 360°
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 pt-4 pb-16 lg:flex lg:gap-16">
        <Sidebar />
        <div className="min-w-0 flex-1">
        <section id="sobre-nosotros" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-400 pl-3">
            Sobre la AUA
          </h2>
          <div className="max-w-[65ch] text-base md:text-lg leading-relaxed text-white/90">
            <p className="mb-4">
              La Asociación Uruguaya de Apneistas (AUA) es una organización sin fines de lucro dedicada a promocionar la apnea recreativa y de competición en Uruguay.
            </p>
            <p className="mb-4">
              Actuamos como filial oficial de AIDA (Asociación Internacional para el Desarrollo de la Apnea) en Uruguay, con posibilidades de representar a nuestro país en competiciones internacionales y promoviendo los estándares de seguridad y formación establecidos a nivel mundial.
            </p>
            <p>
              Nuestro objetivo es acercar este fascinante deporte al público general, organizando actividades, talleres, charlas y eventos para todos los niveles, y fomentando la participación de los atletas en diversas instancias (tanto nacionales como internacionales) para que la disciplina siga creciendo en nuestro país.
            </p>
          </div>
          <div className="mt-6">
            <Link
              to="/about"
              className="inline-block border border-white/30 hover:border-blue-400 hover:text-blue-300 text-white/80 px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-300"
            >
              Ver más
            </Link>
          </div>
        </section>
        <section id="apnea" className="mb-16">
          <h2 className="text-2xl font-semibold mb-5 pb-2 border-b border-white/20">
            ¿Qué es la Apnea?
          </h2>
          <div className="max-w-[65ch] text-base md:text-lg leading-relaxed text-white/90 mb-6">
            <p className="mb-4">
              La apnea es la práctica de contener la respiración bajo el agua,
              explorando los límites del cuerpo humano en un entorno acuático.
              Es tanto un deporte de competición como una actividad recreativa
              que combina técnicas de relajación, control corporal y mental.
            </p>
            <p className="mb-4">
              Existen diversas modalidades, desde la apnea estática (contener la
              respiración el mayor tiempo posible sin moverse) hasta la apnea de
              profundidad (descender verticalmente con o sin aletas), pasando
              por la apnea dinámica (recorrer la mayor distancia posible bajo el
              agua).
            </p>
            <p>
              Con el entrenamiento adecuado y siguiendo los protocolos de
              seguridad, la apnea es una actividad segura que ofrece beneficios
              físicos y mentales, además de una conexión única con el medio
              acuático.
            </p>
          </div>
          <ImageCarousel />
        </section>

        <section id="actividades" className="mb-16">
          <h2 className="text-2xl font-semibold mb-5 pb-2 border-b border-white/20">
            Nuestras Actividades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mt-8">
            <div>
              <CalendarDays size={28} strokeWidth={1.5} className="text-blue-300 mb-3" />
              <h3 className="text-2xl font-semibold mb-3 text-white">Eventos</h3>
              <p className="mb-4 text-white/90 leading-relaxed">
                Organizamos encuentros, charlas y talleres para compartir experiencias, intercambiar opiniones y seguir aprendiendo del deporte y del medio acuático y la vida que lo habita. Siendo parte de AUA, tenés acceso exclusivo a estos eventos.
              </p>
              <p className="mb-4 text-white/90 leading-relaxed">Además, organizamos actividades para acercar el deporte al público en general y convocar a interesados a que puedan sumarse a la apnea con nosotros.</p>
              <button
                onClick={() => setSlidesOpen(true)}
                className="mt-2 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Próximos Eventos
              </button>
            </div>

            <div>
              <Trophy size={28} strokeWidth={1.5} className="text-blue-300 mb-3" />
              <h3 className="text-2xl font-semibold mb-3 text-white">Competiciones</h3>
              <p className="mb-4 text-white/90 leading-relaxed">
                Siendo parte de AUA, tendrás la posibilidad de participar en competiciones nacionales e internacionales (¡incluidos campeonatos mundiales!), representando a Uruguay.
              </p>
              <p className="text-white/90 leading-relaxed">
                ¡Estate atento para que sigamos mejorando las marcas del país!
              </p>
            </div>

            <div>
              <Users size={28} strokeWidth={1.5} className="text-blue-300 mb-3" />
              <h3 className="text-2xl font-semibold mb-3 text-white">Intercambio</h3>
              <p className="text-white/90 leading-relaxed">
                Formá parte de un extenso grupo de apneistas de todos los niveles con quienes podrás compartir asiduamente, intercambiar experiencias, compartir opiniones respecto de tus entrenamientos, el equipo, tu viaje a través de la apnea, para que sigamos haciendo crecer la comunidad juntos.
              </p>
            </div>

            <div>
              <GraduationCap size={28} strokeWidth={1.5} className="text-blue-300 mb-3" />
              <h3 className="text-2xl font-semibold mb-3 text-white">Contacto</h3>
              <p className="text-white/90 leading-relaxed">
                Accedé a contactos con escuelas locales e internaciones. Consultanos!
              </p>
            </div>
          </div>
          <div className="mt-10">
            <Link
              to="/activities"
              className="inline-block border border-white/30 hover:border-blue-400 hover:text-blue-300 text-white/80 px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-300"
            >
              Ver todas
            </Link>
          </div>
        </section>

        {/* <section id="asociate" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-400 pl-3">
            Únete a la AUA
          </h2>
          <div className="bg-black bg-opacity-30 backdrop-blur-sm p-6 rounded-lg">
            <p className="mb-4">
              ¿Te interesa la apnea? ¡Te invitamos a formar parte de nuestra
              comunidad! Como miembro de la AUA tendrás acceso a:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Descuentos en cursos y entrenamientos</li>
              <li>Acceso prioritario a eventos y competiciones</li>
              <li>Certificaciones oficiales AIDA</li>
              <li>Comunidad de apneistas experimentados</li>
              <li>Equipamiento especializado para entrenamientos</li>
            </ul>
            <div className="text-center">
              <Link
                to={joinAUALink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors duration-300 border-2 border-blue-500 hover:border-blue-400 shadow-lg hover:shadow-xl"
              >
                Contáctanos para más información
              </Link>
            </div>
          </div>
        </section> */}

        <section id="galeria" className="mb-16">
          <h2 className="text-2xl font-semibold mb-5 pb-2 border-b border-white/20">
            Galería de Imágenes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(imageSections).map(([sectionId, section]) => (
              <Link
                key={sectionId}
                to={`/gallery#${sectionId}`}
                className="group block overflow-hidden rounded-lg bg-black bg-opacity-30 backdrop-blur-sm"
              >
                <div className="overflow-hidden">
                  <img
                    src={thumb(section.images[0])}
                    alt={section.title}
                    loading="lazy"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-lg group-hover:text-blue-200 transition-colors duration-300">
                    {section.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              to="/gallery"
              className="inline-block border border-white/30 hover:border-blue-400 hover:text-blue-300 text-white/80 px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-300"
            >
              Ver Galería Completa
            </Link>
          </div>
        </section>

        <section className="pt-12 pb-4 border-t border-white/15">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sumate a la comunidad
          </h2>
          <p className="max-w-[55ch] text-base md:text-lg leading-relaxed text-white/90 mb-8">
            No importa tu nivel ni tu experiencia: si te llama el agua, hay un lugar para vos en la AUA.
          </p>
          <a
            href={joinAUALink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-xl"
          >
            Únete a la AUA <ExternalLink size={18} />
          </a>
        </section>
        </div>
      </div>
    {slidesOpen && <SlidesModal onClose={() => setSlidesOpen(false)} />}
    </div>
  );
};
export default Home;
