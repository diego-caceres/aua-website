import React, { useEffect } from "react";
import ImageCarousel from "../components/ImageCarousel";
import { Link } from "react-router-dom";
import { imageSections } from "../constants/imageSections";
import { joinAUALink } from "../constants/info";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="text-white relative">
      <div className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://uploadthingy.s3.us-west-1.amazonaws.com/c4AkcrZFsUv7y3Z3sBkNga/WhatsApp_Image_2025-07-27_at_13.34.05.jpg')",
            filter: "brightness(0.6)",
          }}
        ></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 md:px-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Asociación Uruguaya de Apneistas
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl">
              Promoviendo la apnea recreativa y de competición en Uruguay
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-12">
        <section id="sobre-nosotros" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-400 pl-3">
            Sobre la AUA
          </h2>
          <div className="bg-black bg-opacity-30 backdrop-blur-sm p-6 rounded-lg">
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
          <div className="text-center mt-6">
            <Link
              to="/about"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors duration-300 border-2 border-blue-500 hover:border-blue-400 shadow-lg hover:shadow-xl"
            >
              Ver más
            </Link>
          </div>
        </section>
        <section id="apnea" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-400 pl-3">
            ¿Qué es la Apnea?
          </h2>
          <div className="bg-black bg-opacity-30 backdrop-blur-sm p-6 rounded-lg mb-6">
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
          <div className="text-center mt-6">
            <Link
              to={joinAUALink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors duration-300 border-2 border-blue-500 hover:border-blue-400 shadow-lg hover:shadow-xl"
            >
              ¡Únete a la AUA!
            </Link>
          </div>
        </section>

        <section id="actividades" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-400 pl-3">
            Nuestras Actividades
          </h2>
          <div className="bg-black bg-opacity-30 backdrop-blur-sm p-6 rounded-lg">
            <div className="flex flex-col gap-2 mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-300">
                  EVENTOS
                </h3>
                <p className="mb-4">
                  Organizamos encuentros, charlas y talleres para compartir experiencias, intercambiar opiniones y seguir aprendiendo del deporte y del medio acuático y la vida que lo habita. Siendo parte de AUA, tenés acceso exclusivo a estos eventos.                   
                </p>
                <p className="mb-4">Además, organizamos actividades para acercar el deporte al público en general y convocar a interesados a que puedan sumarse a la apnea con nosotros.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-300">COMPETICIONES</h3>
                <p className="mb-4">
                  Siendo parte de AUA, tendrás la posibilidad de participar en competiciones nacionales e internacionales (¡incluidos campeonatos mundiales!), representando a Uruguay.
                </p>
                <p className="mb-4">
                  ¡Estate atento para que sigamos mejorando las marcas del país!
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-300">INTERCAMBIO</h3>
                <p className="mb-4">
                  Formá parte de un extenso grupo de apneistas de todos los niveles con quienes podrás compartir asiduamente, intercambiar experiencias, compartir opiniones respecto de tus entrenamientos, el equipo, tu viaje a través de la apnea, para que sigamos haciendo crecer la comunidad juntos.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-300">CONTACTO</h3>
                <p className="mb-4">
                  Accedé a contactos con escuelas locales e internaciones. Consultanos!
                </p>
              </div>              
            </div>
          </div>
          <div className="text-center mt-6">
            <Link
              to="/activities"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors duration-300 border-2 border-blue-500 hover:border-blue-400 shadow-lg hover:shadow-xl"
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
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-400 pl-3">
            Galería de Imágenes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(imageSections).map(([sectionId, section]) => (
              <div
                key={sectionId}
                className="overflow-hidden rounded-lg bg-black bg-opacity-30 backdrop-blur-sm"
              >
                <img
                  src={section.images[0]}
                  alt={section.title}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <p className="text-lg">{section.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              to="/gallery"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors duration-300 border-2 border-blue-500 hover:border-blue-400 shadow-lg hover:shadow-xl"
            >
              Ver Galería Completa
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Home;
