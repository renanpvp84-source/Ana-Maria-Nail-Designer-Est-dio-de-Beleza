/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useCallback } from 'react';

export interface SectionSEOMeta {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  canonicalHash?: string;
}

export const SEO_SECTION_CONFIG: Record<string, SectionSEOMeta> = {
  hero: {
    title: 'Ana Maria Nail Designer em Bacabal - MA | Salão de Beleza',
    description:
      'Especialista em fibra de vidro e esmaltação em gel em Bacabal - MA. Unhas com acabamento natural e biossegurança. Agende seu horário com Ana Maria!',
    ogTitle: 'Ana Maria Nail Designer em Bacabal - MA | Alongamento & Gel',
    ogDescription:
      'Especialista em fibra de vidro com acabamento natural e esmaltação em gel de alto padrão em Bacabal - MA. Avaliação 5,0 no Google Maps.',
    canonicalHash: '',
  },
  tecnica: {
    title: 'Técnica e Sinais do Alongamento Perfeito | Ana Maria Bacabal',
    description:
      'Descubra os 3 sinais do alongamento perfeito: curvatura C estrutural, ponto de tensão imperceptível e cutícula com acabamento europeu em Bacabal - MA.',
    ogTitle: 'Os 3 Sinais do Alongamento Perfeito | Ana Maria Nail Designer',
    ogDescription:
      'Técnica minuciosa em Bacabal: curvatura fina, estrutura translúcida e saúde da lâmina natural preservada.',
    canonicalHash: 'tecnica',
  },
  servicos: {
    title: 'Serviços de Alongamento e Unhas em Bacabal | Ana Maria',
    description:
      'Conheça os procedimentos exclusivos: Alongamento em Fibra de Vidro, Esmaltação em Gel de Alto Padrão, Nail Art Delicada e Manutenções Preventivas em Bacabal.',
    ogTitle: 'Procedimentos de Assinatura | Ana Maria Nail Designer Bacabal',
    ogDescription:
      'Fibra de vidro ultrarresistente e esmaltação em gel com acabamento fino e duradouro em Bacabal - MA.',
    canonicalHash: 'servicos',
  },
  'fibra-de-vidro': {
    title: 'Alongamento em Fibra de Vidro em Bacabal | Ana Maria Nail Designer',
    description:
      'Alongamento em Fibra de Vidro em Bacabal - MA com máxima naturalidade, curvatura C fina e resistência superior. Atendimento exclusivo com hora marcada.',
    ogTitle: 'Alongamento em Fibra de Vidro em Bacabal - MA | Ana Maria',
    ogDescription:
      'Unhas finas, resistentes e com acabamento translúcido de cinema. Especialidade de Ana Maria em Bacabal.',
    canonicalHash: 'fibra-de-vidro',
  },
  'esmaltacao-gel': {
    title: 'Esmaltação em Gel de Alto Padrão em Bacabal | Ana Maria',
    description:
      'Esmaltação em Gel em Bacabal - MA com secagem imediata LED/UV e brilho espelhado duradouro que não lasca por até 21 dias.',
    ogTitle: 'Esmaltação em Gel de Alto Padrão | Ana Maria Bacabal - MA',
    ogDescription:
      'Brilho vítreo blindado e proteção para as unhas naturais. Agende em Bacabal com Ana Maria.',
    canonicalHash: 'esmaltacao-gel',
  },
  'nail-art-chrome': {
    title: 'Nail Art Delicada & Efeito Chrome em Bacabal | Ana Maria',
    description:
      'Nail Art sofisticada e minimalista em Bacabal: francesa sorriso, glazed donut pearl, folha de ouro e traços finos para ocasiões especiais.',
    ogTitle: 'Nail Art Delicada & Acabamentos Especiais | Ana Maria Bacabal',
    ogDescription:
      'Traços finos, simétricos e estética perolada moderna para unhas refinadas em Bacabal - MA.',
    canonicalHash: 'nail-art-chrome',
  },
  'manutencao-preventiva': {
    title: 'Manutenção de Fibra de Vidro em Bacabal | Ana Maria',
    description:
      'Manutenção preventiva de fibra de vidro a cada 20-25 dias: reposição do ápice de sustentação, profilaxia e preservação da lâmina ungueal.',
    ogTitle: 'Manutenção Preventiva de Alongamento | Ana Maria Bacabal',
    ogDescription:
      'Mantenha a saúde e a beleza das suas unhas de fibra com alinhamento e reposição técnica do ponto de tensão.',
    canonicalHash: 'manutencao-preventiva',
  },
  sobre: {
    title: 'Sobre Ana Maria | Nail Designer Especialista em Bacabal - MA',
    description:
      'Conheça a trajetória de Ana Maria, nail designer em Bacabal - MA especializada em saúde ungueal, biossegurança com autoclave e cursos de aperfeiçoamento.',
    ogTitle: 'Sobre a Profissional Ana Maria | Nail Designer em Bacabal',
    ogDescription:
      'Dedicação aos detalhes, atendimento humanizado e técnicas avançadas em alongamento de unhas em Bacabal.',
    canonicalHash: 'sobre',
  },
  agenda: {
    title: 'Agendamento de Horário de Unhas em Bacabal | WhatsApp Ana Maria',
    description:
      'Consulte horários disponíveis na agenda de Ana Maria Nail Designer em Bacabal - MA e agende seu atendimento direto pelo WhatsApp oficial.',
    ogTitle: 'Agenda Aberta | Reserve seu Horário com Ana Maria em Bacabal',
    ogDescription:
      'Garanta seu horário para fibra de vidro ou esmaltação em gel no Salão de Beleza Ana Maria em Bacabal - MA.',
    canonicalHash: 'agenda',
  },
  galeria: {
    title: 'Galeria de Alongamentos e Unhas em Bacabal | Ana Maria',
    description:
      'Veja fotos reais e fotos macro dos procedimentos de fibra de vidro, esmaltação em gel e decorações feitos por Ana Maria em Bacabal - MA.',
    ogTitle: 'Galeria de Resultados & Unhas Reais | Ana Maria Bacabal',
    ogDescription:
      'Fotos em alta resolução demonstrando simetria, curvatura e cuticulagem impecável em Bacabal.',
    canonicalHash: 'galeria',
  },
  avaliacoes: {
    title: 'Avaliações 5 Estrelas no Google | Ana Maria Bacabal - MA',
    description:
      'Confira os depoimentos e notas 5,0 de clientes e Guias Locais sobre o atendimento no Salão de Beleza Ana Maria em Bacabal - MA.',
    ogTitle: 'Avaliações Verificadas 5.0 ★ no Google Maps | Ana Maria',
    ogDescription:
      'Mais de 10 avaliações máximas destacando pontualidade, simpatia, durabilidade e naturalidade das unhas.',
    canonicalHash: 'avaliacoes',
  },
  localizacao: {
    title: 'Localização do Estúdio em Bacabal - MA | R. Djalma Dutra, 240',
    description:
      'Como chegar ao Salão de Beleza Ana Maria: R. Djalma Dutra, 240, Bacabal - MA. Próximo ao centro, com fácil estacionamento e conforto.',
    ogTitle: 'Endereço & Rota do Estúdio em Bacabal | Ana Maria Nail Designer',
    ogDescription:
      'Espaço privativo e climatizado na Rua Djalma Dutra, 240 em Bacabal - MA. Abra a rota no Google Maps.',
    canonicalHash: 'localizacao',
  },
  faq: {
    title: 'Dúvidas sobre Alongamento em Fibra e Gel | FAQ Ana Maria Bacabal',
    description:
      'Respostas para as dúvidas mais comuns sobre durabilidade da fibra de vidro, tempo de procedimento, cuidados em casa e manutenção em Bacabal.',
    ogTitle: 'Perguntas Frequentes sobre Unhas | Ana Maria Nail Designer',
    ogDescription:
      'Tire suas dúvidas sobre cuidados, durabilidade e processo do alongamento em fibra e gel.',
    canonicalHash: 'faq',
  },
};

