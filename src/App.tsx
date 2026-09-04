/**
 * Bruno Freire | Personal Trainer
 * Aplicação Web Oficial - Zona Sul do Rio de Janeiro & Online
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PublicConnection } from './components/PublicConnection';
import { About } from './components/About';
import { SignatureMethod } from './components/SignatureMethod';
import { Services } from './components/Services';
import { Differentials } from './components/Differentials';
import { Results } from './components/Results';
import { Contents } from './components/Contents';
import { FinalCTA } from './components/FinalCTA';
import { ContactForm } from './components/ContactForm';
import { DossierGuideModal } from './components/DossierGuideModal';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070B10] text-[#F5F7F8] selection:bg-[#00E88F] selection:text-[#070B10] flex flex-col font-sans">
      {/* 1. Fixed Header with Brand & Navigation */}
      <Header />

      <main className="flex-grow">
        {/* 2. Main Hero Section */}
        <Hero />

        {/* 3. Connection with Audience & Real-Life Movement */}
        <PublicConnection />

        {/* 4. About Bruno Freire & Clinical Background */}
        <About />

        {/* 5. Signature Method (Corpo Preparado 40+) */}
        <SignatureMethod />

        {/* 6. 3 Main Services with Direct WhatsApp Actions */}
        <Services />

        {/* 7. Core Differentials */}
        <Differentials />

        {/* 8. Real Supervised Results */}
        <Results />

        {/* 9. Educational Contents & Programs (YouTube & Instagram) */}
        <Contents />

        {/* 10. Final Call to Action */}
        <FinalCTA />

        {/* 11. Interactive WhatsApp Contact Form */}
        <ContactForm />
      </main>

      {/* Guide for Original Photos */}
      <DossierGuideModal />

      {/* 12. Semantic Footer */}
      <Footer />

      {/* 13. Persistent Floating WhatsApp Trigger */}
      <FloatingWhatsApp />
    </div>
  );
}
