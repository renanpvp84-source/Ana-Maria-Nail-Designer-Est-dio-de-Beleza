import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-[#0C0C0E] border-b border-[#262328] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 sm:space-y-3 mb-10 sm:mb-14">
          <div className="text-xs uppercase tracking-[0.22em] text-[#D8A0A4] font-medium">
            Tire Suas Dúvidas
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F7F3F1] tracking-tight text-balance">
            Perguntas Frequentes
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-[#E8D9D4]/80 leading-relaxed font-light max-w-xl mx-auto">
            Informações essenciais sobre durabilidade, cuidados preventivos e o método de atendimento de Ana Maria.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#141214] border border-[#262328] overflow-hidden transition-colors"
              >
                <h3 className="text-inherit font-normal m-0 p-0">
                  <button
                    type="button"
                    onClick={() => toggleIndex(idx)}
                    className="w-full min-h-[52px] px-4 sm:px-6 py-3.5 sm:py-5 flex items-center justify-between text-left gap-3 sm:gap-4 hover:bg-[#1C1A1E]/50 transition-colors cursor-pointer focus:outline-none focus-visible:bg-[#1C1A1E]"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-sm sm:text-base lg:text-lg text-[#F7F3F1] font-medium leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full border border-[#262328] flex items-center justify-center shrink-0 text-[#D8A0A4] transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#1C1A1E]' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                </h3>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-[#E8D9D4]/80 leading-relaxed border-t border-[#1C1A1E]/60 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
