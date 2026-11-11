import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ExternalLink, Menu as MenuIcon, Mail, X } from "lucide-react";
import { joinAUALink, aidaCoursesLink } from "../constants/info";
import ContactModal from "./ContactModal";

const navLinks = [
  { to: "/gallery", label: "Galería" },
  { to: "/about", label: "Sobre Nosotros" },
  { to: "/activities", label: "Actividades" },
];

const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
  `py-1 border-b-2 transition-colors duration-300 ${
    isActive
      ? "border-blue-300 text-white"
      : "border-transparent text-white/80 hover:text-white"
  }`;

const mobileItemClass =
  "block w-full text-left py-2.5 px-3 hover:bg-blue-800 rounded transition-colors duration-200";

const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
  `${mobileItemClass} ${isActive ? "bg-blue-800/70 font-medium" : ""}`;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
    <header className="bg-blue-950 text-white flex-shrink-0">
      <div className="px-6 lg:px-10 py-3 flex justify-between items-center gap-6">
        <Link to="/" className="flex flex-col items-start flex-shrink-0">
          <img
            src="/images/aua_white.png"
            alt="Asociación Uruguaya de Apneistas"
            className="h-10 lg:h-14"
          />
          <p className="text-xs text-blue-300 mt-0.5">Filial AIDA Uruguay</p>
        </Link>
        <div className="flex items-center">
          <nav className="hidden lg:flex gap-8 items-center whitespace-nowrap">
            {navLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} className={desktopLinkClass}>
                {label}
              </NavLink>
            ))}
            <button
              onClick={() => setContactModalOpen(true)}
              className="py-1 text-white/80 hover:text-white transition-colors duration-300 flex gap-2 items-center"
            >
              <Mail size={18} /> Contacto
            </button>
            <a
              href={joinAUALink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-4 py-2 rounded-md transition-colors duration-300"
            >
              Asociate <ExternalLink size={15} />
            </a>
          </nav>

          <button
            className="lg:hidden text-white p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`lg:hidden grid bg-blue-900 transition-[grid-template-rows,visibility] duration-300 ease-out ${
          mobileMenuOpen ? "grid-rows-[1fr] visible" : "grid-rows-[0fr] invisible"
        }`}
      >
        <nav className="overflow-hidden">
          <ul className="px-4 py-3 space-y-1">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} onClick={closeMenu} className={mobileLinkClass}>
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                href={aidaCoursesLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className={mobileItemClass}
              >
                Cursos y Certificaciones
              </a>
            </li>
            <li>
              <button
                onClick={() => {
                  closeMenu();
                  setContactModalOpen(true);
                }}
                className={mobileItemClass}
              >
                Contacto
              </button>
            </li>
            <li className="pt-2">
              <a
                href={joinAUALink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2.5 px-3 rounded-md transition-colors duration-200"
              >
                Asociate <ExternalLink size={15} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    {contactModalOpen && <ContactModal onClose={() => setContactModalOpen(false)} />}
    </>
  );
};
export default Header;
