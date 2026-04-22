import { DirectiveMember } from "./directive";

export interface Directive {
  year: number;
  titulares: DirectiveMember[];
  suplentes: DirectiveMember[];
  sindicatura: DirectiveMember[];
}

export const historicalDirectives: Directive[] = [
  {
    year: 2026,
    titulares: [
      { name: "Facundo Yañez", role: "Presidente", photo: "/images/directiva/facu.jpg" },
    { name: "Eugenia Alcaraz", role: "Secretario/a", photo: "/images/directiva/euge.jpg" },
    { name: "Lucia Puentes", role: "Tesorero/a", photo: "/images/directiva/lucia.jpg" },
    ],
    suplentes: [
      { name: "César Arambillete", role: "Presidente Suplente" },
      { name: "Federico Langguth", role: "Secretario/a Suplente" },
      { name: "Ana Elisa Röhrdanz", role: "Tesorero/a Suplente" },
    ],
    sindicatura: [
      { name: "Agustín Barreiro", role: "Sindicatura Titular" },
      { name: "Gulen Canol", role: "Sindicatura Suplente" },
    ],
  },
  {
    year: 2025,
    titulares: [
      { name: "Nombre Apellido", role: "Presidente" },
      { name: "Nombre Apellido", role: "Secretario/a" },
      { name: "Nombre Apellido", role: "Tesorero/a" },
    ],
    suplentes: [
      { name: "Nombre Apellido", role: "Presidente Suplente" },
      { name: "Nombre Apellido", role: "Secretario/a Suplente" },
      { name: "Nombre Apellido", role: "Tesorero/a Suplente" },
    ],
    sindicatura: [
      { name: "Nombre Apellido", role: "Sindicatura Titular" },
      { name: "Nombre Apellido", role: "Sindicatura Suplente" },
    ],
  },
];
