import React from 'react';
import { Instagram, MessageCircle, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#08080A] text-[#E8D9D4] border-t border-[#1C1A1E] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-[#1C1A1E]">
          {/* Brand & Statement */}
          <div className="md:col-span-5 space-y-3 sm:space-y-4">
            <a
              href="#"
              className="font-serif text-2xl tracking-[0.18em] text-[#F7F3F1] uppercase block"
            >
              Ana Maria
            </a>
            <p className="text-xs text-[#E8D9D4]/70 max-w-sm leading-relaxed">
              Nail Designer especialista em alongamento em fibra de vidro e esmaltação em gel de alto padrão. Atendimento exclusivo em Bacabal - MA.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#C8AD91]">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>{BUSINESS_INFO.address}</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-wider text-[#F7F3F1] font-semibold">
              Navegação
            </p>
            <ul className="space-y-1 sm:space-y-2 text-xs text-[#E8D9D4]/75">
              <li>
                <a href="#servicos" className="min-h-[36px] flex items-center hover:text-[#F7F3F1] transition-colors">
                  Serviços de Assinatura
                </a>
              </li>
              <li>
                <a href="#sobre" className="min-h-[36px] flex items-center hover:text-[#F7F3F1] transition-colors">
                  Sobre a Profissional
                </a>
              </li>
              <li>
                <a href="#agenda" className="min-h-[36px] flex items-center hover:text-[#F7F3F1] transition-colors">
                  Agenda & Horários
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="min-h-[36px] flex items-center hover:text-[#F7F3F1] transition-colors">
                  Avaliações Google Maps (5.0 ★)
                </a>
              </li>
              <li>
                <a href="#localizacao" className="min-h-[36px] flex items-center hover:text-[#F7F3F1] transition-colors">
                  Localização do Estúdio
                </a>
              </li>
              <li>
                <a href="#faq" className="min-h-[36px] flex items-center hover:text-[#F7F3F1] transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-4 space-y-3 sm:space-y-4">
            <p className="text-xs uppercase tracking-wider text-[#F7F3F1] font-semibold">
              Canais Oficiais
            </p>
            <div className="space-y-2 sm:space-y-2.5">
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] flex items-center gap-3 p-3 sm:p-3.5 rounded-lg bg-[#141214] border border-[#262328] hover:border-[#D8A0A4]/40 text-xs text-[#E8D9D4] hover:text-[#F7F3F1] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#D8A0A4] shrink-0" />
                <div>
                  <span className="block font-medium">WhatsApp: {BUSINESS_INFO.phoneDisplay}</span>
                  <span className="text-[11px] text-[#C8AD91]">Atendimento e dúvidas</span>
                </div>
              </a>

              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] flex items-center gap-3 p-3 sm:p-3.5 rounded-lg bg-[#141214] border border-[#262328] hover:border-[#D8A0A4]/40 text-xs text-[#E8D9D4] hover:text-[#F7F3F1] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#D8A0A4] shrink-0" />
                <div>
                  <span className="block font-medium">Instagram: {BUSINESS_INFO.instagramHandle}</span>
                  <span className="text-[11px] text-[#C8AD91]">Feed e bastidores</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Quiet copyright */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-[#E8D9D4]/50 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.studioName} · Todos os direitos reservados.</p>
          <p className="flex items-center gap-2">
            <span>Bacabal, Maranhão</span>
            <span aria-hidden="true">·</span>
            <span>Estética Avançada de Unhas</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
