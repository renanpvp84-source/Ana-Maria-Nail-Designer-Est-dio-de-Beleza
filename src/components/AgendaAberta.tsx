import React, { useState } from 'react';
import { Calendar, Clock, MessageSquare, Send, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/content';

const VALID_PERIODS = [
  'Manhã (08h às 12h)',
  'Tarde (13h às 18h)',
  'Sábado (Horário especial)'
];

const VALID_SERVICES = [
  ...SERVICES.map((s) => s.name),
  'Capacitação / Curso Profissional VIP'
];

function sanitizeInputText(input: string, maxLen: number): string {
  return input
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, '') // strip control chars
    .replace(/[\r\n]+/g, ' ') // replace line breaks to prevent CRLF injection
    .trim()
    .slice(0, maxLen);
}

interface AgendaAbertaProps {
  selectedServicePreset?: string;
}

export const AgendaAberta: React.FC<AgendaAbertaProps> = ({ selectedServicePreset }) => {
  const [clientName, setClientName] = useState('');
  const [selectedService, setSelectedService] = useState(
    selectedServicePreset || SERVICES[0].name
  );
  const [preferredPeriod, setPreferredPeriod] = useState(VALID_PERIODS[1]);
  const [clientNote, setClientNote] = useState('');

  // Update when parent preset changes with validation
  React.useEffect(() => {
    if (selectedServicePreset && VALID_SERVICES.includes(selectedServicePreset)) {
      setSelectedService(selectedServicePreset);
    }
  }, [selectedServicePreset]);

  const generateWhatsAppLink = () => {
    const safeName = sanitizeInputText(clientName, 80);
    const safeNote = sanitizeInputText(clientNote, 250);
    const safeService = VALID_SERVICES.includes(selectedService)
      ? selectedService
      : SERVICES[0].name;
    const safePeriod = VALID_PERIODS.includes(preferredPeriod)
      ? preferredPeriod
      : VALID_PERIODS[1];

    const greeting = 'Olá, Ana Maria!';
    const namePart = safeName ? `Meu nome é ${safeName}.` : 'Gostaria de agendar um horário.';
    const servicePart = `Tenho interesse no procedimento: *${safeService}*.`;
    const periodPart = `Preferência de período: *${safePeriod}*.`;
    const notePart = safeNote ? `Observação: ${safeNote}` : '';

    const fullMessage = [
      greeting,
      namePart,
      servicePart,
      periodPart,
      notePart,
      'Poderia me informar as datas e horários disponíveis na sua agenda?'
    ]
      .filter(Boolean)
      .join('\n');

    return `${BUSINESS_INFO.whatsappLink}?text=${encodeURIComponent(fullMessage)}`;
  };

  return (
    <section id="agenda" className="py-14 sm:py-20 bg-[#141214] border-b border-[#262328] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-60 sm:w-72 h-60 sm:h-72 bg-[#D8A0A4]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-[#C8AD91]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Agenda Aberta Visual Poster Style (Inspired by Reference B) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#D8A0A4]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Agendamento Oficial</span>
            </div>

            {/* Poster headline */}
            <div className="space-y-0.5 sm:space-y-1">
              <span className="font-script text-3xl sm:text-5xl text-[#E8D9D4] block lowercase tracking-wide">
                agenda
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#F7F3F1] tracking-tight font-medium uppercase">
                Aberta
              </h2>
            </div>

            <p className="text-[#E8D9D4]/85 text-xs sm:text-sm lg:text-base leading-relaxed font-light">
              Garanta seu momento de cuidado exclusivo. Para assegurar a máxima atenção e acabamento meticuloso em cada procedimento, os atendimentos são realizados estritamente com horário marcado.
            </p>

            {/* Availability checklist */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#0C0C0E]/70 border border-[#262328] space-y-2.5 sm:space-y-3">
              <div className="flex items-center gap-3 text-xs text-[#E8D9D4]">
                <Calendar className="w-4 h-4 text-[#D8A0A4] shrink-0" />
                <span>Atendimentos de Segunda a Sábado em Bacabal</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#E8D9D4]">
                <Clock className="w-4 h-4 text-[#D8A0A4] shrink-0" />
                <span>Turnos matutino e vespertino disponíveis</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#E8D9D4]">
                <MessageSquare className="w-4 h-4 text-[#D8A0A4] shrink-0" />
                <span>Confirmação ágil e direta pelo WhatsApp oficial</span>
              </div>
            </div>

            <div className="pt-1 sm:pt-2">
              <p className="text-[11px] sm:text-xs text-[#C8AD91] uppercase tracking-wider">
                Local: {BUSINESS_INFO.address}
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Appointment Message Generator */}
          <div className="lg:col-span-7">
            <div className="p-4 sm:p-7 lg:p-9 rounded-2xl bg-[#0C0C0E] border border-[#262328] shadow-2xl relative">
              <div className="mb-5 sm:mb-6 space-y-1.5 sm:space-y-2">
                <h3 className="font-serif text-xl sm:text-2xl text-[#F7F3F1]">
                  Personalizar Solicitação de Horário
                </h3>
                <p className="text-xs text-[#E8D9D4]/70 leading-relaxed">
                  Preencha os campos abaixo para gerar sua mensagem direta para Ana Maria no WhatsApp.
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="space-y-4 sm:space-y-5"
              >
                {/* Name Input */}
                <div>
                  <label htmlFor="client-name" className="block text-xs uppercase tracking-wider text-[#E8D9D4] mb-1.5 sm:mb-2 font-medium">
                    Seu Nome Completo
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    maxLength={80}
                    autoComplete="name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Ex: Mariana Silva"
                    className="w-full min-h-[44px] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-[#141214] border border-[#262328] text-base sm:text-sm text-[#F7F3F1] placeholder-[#E8D9D4]/30 focus:outline-none focus:border-[#D8A0A4] transition-colors"
                  />
                </div>

                {/* Service Selector */}
                <div>
                  <label htmlFor="service-select" className="block text-xs uppercase tracking-wider text-[#E8D9D4] mb-1.5 sm:mb-2 font-medium">
                    Procedimento Desejado
                  </label>
                  <select
                    id="service-select"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full min-h-[44px] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-[#141214] border border-[#262328] text-base sm:text-sm text-[#F7F3F1] focus:outline-none focus:border-[#D8A0A4] transition-colors cursor-pointer"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.name} className="bg-[#141214] text-[#F7F3F1]">
                        {s.name} ({s.duration})
                      </option>
                    ))}
                    <option value="Capacitação / Curso Profissional VIP" className="bg-[#141214] text-[#F7F3F1]">
                      Capacitação / Curso Profissional VIP
                    </option>
                  </select>
                </div>

                {/* Preferred Period */}
                <div>
                  <label htmlFor="period-select" className="block text-xs uppercase tracking-wider text-[#E8D9D4] mb-1.5 sm:mb-2 font-medium">
                    Período de Preferência
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {VALID_PERIODS.map((period) => (
                      <button
                        type="button"
                        key={period}
                        onClick={() => setPreferredPeriod(period)}
                        className={`min-h-[44px] flex items-center justify-center px-3 py-2.5 text-xs text-center rounded-lg border transition-all ${
                          preferredPeriod === period
                            ? 'bg-[#D8A0A4]/15 border-[#D8A0A4] text-[#F7F3F1] font-medium'
                            : 'bg-[#141214] border-[#262328] text-[#E8D9D4]/70 hover:border-[#D8A0A4]/40'
                        }`}
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Optional Note */}
                <div>
                  <label htmlFor="client-note" className="block text-xs uppercase tracking-wider text-[#E8D9D4] mb-1.5 sm:mb-2 font-medium">
                    Observação ou Dúvida (Opcional)
                  </label>
                  <input
                    id="client-note"
                    type="text"
                    maxLength={250}
                    value={clientNote}
                    onChange={(e) => setClientNote(e.target.value)}
                    placeholder="Ex: Primeira vez fazendo fibra, unhas curtas, etc."
                    className="w-full min-h-[44px] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-[#141214] border border-[#262328] text-base sm:text-sm text-[#F7F3F1] placeholder-[#E8D9D4]/30 focus:outline-none focus:border-[#D8A0A4] transition-colors"
                  />
                </div>

                {/* Transparent Notice */}
                <div className="p-3 sm:p-3.5 rounded-lg bg-[#141214] border border-[#1C1A1E] text-xs text-[#E8D9D4]/75 leading-relaxed">
                  Ao clicar abaixo, você será redirecionada diretamente ao WhatsApp de Ana Maria{' '}
                  <strong className="text-[#F7F3F1]">({BUSINESS_INFO.phoneDisplay})</strong> com sua mensagem pronta para envio.
                </div>

                {/* Submit Action (Safe external link with noopener,noreferrer) */}
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[48px] flex items-center justify-center gap-3 py-3.5 sm:py-4 px-4 text-xs font-semibold uppercase tracking-wider text-[#0C0C0E] bg-[#D8A0A4] hover:bg-[#E2B2B6] active:scale-[0.99] rounded-lg transition-all shadow-lg shadow-[#D8A0A4]/10 cursor-pointer text-center"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span>Enviar Solicitação pelo WhatsApp</span>
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
