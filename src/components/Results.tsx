import React from 'react';
import { ShieldAlert, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';
import { RESULTS_LIST } from '../config/siteData';

export const Results: React.FC = () => {
  return (
    <section
      id="resultados"
      className="py-20 md:py-28 bg-[#070B10] relative border-t border-b border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#00E88F] text-xs font-semibold tracking-wide uppercase mb-3">
            Evolução Prática & Autonomia
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F7F8] tracking-tight leading-tight mb-5">
            Resultados Reais de Alunos
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Sem promessas irreais ou atalhos danosos. Construção consistente de força muscular, mobilidade funcional e qualidade de vida duradoura.
          </p>
        </div>

        {/* Results Cards Grid (3 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {RESULTS_LIST.map((item) => (
            <div
              key={item.id}
              id={`resultado-card-${item.id}`}
              className="bg-slate-900/60 rounded-3xl border border-slate-800 overflow-hidden flex flex-col justify-between group hover:border-emerald-500/40 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              {/* Real Photo */}
              <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden">
                <img
                  src={`./images/${item.imageSlot.recommendedFilename}`}
                  alt={`Evolução de aluno - ${item.tag}`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes(item.imageSlot.recommendedFilename)) {
                      target.src = `./images/${item.imageSlot.recommendedFilename}`;
                    }
                  }}
                />

                <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-white border border-slate-700 shadow-sm">
                  {item.timeframe}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="mb-3">
                    <span className="text-xs font-bold text-[#00E88F] uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-4 leading-snug">
                    {item.title}
                  </h3>

                  <div className="space-y-3 mb-5">
                    <div className="flex items-start gap-2.5 text-xs text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-[#00E88F] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-slate-200">Objetivo trabalhado:</strong> {item.focus}
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-400">
                      <TrendingUp className="w-4 h-4 text-[#00E88F] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-slate-200">Melhora funcional:</strong> {item.realEvolution}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <span className="text-[12px] font-semibold text-emerald-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Resultado real de aluno acompanhado.</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Ethical Disclaimer */}
        <div className="max-w-3xl mx-auto p-5 rounded-2xl bg-slate-900/50 border border-slate-800 flex items-center gap-3.5 text-center sm:text-left justify-center shadow-sm">
          <ShieldAlert className="w-5 h-5 text-emerald-400 shrink-0 hidden sm:inline" />
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            * <strong className="text-slate-300">Aviso importante:</strong> Os resultados variam conforme histórico, rotina, frequência e características individuais de cada pessoa.
          </p>
        </div>
      </div>
    </section>
  );
};
