import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { SlideEntrance } from './SlideEntrance';
import { BUSINESS_INFO } from '../data/content';
import { ResponsiveImage } from './ResponsiveImage';

export const SinaisAlongamento: React.FC = () => {
  return (
    <section id="tecnica" className="py-14 sm:py-20 lg:py-24 bg-[#0C0C0E] atelier-grain border-b border-[#262328] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-20 w-60 sm:w-80 h-60 sm:h-80 bg-[#C8AD91]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-[#D8A0A4]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetric Editorial Portrait with SlideEntrance (direction: 'left') */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <SlideEntrance direction="left" threshold={0.2} duration={0.6}>
              <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                {/* Physical offset backdrop mat */}
                <div className="absolute -inset-2 bg-[#1C1A1E]/70 rounded-hand-1 border border-[#D8A0A4]/20 rotate-1 pointer-events-none" />

                <div className="relative rounded-hand-2 overflow-hidden border border-[#262328] bg-[#141214] shadow-2xl shadow-black/80 aspect-[3/4] z-10">
                  <ResponsiveImage
                    src="/assets/aistudio/ana_maria_real_clean.png"
                    fallbackSrc="/assets/aistudio/ana_maria_portrait_clean.png"
                    alt="Foto real de Ana Maria Nail Designer com blazer bege e camisa branca"
                    aspectRatioClass="aspect-[3/4]"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 42vw, 440px"
                    className="object-top hover:scale-103 transition-transform duration-700"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E]/95 via-[#0C0C0E]/20 to-transparent pointer-events-none" />

                  {/* Subtle overlay tags matching Reference 3 */}
                  <div className="absolute top-4 sm:top-5 left-4 sm:left-5 text-[11px] uppercase tracking-widest text-[#E8D9D4]/70 font-mono">
                    2026 · ATELIÊ
                  </div>

                  <div className="absolute top-4 sm:top-5 right-4 sm:right-5 text-xs tracking-wider text-[#C8AD91] font-medium font-sans">
                    {BUSINESS_INFO.instagramHandle}
                  </div>

                  {/* Floating Caption Card */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-3 sm:p-3.5 rounded-lg bg-[#0C0C0E]/90 backdrop-blur-md border border-[#262328]">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-[#C8AD91] font-semibold font-sans">
                          Especialista em Fibra
                        </p>
                        <p className="font-serif text-xs sm:text-sm text-[#F7F3F1] mt-0.5">
                          Ana Maria · Bacabal - MA
                        </p>
                      </div>
                      <span className="font-script text-lg sm:text-xl text-[#D8A0A4] shrink-0">Ana Maria</span>
                    </div>
                  </div>
                </div>
              </div>
            </SlideEntrance>
          </div>

          {/* Right Column: Editorial Typography & 3 Signs with SlideEntrance (direction: 'right') */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 order-1 lg:order-2">
            <SlideEntrance direction="right" threshold={0.2} duration={0.6}>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#D8A0A4] font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Filosofia & Técnica</span>
                </div>

                {/* Large high-contrast editorial title with deliberate line breaks (from Reference 3) */}
                <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#F7F3F1] leading-[1.15] sm:leading-[1.12] tracking-tight text-balance">
                  3 sinais que seu alongamento foi feito{' '}
                  <span className="font-script block sm:inline text-[#D8A0A4] text-3xl sm:text-5xl lg:text-6xl font-normal lowercase pl-0 sm:pl-1 mt-1 sm:mt-0">
                    do jeito certo.
                  </span>
                </h2>

                <p className="text-xs sm:text-sm lg:text-base text-[#E8D9D4]/85 leading-relaxed font-light max-w-xl">
                  “O segredo de um bom alongamento está em não parecer falso, zero efeito cascudo, sem acúmulo de gel e com resistência para aguentar os acontecimentos do mês e a vida real.”
                </p>
              </div>

              {/* The 3 Signs Cards with Organic Artisan Details */}
              <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
                {/* Sign 1 */}
                <div className="p-3.5 sm:p-5 rounded-hand-1 bg-[#141214] border border-[#262328] flex items-start gap-3 sm:gap-4 hover:border-[#D8A0A4]/40 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-[#1C1A1E] text-[#D8A0A4] flex items-center justify-center shrink-0 font-serif font-bold text-sm border border-[#262328]">
                    01
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-serif text-sm sm:text-base text-[#F7F3F1] font-semibold">
                        Zero efeito "cascudo" e espessura ultrafina
                      </h3>
                      <span className="font-script text-base sm:text-lg text-[#D8A0A4] font-normal shrink-0 hidden sm:inline">
                        leveza absoluta
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#E8D9D4]/75 leading-relaxed font-light">
                      Nada de unhas pesadas ou acúmulo excessivo de gel. O ponto de tensão e o ápice são milimetricamente dosados para garantir leveza e contorno suave que imita a lâmina natural.
                    </p>
                  </div>
                </div>

                {/* Sign 2 */}
                <div className="p-3.5 sm:p-5 rounded-hand-2 bg-[#141214] border border-[#262328] flex items-start gap-3 sm:gap-4 hover:border-[#D8A0A4]/40 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-[#1C1A1E] text-[#D8A0A4] flex items-center justify-center shrink-0 font-serif font-bold text-sm border border-[#262328]">
                    02
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-serif text-sm sm:text-base text-[#F7F3F1] font-semibold">
                        Naturalidade imperceptível ao toque
                      </h3>
                      <span className="font-script text-base sm:text-lg text-[#D8A0A4] font-normal shrink-0 hidden sm:inline">
                        curvatura C natural
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#E8D9D4]/75 leading-relaxed font-light">
                      A fibra de vidro importada e a cuticulagem russa proporcionam simetria perfeita na curvatura C, resultando em unhas que harmonizam com suas mãos sem parecer artificiais.
                    </p>
                  </div>
                </div>

                {/* Sign 3 */}
                <div className="p-3.5 sm:p-5 rounded-hand-3 bg-[#141214] border border-[#262328] flex items-start gap-3 sm:gap-4 hover:border-[#D8A0A4]/40 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-[#1C1A1E] text-[#D8A0A4] flex items-center justify-center shrink-0 font-serif font-bold text-sm border border-[#262328]">
                    03
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-serif text-sm sm:text-base text-[#F7F3F1] font-semibold">
                        Durabilidade e resistência real para 30 dias
                      </h3>
                      <span className="font-script text-base sm:text-lg text-[#D8A0A4] font-normal shrink-0 hidden sm:inline">
                        para a vida real
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#E8D9D4]/75 leading-relaxed font-light">
                      Estrutura pensada para mulheres dinâmicas: aguenta tarefas diárias, digitação e rotina sem descolamentos ou quebras até o ciclo de manutenção.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href="#agenda"
                  className="min-h-[46px] inline-flex items-center justify-center gap-2.5 px-4 sm:px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0C0C0E] bg-[#D8A0A4] hover:bg-[#E2B2B6] active:scale-[0.98] rounded-lg transition-all shadow-md whitespace-normal sm:whitespace-nowrap text-center"
                >
                  <span>Experimentar esse padrão de unhas</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>

                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-[#C8AD91] px-1 py-1">
                  <CheckCircle2 className="w-4 h-4 text-[#D8A0A4] shrink-0" />
                  <span>Método comprovado em Bacabal - MA</span>
                </div>
              </div>
            </SlideEntrance>
          </div>
        </div>
      </div>
    </section>
  );
};
