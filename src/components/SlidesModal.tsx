import React from "react";
import { X } from "lucide-react";

interface SlidesModalProps {
  onClose: () => void;
}

const SlidesModal = ({ onClose }: SlidesModalProps) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
    onClick={onClose}
  >
    <div
      className="relative w-full max-w-6xl bg-blue-950 rounded-lg shadow-2xl border border-blue-700 overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between px-5 py-3 border-b border-blue-800">
        <h2 className="text-white font-semibold">Próximos Eventos</h2>
        <button
          onClick={onClose}
          className="text-white/50 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
      </div>
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vRQ7ElFfO0U3VRFATzgpIaeQuE9sFP31oje5jnXrm9OlO19QoIfHmRzcAZPBZpFeoZTvFUxS53TiSNm/pubembed?start=false&loop=false&delayms=3000"
          className="absolute inset-0 w-full h-full"
          allowFullScreen
        />
      </div>
    </div>
  </div>
);

export default SlidesModal;
