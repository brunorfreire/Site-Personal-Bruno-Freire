import React from 'react';
import {
  GraduationCap,
  Building2,
  HeartPulse,
  Calendar,
  MapPin,
  Quote,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteData';
import brunoAboutPhoto from '../assets/images/bruno_treino_ibbc.jpg';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#090A0F] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Photo */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-2 rounded-3xl bg-emerald-500/10 blur-xl -z-10" />

              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src={brunoAboutPhoto}
                  alt={SITE_CONFIG.images.brunoAbout.alt}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('bruno-treino.jpg')) {
                      target.src = './images/bruno-treino.jpg';
                    }
                  }}
                />

                <div className="absolute bottom-4 left-4 right-4 bg-[#070B10]/90 backdrop-blur-md border border-slate-800 rounded-xl p-3.5 flex items-center justify-between shadow-md">
                  <div>
                    <div className="text-white font-bold text-xs sm:text-sm">Acompanhamento Técnico</div>
                    <div className="text-emerald-400 text-[11px] font-semibold">Supervisão biomecânica contínua</div>
                  </div>
                  <div className="text-[11px] font-mono text-slate-300 bg-slate-800 px-2 py-1 rounded border border-slate-700">
                    Desde 2001
                  </div>
                </div>
              </div>

              {/* Quote pill */}
              <div className="mt-6 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <Quote className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-200 text-sm font-semibold italic">
                      “Impactar positivamente a vida das pessoas por meio do movimento consciente.”
                    </p>
                    <span className="text-slate-400 text-xs block mt-1 font-medium">
                      — O propósito que guia a prática clínica de Bruno Freire
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Trajectory & Credentials */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start text-left">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#00E88F] text-xs font-semibold tracking-wide uppercase mb-3">
              Trajetória & Credenciais
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Mais de 24 anos dedicados à saúde, segurança e ciência do movimento.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-5">
              Desde 2001, <strong className="text-white font-bold">Bruno Freire</strong> atua na linha de frente da Educação Física personalizada, combinando rigor biomecânico, empatia e escuta ativa.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              Sua trajetória une a experiência prática com alunos de academias de ponta à vivência médica e hospitalar com grupos especiais. Isso garante um treino livre de improvisos, onde cada exercício tem um propósito claro para proteger suas articulações, acelerar sua evolução e dar sustentação à sua rotina.
            </p>

            {/* Credential Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3.5 shadow-sm">
                <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-emerald-400 shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-bold">Desde 2001</h3>
                  <p className="text-slate-400 text-xs mt-0.5">
                    Profissional de Educação Física registrado ({SITE_CONFIG.cref}).
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3.5 shadow-sm">
                <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-emerald-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-bold">Pós-Graduação Clínica</h3>
                  <p className="text-slate-400 text-xs mt-0.5">
                    Reabilitação Cardíaca e Populações Especiais.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3.5 shadow-sm">
                <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-emerald-400 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-bold">13 Anos na Bodytech</h3>
                  <p className="text-slate-400 text-xs mt-0.5">
                    Atuação em alto nível técnico com acompanhamento individualizado.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3.5 shadow-sm">
                <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-emerald-400 shrink-0">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white text-sm font-bold">Hospitais da Aeronáutica</h3>
                  <p className="text-slate-400 text-xs mt-0.5">
                    Reabilitação de cardiopatas, hipertensos e grupos clínicos.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Location Callout */}
            <div className="w-full p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-white text-xs font-bold">Onde Bruno atende:</div>
                  <div className="text-slate-400 text-xs">
                    Copacabana, Botafogo, Ipanema, Leblon e Zona Sul do RJ • Online em todo o Brasil
                  </div>
                </div>
              </div>

              <a
                id="about-consult-hours"
                href={SITE_CONFIG.contacts.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 shrink-0"
              >
                <span>Consultar horários</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
