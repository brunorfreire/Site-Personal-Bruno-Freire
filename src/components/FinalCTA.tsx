import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteData';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 bg-[#070B10] relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#00E88F] text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-[#00E88F]" />
          <span>Transformação com Propósito & Ciência</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F7F8] tracking-tight leading-tight mb-6 max-w-3xl mx-auto">
          Seu futuro também depende do corpo que você constrói hoje.
        </h2>

        <p className="text-slate-300 text-base sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Dê o primeiro passo para treinar com mais segurança, equilíbrio e acompanhamento individualizado.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            id="final-cta-whatsapp"
            href={SITE_CONFIG.contacts.whatsappDefaultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#00E88F] hover:bg-[#00d07f] text-[#070B10] font-extrabold text-base transition-all duration-200 shadow-xl shadow-emerald-500/25 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-[#070B10]" />
            <span>Quero conversar com o Bruno</span>
          </a>

          <a
            href="#contato"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base border border-slate-700 transition-colors shadow-sm"
          >
            <span>Preencher formulário rápido</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 text-xs sm:text-sm text-slate-400 flex-wrap">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Atendimento 100% individualizado
          </span>
          <span className="text-slate-600">•</span>
          <span>Sem mensalidades ocultas</span>
          <span className="text-slate-600">•</span>
          <span>Resposta rápida e direta pelo WhatsApp</span>
        </div>
      </div>
    </section>
  );
};
