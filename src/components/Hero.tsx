import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteData';
import brunoHeroPhoto from '../assets/images/bruno_hero_ibbc.jpg';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#090A0F]"
    >
      {/* Background Subtle Organic Warmth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-[#00E88F]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#087A58]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Core Positioning & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Professional Credential Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-xs sm:text-sm font-medium mb-6 shadow-sm">
              <div className="w-5 h-5 rounded-md overflow-hidden bg-[#16191E] shrink-0">
                <img
                  src="./images/logo-bf.jpg"
                  alt="Logo BF"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-white font-bold">BRUNO FREIRE</span>
              <span className="text-slate-500">•</span>
              <span className="text-emerald-400 font-semibold">{SITE_CONFIG.cref}</span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="text-slate-400 hidden sm:inline">Desde {SITE_CONFIG.sinceYear}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#F5F7F8] tracking-tight leading-[1.15] mb-6">
              Seu corpo preparado para{' '}
              <span className="text-[#00E88F] underline decoration-emerald-500/40 decoration-wavy decoration-2 underline-offset-8">
                viver mais e melhor.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-5 max-w-2xl">
              Treinamento personalizado para ganhar força, recuperar a mobilidade e preservar sua autonomia em todas as fases da vida.
            </p>

            {/* Location & Modality Text */}
            <div className="flex items-center gap-2 text-sm sm:text-base text-slate-300 font-medium mb-8 bg-slate-900/60 px-4 py-2 rounded-xl border border-slate-800">
              <MapPin className="w-4 h-4 shrink-0 text-[#00E88F]" />
              <span>Atendimento presencial na Zona Sul do Rio de Janeiro e acompanhamento online.</span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                id="hero-cta-whatsapp"
                href={SITE_CONFIG.contacts.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#00E88F] hover:bg-[#00d07f] text-[#070B10] font-extrabold text-base transition-all duration-200 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-[#070B10]" />
                <span>Quero conversar com o Bruno</span>
              </a>

              <a
                id="hero-cta-services"
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-base border border-slate-700/80 transition-colors shadow-sm"
              >
                <span>Conhecer os serviços</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </a>
            </div>

            {/* Experience & Trust Strip */}
            <div className="pt-6 border-t border-slate-800/80 w-full flex flex-col gap-3">
              <p className="text-xs sm:text-sm text-slate-400 font-medium flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00E88F]" />
                  Profissional de Educação Física desde 2001
                </span>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="inline-flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00E88F]" />
                  Atendimento individualizado
                </span>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="inline-flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00E88F]" />
                  Presencial e online
                </span>
              </p>
            </div>
          </div>

          {/* Right Column: Real Professional Photo of Bruno Freire */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Deep Emerald Glow */}
              <div className="absolute -inset-3 rounded-3xl bg-emerald-500/15 blur-2xl -z-10" />

              {/* Main Photo Card inside Deep Dark Green Frame */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-950 border-2 border-emerald-500/30 shadow-2xl aspect-[4/5] sm:aspect-[3/4] ring-1 ring-emerald-500/20">
                <img
                  src={brunoHeroPhoto}
                  alt={SITE_CONFIG.images.brunoHero.alt}
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('bruno-hero.jpg')) {
                      target.src = './images/bruno-hero.jpg';
                    }
                  }}
                />

                {/* Subtle dark green vignette gradient at the bottom for readability */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#070B10] via-[#070B10]/70 to-transparent pointer-events-none" />

                {/* Photo Info Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#070B10]/90 backdrop-blur-md border border-slate-800/90 rounded-xl p-3.5 flex items-center justify-between shadow-lg">
                  <div>
                    <div className="text-white font-bold text-sm">Bruno Freire</div>
                    <div className="text-[#00E88F] text-xs font-semibold">Personal Trainer • {SITE_CONFIG.cref}</div>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-300 bg-slate-800/90 px-2.5 py-1 rounded-lg border border-slate-700">
                    Zona Sul RJ
                  </div>
                </div>
              </div>

              {/* Floating Trust Badge (Bottom Left) */}
              <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-slate-900/95 border border-slate-800 rounded-2xl p-3.5 shadow-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Award className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">24+ Anos</div>
                  <div className="text-slate-400 text-xs">de Prática & Ciência</div>
                </div>
              </div>

              {/* Pós-Graduado Badge (Top Right Corner of the Frame) */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-slate-900/95 border border-emerald-500/30 rounded-2xl p-3 shadow-2xl flex items-center gap-2.5 z-10">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-[#00E88F]">
                  <ShieldCheck className="w-4 h-4 text-[#00E88F]" />
                </div>
                <div>
                  <div className="text-white font-bold text-xs">Pós-Graduado</div>
                  <div className="text-slate-400 text-[10px]">Populações Especiais</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
