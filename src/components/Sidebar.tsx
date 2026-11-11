import React, { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { aidaCoursesLink } from "../constants/info";

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-nosotros", label: "Sobre la AUA" },
  { id: "apnea", label: "¿Qué es la Apnea?" },
  { id: "actividades", label: "Actividades" },
  { id: "galeria", label: "Galería" },
];

// Distance from the top of the scroll area at which a section counts as "current"
const ACTIVE_OFFSET = 140;
const SCROLL_PADDING = 32;

const scrollToSection = (sectionId: string) => {
  const mainContent = document.querySelector("main");
  if (!mainContent) return;
  if (sectionId === "inicio") {
    mainContent.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const element = document.getElementById(sectionId);
  if (!element) return;
  const top =
    mainContent.scrollTop +
    element.getBoundingClientRect().top -
    mainContent.getBoundingClientRect().top -
    SCROLL_PADDING;
  mainContent.scrollTo({ top, behavior: "smooth" });
};

const itemClass = (active: boolean) =>
  `block w-full text-left -ml-px pl-4 py-1.5 text-sm border-l transition-colors duration-200 ${
    active
      ? "border-blue-300 text-white font-medium"
      : "border-transparent text-white/60 hover:text-white"
  }`;

// Section index for the home page: sits transparently beside the content
// (the scroll container is <main>, so sticky positioning is relative to it).
const Sidebar = () => {
  const [activeId, setActiveId] = useState("inicio");

  useEffect(() => {
    const mainContent = document.querySelector("main");
    if (!mainContent) return;

    const updateActive = () => {
      const mainTop = mainContent.getBoundingClientRect().top;
      let current = "inicio";
      for (const { id } of sections) {
        const element = document.getElementById(id);
        if (
          element &&
          element.getBoundingClientRect().top - mainTop <= ACTIVE_OFFSET
        ) {
          current = id;
        }
      }
      // The last section may be too short to ever reach the offset line
      const atBottom =
        mainContent.scrollTop + mainContent.clientHeight >=
        mainContent.scrollHeight - 2;
      setActiveId(atBottom ? sections[sections.length - 1].id : current);
    };

    updateActive();
    mainContent.addEventListener("scroll", updateActive, { passive: true });
    return () => mainContent.removeEventListener("scroll", updateActive);
  }, []);

  return (
    <aside className="hidden lg:block w-44 flex-shrink-0">
      <nav className="sticky top-12" aria-label="Secciones de la página">
        <ul className="border-l border-white/15">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                aria-current={activeId === id ? "true" : undefined}
                className={itemClass(activeId === id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
        <a
          href={aidaCoursesLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 pl-4 text-sm text-blue-200 hover:text-white transition-colors duration-200"
        >
          Cursos y Certificaciones <ExternalLink size={14} />
        </a>
      </nav>
    </aside>
  );
};
export default Sidebar;
