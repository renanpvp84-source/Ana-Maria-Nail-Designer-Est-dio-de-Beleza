import React from 'react';
import { Clock, Compass, ExternalLink, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const LocationStudio: React.FC = () => {
  return (
    <section id="localizacao" className="py-14 sm:py-20 bg-[#141214] border-b border-[#262328] relative atelier-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Details & Address info */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div className="text-xs uppercase tracking-[0.22em] text-[#C8AD91] font-medium">
              Atendimento em Bacabal - MA
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F7F3F1] tracking-tight text-balance">
              {BUSINESS_INFO.studioName}
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-[#E8D9D4]/85 leading-relaxed font-light">
              Localizado em ponto central de Bacabal, nosso espaço foi estruturado para receber você com total privacidade, conforto e os mais rigorosos cuidados de assepsia.
            </p>

            <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
              <div className="flex items-start gap-3 sm:gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#0C0C0E] border border-[#262328]">
                <MapPin className="w-5 h-5 text-[#D8A0A4] shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F7F3F1]">
                    Endereço Oficial
                  </h3>
                  <p className="text-xs sm:text-sm text-[#E8D9D4] mt-1 font-medium">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-xs text-[#C8AD91] mt-0.5">
                    Plus Code: {BUSINESS_INFO.plusCode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#0C0C0E] border border-[#262328]">
                <Clock className="w-5 h-5 text-[#D8A0A4] shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F7F3F1]">
                    Horários de Atendimento
                  </h3>
                  <p className="text-xs sm:text-sm text-[#E8D9D4] mt-1">
                    Segunda a Sábado · Exclusivamente com agendamento prévio
                  </p>
                  <p className="text-xs text-[#E8D9D4]/70 mt-0.5">
                    Turnos pela manhã e tarde conforme disponibilidade na agenda
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#0C0C0E] border border-[#262328]">
                <Phone className="w-5 h-5 text-[#D8A0A4] shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F7F3F1]">
                    WhatsApp Oficial
                  </h3>
                  <p className="text-xs sm:text-sm text-[#E8D9D4] mt-1">
                    {BUSINESS_INFO.phoneDisplay}
                  </p>
                  <p className="text-xs text-[#C8AD91] mt-0.5">
                    Atendimento ágil para dúvidas e agendamentos
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0C0C0E] bg-[#C8AD91] hover:bg-[#D6BEAA] active:scale-[0.98] rounded-lg transition-all shadow-md text-center"
              >
                <Compass className="w-4 h-4 shrink-0" />
                <span>Traçar Rota no Google Maps</span>
              </a>
            </div>
          </div>

          {/* Map & Studio Ambiance Visual Card */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-[#262328] bg-[#0C0C0E] shadow-2xl flex flex-col">
              {/* Interactive map representation & verified location header */}
              <div className="p-4 sm:p-5 border-b border-[#262328] flex items-center justify-between bg-[#0C0C0E]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D8A0A4]" />
                  <span className="text-xs font-semibold text-[#F7F3F1]">
                    Bacabal - Maranhão
                  </span>
                </div>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[36px] flex items-center gap-1 text-xs text-[#C8AD91] hover:text-[#F7F3F1]"
                >
                  <span>Abrir no Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Styled clean map representation */}
              <div className="relative aspect-[16/10] bg-[#141214] flex flex-col items-center justify-center p-5 sm:p-8 text-center border-b border-[#262328]">
                {/* Background grid texture */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C8AD91_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="relative z-10 space-y-2 sm:space-y-3 max-w-sm">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-[#D8A0A4]/20 border border-[#D8A0A4] text-[#D8A0A4] flex items-center justify-center mx-auto shadow-lg shadow-[#D8A0A4]/10">
                    <MapPin className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-[#F7F3F1]">
                    R. Djalma Dutra, 240
                  </h3>
                  <p className="text-xs text-[#E8D9D4]/75">
                    Bacabal - MA, 65700-000 · Ponto de fácil acesso com estacionamento nas proximidades
                  </p>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 sm:mt-2 text-xs font-medium text-[#D8A0A4] hover:text-[#E2B2B6] underline underline-offset-4"
                  >
                    Ver localização exata no mapa →
                  </a>
                </div>
              </div>

              {/* Amenities footer */}
              <div className="p-4 sm:p-5 bg-[#0C0C0E] grid grid-cols-1 min-[420px]:grid-cols-2 gap-2.5 sm:gap-3 text-xs text-[#E8D9D4]/80">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D8A0A4] shrink-0" />
                  <span>Ambiente Climatizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D8A0A4] shrink-0" />
                  <span>Esterilização Hospitalar</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D8A0A4] shrink-0" />
                  <span>Wi-Fi para Clientes</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D8A0A4] shrink-0" />
                  <span>Atendimento com Hora Marcada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
