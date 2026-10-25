import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Award } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { BUSINESS_INFO } from '../data/content';
import { TypingSubtitle } from './TypingSubtitle';
import { ResponsiveImage } from './ResponsiveImage';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [animKey, setAnimKey] = useState(0);
  const [isSparkleActive, setIsSparkleActive] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerSparkle = useCallback(() => {
    if (shouldReduceMotion) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Clean key increment to restart animation from 0% without accumulating DOM instances
    setAnimKey((prev) => prev + 1);
    setIsSparkleActive(true);
    timeoutRef.current = setTimeout(() => {
      setIsSparkleActive(false);
    }, 1250);
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion) return;

    // Trigger when Hero scrolls into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerSparkle();
          }
        });
      },
      { threshold: 0.25 }
    );

    const el = heroRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [triggerSparkle, shouldReduceMotion]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative overflow-hidden bg-[#0C0C0E] atelier-grain pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-24 border-b border-[#262328]"
    >
      {/* Curved Bézier Motion Path Decorative Sparkle */}
      <div
        className="hero-motion-track"
        aria-hidden="true"
      >
        <div
          key={animKey}
          className={`hero-motion-sparkle ${isSparkleActive ? 'is-animating' : ''}`}
          onAnimationEnd={() => setIsSparkleActive(false)}
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            {/* Ambient halo glow */}
            <div className="absolute inset-0 bg-[#D8A0A4]/40 rounded-full blur-[5px]" />
            {/* 4-point Diamond / Star Sparkle SVG with rose-gold gradient */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 drop-shadow-[0_0_8px_rgba(216,160,164,0.9)]"
            >
              <path
                d="M12 0C12 7.5 12 12 19.5 12C12 12 12 16.5 12 24C12 16.5 12 12 4.5 12C12 12 12 7.5 12 0Z"
                fill="url(#sparkle-gradient)"
              />
              <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
              <defs>
                <linearGradient id="sparkle-gradient" x1="4.5" y1="0" x2="19.5" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFFFFF" />
                  <stop offset="0.45" stopColor="#F1DADB" />
                  <stop offset="0.75" stopColor="#D8A0A4" />
                  <stop offset="1" stopColor="#C8AD91" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Subtle ambient light glow */}
      <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#D8A0A4]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-60 sm:w-80 h-60 sm:h-80 bg-[#C8AD91]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6">
            {/* Professional identification kicker without pill badge */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5 text-[11px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.22em] text-[#C8AD91]">
              <span>{BUSINESS_INFO.studioName}</span>
              <span aria-hidden="true" className="text-[#38343b]">·</span>
              <span>Bacabal, Maranhão</span>
              <span aria-hidden="true" className="text-[#38343b]">·</span>
              {/* Interactive trigger button for replaying Bézier motion path */}
              <button
                type="button"
                onClick={triggerSparkle}
                title="Disparar brilho de fibra (Motion Path)"
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] tracking-wider text-[#D8A0A4] bg-[#D8A0A4]/10 hover:bg-[#D8A0A4]/20 border border-[#D8A0A4]/25 transition-all hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#D8A0A4]"
              >
                <Sparkles className="w-3 h-3 text-[#D8A0A4]" />
                <span className="normal-case tracking-normal">Refletir Brilho</span>
              </button>
            </div>

            {/* Main Editorial Headline */}
            <h1
              onMouseEnter={triggerSparkle}
              className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F7F3F1] leading-[1.12] sm:leading-[1.1] tracking-tight text-balance cursor-default select-none"
            >
              Unhas que revelam{' '}
              <span className="font-script block sm:inline text-[#D8A0A4] text-4xl sm:text-6xl lg:text-7xl font-normal lowercase tracking-normal pl-0 sm:pl-1 mt-1 sm:mt-0">
                sua elegância.
              </span>
            </h1>

            {/* Concrete value proposition subtext with subtle typing effect */}
            <div>
              <TypingSubtitle reducedMotion={shouldReduceMotion} />
            </div>

            {/* Conversion CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <a
                href="#agenda"
                className="min-h-[46px] inline-flex items-center justify-center gap-2.5 sm:gap-3 px-5 sm:px-7 py-3 sm:py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0C0C0E] bg-[#D8A0A4] hover:bg-[#E2B2B6] active:scale-[0.98] rounded-lg transition-all shadow-lg shadow-[#D8A0A4]/20 whitespace-normal sm:whitespace-nowrap text-center"
              >
                <span>Agendar Horário na Agenda</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
              </a>

              <a
                href="#servicos"
                className="min-h-[46px] inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-3.5 text-xs font-medium uppercase tracking-wider text-[#F7F3F1] bg-[#141214] hover:bg-[#1C1A1E] border border-[#38343B] hover:border-[#D8A0A4]/60 rounded-lg transition-all whitespace-normal sm:whitespace-nowrap text-center shadow-md"
              >
                Conhecer Procedimentos
              </a>
            </div>

            {/* Verification & Social Proof Strip */}
            <div className="pt-3 sm:pt-4 flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-[#E8D9D4]/85">
              <div className="flex items-center gap-1.5">
                <span className="text-[#C8AD91] font-semibold">5,0 ★</span>
                <span>no Google Maps (11 avaliações)</span>
              </div>
              <span aria-hidden="true" className="text-[#38343B] hidden min-[400px]:inline">·</span>
              <div className="flex items-center gap-1.5">
                <span>{BUSINESS_INFO.instagramHandle}</span>
              </div>
              <span aria-hidden="true" className="text-[#38343B] hidden min-[540px]:inline">·</span>
              <div className="flex items-center gap-1.5">
                <span>Atendimento com hora marcada</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Hand-Crafted Editorial Photography */}
          <div
            className="lg:col-span-5 relative mt-6 lg:mt-0"
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none" onMouseEnter={triggerSparkle}>
              {/* Asymmetric artisan backdrop mat (offset physical depth) */}
              <div className="absolute -inset-2 sm:-inset-3 bg-[#1C1A1E]/80 rounded-hand-2 border border-[#C8AD91]/20 -rotate-1 pointer-events-none" />

              {/* Handcrafted Atelier Seal Badge (Authentic Human Stamp) */}
              <div className="absolute -top-4 -right-3 sm:-top-5 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 atelier-seal text-center p-2 z-30 rotate-6 pointer-events-none select-none shadow-xl">
                <span className="font-serif text-[8px] sm:text-[9px] uppercase tracking-widest text-[#D8A0A4] leading-tight block">Ateliê</span>
                <span className="font-script text-sm sm:text-base text-[#F7F3F1] leading-none block my-0.5">Bacabal</span>
                <span className="text-[7px] text-[#C8AD91] tracking-wider uppercase block font-sans">Exclusivo</span>
              </div>

              {/* Main photo frame with organic border radius */}
              <div className="relative w-full rounded-hand-1 overflow-hidden border border-[#38343B] bg-[#141214] shadow-2xl shadow-black aspect-[4/5] z-10">
                <ResponsiveImage
                  src="/assets/images/hero_nail_art_portrait.jpg"
                  fallbackSrc="/assets/images/hero_nail_art_portrait.webp"
                  alt="Close-up editorial de alongamento de unhas em fibra de vidro com acabamento brilhante em Bacabal - MA"
                  loading="eager"
                  fetchPriority="high"
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 520px"
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-700"
                />

                {/* Subtle bottom gradient scrim (does not obscure the hand) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E]/75 via-transparent to-transparent pointer-events-none" />

                {/* Floating caption on image bottom with handwritten artist mark */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-3 sm:p-3.5 rounded-lg bg-[#0C0C0E]/85 backdrop-blur-md border border-[#262328]/80">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#C8AD91] font-medium font-sans">Acabamento em Fibra</p>
                      <p className="text-xs sm:text-sm font-serif text-[#F7F3F1] mt-0.5">Alongamento & Esmaltação em Gel</p>
                    </div>
                    <span className="font-script text-xl text-[#D8A0A4] shrink-0">Ana Maria</span>
                  </div>
                </div>
              </div>

              {/* Handwritten artisan note beneath photo */}
              <p className="font-script text-base sm:text-lg text-[#D8A0A4]/90 mt-3 text-right pr-2 select-none">
                "Feito individualmente, à mão, sem pressa."
              </p>
            </div>
          </div>
        </div>

        {/* 3 Trust Pillars Strip */}
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.45, ease: 'easeOut' }}
          className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-[#262328] grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#141214] border border-[#262328] shadow-md">
            <div className="p-2.5 rounded-lg bg-[#1C1A1E] text-[#D8A0A4] shrink-0 border border-[#262328]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-serif font-semibold text-[#F7F3F1]">Produtos de Alto Padrão</h3>
              <p className="text-xs text-[#E8D9D4]/80 mt-1 leading-relaxed font-light">
                Fibras de alta densidade e géis nobres testados para garantir acabamento fino, resistência e durabilidade.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#141214] border border-[#262328] shadow-md">
            <div className="p-2.5 rounded-lg bg-[#1C1A1E] text-[#D8A0A4] shrink-0 border border-[#262328]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-serif font-semibold text-[#F7F3F1]">Biossegurança & Higiene</h3>
              <p className="text-xs text-[#E8D9D4]/80 mt-1 leading-relaxed font-light">
                Materiais esterilizados em autoclave, descartáveis individuais e desinfecção rigorosa do estúdio.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#141214] border border-[#262328] shadow-md">
            <div className="p-2.5 rounded-lg bg-[#1C1A1E] text-[#D8A0A4] shrink-0 border border-[#262328]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-serif font-semibold text-[#F7F3F1]">Especialista em Fibra</h3>
              <p className="text-xs text-[#E8D9D4]/80 mt-1 leading-relaxed font-light">
                Profissional com qualificação avançada em técnicas modernas de curvatura simétrica e manicure russa.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
