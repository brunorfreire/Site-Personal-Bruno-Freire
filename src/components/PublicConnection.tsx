import React from 'react';
import {
  BatteryLow,
  ZapOff,
  CalendarX,
  ShieldAlert,
  Activity,
  HelpCircle,
  ArrowUpCircle,
  ShoppingBag,
  Plane,
  Footprints,
  Smile,
  Award,
  ArrowRight,
} from 'lucide-react';
import { PAIN_POINTS, REAL_LIFE_BENEFITS, SITE_CONFIG } from '../config/siteData';

const iconMap: Record<string, React.ReactNode> = {
  'battery-low': <BatteryLow className="w-5 h-5 text-emerald-400" />,
  'zap-off': <ZapOff className="w-5 h-5 text-emerald-400" />,
  'calendar-x': <CalendarX className="w-5 h-5 text-emerald-400" />,
  'shield-alert': <ShieldAlert className="w-5 h-5 text-amber-400" />,
  activity: <Activity className="w-5 h-5 text-emerald-400" />,
  'help-circle': <HelpCircle className="w-5 h-5 text-emerald-400" />,
  'arrow-up-circle': <ArrowUpCircle className="w-6 h-6 text-[#00E88F]" />,
  'shopping-bag': <ShoppingBag className="w-6 h-6 text-[#00E88F]" />,
  plane: <Plane className="w-6 h-6 text-[#00E88F]" />,
  footprints: <Footprints className="w-6 h-6 text-[#00E88F]" />,
  smile: <Smile className="w-6 h-6 text-[#00E88F]" />,
  award: <Award className="w-6 h-6 text-[#00E88F]" />,
};

export const PublicConnection: React.FC = () => {
  return (
    <section
      id="conexao"
      className="py-20 md:py-28 bg-[#0B0F17] relative border-t border-b border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#00E88F] text-xs font-semibold tracking-wide uppercase mb-4">
            Especialmente para pessoas 40+ e retorno aos treinos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F5F7F8] tracking-tight leading-snug mb-5">
            Você sente que seu corpo já não responde como antes?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Com o passar dos anos e a rotina corrida, pequenas limitações físicas começam a se manifestar. Reconhecer esses sinais é o primeiro passo para retomar o controle com segurança.
          </p>
        </div>

        {/* 6 Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {PAIN_POINTS.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/70 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {iconMap[item.iconName]}
                </div>
                <h3 className="text-white font-bold text-base mb-2">
                  {item.pain}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Real Life Connection Block */}
        <div className="bg-gradient-to-br from-slate-900 via-[#0E131F] to-slate-950 rounded-3xl p-8 sm:p-10 lg:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00E88F]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mb-10">
            <span className="text-[#00E88F] font-bold text-xs uppercase tracking-wider">
              Treinamento voltado para o mundo real
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight mt-2 mb-4">
              Não é sobre estética agressiva. É sobre viver com força, liberdade e independência.
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              O método de Bruno Freire conecta cada repetição na academia às demandas que você realmente enfrenta todos os dias:
            </p>
          </div>

          {/* Real Life Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {REAL_LIFE_BENEFITS.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800/80"
              >
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                  {iconMap[benefit.iconName]}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Concluding Assurance Banner */}
          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-left">
              <p className="text-base sm:text-lg font-semibold text-slate-200 leading-relaxed italic">
                “Com orientação individualizada, é possível recuperar confiança, força e disposição com segurança.”
              </p>
              <span className="text-xs text-emerald-400 mt-1 block font-medium">
                — Bruno Freire, Especialista em Populações Especiais
              </span>
            </div>

            <a
              id="conexao-cta-whatsapp"
              href={SITE_CONFIG.contacts.whatsappDefaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00E88F] hover:bg-[#00d07f] text-[#070B10] font-extrabold text-sm shrink-0 transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
            >
              <span>Quero conversar com o Bruno</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
