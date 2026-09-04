import React from 'react';
import {
  Dumbbell,
  Laptop,
  Sparkles,
  MessageCircle,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { SERVICES_LIST, SITE_CONFIG } from '../config/siteData';

const iconMap = {
  dumbbell: Dumbbell,
  laptop: Laptop,
  sparkles: Sparkles,
};

const serviceButtonLabels: Record<string, string> = {
  'personal-presencial': 'Quero saber sobre o personal',
  'acompanhamento-online': 'Quero conhecer o acompanhamento online',
  'massoterapia-recuperacao': 'Quero agendar uma sessão',
};

export const Services: React.FC = () => {
  return (
    <section
      id="servicos"
      className="py-20 md:py-28 bg-[#090A0F] relative border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#00E88F] text-xs font-semibold tracking-wide uppercase mb-3">
            Formatos de Atendimento
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F7F8] tracking-tight leading-tight mb-5">
            Serviços Principais
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Orientação profissional e personalizada para o seu momento de vida, seja presencialmente na Zona Sul do Rio ou online em qualquer lugar do mundo.
          </p>
        </div>

        {/* 3 Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service) => {
            const IconComponent = iconMap[service.iconName as keyof typeof iconMap] || Dumbbell;
            const whatsappUrl = `https://wa.me/${SITE_CONFIG.contacts.whatsappNumber}?text=${encodeURIComponent(service.whatsappMessage)}`;
            const isMassotherapy = service.id === 'massoterapia-recuperacao';
            const buttonLabel = serviceButtonLabels[service.id] || 'Quero conversar com o Bruno';

            return (
              <div
                key={service.id}
                id={`card-${service.id}`}
                className="bg-slate-900/60 rounded-3xl p-8 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl hover:shadow-emerald-950/20"
              >
                <div>
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-start justify-between gap-3 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00E88F] group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-200">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    {service.highlightBadge && (
                      <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-slate-800 text-emerald-400 border border-slate-700 text-right">
                        {service.highlightBadge}
                      </span>
                    )}
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-[#00E88F] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm font-normal mb-5 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Benefit Block */}
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-5">
                    <div className="text-xs font-bold text-[#00E88F] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#00E88F]" />
                      <span>Como Funciona</span>
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {service.benefit}
                    </p>
                  </div>

                  {/* Ideal For Target */}
                  <div className="text-xs text-slate-400 mb-6 leading-relaxed">
                    <strong className="text-slate-300">Para quem é ideal:</strong> {service.idealFor}
                  </div>

                  {/* Ethical note for Massotherapy without cure claims */}
                  {isMassotherapy && (
                    <div className="mb-6 p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                      <AlertCircle className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
                      <span>
                        Foco em alívio de tensões, descompressão muscular e bem-estar. Não substitui diagnósticos ou condutas médicas e não realiza promessas curativas.
                      </span>
                    </div>
                  )}
                </div>

                {/* WhatsApp Button */}
                <a
                  id={`btn-whatsapp-${service.id}`}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-5 rounded-xl bg-[#00E88F] hover:bg-[#00d07f] text-[#070B10] font-extrabold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-emerald-500/20 active:scale-95"
                  aria-label={`${buttonLabel} no WhatsApp com Bruno Freire`}
                >
                  <MessageCircle className="w-4 h-4 fill-[#070B10]" />
                  <span>{buttonLabel}</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
