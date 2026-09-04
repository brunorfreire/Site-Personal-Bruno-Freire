import React from 'react';
import { Youtube, Instagram, ExternalLink, PlayCircle, BookOpen } from 'lucide-react';
import { FEATURED_CONTENTS, SITE_CONFIG } from '../config/siteData';

export const Contents: React.FC = () => {
  return (
    <section id="conteudos" className="py-20 md:py-28 bg-[#090A0F] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#00E88F] text-xs font-semibold tracking-wide uppercase mb-3">
            Conhecimento & Métodos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F7F8] tracking-tight leading-tight mb-5">
            Conteúdos, Programas e Vídeos Educativos
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Aprenda os princípios de movimento, corrida, ciclismo e mobilidade compartilhados pelo Bruno em suas redes oficiais.
          </p>
        </div>

        {/* 4 Featured Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {FEATURED_CONTENTS.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-bold text-[#00E88F] uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                    {item.format}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00E88F] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center gap-1.5">
                  <PlayCircle className="w-4 h-4 text-emerald-400" />
                  <span>Canal Oficial do Bruno</span>
                </span>

                <a
                  href={SITE_CONFIG.contacts.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Acessar no YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Channel Hub CTA Box */}
        <div className="rounded-3xl p-8 sm:p-10 bg-slate-900/70 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0">
              <Youtube className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Acompanhe o canal no YouTube
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                Vídeos práticos de biomecânica, dicas de treinos e rotinas de mobilidade.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              id="youtube-channel-btn"
              href={SITE_CONFIG.contacts.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm transition-colors shadow-lg shadow-red-600/20"
            >
              <Youtube className="w-4 h-4 fill-white" />
              <span>Inscrever-se no YouTube</span>
            </a>

            <a
              id="instagram-profile-btn"
              href={SITE_CONFIG.contacts.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors"
              aria-label="Acessar Instagram @melhorforma.oficial"
            >
              <Instagram className="w-5 h-5 text-emerald-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
