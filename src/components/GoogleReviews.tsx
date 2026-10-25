import React from 'react';
import { ExternalLink, Star, Quote } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { GOOGLE_REVIEWS, BUSINESS_INFO } from '../data/content';

const REVIEW_SHAPES = ['rounded-hand-1', 'rounded-hand-2', 'rounded-hand-3'];

export const GoogleReviews: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="avaliacoes" className="py-14 sm:py-24 bg-[#141214] border-b border-[#262328] relative atelier-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 mb-10 sm:mb-12">
          <div className="space-y-2 sm:space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#C8AD91] font-medium">
              <span>Depoimentos Verificados</span>
              <span className="text-[#D8A0A4]">·</span>
              <span className="font-script lowercase text-base text-[#D8A0A4]">palavras de quem confia</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F7F3F1] tracking-tight text-balance">
              Confiança de Quem Já Viveu a Experiência
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[#E8D9D4]/80 leading-relaxed font-light">
              Depoimentos reais de clientes e Guias Locais cadastrados no perfil oficial do estabelecimento no Google Maps em Bacabal.
            </p>
          </div>

          {/* Google 5.0 score badge with artisanal wax/embossed look */}
          <div className="flex items-center gap-4 p-3.5 sm:p-4 rounded-hand-2 bg-[#0C0C0E] border border-[#262328] shrink-0 self-start md:self-auto shadow-xl">
            <div className="text-left sm:text-right">
              <div className="flex items-center gap-1 justify-start sm:justify-end">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C8AD91] text-[#C8AD91]" />
                ))}
              </div>
              <p className="text-xs text-[#E8D9D4]/80 mt-1">
                <span className="font-semibold text-[#F7F3F1]">{BUSINESS_INFO.rating} de 5,0</span> · {BUSINESS_INFO.reviewsCount} avaliações
              </p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-[#1C1A1E] flex items-center justify-center font-bold text-sm text-[#F7F3F1] border border-[#262328] shrink-0 shadow-inner">
              G
            </div>
          </div>
        </div>

        {/* 3 Real Testimonials Grid with hand-crafted organic shapes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {GOOGLE_REVIEWS.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : idx * 0.1,
                ease: 'easeOut',
              }}
              whileHover={shouldReduceMotion ? undefined : { y: -3 }}
              className={`p-5 sm:p-6 ${REVIEW_SHAPES[idx % REVIEW_SHAPES.length]} bg-[#0C0C0E] border border-[#262328] flex flex-col justify-between space-y-4 hover:border-[#D8A0A4]/40 transition-all duration-300 shadow-lg relative group`}
            >
              {/* Subtle quote watermark */}
              <div className="absolute top-4 right-4 text-[#D8A0A4]/10 group-hover:text-[#D8A0A4]/20 transition-colors pointer-events-none">
                <Quote className="w-8 h-8" />
              </div>

              <div className="space-y-3 relative z-10">
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C8AD91] text-[#C8AD91]" />
                  ))}
                </div>

                <blockquote className="text-xs sm:text-sm text-[#E8D9D4]/90 italic leading-relaxed font-light">
                  "{review.text}"
                </blockquote>
              </div>

              <div className="pt-3.5 sm:pt-4 border-t border-[#1C1A1E] flex items-center justify-between relative z-10">
                <div>
                  <p className="text-xs font-semibold text-[#F7F3F1]">{review.author}</p>
                  {review.badge && (
                    <p className="text-[11px] text-[#C8AD91] mt-0.5">{review.badge}</p>
                  )}
                </div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#E8D9D4]/50">
                  Google Maps
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Maps link strip */}
        <div className="mt-8 sm:mt-12 text-center">
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] inline-flex items-center justify-center gap-2 text-xs font-medium text-[#C8AD91] hover:text-[#F7F3F1] transition-colors underline underline-offset-4"
          >
            <span>Ver perfil e rotas do Salão de Beleza Ana Maria no Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
