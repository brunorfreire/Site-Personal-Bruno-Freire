import React, { useState } from 'react';
import { MessageCircle, MapPin, User, Target, Dumbbell, ShieldCheck, Check } from 'lucide-react';
import { SITE_CONFIG, buildWhatsAppFormUrl } from '../config/siteData';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    objective: 'Ganhar força, mobilidade e autonomia',
    service: 'Personal Presencial (Zona Sul)',
    location: 'Copacabana',
    additionalNotes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const objectiveOptions = [
    'Ganhar força, mobilidade e autonomia',
    'Emagrecer com saúde e consistência',
    'Superar dores na coluna / joelhos / reabilitação',
    'Começar a correr do zero com segurança',
    'Condicionamento físico e longevidade 40+',
    'Outro objetivo específico',
  ];

  const serviceOptions = [
    'Personal Presencial (Zona Sul)',
    'Acompanhamento Online',
    'Massoterapia e Recuperação',
    'Programa Corpo Preparado 40+',
    'Emagrecimento com Saúde',
    'Corrida para Iniciantes',
  ];

  const locationOptions = [
    'Copacabana',
    'Botafogo',
    'Ipanema',
    'Leblon',
    'Flamengo',
    'Laranjeiras',
    'Outro bairro da Zona Sul RJ',
    'Atendimento Online (Qualquer localidade)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    const whatsappUrl = buildWhatsAppFormUrl({
      name: formData.name,
      objective: formData.objective,
      service: formData.service,
      location: formData.location,
      additionalNotes: formData.additionalNotes,
    });

    setSubmitted(true);

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contato"
      className="py-20 md:py-28 bg-[#090A0F] relative border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Contact Details */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#00E88F] text-xs font-semibold tracking-wide uppercase mb-3">
              Contato Direto
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F7F8] tracking-tight leading-tight mb-5">
              Vamos conversar sobre seus objetivos?
            </h2>

            <p className="text-slate-300 text-base leading-relaxed mb-8">
              Preencha os campos ao lado para gerar uma mensagem pronta e estruturada no seu WhatsApp. Bruno Freire responderá pessoalmente para entender seu caso e verificar horários disponíveis.
            </p>

            <div className="space-y-4 w-full mb-8">
              <a
                href={SITE_CONFIG.contacts.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 flex items-center gap-4 transition-colors group shadow-sm hover:shadow-md"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00E88F] group-hover:scale-110 transition-transform shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">WhatsApp Oficial</div>
                  <div className="text-white font-bold text-base">{SITE_CONFIG.contacts.whatsappFormatted}</div>
                </div>
              </a>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-4 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00E88F] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Atendimento Presencial</div>
                  <div className="text-white font-semibold text-sm">Copacabana, Botafogo, Ipanema e Zona Sul RJ</div>
                </div>
              </div>
            </div>

            {/* Privacy notice */}
            <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-400 text-xs flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-300">Privacidade garantida:</strong> Seus dados não são compartilhados com terceiros. O formulário apenas formata o texto e abre o seu aplicativo do WhatsApp.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Field: Name */}
                <div>
                  <label htmlFor="form-name" className="block text-sm font-semibold text-slate-200 mb-2">
                    Seu Nome Completo *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-emerald-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Como você gostaria de ser chamado?"
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Field: Objective */}
                <div>
                  <label htmlFor="form-objective" className="block text-sm font-semibold text-slate-200 mb-2">
                    Qual é o seu principal objetivo? *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-emerald-400">
                      <Target className="w-4 h-4" />
                    </div>
                    <select
                      id="form-objective"
                      value={formData.objective}
                      onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm appearance-none cursor-pointer"
                    >
                      {objectiveOptions.map((opt, i) => (
                        <option key={i} value={opt} className="bg-slate-900 text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Grid: Service & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Field: Service */}
                  <div>
                    <label htmlFor="form-service" className="block text-sm font-semibold text-slate-200 mb-2">
                      Serviço de interesse *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-emerald-400">
                        <Dumbbell className="w-4 h-4" />
                      </div>
                      <select
                        id="form-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm appearance-none cursor-pointer"
                      >
                        {serviceOptions.map((opt, i) => (
                          <option key={i} value={opt} className="bg-slate-900 text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Field: Location */}
                  <div>
                    <label htmlFor="form-location" className="block text-sm font-semibold text-slate-200 mb-2">
                      Bairro ou Modalidade *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-emerald-400">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <select
                        id="form-location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm appearance-none cursor-pointer"
                      >
                        {locationOptions.map((opt, i) => (
                          <option key={i} value={opt} className="bg-slate-900 text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Field: Additional Notes (Optional) */}
                <div>
                  <label htmlFor="form-notes" className="block text-sm font-semibold text-slate-200 mb-2">
                    Observações ou histórico de saúde <span className="text-slate-400 font-normal">(opcional)</span>
                  </label>
                  <textarea
                    id="form-notes"
                    rows={3}
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    placeholder="Ex: Tenho condromalácia patelar / hipertensão / busco treinar 3x por semana pela manhã..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm resize-none transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  id="submit-contact-form"
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-[#00E88F] hover:bg-[#00d07f] text-[#070B10] font-extrabold text-base transition-all duration-200 shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-3 active:scale-[0.99] cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-[#070B10]" />
                  <span>Enviar Mensagem pelo WhatsApp</span>
                </button>

                {submitted && (
                  <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs flex items-center justify-center gap-2 animate-in fade-in">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp aberto! Caso a janela não tenha aparecido, verifique o bloqueador de pop-ups.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
