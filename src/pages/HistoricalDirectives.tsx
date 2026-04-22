import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { historicalDirectives, Directive } from "../constants/historicalDirectives";
import { DirectiveMember } from "../constants/directive";

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

const MemberAvatar = ({ member }: { member: DirectiveMember }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-16 h-16 rounded-full overflow-hidden ring-1 ring-blue-300/25 flex-shrink-0">
      {member.photo ? (
        <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-blue-900/70 flex items-center justify-center">
          <span className="font-heading text-white/60 text-sm leading-none">
            {getInitials(member.name)}
          </span>
        </div>
      )}
    </div>
    <div className="text-center max-w-[8rem]">
      <p className="font-heading text-white/80 text-sm leading-snug">{member.name}</p>
      <p className="font-sans text-white/35 text-xs mt-0.5">{member.role}</p>
    </div>
  </div>
);

const GroupDivider = ({ label }: { label: string }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="h-px flex-1 bg-white/10" />
    <span className="text-xs font-sans text-white/30 tracking-widest uppercase">{label}</span>
    <div className="h-px flex-1 bg-white/10" />
  </div>
);

const DirectiveYear = ({ directive }: { directive: Directive }) => (
  <div className="bg-white/5 rounded-lg p-8">
    <div className="flex items-baseline justify-between mb-8">
      <h2 className="text-xl font-semibold text-white/90">Comisión Directiva</h2>
      <span className="font-heading text-3xl text-white/20">{directive.year}</span>
    </div>

    <GroupDivider label="Titulares" />
    <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 mb-10">
      {directive.titulares.map((m) => (
        <MemberAvatar key={m.role} member={m} />
      ))}
    </div>

    <GroupDivider label="Suplentes" />
    <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 mb-10">
      {directive.suplentes.map((m) => (
        <MemberAvatar key={m.role} member={m} />
      ))}
    </div>

    <GroupDivider label="Sindicatura" />
    <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
      {directive.sindicatura.map((m) => (
        <MemberAvatar key={m.role} member={m} />
      ))}
    </div>
  </div>
);

const HistoricalDirectives = () => {
  useEffect(() => {
    const mainContent = document.querySelector("main");
    if (mainContent) mainContent.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="text-white relative">
      <div className="container mx-auto px-6 py-12">
        <div>
          <Link
            to="/about"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-8 md:mb-0 md:fixed md:left-6 md:top-36 md:z-20 md:bg-black md:bg-opacity-40 md:px-3 md:py-1 md:rounded-full md:shadow-lg"
            style={{ pointerEvents: "auto" }}
          >
            ← Sobre Nosotros
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-2 border-l-4 border-blue-400 pl-3">
          Directivas Anteriores
        </h1>
        <p className="text-white/40 font-sans text-sm mb-10 pl-4">
          Historial de comisiones directivas de la AUA
        </p>

        <div className="space-y-8">
          {historicalDirectives.map((d) => (
            <DirectiveYear key={d.year} directive={d} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoricalDirectives;
