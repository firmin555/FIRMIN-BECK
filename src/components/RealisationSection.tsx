import { useState, useRef, useEffect } from 'react';
import { 
  ArrowRight, BookOpen, Eye, Check, ChevronLeft, ChevronRight, 
  Palette, Grid, ZoomIn, ZoomOut, Maximize2, MessageCircle, 
  FileText, CheckCircle2, Award, Sparkles, SlidersHorizontal
} from 'lucide-react';
import { Project, PORTFOLIO_PAGES, PortfolioBookPage, ColorSwatch } from '../data/portfolioData';

interface RealisationSectionProps {
  onSelectProject: (project: Project) => void;
  onOpenBookReader: (pageNumber?: number) => void;
}

export function RealisationSection({ onOpenBookReader }: RealisationSectionProps) {
  // In-Page Interactive Reader State
  const [activePageIndex, setActivePageIndex] = useState<number>(0);
  const [showGridOverlay, setShowGridOverlay] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1); // 1 = 100%, 1.4 = 140%, 1.8 = 180%
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'reader' | 'grid'>('reader');
  
  const inPageThumbnailRef = useRef<HTMLDivElement>(null);
  const readerStageRef = useRef<HTMLDivElement>(null);

  const totalPages = PORTFOLIO_PAGES.length;
  const currentPage: PortfolioBookPage = PORTFOLIO_PAGES[activePageIndex] || PORTFOLIO_PAGES[0];

  // Scroll thumbnail into view when active page changes
  useEffect(() => {
    if (inPageThumbnailRef.current) {
      const activeThumb = inPageThumbnailRef.current.querySelector(
        `[data-thumb-idx="${activePageIndex}"]`
      ) as HTMLElement | null;
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activePageIndex]);

  const goToPrevious = () => {
    setZoomLevel(1);
    setActivePageIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const goToNext = () => {
    setZoomLevel(1);
    setActivePageIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const selectPage = (index: number) => {
    setZoomLevel(1);
    setActivePageIndex(index);
    if (readerStageRef.current) {
      readerStageRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const cycleZoom = () => {
    setZoomLevel((prev) => {
      if (prev === 1) return 1.4;
      if (prev === 1.4) return 1.8;
      return 1;
    });
  };

  const handleCopyHex = (hex: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(hex);
      setCopiedHex(hex);
      setTimeout(() => setCopiedHex(null), 2000);
    }
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Bonjour Beck Beck Firmin, j'ai découvert votre book (Planche ${currentPage.pageNumber}/${totalPages} : ${currentPage.title}). J'aimerais échanger avec vous pour réaliser un travail similaire.`
    );
    window.open(`https://wa.me/237698909071?text=${text}`, '_blank');
  };

  const quickJumpSections = [
    { label: '01. Couverture', targetIndex: 0 },
    { label: '02. Bio & Sommaire', targetIndex: 1 },
    { label: '04. Logos & Folio', targetIndex: 3 },
    { label: '06. Marque BOLAC', targetIndex: 5 },
    { label: '11. Médias Sociaux', targetIndex: 10 },
    { label: '14. Packaging & Canettes', targetIndex: 13 },
    { label: '16. Supports Imprimés', targetIndex: 15 },
    { label: '18. Livre IA Entreprise', targetIndex: 17 },
    { label: '20. Planches Studio Pro', targetIndex: 19 },
  ];

  const filterTabs = [
    { id: 'all', label: 'Toutes les 22 planches', count: totalPages },
    { id: 'logos', label: '01. Logos & Folio', count: 2 },
    { id: 'branding', label: '02. Marque BOLAC & Charte', count: 5 },
    { id: 'social', label: '03. Médias Sociaux', count: 3 },
    { id: 'packaging', label: '04. Packaging & Produits', count: 3 },
    { id: 'print', label: '05. Supports Print & Grand Format', count: 3 },
    { id: 'edition', label: 'Édition : Livre IA & Ouvrages', count: 2 },
  ];

  const filteredPages = PORTFOLIO_PAGES.filter((page) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'logos') return page.category === 'logos';
    if (selectedCategory === 'branding') return page.category === 'branding';
    if (selectedCategory === 'social') return page.category === 'social';
    if (selectedCategory === 'packaging') return page.category === 'packaging';
    if (selectedCategory === 'print') return page.category === 'print';
    if (selectedCategory === 'edition') return page.category === 'edition';
    return true;
  });

  return (
    <section id="portfolio" className="py-20 bg-[#f8fafc] text-slate-900 text-left border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700">
              <BookOpen className="w-4 h-4 text-[#eab308]" />
              <span>Book Officiel & Direction Artistique Professionnelle</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Mon <span className="text-[#f5b716]">Portfolio</span> & Book Créatif
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Consultez directement en haute visibilité mon book officiel complet de 22 planches. Chaque projet est mis en valeur avec sa présentation graphique pure, son nuancier Pantone, son système typographique et sa composition équilibrée.
            </p>
          </div>

          {/* Quick View Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setViewMode('reader')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                viewMode === 'reader'
                  ? 'bg-slate-950 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:text-slate-950 border border-slate-200'
              }`}
            >
              <BookOpen className="w-4 h-4 text-[#f5b716]" />
              <span>Liseuse Grand Format</span>
            </button>

            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-slate-950 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:text-slate-950 border border-slate-200'
              }`}
            >
              <Grid className="w-4 h-4 text-[#f5b716]" />
              <span>Vue d'ensemble (22 Planches)</span>
            </button>
          </div>
        </div>

        {/* 
          =======================================================
          1. IN-PAGE GRAND THEATER BOOK VIEWER (Reader Mode Only)
          =======================================================
        */}
        {viewMode === 'reader' && (
          <div 
            ref={readerStageRef}
            className="rounded-3xl bg-[#0b0c12] border border-white/10 shadow-2xl text-white overflow-hidden scroll-mt-24"
          >
            {/* Top Control Bar of the Viewer */}
            <div className="px-4 sm:px-6 py-3.5 border-b border-white/10 bg-[#07080d] flex items-center justify-between gap-4 flex-wrap">
              
              {/* Left: Active planche info */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-[#f5b716] flex items-center justify-center font-black text-slate-950 text-xs shadow-sm shrink-0">
                  B·
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-bold text-[#f5b716] uppercase tracking-wider">
                      Planche {currentPage.pageNumber.toString().padStart(2, '0')} / {totalPages}
                    </span>
                    <span className="text-white/30 hidden sm:inline">·</span>
                    <span className="text-slate-300 font-medium truncate hidden sm:inline">
                      {currentPage.categoryLabel}
                    </span>
                    {currentPage.isExtendedBoard && (
                      <span className="text-[9px] font-bold text-[#f5b716] uppercase tracking-wider bg-[#f5b716]/10 px-2 py-0.5 rounded border border-[#f5b716]/20">
                        Studio Pro
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold text-white truncate max-w-xs sm:max-w-md lg:max-w-lg">
                    {currentPage.title}
                  </h3>
                </div>
              </div>

              {/* Center: Jump to Key Sections */}
              <div className="hidden xl:flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10 text-xs">
                {quickJumpSections.map((sec) => {
                  const isActive = activePageIndex === sec.targetIndex;
                  return (
                    <button
                      key={sec.label}
                      onClick={() => selectPage(sec.targetIndex)}
                      className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                        isActive 
                          ? 'bg-[#f5b716] text-slate-950 font-bold shadow' 
                          : 'text-slate-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {sec.label}
                    </button>
                  );
                })}
              </div>

              {/* Right: Stage Control Tools */}
              <div className="flex items-center gap-2 shrink-0">
                {/* Swiss Grid Toggle */}
                <button
                  onClick={() => setShowGridOverlay(!showGridOverlay)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                    showGridOverlay 
                      ? 'bg-[#f5b716] text-slate-950 font-bold' 
                      : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                  title="Afficher la grille de composition suisse & repères"
                >
                  <Grid className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Grille Suisse</span>
                </button>

                {/* Zoom Button with percentage */}
                <button
                  onClick={cycleZoom}
                  className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono font-bold transition-colors cursor-pointer flex items-center gap-1.5 border border-white/5"
                  title="Agrandir / Zoomer la planche"
                >
                  {zoomLevel > 1 ? <ZoomOut className="w-3.5 h-3.5 text-[#f5b716]" /> : <ZoomIn className="w-3.5 h-3.5" />}
                  <span>{Math.round(zoomLevel * 100)}%</span>
                </button>

                {/* Fullscreen Modal trigger */}
                <button
                  onClick={() => onOpenBookReader(currentPage.pageNumber)}
                  className="px-3.5 py-1.5 rounded-xl bg-[#f5b716] hover:bg-[#eab308] text-slate-950 text-xs font-bold shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                  title="Ouvrir la liseuse en plein écran"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Plein Écran</span>
                </button>
              </div>

            </div>

            {/* 
              GRAND VISUAL PRESENTATION STAGE (Full Width Cinema Mode)
              Expansive, high contrast, crisp rendering with zero horizontal squeezing
            */}
            <div className="relative w-full h-[520px] sm:h-[620px] lg:h-[720px] xl:h-[760px] bg-[#07080c] flex items-center justify-center p-3 sm:p-6 lg:p-10 overflow-hidden select-none">
              
              {/* Ambient subtle glow based on design */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-20 blur-3xl transition-all duration-700"
                style={{
                  background: `radial-gradient(circle at center, ${currentPage.colorPalette?.[0]?.hex || '#f5b716'} 0%, transparent 65%)`
                }}
              />

              {/* Previous Arrow Button */}
              <button
                onClick={goToPrevious}
                className="absolute left-3 sm:left-6 lg:left-8 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/75 hover:bg-[#f5b716] hover:text-slate-950 text-white backdrop-blur-md border border-white/20 transition-all shadow-2xl flex items-center justify-center cursor-pointer group active:scale-95"
                title="Planche précédente (Flèche gauche)"
                aria-label="Planche précédente"
              >
                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 group-hover:-translate-x-0.5 transition-transform" />
              </button>

              {/* Next Arrow Button */}
              <button
                onClick={goToNext}
                className="absolute right-3 sm:right-6 lg:right-8 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/75 hover:bg-[#f5b716] hover:text-slate-950 text-white backdrop-blur-md border border-white/20 transition-all shadow-2xl flex items-center justify-center cursor-pointer group active:scale-95"
                title="Planche suivante (Flèche droite)"
                aria-label="Planche suivante"
              >
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Planche Image Canvas Container */}
              <div 
                className={`relative max-w-full max-h-full flex items-center justify-center transition-transform duration-300 ${
                  zoomLevel > 1 ? 'cursor-zoom-out overflow-auto' : 'cursor-zoom-in'
                }`}
                style={{
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: 'center center'
                }}
                onClick={cycleZoom}
              >
                <img
                  src={currentPage.image}
                  alt={`${currentPage.title} - Planche ${currentPage.pageNumber} sur ${totalPages}`}
                  referrerPolicy="no-referrer"
                  loading="eager"
                  className="max-h-[480px] sm:max-h-[580px] lg:max-h-[660px] xl:max-h-[700px] w-auto max-w-full object-contain rounded-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border border-white/10 ring-1 ring-black/80 transition-opacity duration-300"
                />

                {/* Swiss Grid Overlay (When toggled) */}
                {showGridOverlay && (
                  <div className="absolute inset-0 pointer-events-none rounded-xl overflow-hidden border border-cyan-400/50">
                    <div className="w-full h-full grid grid-cols-12 gap-2 p-4 bg-cyan-950/20">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="h-full border-x border-cyan-400/25 bg-cyan-400/5 relative">
                          <span className="absolute top-1 left-1 text-[8px] font-mono text-cyan-300/70">
                            C{i + 1}
                          </span>
                        </div>
                      ))}
                    </div>
                    {/* Baselines */}
                    <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none">
                      <div className="w-full border-b border-amber-400/30" />
                      <div className="w-full border-b border-cyan-400/30" />
                      <div className="w-full border-b border-cyan-400/30" />
                      <div className="w-full border-b border-amber-400/30" />
                    </div>
                    <div className="absolute top-3 left-3 bg-cyan-950/95 text-cyan-300 text-[10px] font-mono px-2.5 py-1 rounded border border-cyan-400/40 shadow-lg">
                      Repères de composition suisse activés • Grille 12 Colonnes
                    </div>
                  </div>
                )}

                {/* Subtle Watermark Badge */}
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded bg-black/85 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300 pointer-events-none shadow-md">
                  Planche {currentPage.pageNumber.toString().padStart(2, '0')} / {totalPages} · ArtNovaTech
                </div>
              </div>

              {/* Bottom floating quick indicator */}
              <div className="absolute bottom-4 left-6 z-20 hidden sm:flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-xs text-white/90 font-medium shadow-lg">
                  <strong className="text-[#f5b716]">P.{currentPage.pageNumber}</strong> : {currentPage.title}
                </span>
              </div>

            </div>

            {/* 
              STUDIO TECHNICAL SPECIFICATIONS DECK (3 Balanced Columns Below Canvas)
              Displays full context, palette, fonts, specs, and WhatsApp CTA without cluttering
            */}
            <div className="p-6 sm:p-8 bg-[#0b0d14] border-t border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                
                {/* Column 1: Direction Artistique & Concept (5 cols) */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#f5b716]/10 text-[#f5b716] border border-[#f5b716]/20">
                      {currentPage.categoryLabel}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Planche {currentPage.pageNumber} sur {totalPages}
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
                    {currentPage.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 font-medium">
                    {currentPage.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                    {currentPage.description}
                  </p>

                  {currentPage.tags && currentPage.tags.length > 0 && (
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {currentPage.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="text-[10px] px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Column 2: Nuancier Pantone & Typographie (4 cols) */}
                <div className="lg:col-span-4 space-y-4 lg:border-l lg:border-white/10 lg:pl-6">
                  
                  {/* Nuancier */}
                  {currentPage.colorPalette && currentPage.colorPalette.length > 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                        <span className="flex items-center gap-1.5">
                          <Palette className="w-3.5 h-3.5 text-[#f5b716]" />
                          <span>Nuancier & Palette</span>
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono">
                          Cliquer pour copier
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {currentPage.colorPalette.map((color: ColorSwatch) => (
                          <button
                            key={color.hex + color.name}
                            onClick={() => handleCopyHex(color.hex)}
                            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-left flex items-center gap-2 cursor-pointer group"
                            title={`Copier le code HEX ${color.hex}`}
                          >
                            <div 
                              className="w-6 h-6 rounded-md shadow-inner border border-white/20 shrink-0 relative flex items-center justify-center"
                              style={{ backgroundColor: color.hex }}
                            >
                              {copiedHex === color.hex && (
                                <Check className="w-3.5 h-3.5 text-white drop-shadow" />
                              )}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-[10px] font-semibold text-white truncate">
                                {color.name}
                              </div>
                              <div className="text-[9px] font-mono text-slate-400">
                                {color.hex}
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Typography System */}
                  {currentPage.typography && (
                    <div className="pt-2 border-t border-white/10 space-y-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-[#f5b716]" />
                        <span>Typographie Utilisée</span>
                      </span>
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-300 space-y-0.5">
                        <div><strong className="text-white">Titrage :</strong> {currentPage.typography.header}</div>
                        <div><strong className="text-white">Corps :</strong> {currentPage.typography.body}</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Column 3: Spécifications & Contact Direct (3 cols) */}
                <div className="lg:col-span-3 space-y-4 lg:border-l lg:border-white/10 lg:pl-6 flex flex-col justify-between">
                  
                  {/* Key Points */}
                  {currentPage.keyDetails && currentPage.keyDetails.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block">
                        Spécifications clés :
                      </span>
                      <ul className="space-y-1.5">
                        {currentPage.keyDetails.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#f5b716] shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Direct WhatsApp CTA Button */}
                  <div className="pt-2">
                    <button
                      onClick={handleWhatsAppInquiry}
                      className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Échanger sur WhatsApp (+237 698 90 90 71)</span>
                    </button>
                  </div>

                </div>

              </div>
            </div>

            {/* Bottom Thumbnails Filmstrip Carousel (Directly visible for all 22 pages) */}
            <div className="p-4 bg-[#07080d] border-t border-white/10">
              <div className="flex items-center justify-between mb-2.5 px-1">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <span>Feuilleter les 22 planches du book :</span>
                </span>
                <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                  Cliquer sur une miniature pour l'afficher en grand
                </span>
              </div>

              <div 
                ref={inPageThumbnailRef}
                className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/20"
              >
                {PORTFOLIO_PAGES.map((page, index) => {
                  const isActive = index === activePageIndex;
                  return (
                    <button
                      key={page.id}
                      data-thumb-idx={index}
                      onClick={() => selectPage(index)}
                      className={`group relative flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        isActive 
                          ? 'border-[#f5b716] ring-2 ring-[#f5b716]/50 scale-105 shadow-xl' 
                          : 'border-white/10 hover:border-white/40 opacity-70 hover:opacity-100'
                      }`}
                      title={`Planche ${page.pageNumber}: ${page.title}`}
                    >
                      <div className="w-20 h-14 sm:w-24 sm:h-16 bg-black overflow-hidden relative">
                        <img
                          src={page.image}
                          alt={page.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute top-1 left-1 bg-black/85 text-[9px] font-mono font-bold text-white px-1.5 py-0.5 rounded">
                          P.{page.pageNumber}
                        </div>
                        {page.isExtendedBoard && (
                          <div className="absolute bottom-1 right-1 bg-[#f5b716] text-slate-950 text-[8px] font-bold px-1 rounded">
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
        )}

        {/* 
          =======================================================
          2. FILTERABLE GRID VIEW (Shown ONLY when Vue Grille is selected)
          =======================================================
        */}
        {viewMode === 'grid' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-slate-200">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                  Vue d'ensemble des 22 planches du portfolio
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Cliquez sur n'importe quelle planche pour l'ouvrir immédiatement dans la liseuse grand format.
                </p>
              </div>

              <div className="text-xs text-slate-500 font-medium">
                Affichage : <strong className="text-slate-900">{filteredPages.length}</strong> planches
              </div>
            </div>

            {/* Filter Tabs by Section */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              {filterTabs.map((tab) => {
                const isActive = selectedCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-slate-950 text-white shadow-sm'
                        : 'bg-white text-slate-600 hover:text-slate-950 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                      isActive ? 'bg-[#f5b716] text-slate-950' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Cards Grid: Perfectly proportioned (aspect-[1.414]) with object-contain to ensure zero cropping */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-2">
              {filteredPages.map((page) => (
                <div
                  key={page.id}
                  onClick={() => {
                    selectPage(page.pageNumber - 1);
                    setViewMode('reader');
                  }}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer relative"
                >
                  {/* 
                    Image Frame: aspect-[1.414] matches A4 landscape (3508x2480) 
                    with object-contain so NO text or margin is ever cropped
                  */}
                  <div className="relative aspect-[1.414] bg-[#0c0d12] flex items-center justify-center p-1.5 overflow-hidden">
                    <img
                      src={page.image}
                      alt={page.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                    />

                    {/* Planche Number Badge */}
                    <div className="absolute top-2.5 left-2.5 bg-slate-950/90 backdrop-blur-md text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded-md border border-white/10 shadow-md">
                      P.{page.pageNumber.toString().padStart(2, '0')}
                    </div>

                    {page.isExtendedBoard && (
                      <div className="absolute top-2.5 right-2.5 bg-[#f5b716] text-slate-950 text-[9px] font-extrabold px-2 py-0.5 rounded-md shadow-md uppercase tracking-wider flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        <span>Studio Pro</span>
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                      <div className="px-3.5 py-1.5 bg-[#f5b716] text-slate-950 text-xs font-bold rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Afficher dans la liseuse</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Meta Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-semibold text-slate-500 mb-1 flex items-center gap-1.5">
                        <span>{page.categoryLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono text-slate-400">Planche {page.pageNumber}</span>
                      </div>

                      <h4 className="text-sm font-bold text-slate-950 group-hover:text-[#b45309] transition-colors leading-snug">
                        {page.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                        {page.subtitle}
                      </p>
                    </div>

                    {page.colorPalette && page.colorPalette.length > 0 && (
                      <div className="pt-2.5 flex items-center gap-1.5">
                        <span className="text-[10px] text-slate-400 font-mono">Palette :</span>
                        <div className="flex items-center -space-x-1">
                          {page.colorPalette.slice(0, 4).map((c, i) => (
                            <div
                              key={i}
                              className="w-3.5 h-3.5 rounded-full border border-white shadow-sm"
                              style={{ backgroundColor: c.hex }}
                              title={`${c.name} (${c.hex})`}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-600 font-medium group-hover:text-slate-950 transition-colors flex items-center gap-1">
                        <span>Afficher en grand</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-slate-950 group-hover:text-white flex items-center justify-center text-slate-700 transition-all">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
