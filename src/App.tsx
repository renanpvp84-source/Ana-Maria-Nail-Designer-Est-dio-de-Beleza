/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AnimatedSection } from './components/AnimatedSection';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { useDynamicSEO } from './hooks/useDynamicSEO';

// Code-split below-the-fold sections for instant FCP and early LCP
const SinaisAlongamento = lazy(() =>
  import('./components/SinaisAlongamento').then((m) => ({ default: m.SinaisAlongamento }))
);
const SignatureServices = lazy(() =>
  import('./components/SignatureServices').then((m) => ({ default: m.SignatureServices }))
);
const AboutAnaMaria = lazy(() =>
  import('./components/AboutAnaMaria').then((m) => ({ default: m.AboutAnaMaria }))
);
const AgendaAberta = lazy(() =>
  import('./components/AgendaAberta').then((m) => ({ default: m.AgendaAberta }))
);
const WorkGallery = lazy(() =>
  import('./components/WorkGallery').then((m) => ({ default: m.WorkGallery }))
);
const GoogleReviews = lazy(() =>
  import('./components/GoogleReviews').then((m) => ({ default: m.GoogleReviews }))
);
const LocationStudio = lazy(() =>
  import('./components/LocationStudio').then((m) => ({ default: m.LocationStudio }))
);
const FaqSection = lazy(() =>
  import('./components/FaqSection').then((m) => ({ default: m.FaqSection }))
);
const Footer = lazy(() =>
  import('./components/Footer').then((m) => ({ default: m.Footer }))
);
const FloatingWhatsApp = lazy(() =>
  import('./components/FloatingWhatsApp').then((m) => ({ default: m.FloatingWhatsApp }))
);

export default function App() {
  // Inicialização do Smooth Scroll ("deslizar no gelo" com resposta rápida)
  useSmoothScroll({
    lerp: 0.09,
    duration: 1.15,
    anchorOffset: -70,
  });

  // Dynamic Meta Title & OpenGraph SEO (atualiza <title> e meta tags conforme seções e procedimentos)
  useDynamicSEO();

  const [selectedServicePreset, setSelectedServicePreset] = useState<string | undefined>();

  const handleSelectServiceForBooking = (serviceName: string) => {
    setSelectedServicePreset(serviceName);
    if (window.__lenis) {
      window.__lenis.scrollTo('#agenda', { offset: -70, duration: 1.15 });
    } else {
      const agendaSection = document.getElementById('agenda');
      if (agendaSection) {
        agendaSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0C0C0E] text-[#F7F3F1] selection:bg-[#D8A0A4]/30 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Scroll Progress Bar at the top in #D8A0A4 */}
      <ScrollProgressBar />

      {/* Top Bar Contract (Wordmark, Nav links, Primary Action) */}
      <Navbar />

      <main>
        {/* Critical Above-the-Fold Viewport: Rendered Synchronously for instantaneous FCP and LCP */}
        <Hero />

        {/* Below-the-fold sections loaded asynchronously with zero render-blocking */}
        <Suspense fallback={<div className="min-h-[200px]" />}>
          {/* Editorial Feature: 3 Sinais do Alongamento Perfeito */}
          <SinaisAlongamento />

          {/* Signature Services Grid with Macro Shots & Course Announcement */}
          <AnimatedSection yOffset={28}>
            <SignatureServices onSelectServiceForBooking={handleSelectServiceForBooking} />
          </AnimatedSection>

          {/* About Ana Maria & Authentic Studio Space in Bacabal */}
          <AnimatedSection yOffset={28}>
            <AboutAnaMaria />
          </AnimatedSection>

          {/* Agenda Aberta - Conversion Section */}
          <AnimatedSection yOffset={28}>
            <AgendaAberta selectedServicePreset={selectedServicePreset} />
          </AnimatedSection>

          {/* Macro Work Gallery & Lightbox Viewer */}
          <AnimatedSection yOffset={28}>
            <WorkGallery />
          </AnimatedSection>

          {/* Verified Google Reviews (5.0 Stars) */}
          <AnimatedSection yOffset={28}>
            <GoogleReviews />
          </AnimatedSection>

          {/* Studio Location & Route in Bacabal */}
          <AnimatedSection yOffset={28}>
            <LocationStudio />
          </AnimatedSection>

          {/* Frequently Asked Questions */}
          <AnimatedSection yOffset={28}>
            <FaqSection />
          </AnimatedSection>
        </Suspense>
      </main>

      {/* Quiet Footer & Floating Action */}
      <Suspense fallback={null}>
        <Footer />
        <FloatingWhatsApp />
      </Suspense>
    </div>
  );
}
