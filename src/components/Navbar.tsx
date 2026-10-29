import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0C0C0E]/95 backdrop-blur-md border-b border-[#262328]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-serif text-lg sm:text-xl tracking-[0.16em] sm:tracking-[0.18em] text-[#F7F3F1] hover:text-[#D8A0A4] transition-colors whitespace-nowrap shrink-0 uppercase"
        >
          Ana Maria
        </a>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-xs font-medium tracking-wider uppercase text-[#E8D9D4]/80">
          <a href="#servicos" className="hover:text-[#F7F3F1] transition-colors whitespace-nowrap shrink-0">
            Serviços
          </a>
          <a href="#sobre" className="hover:text-[#F7F3F1] transition-colors whitespace-nowrap shrink-0">
            Sobre
          </a>
          <a href="#avaliacoes" className="hover:text-[#F7F3F1] transition-colors whitespace-nowrap shrink-0">
            Avaliações
          </a>
          <a href="#localizacao" className="hover:text-[#F7F3F1] transition-colors whitespace-nowrap shrink-0">
            Estúdio
          </a>
          <a href="#faq" className="hover:text-[#F7F3F1] transition-colors whitespace-nowrap shrink-0">
            Dúvidas
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <MagneticButton
            as="a"
            href="#agenda"
            maxDelta={6}
            magneticRadius={20}
            strength={0.2}
            damping={0.15}
            className="min-h-[40px] inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#0C0C0E] bg-[#D8A0A4] hover:bg-[#E2B2B6] active:scale-[0.98] rounded-md transition-all shadow-sm whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-[#D8A0A4]"
          >
            Agendar Horário
          </MagneticButton>
        </div>

        {/* Mobile menu button with certified >=44px touch target */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          aria-expanded={mobileMenuOpen}
          className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md text-[#E8D9D4] hover:text-[#F7F3F1] hover:bg-[#1C1A1E] active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8A0A4]"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer with ergonomic thumb-friendly touch targets */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#141214]/98 backdrop-blur-xl border-b border-[#262328] px-4 sm:px-6 py-4 space-y-3 animate-in slide-in-from-top-2 duration-200 max-h-[calc(100dvh-4rem)] overflow-y-auto">
          <nav className="flex flex-col space-y-1 text-sm font-medium tracking-wide text-[#E8D9D4]">
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-3 rounded-lg hover:bg-[#1C1A1E] hover:text-[#F7F3F1] transition-colors"
            >
              Serviços de Assinatura
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-3 rounded-lg hover:bg-[#1C1A1E] hover:text-[#F7F3F1] transition-colors"
            >
              Sobre a Profissional
            </a>
            <a
              href="#avaliacoes"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-3 rounded-lg hover:bg-[#1C1A1E] hover:text-[#F7F3F1] transition-colors"
            >
              Avaliações Google (5.0 ★)
            </a>
            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-3 rounded-lg hover:bg-[#1C1A1E] hover:text-[#F7F3F1] transition-colors"
            >
              Localização em Bacabal
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center px-3 rounded-lg hover:bg-[#1C1A1E] hover:text-[#F7F3F1] transition-colors"
            >
              Perguntas Frequentes
            </a>
          </nav>
          <div className="pt-2">
            <a
              href="#agenda"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[46px] w-full flex items-center justify-center text-center px-4 py-3 text-xs font-semibold tracking-wider uppercase text-[#0C0C0E] bg-[#D8A0A4] hover:bg-[#E2B2B6] active:scale-[0.98] rounded-lg transition-all shadow-md"
            >
              Agendar Horário na Agenda
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
