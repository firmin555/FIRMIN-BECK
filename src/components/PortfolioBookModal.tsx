import { useState, useEffect, useRef } from 'react';
import { 
  X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2, 
  MessageCircle, Sparkles, BookOpen, Layers, CheckCircle2, 
  Share2, ArrowLeft, ArrowRight, Grid, Eye, Copy, Check,
  Palette, Type, Compass, Award
} from 'lucide-react';
import { PORTFOLIO_PAGES, PortfolioBookPage, ColorSwatch } from '../data/portfolioData';

interface PortfolioBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPageNumber?: number; // 1 to 22
  onOpenContact: (customMessage?: string) => void;
}

export function PortfolioBookModal({
  isOpen,
  onClose,
  initialPageNumber = 1,
  onOpenContact
}: PortfolioBookModalProps) {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(
    Math.max(0, Math.min(PORTFOLIO_PAGES.length - 1, (initialPageNumber || 1) - 1))
  );
  const [zoomLevel, setZoomLevel] = useState<number>(1); // 1 = 100%, 1.5 = 150%, 2 = 200%
  const [showGrid, setShowGrid] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'visual' | 'casestudy'>('visual');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  // Sync initialPageNumber when opened
  useEffect(() => {
    if (isOpen && initialPageNumber) {
      setCurrentPageIndex(Math.max(0, Math.min(PORTFOLIO_PAGES.length - 1, initialPageNumber - 1)));
      setZoomLevel(1);
      setShowGrid(false);
    }
  }, [isOpen, initialPageNumber]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const activeThumb = thumbnailContainerRef.current.querySelector(
        `[data-thumb-index="${currentPageIndex}"]`
      ) as HTMLElement | null;
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [currentPageIndex]);

  // Keyboard navigation (Arrow keys + Escape)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentPageIndex]);

  if (!isOpen) return null;

  const totalPages = PORTFOLIO_PAGES.length;
  const currentPage: PortfolioBookPage = PORTFOLIO_PAGES[currentPageIndex] || PORTFOLIO_PAGES[0];

  const goToPrevious = () => {
    setZoomLevel(1);
    setCurrentPageIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const goToNext = () => {
    setZoomLevel(1);
    setCurrentPageIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const goToPage = (index: number) => {
    setZoomLevel(1);
    setCurrentPageIndex(index);
  };

  const handleCopyColor = (hex: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(hex);
      setCopiedColor(hex);
      setTimeout(() => setCopiedColor(null), 2000);
    }
  };

  const handleShare = () => {
    const shareText = `Portfolio officiel de Beck Beck Firmin - Planche ${currentPage.pageNumber}/${totalPages}: ${currentPage.title}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${shareText} - WhatsApp: +237 698909071`);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  const handleWhatsAppContact = () => {
    const text = encodeURIComponent(
      `Bonjour Beck Beck Firmin, j'ai consulté votre portfolio officiel (Planche ${currentPage.pageNumber}/${totalPages} : ${currentPage.title}). J'aimerais échanger avec vous pour une création dans ce style professionnel.`
    );
    window.open(`https://wa.me/237698909071?text=${text}`, '_blank');
  };

  const handleOrderQuote = () => {
    onClose();
    onOpenContact(
      `Bonjour Firmin, je souhaite un devis pour un projet de design professionnel basé sur la planche ${currentPage.pageNumber}/${totalPages} (${currentPage.title}).`
    );
  };

  // Section quick jump buttons
  const sections = [
    { label: 'Tous (1-22)', startPage: 1 },
    { label: '01. Logos', startPage: 4 },
    { label: '02. Marque BOLAC', startPage: 6 },
    { label: '03. Médias Sociaux', startPage: 10 },
    { label: '04. Packaging', startPage: 13 },
    { label: '05. Supports Print', startPage: 16 },
    { label: 'Édition & Livre IA', startPage: 18 },
    { label: '★ Planches Studio Pro', startPage: 20 },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-2xl p-2 sm:p-4 lg:p-6 text-slate-100 overflow-hidden animate-fadeIn">
      
      {/* Main Reader Container */}
      <div className="relative w-full max-w-7xl h-full max-h-[96vh] bg-[#0f1118] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Top Bar Navigation */}
        <div className="px-4 sm:px-6 py-3 border-b border-white/10 bg-[#0b0c12] flex items-center justify-between gap-4 shrink-0">
          
          {/* Left: Brand & Page counter */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#f5b716] flex items-center justify-center font-black text-slate-950 text-xs shadow-sm shrink-0">
              B·
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Book Créatif Officiel
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  Planche {currentPage.pageNumber.toString().padStart(2, '0')} / {totalPages}
                </span>
                {currentPage.isExtendedBoard && (
                  <span className="text-[9px] font-bold text-[#f5b716] uppercase tracking-wider bg-[#f5b716]/10 px-2 py-0.5 rounded border border-[#f5b716]/20">
                    Édition Studio Pro
                  </span>
                )}
              </div>
              <h2 className="text-xs sm:text-sm font-semibold text-slate-200 truncate max-w-xs sm:max-w-md lg:max-w-xl">
                {currentPage.title}
              </h2>
            </div>
          </div>

          {/* Center: Quick Section Switcher (Desktop) */}
          <div className="hidden xl:flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/5 text-[11px]">
            {sections.map((sec) => {
              const isCurrent = 
                sec.startPage === 1 
                  ? currentPage.pageNumber <= 3 
                  : (sec.startPage === 20 ? currentPage.pageNumber >= 20 : Math.abs(currentPage.pageNumber - sec.startPage) <= 2);
              return (
                <button
                  key={sec.label}
                  onClick={() => goToPage(sec.startPage - 1)}
                  className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                    isCurrent 
                      ? 'bg-[#f5b716] text-slate-950 font-bold' 
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {sec.label}
                </button>
              );
            })}
          </div>

          {/* Right: Actions (Studio Mode, Grid Toggle, Zoom, Share, Close) */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            
            {/* View Mode Toggle: Planche Pure vs Étude de Cas */}
            <div className="flex items-center bg-white/5 p-1 rounded-xl border border-white/10 text-xs">
              <button
                onClick={() => setActiveTab('visual')}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'visual'
                    ? 'bg-[#f5b716] text-slate-950 font-bold shadow'
                    : 'text-slate-300 hover:text-white'
                }`}
                title="Afficher la planche en grand format sans panneau latéral"
              >
                <Eye className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Plein Écran Visuel</span>
                <span className="sm:hidden">Planche</span>
              </button>
              <button
                onClick={() => setActiveTab('casestudy')}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'casestudy'
                    ? 'bg-[#f5b716] text-slate-950 font-bold shadow'
                    : 'text-slate-300 hover:text-white'
                }`}
                title="Afficher l'étude de cas, le nuancier et les spécifications"
              >
                <Compass className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Étude & Nuancier</span>
                <span className="sm:hidden">Étude</span>
              </button>
            </div>

            {/* Grid overlay toggle */}
            <button
              onClick={() => setShowGrid(!showGrid)}
              className={`p-2 rounded-xl transition-colors cursor-pointer ${
                showGrid 
                  ? 'bg-[#f5b716] text-slate-950' 
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
              title={showGrid ? "Masquer la grille de construction suisse" : "Afficher la grille suisse & repères"}
            >
              <Grid className="w-4 h-4" />
            </button>

            {/* Zoom Toggle */}
            <div className="flex items-center bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              <button
                onClick={() => setZoomLevel(zoomLevel === 1 ? 1.5 : zoomLevel === 1.5 ? 2 : 1)}
                className="px-2.5 py-1.5 text-xs font-mono font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Agrandir / Zoomer"
              >
                {Math.round(zoomLevel * 100)}%
              </button>
            </div>

            <button
              onClick={handleShare}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer relative"
              title="Partager cette planche"
            >
              <Share2 className="w-4 h-4" />
              {isCopied && (
                <span className="absolute -bottom-7 right-0 text-[10px] bg-[#f5b716] text-slate-950 font-bold px-2 py-0.5 rounded shadow">
                  Copié !
                </span>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer ml-1"
              title="Fermer (Échap)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Canvas & Viewer Body */}
        <div className="flex-1 min-h-0 flex flex-col lg:flex-row overflow-hidden bg-[#07080c]">
          
          {/* Main Visual Presentation Stage */}
          <div className={`relative flex-1 min-h-0 items-center justify-center p-3 sm:p-6 overflow-hidden select-none ${
            activeTab === 'casestudy' ? 'hidden md:flex' : 'flex'
          }`}>
            
            {/* Previous Page Button */}
            <button
              onClick={goToPrevious}
              className="absolute left-3 sm:left-6 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/75 hover:bg-[#f5b716] hover:text-slate-950 text-white backdrop-blur-md border border-white/20 transition-all shadow-2xl flex items-center justify-center cursor-pointer group active:scale-95"
              title="Page précédente (Flèche gauche)"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Next Page Button */}
            <button
              onClick={goToNext}
              className="absolute right-3 sm:right-6 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/75 hover:bg-[#f5b716] hover:text-slate-950 text-white backdrop-blur-md border border-white/20 transition-all shadow-2xl flex items-center justify-center cursor-pointer group active:scale-95"
              title="Page suivante (Flèche droite)"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Active Page Image Box */}
            <div 
              className={`relative max-w-full max-h-full flex items-center justify-center transition-all duration-300 ${
                zoomLevel > 1 ? 'cursor-zoom-out overflow-auto' : 'cursor-zoom-in'
              }`}
              style={{
                transform: `scale(${zoomLevel})`,
                transformOrigin: 'center center'
              }}
              onClick={() => setZoomLevel(zoomLevel === 1 ? 1.5 : 1)}
            >
              <img
                src={currentPage.image}
                alt={`${currentPage.title} - Planche ${currentPage.pageNumber} sur ${totalPages}`}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] sm:max-h-[76vh] lg:max-h-[82vh] w-auto max-w-full object-contain rounded-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border border-white/10 ring-1 ring-black/70"
              />

              {/* Swiss Modular Precision Grid Overlay (When toggled) */}
              {showGrid && (
                <div className="absolute inset-0 pointer-events-none rounded-xl overflow-hidden border border-cyan-400/40">
                  {/* 12-column grid lines */}
                  <div className="w-full h-full grid grid-cols-12 gap-2 p-4 bg-cyan-950/15">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={i} className="h-full border-x border-cyan-400/25 bg-cyan-400/5 relative">
                        <span className="absolute top-1 left-1 text-[8px] font-mono text-cyan-300/60">
                          C{i + 1}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Horizontal baseline guides */}
                  <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none">
                    <div className="w-full border-b border-amber-400/30" />
                    <div className="w-full border-b border-cyan-400/30" />
                    <div className="w-full border-b border-cyan-400/30" />
                    <div className="w-full border-b border-amber-400/30" />
                  </div>

                  {/* Grid indicator badge */}
                  <div className="absolute top-3 left-3 bg-cyan-950/90 text-cyan-300 text-[10px] font-mono px-2 py-0.5 rounded border border-cyan-400/40 shadow">
                    Repères d'alignement suisse • Grille 12 Colonnes
                  </div>
                </div>
              )}

              {/* Watermark badge on bottom right of image */}
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded bg-black/85 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300 pointer-events-none shadow-md">
                Planche {currentPage.pageNumber.toString().padStart(2, '0')} / {totalPages} · ArtNovaTech
              </div>
            </div>

          </div>

          {/* Right Info Sidebar (Page context, Case study breakdown, Color palette, Typography, CTA) */}
          {activeTab === 'casestudy' && (
            <div className="w-full lg:w-[420px] xl:w-[460px] border-t lg:border-t-0 lg:border-l border-white/10 bg-[#0d0e14] p-4 sm:p-6 flex flex-col justify-between shrink-0 overflow-y-auto max-h-[50vh] lg:max-h-full">
            
            <div className="space-y-5">
              
              {/* Category & Page counter */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#f5b716]/10 text-[#f5b716] border border-[#f5b716]/20">
                    {currentPage.categoryLabel}
                  </span>
                  {currentPage.isExtendedBoard && (
                    <span className="text-[10px] text-amber-400 flex items-center gap-1 font-bold">
                      <Award className="w-3 h-3" />
                      <span>Studio Showcase</span>
                    </span>
                  )}
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  {currentPage.pageNumber} / {totalPages}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                  {currentPage.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#f5b716] font-medium mt-1">
                  {currentPage.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentPage.description}
              </p>

              {/* INTERACTIVE COLOR PALETTE (Nuancier professionnel) */}
              {currentPage.colorPalette && currentPage.colorPalette.length > 0 && (
                <div className="pt-3 border-t border-white/10 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                      <Palette className="w-3.5 h-3.5 text-[#f5b716]" />
                      <span>Nuancier & Teintes Spécifiées</span>
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      Cliquer pour copier le code
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {currentPage.colorPalette.map((color: ColorSwatch) => (
                      <button
                        key={color.hex + color.name}
                        onClick={() => handleCopyColor(color.hex)}
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-left flex items-center gap-2.5 cursor-pointer group"
                      >
                        <div 
                          className="w-7 h-7 rounded-lg shadow-inner border border-white/20 shrink-0 relative flex items-center justify-center"
                          style={{ backgroundColor: color.hex }}
                        >
                          {copiedColor === color.hex && (
                            <Check className="w-4 h-4 text-white drop-shadow-md" />
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-[11px] font-semibold text-white truncate">
                            {color.name}
                          </div>
                          <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                            <span>{color.hex}</span>
                            {color.pantone && (
                              <span className="text-amber-400/90 text-[9px] truncate">
                                · {color.pantone}
                              </span>
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* TYPOGRAPHY SYSTEM SPECIMEN */}
              {currentPage.typography && (
                <div className="pt-3 border-t border-white/10 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <Type className="w-3.5 h-3.5 text-[#f5b716]" />
                    <span>Système Typographique</span>
                  </span>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1 text-xs">
                    <div>
                      <span className="text-slate-400 font-medium">Titrage : </span>
                      <strong className="text-white">{currentPage.typography.header}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 font-medium">Corps de texte : </span>
                      <span className="text-slate-200">{currentPage.typography.body}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 italic pt-1 border-t border-white/5">
                      {currentPage.typography.notes}
                    </div>
                  </div>
                </div>
              )}

              {/* GRID & COMPOSITION SPEC */}
              {currentPage.gridSpec && (
                <div className="pt-3 border-t border-white/10 space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <Grid className="w-3.5 h-3.5 text-[#f5b716]" />
                    <span>Grille & Ratios Harmoniques</span>
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed bg-white/5 p-2.5 rounded-lg border border-white/5">
                    {currentPage.gridSpec}
                  </p>
                </div>
              )}

              {/* Key Details bullets */}
              {currentPage.keyDetails && currentPage.keyDetails.length > 0 && (
                <div className="pt-3 border-t border-white/10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Points forts de la planche :
                  </span>
                  <ul className="space-y-1.5">
                    {currentPage.keyDetails.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#f5b716] shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {currentPage.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/5 text-slate-400 border border-white/5"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

            </div>

            {/* Direct CTA Buttons */}
            <div className="pt-6 space-y-2.5">
              <button
                onClick={handleWhatsAppContact}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Commander ce style sur WhatsApp</span>
              </button>

              <button
                onClick={handleOrderQuote}
                className="w-full py-2.5 px-4 rounded-xl bg-[#f5b716] hover:bg-[#eab308] text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Demander un devis sur mesure</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
          )}

        </div>

        {/* Bottom Filmstrip Thumbnails (All 22 pages sequentially) */}
        <div className="p-3 bg-[#0b0c12] border-t border-white/10 shrink-0">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Feuilleter toutes les {totalPages} planches du book officiel :
            </span>
            <div className="text-[11px] text-slate-400 font-mono">
              Flèches du clavier ou clic direct pour naviguer
            </div>
          </div>

          <div 
            ref={thumbnailContainerRef}
            className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-white/20"
          >
            {PORTFOLIO_PAGES.map((page, index) => {
              const isActive = index === currentPageIndex;
              return (
                <button
                  key={page.id}
                  data-thumb-index={index}
                  onClick={() => goToPage(index)}
                  className={`group relative flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    isActive 
                      ? 'border-[#f5b716] ring-2 ring-[#f5b716]/40 scale-105' 
                      : 'border-white/10 hover:border-white/40 opacity-70 hover:opacity-100'
                  }`}
                  title={`Planche ${page.pageNumber}: ${page.title}`}
                >
                  <div className="w-16 h-12 sm:w-20 sm:h-14 bg-black/60 overflow-hidden relative">
                    <img
                      src={page.image}
                      alt={page.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute top-0.5 left-0.5 bg-black/85 text-[9px] font-mono font-bold text-white px-1 rounded">
                      {page.pageNumber}
                    </div>
                    {page.isExtendedBoard && (
                      <div className="absolute bottom-0.5 right-0.5 bg-[#f5b716] text-slate-950 text-[8px] font-bold px-1 rounded">
                        PRO
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}
