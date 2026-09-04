import React from 'react';
import { ArrowUp, Instagram, Youtube, MessageCircle, MapPin, Shield } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteData';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#05070A] text-slate-400 text-sm border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-900">
          {/* Brand Info & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo size="md" theme="dark" />
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Treinamento individualizado com foco em força, mobilidade e longevidade funcional. Ciência e empatia para você viver com mais saúde e autonomia.
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-emerald-400 font-medium bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>{SITE_CONFIG.cref} • Atuação desde 2001</span>
            </div>
          </div>

          {/* Locations Covered */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#00E88F]" />
              <span>Regiões Atendidas</span>
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Atendimento presencial em condomínios, estúdios e ar livre nos principais bairros da Zona Sul do Rio de Janeiro:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {SITE_CONFIG.primaryLocations.map((loc, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                >
                  {loc}
                </span>
              ))}
              <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 font-medium">
                Acompanhamento Online Nacional
              </span>
            </div>
          </div>

          {/* Social Channels & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">
              Canais Oficiais
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href={SITE_CONFIG.contacts.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-300 hover:text-[#00E88F] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {SITE_CONFIG.contacts.whatsappFormatted}</span>
              </a>

              <a
                href={SITE_CONFIG.contacts.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-300 hover:text-[#00E88F] transition-colors"
              >
                <Instagram className="w-4 h-4 text-emerald-400" />
                <span>Instagram: {SITE_CONFIG.contacts.instagramHandle}</span>
              </a>

              <a
                href={SITE_CONFIG.contacts.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-300 hover:text-[#00E88F] transition-colors"
              >
                <Youtube className="w-4 h-4 text-emerald-400" />
                <span>YouTube: {SITE_CONFIG.contacts.youtubeChannelName}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Bruno Freire Personal Trainer. Todos os direitos reservados.
          </div>

          <button
            id="scroll-to-top"
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Retornar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
