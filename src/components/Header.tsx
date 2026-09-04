import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteData';
import { BrandLogo } from './BrandLogo';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section for nav highlight
      const sections = SITE_CONFIG.navigation.map((nav) => nav.id);
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090A0F]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-[#090A0F]/80 backdrop-blur-sm border-b border-slate-800/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logotipo no cabeçalho sem o texto ao lado */}
        <BrandLogo size="md" theme="dark" variant="icon-only" />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Navegação Principal">
          {SITE_CONFIG.navigation.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                id={`nav-${item.id}`}
                href={item.href}
                className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all relative ${
                  isActive
                    ? 'text-[#00E88F] bg-emerald-950/40 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#00E88F] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Header CTA & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            id="header-whatsapp-btn"
            href={SITE_CONFIG.contacts.whatsappDefaultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#00E88F] hover:bg-[#00d07f] text-[#070B10] font-extrabold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/20 active:scale-95"
            aria-label="Falar com Bruno Freire no WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-[#070B10]" />
            <span>Quero conversar com o Bruno</span>
          </a>

          {/* Hamburger Button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay & Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-[65px] z-40 bg-[#090A0F]/98 backdrop-blur-xl lg:hidden flex flex-col p-6 border-t border-slate-800 animate-in fade-in duration-200 overflow-y-auto"
        >
          <div className="flex flex-col gap-2 py-4">
            {SITE_CONFIG.navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3.5 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 border border-transparent hover:border-slate-700 transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-xs text-[#00E88F] font-mono">→</span>
              </a>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-slate-800 flex flex-col gap-3">
            <a
              id="mobile-menu-whatsapp-btn"
              href={SITE_CONFIG.contacts.whatsappDefaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-xl bg-[#00E88F] hover:bg-[#00d07f] text-[#070B10] font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle className="w-5 h-5 fill-[#070B10]" />
              <span>Falar no WhatsApp agora</span>
            </a>

            <div className="text-center text-xs text-slate-400 pt-2">
              Atendimento presencial na Zona Sul do Rio & Online
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
