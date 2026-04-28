import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  to: string;
}

const BackButton = ({ to }: BackButtonProps) => (
  <Link
    to={to}
    className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-200 mb-8"
  >
    <ArrowLeft size={16} />
    Atrás
  </Link>
);

export default BackButton;
