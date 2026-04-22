import React from "react";
import { Link } from "react-router-dom";
import { titulares, suplentes, sindicatura, DirectiveMember } from "../constants/directive";

const CURRENT_YEAR = 2026;

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

const MemberAvatar = ({ member }: { member: DirectiveMember }) => (
  <div className="flex flex-col items-center gap-3 transition-transform duration-300 hover:-translate-y-1">
    <div className="w-24 h-24 rounded-full overflow-hidden ring-1 ring-blue-300/30 hover:ring-blue-300/60 transition-colors duration-300 flex-shrink-0">
      {member.photo ? (
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-blue-900/80 flex items-center justify-center">
          <span className="font-heading text-white/70 text-xl leading-none">
            {getInitials(member.name)}
          </span>
        </div>
      )}
    </div>
    <div className="text-center max-w-[10rem]">
      <p className="font-heading text-white text-base leading-snug">{member.name}</p>
      <p className="font-sans text-white/45 text-xs tracking-wide mt-1">{member.role}</p>
    </div>
  </div>
);

const GroupDivider = ({ label }: { label: string }) => (
  <div className="flex items-center gap-4 mb-8">
    <div className="h-px flex-1 bg-white/10" />
    <span className="text-xs font-sans text-white/35 tracking-widest uppercase">{label}</span>
    <div className="h-px flex-1 bg-white/10" />
  </div>
);

const DirectivaSection = () => (
  <section className="bg-white/5 rounded-lg p-8">
    <div className="flex items-baseline justify-between mb-10">
      <h2 className="text-xl font-semibold text-white/90">Comisión Directiva</h2>
      <span className="font-heading text-4xl text-white/20">{CURRENT_YEAR}</span>
    </div>

    <GroupDivider label="Titulares" />
    <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 mb-12">
      {titulares.map((m) => (
        <MemberAvatar key={m.role} member={m} />
      ))}
    </div>

    <GroupDivider label="Suplentes" />
    <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 mb-12">
      {suplentes.map((m) => (
        <MemberAvatar key={m.role} member={m} />
      ))}
    </div>

    <GroupDivider label="Sindicatura" />
    <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 mb-8">
      {sindicatura.map((m) => (
        <MemberAvatar key={m.role} member={m} />
      ))}
    </div>

    <div className="flex justify-center pt-4 border-t border-white/10">
      <Link
        to="/directivas-anteriores"
        className="font-sans text-sm text-white/40 hover:text-blue-300 transition-colors duration-300"
      >
        Ver directivas anteriores →
      </Link>
    </div>
  </section>
);

export default DirectivaSection;
