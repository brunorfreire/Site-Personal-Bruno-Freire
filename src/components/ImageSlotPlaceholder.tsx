import React, { useState } from 'react';
import { Camera, Image as ImageIcon, Sparkles } from 'lucide-react';

interface ImageSlotPlaceholderProps {
  id?: string;
  src?: string;
  alt: string;
  aspectRatio?: string; // e.g. 'aspect-[4/5]', 'aspect-[4/3]', 'aspect-square'
  title: string;
  recommendedFilename: string;
  dimensions?: string;
  className?: string;
  subtitle?: string;
  badgeText?: string;
}

export const ImageSlotPlaceholder: React.FC<ImageSlotPlaceholderProps> = ({
  id,
  src,
  alt,
  aspectRatio = 'aspect-[4/5]',
  title,
  recommendedFilename,
  dimensions = '800 x 1000 px',
  className = '',
  subtitle,
  badgeText = 'Foto Oficial • Dossiê',
}) => {
  const [imageError, setImageError] = useState(false);
  const hasValidImage = Boolean(src && src.trim().length > 0 && !imageError);

  if (hasValidImage && src) {
    return (
      <div
        id={id}
        className={`relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950 group ${aspectRatio} ${className}`}
      >
        <img
          src={src}
          alt={alt}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    );
  }

  // Elegant Slot Placeholder (Prepared to receive original files from the Dossier)
  return (
    <div
      id={id}
      className={`relative overflow-hidden rounded-2xl border border-dashed border-emerald-500/30 bg-gradient-to-b from-slate-900/90 via-slate-950 to-[#07080B] p-6 flex flex-col items-center justify-center text-center group transition-all duration-300 hover:border-emerald-400/60 hover:shadow-lg hover:shadow-emerald-950/20 ${aspectRatio} ${className}`}
    >
      {/* Background ambient lighting */}
      <div className="absolute -top-16 -right-16 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #10B981 1px, transparent 0)`,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Slot Badge */}
      <div className="relative z-10 mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
        <Sparkles className="w-3.5 h-3.5" />
        <span>{badgeText}</span>
      </div>

      {/* Central Icon */}
      <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-emerald-400 group-hover:border-emerald-500/40 transition-colors shadow-inner mb-4">
        <Camera className="w-8 h-8 sm:w-10 sm:h-10 opacity-75" />
      </div>

      {/* Content Text */}
      <div className="relative z-10 max-w-xs space-y-1.5">
        <h4 className="text-white font-semibold text-sm sm:text-base leading-snug">
          {title}
        </h4>
        {subtitle && (
          <p className="text-slate-400 text-xs leading-relaxed hidden sm:block">
            {subtitle}
          </p>
        )}
      </div>

      {/* File & Dimension Badge */}
      <div className="relative z-10 mt-5 pt-3 border-t border-slate-800/80 w-full flex flex-col items-center gap-1">
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-300/90 bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-500/20">
          <ImageIcon className="w-3 h-3" />
          <span>public/images/{recommendedFilename}</span>
        </div>
        <span className="text-[10px] text-slate-500">
          Recomendado: {dimensions}
        </span>
      </div>
    </div>
  );
};
