import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Atendimento rápido" className="fixed bottom-[max(1rem,env(safe-area-inset-bottom,1rem))] right-4 sm:bottom-6 sm:right-6 z-40">
      <a
        href={BUSINESS_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp oficial de Ana Maria"
        className="group min-h-[48px] flex items-center gap-2.5 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full bg-[#141214]/95 backdrop-blur-md border border-[#262328] hover:border-[#D8A0A4] text-[#F7F3F1] shadow-2xl shadow-black/80 hover:bg-[#1C1A1E] transition-all duration-300 active:scale-95"
      >
        <div className="w-8 h-8 rounded-full bg-[#D8A0A4] text-[#0C0C0E] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
          <MessageCircle className="w-4 h-4 fill-current" />
        </div>
        <div className="hidden sm:block text-left pr-1">
          <p className="text-[10px] uppercase tracking-wider text-[#C8AD91] font-semibold leading-tight">
            Agenda Online
          </p>
          <p className="text-xs text-[#F7F3F1] font-medium leading-tight">
            WhatsApp Oficial
          </p>
        </div>
      </a>
    </aside>
  );
};
