import React, { useState, useEffect } from 'react';
import { Eye, Sparkles, X } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { updateMetaTags } from '../hooks/useDynamicSEO';
import { ResponsiveImage } from './ResponsiveImage';

interface GalleryItem {
  id: string;
  itemNumber: string;
  title: string;
  category: 'fibra' | 'gel' | 'nailart';
  categoryLabel: string;
  handwrittenNote: string;
  image: string;
  srcSet?: string;
  caption: string;
  roundedClass: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    itemNumber: '№ 01',
    title: 'Alongamento Amendoado com Glazed Rose Gold',
    category: 'nailart',
    categoryLabel: 'Nail Art & Detalhes',
    handwrittenNote: 'brilho vítreo sutil',
    image: '/assets/images/hero_nail_art_luxury_1792768668218.webp',
    srcSet: '/assets/images/hero_nail_art_luxury-500w.webp 500w, /assets/images/hero_nail_art_luxury_1792768668218.webp 1376w',
    caption: 'Curvatura elegante, ponta amendoada e detalhe em pó cromado ouro rosé sobre base nude translúcida.',
    roundedClass: 'rounded-hand-1'
  },
  {
    id: 'g2',
    itemNumber: '№ 02',
    title: 'Estruturação em Fibra de Vidro e Ponto de Tensão',
    category: 'fibra',
    categoryLabel: 'Fibra de Vidro',
    handwrittenNote: 'leveza estrutural',
    image: '/assets/images/service_fibra_vidro_1792768668516.webp',
    srcSet: '/assets/images/service_fibra_vidro-500w.webp 500w, /assets/images/service_fibra_vidro_1792768668516.webp 1200w',
    caption: 'Aplicação minuciosa de fibra com alinhamento simétrico e espessura ultrafina, reproduzindo a leveza da unha natural.',
    roundedClass: 'rounded-hand-2'
  },
  {
    id: 'g3',
    itemNumber: '№ 03',
    title: 'Esmaltação em Gel Nude e Rosa Queimado',
    category: 'gel',
    categoryLabel: 'Esmaltação em Gel',
    handwrittenNote: 'acabamento espelhado',
    image: '/assets/images/service_esmaltacao_gel_1792768669630.webp',
    srcSet: '/assets/images/service_esmaltacao_gel-500w.webp 500w, /assets/images/service_esmaltacao_gel_1792768669630.webp 1200w',
    caption: 'Acabamento espelhado de altíssimo brilho, cuticulagem limpa sem cortes e durabilidade de semanas.',
    roundedClass: 'rounded-hand-3'
  },
  {
    id: 'g4',
    itemNumber: '№ 04',
    title: 'Micro-Francesinha Champagne Chrome',
    category: 'nailart',
    categoryLabel: 'Nail Art & Detalhes',
    handwrittenNote: 'traço artesanal fino',
    image: '/assets/images/service_nail_art_1792768669218.webp',
    srcSet: '/assets/images/service_nail_art-500w.webp 500w, /assets/images/service_nail_art_1792768669218.webp 1200w',
    caption: 'Traço perolado delicado sobre base leitosa perolada, perfeito para ocasiões formais ou uso diário refinado.',
    roundedClass: 'rounded-hand-1'
  }
];

