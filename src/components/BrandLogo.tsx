import React, { useState } from 'react';
import { SITE_CONFIG } from '../config/siteData';

interface BrandLogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'horizontal' | 'vertical' | 'icon-only';
  theme?: 'dark' | 'light';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  showSubtitle = true,
  size = 'md',
  variant = 'horizontal',
  theme = 'dark',
}) => {
  const [imageError, setImageError] = useState(false);

  const iconSizes = {
    sm: 'w-8 h-8 rounded-lg',
    md: variant === 'icon-only' ? 'w-12 h-12 sm:w-14 sm:h-14 rounded-2xl' : 'w-11 h-11 sm:w-12 sm:h-12 rounded-xl',
    lg: 'w-16 h-16 sm:w-20 sm:h-20 rounded-2xl',
  };

  const titleSizes = {
    sm: 'text-sm sm:text-base',
    md: 'text-base sm:text-lg tracking-wide',
    lg: 'text-xl sm:text-2xl tracking-wider',
  };

  const subtitleSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px] sm:text-[11px]',
    lg: 'text-xs',
  };

  // Cores da paleta original:
  const textColor = theme === 'light' ? 'text-slate-900' : 'text-white';
  const subtitleColor = theme === 'light' ? 'text-emerald-600' : 'text-[#00E88F]';

  return (
    <a
      id="brand-logo-link"
      href="#inicio"
      className={`inline-flex ${variant === 'vertical' ? 'flex-col items-center text-center' : 'items-center'} gap-2.5 sm:gap-3 group select-none transition-transform active:scale-95 ${className}`}
      aria-label="Bruno Freire Personal Trainer - Início"
    >
      {/* Imagem da Logo Oficial Enviada */}
      <div
        className={`relative shrink-0 overflow-hidden shadow-sm border border-slate-800 group-hover:border-emerald-500/50 group-hover:shadow-emerald-950/40 transition-all duration-300 bg-[#16191E] ${iconSizes[size]}`}
      >
        {!imageError ? (
          <img
            src="./images/logo-bf.jpg"
            alt="Bruno Freire Personal Trainer - Logo Oficial"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          /* Fallback Vetorial fiel à logo enviada com gradiente neon ciano-coral e monograma bf */
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="neonGlowLogo" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00E5FF" />
                <stop offset="45%" stopColor="#00E88F" />
                <stop offset="100%" stopColor="#FF3B30" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="20" fill="#080D1A" />
            {/* Triângulo Play Neon com cantos arredondados */}
            <path
              d="M 33 22 L 75 47 C 78 49 78 53 75 55 L 33 80 C 29 82 25 80 25 76 L 25 26 C 25 22 29 20 33 22 Z"
              fill="#060913"
              stroke="url(#neonGlowLogo)"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            {/* Monograma bf estilizado em branco */}
            <path
              d="M 38 34 V 66 C 38 71 43 73 48 70 C 53 67 56 61 56 55 C 56 47 50 43 44 44"
              stroke="#FFFFFF"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 52 47 H 61 M 53 40 C 53 35 56 33 60 33"
              stroke="#FFFFFF"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>

      {variant !== 'icon-only' && (
        <div className={`flex flex-col leading-tight ${variant === 'vertical' ? 'items-center mt-1' : ''}`}>
          <div className={`font-black tracking-wider uppercase font-sans ${textColor} ${titleSizes[size]}`}>
            BRUNO FREIRE
          </div>
          {showSubtitle && (
            <span
              className={`font-semibold tracking-[0.22em] uppercase ${subtitleColor} ${subtitleSizes[size]}`}
            >
              PERSONAL TRAINER
            </span>
          )}
        </div>
      )}
    </a>
  );
};
