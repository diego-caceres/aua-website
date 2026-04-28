import { DirectiveMember } from "./directive";

export interface Directive {
  year: number;
  titulares: DirectiveMember[];
  suplentes: DirectiveMember[];
  sindicatura?: DirectiveMember[];
}

export const historicalDirectives: Directive[] = [
  {
    year: 2026,
    titulares: [
      { name: "Facundo Yañez", role: "Presidente", photo: "/images/directiva/facu.jpg" },
      { name: "Eugenia Alcaraz", role: "Secretario/a", photo: "/images/directiva/euge.jpeg" },
      { name: "Lucia Puentes", role: "Tesorero/a", photo: "/images/directiva/lupe.jpg" },
    ],
    suplentes: [
      { name: "César Arambillete", role: "Presidente Suplente", photo: "/images/directiva/cesar.webp" },
      { name: "Federico Langguth", role: "Secretario/a Suplente", photo: "/images/directiva/fede.jpeg" },
      { name: "Ana Elisa Röhrdanz", role: "Tesorero/a Suplente", photo: "/images/directiva/ana.jpg" },
    ],
    sindicatura: [
      { name: "Agustín Barreiro", role: "Sindicatura Titular", photo: "/images/directiva/agus.jpeg" },
      { name: "Gulen Canol", role: "Sindicatura Suplente", photo: "/images/directiva/gulen.jpeg" },
    ],
  },
  {
    year: 2025,
    titulares: [
      { name: "Facundo Yañez", role: "Presidente", photo: "/images/directiva/facu.jpg" },
      { name: "Eugenia Alcaraz", role: "Secretario/a", photo: "/images/directiva/euge.jpeg" },
      { name: "Ana Elisa Röhrdanz", role: "Tesorero/a", photo: "/images/directiva/ana.jpg" },
    ],
    suplentes: [
      { name: "Lucia Puentes", role: "Presidente Suplente", photo: "/images/directiva/lupe.jpg" },
      { name: "Federico Langguth", role: "Secretario/a Suplente", photo: "/images/directiva/fede.jpeg" },
      { name: "Alejandra Acosta", role: "Tesorero/a Suplente", photo: "/images/directiva/ale.jpeg" },
      { name: "César Arambillete", role: "Tesorero/a Suplente", photo: "/images/directiva/cesar.webp" },
    ],
    sindicatura: [
      { name: "Mateo Yañez", role: "Sindicatura Titular" },
      { name: "Francis Batista", role: "Sindicatura Suplente" },
    ],
  },
];
