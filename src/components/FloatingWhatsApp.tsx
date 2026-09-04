import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 rounded-lg bg-slate-900/95 text-slate-200 text-xs font-medium border border-slate-800 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Falar com o Bruno no WhatsApp
      </span>

      {/* Pulsing Floating Button */}
      <a
        id="floating-whatsapp-btn"
        href={SITE_CONFIG.contacts.whatsappDefaultUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        aria-label="Iniciar conversa com Bruno Freire pelo WhatsApp"
      >
        {/* Soft pulse effect ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/30 animate-ping pointer-events-none opacity-60" />
        <MessageCircle className="w-7 h-7 fill-slate-950 relative z-10" />
      </a>
    </div>
  );
};