function sanitizeMetaText(val?: string): string {
  if (!val) return '';
  return val
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, '')
    .replace(/[<>"']/g, '')
    .trim();
}

function hasConfigKey(key: string): key is keyof typeof SEO_SECTION_CONFIG {
  return (
    key !== '__proto__' &&
    key !== 'constructor' &&
    key !== 'prototype' &&
    Object.prototype.hasOwnProperty.call(SEO_SECTION_CONFIG, key)
  );
}

export function updateMetaTags(seoMeta: SectionSEOMeta, updateUrlHash: boolean = false) {
  if (typeof document === 'undefined') return;

  const safeTitle = sanitizeMetaText(seoMeta.title);
  const safeDesc = sanitizeMetaText(seoMeta.description);
  const safeOgTitle = sanitizeMetaText(seoMeta.ogTitle || seoMeta.title);
  const safeOgDesc = sanitizeMetaText(seoMeta.ogDescription || seoMeta.description);

  // 1. Update <title>
  if (safeTitle && document.title !== safeTitle) {
    document.title = safeTitle;
  }

  // 2. Update meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && safeDesc) {
    metaDesc.setAttribute('content', safeDesc);
  }

  // 3. Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && safeOgTitle) {
    ogTitle.setAttribute('content', safeOgTitle);
  }

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc && safeOgDesc) {
    ogDesc.setAttribute('content', safeOgDesc);
  }

  // 4. Update Twitter tags
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle && safeOgTitle) {
    twitterTitle.setAttribute('content', safeOgTitle);
  }

  const twitterDesc = document.querySelector('meta[name="twitter:description"]');
  if (twitterDesc && safeOgDesc) {
    twitterDesc.setAttribute('content', safeOgDesc);
  }

  // 5. Update browser URL hash via history.replaceState without jumping
  if (updateUrlHash && typeof window !== 'undefined' && window.history?.replaceState) {
    const rawCanonical = seoMeta.canonicalHash ? seoMeta.canonicalHash.replace(/[^a-zA-Z0-9_-]/g, '') : '';
    const targetHash = rawCanonical ? `#${rawCanonical}` : '';
    const currentHash = window.location.hash;
    if (currentHash !== targetHash) {
      const newUrl = targetHash
        ? `${window.location.pathname}${window.location.search}${targetHash}`
        : `${window.location.pathname}${window.location.search}`;
      window.history.replaceState(null, '', newUrl);
    }
  }
}

