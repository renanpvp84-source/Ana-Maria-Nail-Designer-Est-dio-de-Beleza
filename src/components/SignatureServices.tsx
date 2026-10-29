import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Award, Check, Clock, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { SERVICES, BUSINESS_INFO } from '../data/content';
import { ServiceItem } from '../types';
import { updateMetaTags } from '../hooks/useDynamicSEO';
import { ResponsiveImage } from './ResponsiveImage';
import { ArtisanSealIcon, PrecisionBrushIcon } from './ArtisanIcons';

interface SignatureServicesProps {
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const SignatureServices: React.FC<SignatureServicesProps> = ({ onSelectServiceForBooking }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (selectedService) {
      updateMetaTags(
        {
          title: `${selectedService.name} em Bacabal - MA | Ana Maria Nail Designer`,
          description: selectedService.description,
          ogTitle: `${selectedService.name} em Bacabal | Ana Maria`,
          ogDescription: selectedService.tagline,
          canonicalHash: selectedService.id,
        },
        true
      );
    }
  }, [selectedService]);

  // Safe keyboard handling for modal dismissal (prevents keyboard trap)
  useEffect(() => {
    if (!selectedService) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedService(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedService]);

  const organicRadii = ['rounded-hand-1', 'rounded-hand-2', 'rounded-hand-3', 'rounded-hand-1'];

  return (
    <section id="servicos" className="py-14 sm:py-20 bg-[#0C0C0E] atelier-grain border-b border-[#262328] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
          <div className="space-y-2 sm:space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#D8A0A4] font-medium font-sans">
              <Sparkles className="w-3.5 h-3.5 text-[#D8A0A4]" />
              <span>Procedimentos de Ateliê</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F7F3F1] tracking-tight text-balance">
              Serviços de Assinatura{' '}
              <span className="font-script text-2xl sm:text-3xl text-[#D8A0A4] font-normal block sm:inline-block sm:ml-2">
                artesanais
              </span>
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[#E8D9D4]/80 leading-relaxed font-light">
              Técnicas minuciosas desenvolvidas para quem prioriza simetria, delicadeza e saúde ungueal em cada detalhe.
            </p>
          </div>

          <div className="text-xs uppercase tracking-wider text-[#C8AD91] hidden md:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8A0A4]" />
            <span>Atendimento individual com hora marcada</span>
          </div>
        </div>

        {/* 4 Featured Services Grid (fluid 1 col on mobile, 2 on tablet, 4 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {SERVICES.map((service, index) => {
            const isFlagship = index === 0;
            const radiusClass = organicRadii[index % organicRadii.length];

            return (
              <motion.div
                key={service.id}
                id={service.id}
                data-slide-entrance=""
                initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1] as const,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                }}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                className={`group relative flex flex-col ${radiusClass} bg-[#141214] border ${
                  isFlagship
                    ? 'border-[#D8A0A4]/40 shadow-xl shadow-[#D8A0A4]/5 ring-1 ring-[#D8A0A4]/20'
                    : 'border-[#262328]'
                } hover:border-[#D8A0A4]/50 transition-all duration-300 overflow-hidden shadow-lg`}
              >
                {/* Flagship Specialty Ribbon */}
                {isFlagship && (
                  <div className="absolute top-2.5 left-2.5 z-20 px-2.5 py-1 rounded bg-[#D8A0A4] text-[#0C0C0E] text-[10px] font-semibold tracking-wider uppercase shadow-md flex items-center gap-1 font-sans">
                    <Award className="w-3 h-3" />
                    <span>Especialidade</span>
                  </div>
                )}

                {/* Responsive Image Frame with error fallback */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#1C1A1E]">
                  <ResponsiveImage
                    src={service.image}
                    srcSet={service.srcSet}
                    fallbackSrc="/assets/aistudio/unhas_6aede811.webp"
                    alt={`${service.name} - Nail Designer Ana Maria em Bacabal - MA`}
                    aspectRatioClass="aspect-[4/3]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141214] via-transparent to-transparent opacity-80 pointer-events-none" />
                  
                  {/* Duration badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0C0C0E]/85 backdrop-blur-md border border-[#262328] text-[11px] text-[#E8D9D4]">
                    <Clock className="w-3 h-3 text-[#D8A0A4]" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl text-[#F7F3F1] group-hover:text-[#D8A0A4] transition-colors leading-snug">
                      {service.name}
                    </h3>
                    <p className="text-xs text-[#E8D9D4]/75 mt-2 line-clamp-3 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-1.5 pt-2 border-t border-[#1C1A1E]">
                    {service.highlights.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-[#C8AD91]">
                        <Check className="w-3 h-3 shrink-0 text-[#D8A0A4]" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action button with min 44px hitboxes */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectServiceForBooking(service.name)}
                      className="flex-1 min-h-[44px] flex items-center justify-center py-2.5 px-3 text-center text-xs font-semibold uppercase tracking-wider text-[#0C0C0E] bg-[#D8A0A4] hover:bg-[#E2B2B6] active:scale-[0.98] rounded-md transition-all whitespace-nowrap cursor-pointer"
                    >
                      Agendar Este
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedService(service)}
                      aria-label={`Ver detalhes de ${service.name}`}
                      className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-md border border-[#262328] hover:border-[#D8A0A4] text-[#E8D9D4] hover:text-[#F7F3F1] transition-colors cursor-pointer"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* VIP Professional Courses Banner (verified from Instagram @anamariaab_unhas profile bio) */}
        <div className="mt-10 sm:mt-12 rounded-xl bg-gradient-to-r from-[#141214] via-[#1C1A1E] to-[#141214] border border-[#262328] p-5 sm:p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs uppercase tracking-widest text-[#C8AD91]">
              <Sparkles className="w-3.5 h-3.5 text-[#D8A0A4]" />
              <span>Capacitação Profissional VIP</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#F7F3F1]">
              Cursos & Mentorias para Nail Designers em Bacabal
            </h3>
            <p className="text-xs sm:text-sm text-[#E8D9D4]/80 max-w-2xl leading-relaxed">
              Aprenda as técnicas de fibra de vidro fina, simetria de curvatura C e esmaltação duradoura diretamente com Ana Maria. Turmas reduzidas e atendimento prático personalizado.
            </p>
          </div>

          <a
            href={`${BUSINESS_INFO.whatsappLink}?text=${encodeURIComponent('Olá, Ana Maria! Gostaria de informações sobre os seus cursos de Nail Designer em Bacabal.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#F7F3F1] border border-[#D8A0A4] hover:bg-[#D8A0A4] hover:text-[#0C0C0E] active:scale-[0.98] rounded-md transition-all whitespace-nowrap shrink-0 text-center"
          >
            Informações sobre Cursos
          </a>
        </div>
      </div>

      {/* Modal / Quick View of Service */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3.5 sm:p-4"
          onClick={() => setSelectedService(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <div
            data-lenis-prevent
            className="bg-[#141214] border border-[#262328] rounded-2xl max-w-lg w-full max-h-[85dvh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] bg-[#1C1A1E]">
              <ResponsiveImage
                src={selectedService.image}
                srcSet={selectedService.srcSet}
                fallbackSrc="/assets/aistudio/unhas_6aede811.webp"
                alt={selectedService.name}
                aspectRatioClass="aspect-[16/9]"
                sizes="(max-width: 640px) 100vw, 600px"
              />
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-3 min-w-[44px] min-h-[44px] rounded-full bg-black/70 text-white flex items-center justify-center text-sm hover:bg-black transition-colors"
                aria-label="Fechar"
              >
                ✕
              </button>
            </div>
            <div className="p-5 sm:p-6 space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl text-[#F7F3F1]">{selectedService.name}</h3>
              <p className="text-xs text-[#C8AD91] uppercase tracking-wider">{selectedService.tagline}</p>
              <p className="text-xs sm:text-sm text-[#E8D9D4]/85 leading-relaxed">{selectedService.description}</p>
              
              <div className="space-y-1.5 pt-2 border-t border-[#262328]">
                <p className="text-xs font-semibold text-[#F7F3F1] uppercase tracking-wider">Ideal para:</p>
                <p className="text-xs text-[#E8D9D4]/75">{selectedService.recommendedFor}</p>
              </div>

              <div className="pt-3 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const name = selectedService.name;
                    setSelectedService(null);
                    onSelectServiceForBooking(name);
                  }}
                  className="w-full min-h-[44px] flex items-center justify-center py-3 text-xs font-semibold uppercase tracking-wider text-[#0C0C0E] bg-[#D8A0A4] hover:bg-[#E2B2B6] active:scale-[0.98] rounded-lg transition-all"
                >
                  Continuar para Agendamento
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