export const WorkGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'fibra' | 'gel' | 'nailart'>('all');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Dynamic meta title updates when user explores specific service photos in the gallery
  useEffect(() => {
    if (activeTab === 'fibra') {
      updateMetaTags(
        {
          title: 'Fotos de Alongamento em Fibra de Vidro em Bacabal | Galeria Ana Maria',
          description:
            'Explore fotos reais e detalhadas de alongamentos em fibra de vidro realizados por Ana Maria em Bacabal - MA.',
          ogTitle: 'Fotos de Fibra de Vidro em Bacabal | Galeria Ana Maria',
          ogDescription: 'Curvatura C simétrica, ponta fina e acabamento natural de fibra de vidro em Bacabal.',
          canonicalHash: 'galeria',
        },
        false
      );
    } else if (activeTab === 'gel') {
      updateMetaTags(
        {
          title: 'Fotos de Esmaltação em Gel em Bacabal | Galeria Ana Maria',
          description:
            'Confira fotos em alta resolução de esmaltação em gel com brilho espelhado e durabilidade em Bacabal - MA.',
          ogTitle: 'Fotos de Esmaltação em Gel | Galeria Ana Maria Bacabal',
          ogDescription: 'Unhas com brilho vítreo blindado e acabamento impecável em Bacabal - MA.',
          canonicalHash: 'galeria',
        },
        false
      );
    } else if (activeTab === 'nailart') {
      updateMetaTags(
        {
          title: 'Fotos de Nail Art & Francesinha em Bacabal | Galeria Ana Maria',
          description:
            'Inspirações de nail art delicada, glazed donut pearl e francesinha sorriso feitas em Bacabal por Ana Maria.',
          ogTitle: 'Nail Art & Decorações Finas | Galeria Ana Maria Bacabal',
          ogDescription: 'Designs elegantes e minimalistas para unhas refinadas em Bacabal - MA.',
          canonicalHash: 'galeria',
        },
        false
      );
    }
  }, [activeTab]);

  // Safe keyboard handling for lightbox dismissal
  useEffect(() => {
    if (!activeLightbox) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveLightbox(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightbox]);

  const filteredItems = activeTab === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="galeria" className="py-14 sm:py-20 bg-[#0C0C0E] border-b border-[#262328] relative atelier-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="space-y-2 sm:space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#D8A0A4] font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curadoria & Lookbook</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F7F3F1] tracking-tight text-balance">
              Precisão em Cada{' '}
              <span className="font-script text-[#D8A0A4] text-4xl sm:text-5xl lowercase">detalhe</span>
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[#E8D9D4]/80 leading-relaxed font-light">
              Fotografias reais sem filtros distorcidos: observe o alinhamento das cutículas, o ponto de tensão e a harmonia das curvaturas.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#141214] rounded-lg border border-[#262328] overflow-x-auto max-w-full no-scrollbar shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`min-h-[38px] px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap flex items-center justify-center ${
                activeTab === 'all'
                  ? 'bg-[#D8A0A4] text-[#0C0C0E] font-semibold shadow-sm'
                  : 'text-[#E8D9D4]/70 hover:text-[#F7F3F1]'
              }`}
            >
              Todos ({GALLERY_ITEMS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('fibra')}
              className={`min-h-[38px] px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap flex items-center justify-center ${
                activeTab === 'fibra'
                  ? 'bg-[#D8A0A4] text-[#0C0C0E] font-semibold shadow-sm'
                  : 'text-[#E8D9D4]/70 hover:text-[#F7F3F1]'
              }`}
            >
              Fibra de Vidro
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('gel')}
              className={`min-h-[38px] px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap flex items-center justify-center ${
                activeTab === 'gel'
                  ? 'bg-[#D8A0A4] text-[#0C0C0E] font-semibold shadow-sm'
                  : 'text-[#E8D9D4]/70 hover:text-[#F7F3F1]'
              }`}
            >
              Esmaltação em Gel
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('nailart')}
              className={`min-h-[38px] px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap flex items-center justify-center ${
                activeTab === 'nailart'
                  ? 'bg-[#D8A0A4] text-[#0C0C0E] font-semibold shadow-sm'
                  : 'text-[#E8D9D4]/70 hover:text-[#F7F3F1]'
              }`}
            >
              Nail Art
            </button>
          </div>
        </div>

        {/* Gallery Grid with humanized organic cards & lookbook annotations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.08,
                ease: 'easeOut',
              }}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className={`group cursor-pointer ${item.roundedClass} overflow-hidden bg-[#141214] border border-[#262328] hover:border-[#D8A0A4]/60 transition-all duration-300 relative shadow-xl flex flex-col`}
            >
              {/* Image Frame with ResponsiveImage */}
              <div className="relative aspect-square overflow-hidden bg-[#1C1A1E]">
                <ResponsiveImage
                  src={item.image}
                  srcSet={item.srcSet}
                  alt={`${item.title} - ${item.categoryLabel} por Ana Maria Nail Designer em Bacabal - MA`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />

                {/* Handcrafted lookbook index number badge */}
                <div className="absolute top-2.5 left-2.5 z-10 px-2.5 py-1 rounded-md bg-[#0C0C0E]/80 backdrop-blur-md border border-[#262328] text-[10px] uppercase font-mono tracking-wider text-[#C8AD91]">
                  {item.itemNumber}
                </div>

                {/* Hover overlay with eye icon */}
                <div className="absolute inset-0 bg-[#0C0C0E]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="p-3 rounded-full bg-[#0C0C0E]/90 border border-[#D8A0A4] text-[#D8A0A4] shadow-lg transform group-hover:scale-110 transition-transform">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Card Meta & Details */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#141214] to-[#121012]">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] uppercase tracking-wider text-[#C8AD91] font-medium block">
                      {item.categoryLabel}
                    </span>
                    <span className="font-script text-xs text-[#D8A0A4]">
                      {item.handwrittenNote}
                    </span>
                  </div>
                  <h3 className="font-serif text-sm sm:text-base text-[#F7F3F1] mt-1.5 group-hover:text-[#D8A0A4] transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#262328]/70">
                  <p className="text-[11px] text-[#E8D9D4]/70 line-clamp-2 font-light leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-3.5 sm:p-6"
          onClick={() => setActiveLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de fotos em alta resolução"
        >
          <div
            data-lenis-prevent
            className="bg-[#141214] border border-[#262328] rounded-2xl max-w-2xl w-full max-h-[88dvh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveLightbox(null)}
              className="absolute top-3 right-3 z-20 min-w-[44px] min-h-[44px] rounded-full bg-black/75 text-white flex items-center justify-center hover:bg-black transition-colors border border-white/10"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[4/3] max-h-[55vh] bg-[#0C0C0E] overflow-hidden rounded-t-2xl">
              <ResponsiveImage
                src={activeLightbox.image}
                srcSet={activeLightbox.srcSet}
                alt={activeLightbox.title}
                className="w-full h-full object-contain"
                sizes="(max-width: 768px) 100vw, 800px"
                loading="eager"
              />
            </div>

            <div className="p-5 sm:p-6 space-y-2 bg-[#141214]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#C8AD91] font-medium">
                  {activeLightbox.categoryLabel} · {activeLightbox.itemNumber}
                </span>
                <span className="font-script text-base text-[#D8A0A4]">
                  {activeLightbox.handwrittenNote}
                </span>
              </div>
              <h3 className="font-serif text-lg sm:text-2xl text-[#F7F3F1]">
                {activeLightbox.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#E8D9D4]/85 leading-relaxed font-light">
                {activeLightbox.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
