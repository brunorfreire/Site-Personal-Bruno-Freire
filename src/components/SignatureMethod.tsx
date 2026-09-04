import React from 'react';
import {
  Shield,
  Zap,
  Activity,
  Award,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { INTEGRATED_GOALS, SITE_CONFIG } from '../config/siteData';

export const SignatureMethod: React.FC = () => {
  return (
    <section
      id="metodo"
      className="py-20 md:py-28 bg-[#090A0F] relative border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header da Seção */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#00E88F] text-xs font-semibold tracking-wide uppercase mb-4">
            <span>Método Exclusivo & Assinatura</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F7F8] tracking-tight leading-tight mb-5">
            Corpo Preparado 40+
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Desenvolvido por Bruno Freire após mais de duas décadas de prática clínica e acadêmica, o método é desenhado para pessoas que desejam construir uma reserva de força, manter a coluna saudável e garantir autonomia plena pelas próximas décadas.
          </p>
        </div>

        {/* 4 Pilares Centrais: Força, Mobilidade, Segurança, Autonomia */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Pilar 1: Força */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 transition-all duration-200 group shadow-sm hover:shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00E88F] mb-4 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Força</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Desenvolvimento de massa muscular funcional para sustentar as articulações, acelerar o metabolismo e proteger ossos e ligamentos.
            </p>
          </div>

          {/* Pilar 2: Mobilidade */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 transition-all duration-200 group shadow-sm hover:shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00E88F] mb-4 group-hover:scale-110 transition-transform">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Mobilidade</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Soltura articular, flexibilidade ativa e descompressão da coluna e quadris para você se mover com leveza e sem rigidez.
            </p>
          </div>

          {/* Pilar 3: Segurança */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 transition-all duration-200 group shadow-sm hover:shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00E88F] mb-4 group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Segurança</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Supervisão especializada em reabilitação cardíaca e populações especiais, eliminando riscos de lesões ou sobrecargas indevidas.
            </p>
          </div>

          {/* Pilar 4: Autonomia */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 transition-all duration-200 group shadow-sm hover:shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00E88F] mb-4 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Autonomia</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Independência física para carregar bagagens, viajar, subir escadas, praticar hobbies e viver com energia em qualquer idade.
            </p>
          </div>
        </div>

        {/* Áreas & Objetivos Trabalhados de Forma Integrada */}
        <div className="bg-slate-900/80 rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[#00E88F] font-bold text-xs uppercase tracking-wider">
                Flexibilidade do Método
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                Objetivos trabalhados de forma integrada
              </h3>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md">
              O método não isola metas em pacotes engessados. Seus objetivos são combinados conforme sua avaliação física individual:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INTEGRATED_GOALS.map((goal, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-emerald-500/40 transition-colors flex items-start gap-3.5"
              >
                <div className="p-2 rounded-lg bg-emerald-500/10 text-[#00E88F] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">{goal.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{goal.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-slate-300 font-medium">
              Quer saber como o método se aplica ao seu histórico e rotina?
            </div>
            <a
              id="metodo-cta-whatsapp"
              href={SITE_CONFIG.contacts.whatsappDefaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Conversar diretamente com o Bruno</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
