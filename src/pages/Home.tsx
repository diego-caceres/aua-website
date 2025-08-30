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
            <p className="text-xl md:text-2xl max-w-2xl">
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
              La Asociación Uruguaya de Apneistas (AUA) es una organización sin
              fines de lucro dedicada a promocionar la apnea recreativa y de
              competición en Uruguay, en un entorno seguro y controlado.
            </p>
            <p className="mb-4">
              Actuamos como filial oficial de AIDA (Asociación Internacional
              para el Desarrollo de la Apnea) en Uruguay, representando a
              nuestro país en competiciones internacionales y promoviendo los
              estándares de seguridad y formación establecidos a nivel mundial.
            </p>
            <p>
              Nuestro objetivo es acercar este fascinante deporte al público
              general, organizando actividades, cursos de formación y eventos
              para todos los niveles, desde principiantes hasta apneistas
              avanzados.
            </p>
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
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors duration-300"
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
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Cursos de Formación
                </h3>
                <p className="mb-4">
                  Ofrecemos cursos certificados por AIDA para todos los niveles,
                  desde principiantes hasta instructores avanzados.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Entrenamientos</h3>
                <p className="mb-4">
                  Sesiones regulares de entrenamiento en piscina y aguas
                  abiertas con instructores calificados.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Competiciones</h3>
                <p className="mb-4">
                  Participación en competiciones nacionales e internacionales
                  representando a Uruguay.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Eventos Sociales</h3>
                <p className="mb-4">
                  Organizamos encuentros, charlas y actividades para fortalecer
                  la comunidad apneista.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="asociate" className="mb-16">
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
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors duration-300"
              >
                Contáctanos para más información
              </Link>
            </div>
          </div>
        </section>

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
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors duration-300"
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
