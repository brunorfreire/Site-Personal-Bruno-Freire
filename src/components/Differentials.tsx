import React from 'react';
import {
  CalendarCheck,
  UserCheck,
  Sliders,
  ShieldPlus,
  HeartHandshake,
  TrendingUp,
} from 'lucide-react';
import { DIFFERENTIALS_LIST } from '../config/siteData';

const iconMap = {
  'calendar-check': CalendarCheck,
  'user-check': UserCheck,
  sliders: Sliders,
  'shield-plus': ShieldPlus,
  'heart-handshake': HeartHandshake,
  'trending-up': TrendingUp,
};

export const Differentials: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-[#090A0F] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#00E88F] text-xs font-semibold tracking-wide uppercase mb-3">
            Por que treinar com Bruno Freire?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F7F8] tracking-tight leading-tight mb-5">
            Diferenciais que garantem segurança e evolução real
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A combinação de ciência médica, experiência sólida de academia e um olhar humano atento a cada detalhe do seu corpo.
          </p>
        </div>

        {/* Differentials Grid (6 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DIFFERENTIALS_LIST.map((item) => {
            const IconComponent = iconMap[item.iconName];

            return (
              <div
                key={item.id}
                className="bg-slate-900/60 rounded-2xl p-7 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 flex flex-col items-start group shadow-sm hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00E88F] mb-5 group-hover:scale-105 group-hover:bg-emerald-500/20 transition-all duration-200">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-[#00E88F] transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
