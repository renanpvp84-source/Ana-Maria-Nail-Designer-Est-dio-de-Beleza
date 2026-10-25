/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SinaisAlongamento } from './components/SinaisAlongamento';
import { SignatureServices } from './components/SignatureServices';
import { AboutAnaMaria } from './components/AboutAnaMaria';
import { AgendaAberta } from './components/AgendaAberta';
import { WorkGallery } from './components/WorkGallery';
import { GoogleReviews } from './components/GoogleReviews';
import { LocationStudio } from './components/LocationStudio';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AnimatedSection } from './components/AnimatedSection';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { useDynamicSEO } from './hooks/useDynamicSEO';

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
        {/* Hero Section with Macro Editorial Photography & Trust Pillars */}
        <Hero />

        {/* Editorial Feature: 3 Sinais do Alongamento Perfeito (Reference 3) with SlideEntrance */}
        <SinaisAlongamento />

        {/* Signature Services Grid with Macro Shots & Course Announcement */}
        <AnimatedSection yOffset={28}>
          <SignatureServices onSelectServiceForBooking={handleSelectServiceForBooking} />
        </AnimatedSection>

        {/* About Ana Maria & Authentic Studio Space in Bacabal */}
        <AnimatedSection yOffset={28}>
          <AboutAnaMaria />
        </AnimatedSection>

        {/* Agenda Aberta - Conversion Section (Inspired by Reference B) */}
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
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Discreet Floating Action */}
      <FloatingWhatsApp />
    </div>
  );
}
