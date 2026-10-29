import React from 'react';
import { Award, Heart, Instagram, Sparkles, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SlideEntrance } from './SlideEntrance';
import { BUSINESS_INFO } from '../data/content';
import { ResponsiveImage } from './ResponsiveImage';

export const AboutAnaMaria: React.FC = () => {
  return (
    <section id="sobre" className="py-14 sm:py-24 bg-[#0C0C0E] border-b border-[#262328] relative atelier-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: Authentic Professional & Space Profile Presentation with Handcrafted Frame */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <SlideEntrance direction="left" threshold={0.2} duration={0.6}>
              {/* Asymmetric warm accent mat */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-[#D8A0A4]/30 rounded-hand-2 -z-10 pointer-events-none hidden sm:block rotate-[-1deg]" />

              <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none rounded-hand-2 overflow-hidden border border-[#262328] bg-[#141214] shadow-2xl">
                {/* Instagram & real presence banner */}
                <div className="p-3.5 sm:p-4 bg-[#141214] border-b border-[#262328] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-[#1C1A1E] border border-[#D8A0A4]/50 flex items-center justify-center overflow-hidden shrink-0 shadow-inner">
                      <span className="font-serif text-sm font-semibold text-[#D8A0A4]">AM</span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-[#F7F3F1] tracking-wide truncate">
                        {BUSINESS_INFO.name} | Nail Designer
                      </p>
                      <p className="text-[11px] text-[#C8AD91] truncate">{BUSINESS_INFO.instagramHandle}</p>
                    </div>
                  </div>

                  <a
                    href={BUSINESS_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#1C1A1E] hover:bg-[#262328] text-xs text-[#E8D9D4] transition-colors shrink-0 border border-[#262328]"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#D8A0A4]" />
                    <span>Instagram</span>
                  </a>
                </div>

                {/* Verified image collage highlighting the authentic space & professional */}
                <div className="relative aspect-[4/3] bg-[#0C0C0E] overflow-hidden">
                  <ResponsiveImage
                    src="/assets/aistudio/unhas_6aede811.webp"
                    srcSet="/assets/aistudio/unhas_6aede811-600w.webp 600w, /assets/aistudio/unhas_6aede811.webp 1920w"
                    fallbackSrc="/assets/aistudio/unhas_6aede811.webp"
                    alt="Perfil e trabalhos reais de Ana Maria Nail Designer em Bacabal"
                    width={480}
                    height={360}
                    aspectRatioClass="aspect-[4/3]"
                    className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141214] via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Certified Biosafety Badge on Image */}
                  <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-full bg-[#0C0C0E]/85 backdrop-blur-md border border-[#C8AD91]/40 flex items-center gap-2 shadow-lg">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D8A0A4]" />
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#F7F3F1]">
                      Biossegurança · Autoclave
                    </span>
                  </div>
                </div>

                {/* Space & Bio highlight footer */}
                <div className="p-4 sm:p-5 bg-[#141214] space-y-2.5 sm:space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#E8D9D4]">
                    <MapPin className="w-3.5 h-3.5 text-[#D8A0A4] shrink-0" />
                    <span className="truncate">{BUSINESS_INFO.address}</span>
                  </div>
                  <p className="text-xs text-[#E8D9D4]/75 leading-relaxed font-light">
                    Ambiente privativo e climatizado, projetado para proporcionar conforto absoluto, biossegurança rigorosa e tranquilidade durante todo o atendimento.
                  </p>
                </div>
              </div>

              {/* Handwritten personal quote note */}
              <div className="mt-4 text-center sm:text-left px-2">
                <p className="font-script text-[#D8A0A4] text-lg sm:text-xl leading-relaxed">
                  "A elegância é a harmonia entre técnica rigorosa e respeito ao formato natural."
                </p>
              </div>
            </SlideEntrance>
          </div>

          {/* Right: Narrative & Editorial Credentials */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 order-1 lg:order-2">
            <SlideEntrance direction="right" threshold={0.2} duration={0.6}>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#D8A0A4] font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Conheça a Profissional</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#F7F3F1] leading-tight text-balance mt-2 sm:mt-3">
                Dedicação, técnica precisa e{' '}
                <span className="font-script block sm:inline text-[#D8A0A4] text-3xl sm:text-5xl lg:text-5xl font-normal lowercase pl-0 sm:pl-1 mt-1 sm:mt-0">
                  cuidado genuíno.
                </span>
              </h2>

              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base text-[#E8D9D4]/85 font-light leading-relaxed mt-3 sm:mt-4">
                <p>
                  Com atuação consolidada em <strong className="text-[#F7F3F1] font-medium">Bacabal, Maranhão</strong>,{' '}
                  <strong className="text-[#F7F3F1] font-medium">Ana Maria</strong> construiu sua trajetória fundamentada no acabamento refinado e no respeito rigoroso à fisiologia das unhas naturais.
                </p>
                <p>
                  Especialista em <strong className="text-[#F7F3F1] font-medium">alongamento em fibra de vidro</strong> e esmaltação em gel de alto padrão, cada aplicação é planejada sob medida: respeitando a simetria das mãos, a curvatura ideal e a rotina de cada cliente.
                </p>
                <p>
                  Aqui você não encontra procedimentos padronizados em série. Cada atendimento é um momento exclusivo de autocuidado, onde a durabilidade do procedimento anda de mãos dadas com a integridade da sua lâmina ungueal.
                </p>
              </div>

              {/* 3 Core Principles with humanized hand-cut corners */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-2 sm:pt-3 mt-3 sm:mt-4">
                <div className="p-4 rounded-hand-1 bg-[#141214] border border-[#262328] hover:border-[#D8A0A4]/40 transition-colors">
                  <div className="flex items-center gap-2 text-[#D8A0A4] mb-1.5">
                    <Heart className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#F7F3F1]">
                      Atendimento Humanizado
                    </span>
                  </div>
                  <p className="text-xs text-[#E8D9D4]/75 leading-relaxed font-light">
                    Espaço calmo e acolhedor, onde você relaxa enquanto recebe um procedimento sem pressa, sem lixamento agressivo e sem desconforto.
                  </p>
                </div>

                <div className="p-4 rounded-hand-3 bg-[#141214] border border-[#262328] hover:border-[#C8AD91]/40 transition-colors">
                  <div className="flex items-center gap-2 text-[#C8AD91] mb-1.5">
                    <Award className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#F7F3F1]">
                      Excelência Reconhecida
                    </span>
                  </div>
                  <p className="text-xs text-[#E8D9D4]/75 leading-relaxed font-light">
                    Avaliação máxima de 5,0 estrelas no Google Maps com depoimentos espontâneos de clientes e guias locais de Bacabal.
                  </p>
                </div>
              </div>

              {/* CTA to talk */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0C0C0E] bg-[#D8A0A4] hover:bg-[#E2B2B6] active:scale-[0.98] rounded-lg transition-all shadow-md text-center"
                >
                  <span>Conversar com Ana Maria</span>
                </a>
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center justify-center text-xs font-medium uppercase tracking-wider text-[#E8D9D4] hover:text-[#F7F3F1] underline underline-offset-4 text-center"
                >
                  Ver feed no Instagram
                </a>
              </div>
            </SlideEntrance>
          </div>
        </div>
      </div>
    </section>
  );
};
