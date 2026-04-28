export interface DirectiveMember {
  name: string;
  role: string;
  photo?: string; // path relative to /public, e.g. "/images/directiva/nombre.jpg"
}

export const titulares: DirectiveMember[] = [
  { name: "Facundo Yañez", role: "Presidente", photo: "/images/directiva/facu.jpg" },
  { name: "Eugenia Alcaraz", role: "Secretario/a", photo: "/images/directiva/euge.jpeg" },
  { name: "Lucia Puentes", role: "Tesorero/a", photo: "/images/directiva/lucia.jpg" },
];

export const suplentes: DirectiveMember[] = [
  { name: "César Arambillete", role: "Presidente Suplente", photo: "/images/directiva/cesar.jpeg" },
  { name: "Federico Langguth", role: "Secretario/a Suplente", photo: "/images/directiva/fede.jpeg" },
  { name: "Ana Elisa Röhrdanz", role: "Tesorero/a Suplente", photo: "/images/directiva/ana.jpg" },
];

export const sindicatura: DirectiveMember[] = [
  { name: "Agustín Barreiro", role: "Sindicatura Titular", photo: "/images/directiva/agus.jpeg" },
  { name: "Gulen Canol", role: "Sindicatura Suplente", photo: "/images/directiva/gulen.jpeg" },
];
