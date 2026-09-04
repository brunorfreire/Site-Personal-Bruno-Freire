import React, { useState } from 'react';
import { FileText, X, Check, Image as ImageIcon, FolderArchive, ArrowRight, ExternalLink } from 'lucide-react';

export const DossierGuideModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const imagesList = [
    {
      target: 'Seção Principal (Hero)',
      file: 'bruno-hero.jpg',
      recommendedSize: '800 x 1000 px (vertical)',
      description: 'Foto profissional real de Bruno Freire com boa iluminação, postura confiante e vestimenta profissional.',
    },
    {
      target: 'Seção Sobre',
      file: 'bruno-treino.jpg',
      recommendedSize: '900 x 700 px (horizontal/vertical)',
      description: 'Foto autêntica de Bruno orientando um aluno, ajustando postura ou demonstrando um exercício.',
    },
    {
      target: 'Resultado 1 (Autonomia 40+)',
      file: 'resultado-1.jpg',
      recommendedSize: '800 x 600 px (4:3)',
      description: 'Registro real de aluno em treino funcional ou evolução postural extraído do dossiê.',
    },
    {
      target: 'Resultado 2 (Saúde Metabólica)',
      file: 'resultado-2.jpg',
      recommendedSize: '800 x 600 px (4:3)',
      description: 'Registro real de aluno com foco em condicionamento e emagrecimento.',
    },
    {
      target: 'Resultado 3 (Corrida / Prova)',
      file: 'resultado-3.jpg',
      recommendedSize: '800 x 600 px (4:3)',
      description: 'Registro de aluno em corrida na praia ou cruzando linha de chegada.',
    },
    {
      target: 'Logo Oficial (Vetor SVG)',
      file: 'logo-horizontal.svg',
      recommendedSize: 'Fundo transparente (SVG)',
      description: 'Identidade visual oficial de Bruno Freire Personal Trainer.',
    },
  ];

  return (
    <>
      {/* Discreet Trigger Button */}
      <div className="bg-[#070B10] py-3 px-4 border-t border-slate-900 text-center">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 text-xs text-emerald-400/90 hover:text-emerald-300 font-medium px-3 py-1.5 rounded-full bg-slate-900 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Guia de Fotos para a Versão Final</span>
        </button>
      </div>

      {/* Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#0D0F16] border border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-left">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white cursor-pointer"
              aria-label="Fechar guia"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <FolderArchive className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Orientações para as Imagens Oficiais
                </h3>
                <p className="text-xs text-slate-400">
                  Como gerenciar as fotos na versão exportável para a Hostinger
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              O site já está 100% configurado com as fotos e monogramas oficiais de Bruno Freire. Os arquivos estão organizados na pasta <code className="text-emerald-400 font-mono">public/images/</code> e <code className="text-emerald-400 font-mono">public/assets/brand/</code> com os nomes listados abaixo:
            </p>

            {/* List of Recommended Files */}
            <div className="space-y-3 mb-6">
              {imagesList.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div>
                    <div className="text-xs font-semibold text-white flex items-center gap-2">
                      <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{item.target}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      {item.description}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20 inline-block">
                      {item.file}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5">
                      {item.recommendedSize}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Export Tips */}
            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs text-slate-300 space-y-1.5 mb-6">
              <div className="font-semibold text-emerald-400 flex items-center gap-1.5">
                <Check className="w-4 h-4" />
                <span>Exportação para Hostinger</span>
              </div>
              <p>
                Execute o comando de build (<code className="font-mono text-emerald-300">npm run build</code>) e envie todo o conteúdo gerado dentro da pasta <code className="font-mono text-emerald-300">dist/</code> diretamente para a pasta <code className="font-mono text-emerald-300">public_html</code> na Hostinger. Os caminhos foram configurados de forma relativa para funcionar perfeitamente na raiz do seu domínio.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-colors"
            >
              Entendido, fechar guia
            </button>
          </div>
        </div>
      )}
    </>
  );
};