/**
 * Hook to dynamically update meta titles and descriptions based on scroll position and active sections.
 */
export function useDynamicSEO() {
  const setSEOForId = useCallback((sectionId: string, updateHash: boolean = true) => {
    if (hasConfigKey(sectionId)) {
      const meta = SEO_SECTION_CONFIG[sectionId];
      if (meta) {
        updateMetaTags(meta, updateHash);
      }
    }
  }, []);

  useEffect(() => {
    // Check initial hash on mount
    const rawInitial = window.location.hash.replace(/^#/, '');
    const cleanInitial = rawInitial.replace(/[^a-zA-Z0-9_-]/g, '');
    if (cleanInitial && hasConfigKey(cleanInitial)) {
      setSEOForId(cleanInitial, false);
    }

    // Hash change listener (e.g. anchor link clicks)
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace(/^#/, '');
      const cleanHash = rawHash.replace(/[^a-zA-Z0-9_-]/g, '');
      if (cleanHash && hasConfigKey(cleanHash)) {
        setSEOForId(cleanHash, false);
      } else if (!cleanHash) {
        setSEOForId('hero', false);
      }
    };
    window.addEventListener('hashchange', handleHashChange);

    // Track sections with IntersectionObserver
    const targetSectionIds = [
      'hero',
      'tecnica',
      'servicos',
      'fibra-de-vidro',
      'esmaltacao-gel',
      'nail-art-chrome',
      'manutencao-preventiva',
      'sobre',
      'agenda',
      'galeria',
      'avaliacoes',
      'localizacao',
      'faq',
    ];

    const elementsToObserve = targetSectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elementsToObserve.length === 0) {
      return () => {
        window.removeEventListener('hashchange', handleHashChange);
      };
    }

    // Map each element to its intersection ratio
    const visibilityMap = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            visibilityMap.set(id, entry.intersectionRatio);
          } else {
            visibilityMap.delete(id);
          }
        });

        // Find the visible element with highest intersection ratio or closest to center
        let maxRatio = 0;
        let mostVisibleId = '';

        visibilityMap.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisibleId = id;
          }
        });

        // If top of page is scrolled near 0, default to hero
        if (window.scrollY < 120) {
          mostVisibleId = 'hero';
        }

        if (mostVisibleId && SEO_SECTION_CONFIG[mostVisibleId]) {
          setSEOForId(mostVisibleId, true);
        }
      },
      {
        threshold: [0.15, 0.35, 0.6, 0.85],
        rootMargin: '-10% 0px -30% 0px',
      }
    );

    elementsToObserve.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      observer.disconnect();
    };
  }, [setSEOForId]);

  return { setSEOForId };
}
