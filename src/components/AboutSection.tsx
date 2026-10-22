import { useState } from 'react';
import { GraduationCap, MapPin, Heart, BookOpen, User, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  onOpenBookReader?: (pageNumber: number) => void;
}

export function AboutSection({ onOpenBookReader }: AboutSectionProps) {
  const [activePhoto, setActivePhoto] = useState<'sketch' | 'desk'>('sketch');

  return (
    <section id="a-propos" className="py-20 bg-[#0d0e12] text-white relative text-left overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Side: Photo with toggle between Page 02 Sketch & Desk */}
          <div className="lg:col-span-5 space-y-3">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#141520] relative group">
              <img
                src={
                  activePhoto === 'sketch'
                    ? '/assets/portfolio_book/page_02.jpg'
                    : '/assets/images/book_desk_notebook_hd_1792519456520.jpg'
                }
                alt="Beck Beck Firmin - Graphiste Designer & Éditeur"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover block transition-all duration-500"
              />

              {/* Page 02 tag */}
              {activePhoto === 'sketch' && (
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-sm border border-white/15 text-[10px] font-mono text-[#f5b716] font-bold">
                  Extrait Book • Page 02 / 22
                </div>
              )}

              {/* Overlay with direct reader button */}
              {onOpenBookReader && (
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <button
                    onClick={() => onOpenBookReader(2)}
                    className="px-4 py-2 bg-[#f5b716] text-slate-950 text-xs font-bold rounded-full shadow-lg flex items-center gap-1.5 cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Voir la Page 02 en HD</span>
                  </button>
                </div>
              )}
            </div>

            {/* Photo selector switcher */}
            <div className="flex items-center justify-center gap-2 pt-1">
              <button
                onClick={() => setActivePhoto('sketch')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activePhoto === 'sketch'
                    ? 'bg-[#f5b716] text-slate-950 font-bold'
                    : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>Portrait Crayon (Book P. 02)</span>
              </button>

              <button
                onClick={() => setActivePhoto('desk')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activePhoto === 'desk'
                    ? 'bg-[#f5b716] text-slate-950 font-bold'
                    : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Espace Édition</span>
              </button>
            </div>
          </div>

          {/* Right Side: Text & Highlights & Handwritten Note */}
          <div className="lg:col-span-7 space-y-6 relative">
            
            {/* Handwritten note floating top right */}
            <div className="lg:absolute lg:-top-6 lg:right-0 mb-4 lg:mb-0 max-w-xs">
              <div className="font-script text-2xl sm:text-3xl text-white transform -rotate-2 select-none">
                Chaque projet est une nouvelle histoire à raconter.
              </div>
              {/* Yellow sketch underline */}
              <svg 
                className="w-44 h-3 text-[#f5b716] mt-0.5" 
                viewBox="0 0 160 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M2 9C45 3 115 2 158 9" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                />
              </svg>
            </div>

            {/* Title */}
            <div className="pt-2">
              <div className="text-xs uppercase tracking-wider text-[#f5b716] font-bold mb-1">
                À propos de l'auteur
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Bonjour ! Je suis <span className="text-[#f5b716]">Beck Beck Firmin</span>
              </h2>
            </div>

            {/* Bio Paragraph */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Graphiste designer freelance, community manager et éditeur basé au Cameroun (Yaoundé & Douala) opérant sous le label <strong className="text-white">ArtNovaTech</strong>. Passionné par l'alliance entre sensibilité esthétique, stratégie commerciale et nouvelles technologies (notamment l'intelligence artificielle appliquée à l'entreprise), j'aide les marques, organisations et auteurs à concevoir des identités visuelles remarquables et des publications pérennes.
            </p>

            {/* 3 Value Markers */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#f5b716]/10 flex items-center justify-center text-[#f5b716] shrink-0 mt-0.5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-semibold text-white">Formations certifiées</div>
                  <div className="text-slate-400 text-[11px]">(IA, Design, Réseaux sociaux)</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#f5b716]/10 flex items-center justify-center text-[#f5b716] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-semibold text-white">Yaoundé & Douala, Cameroun</div>
                  <div className="text-slate-400 text-[11px]">(Collaborations monde entier)</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#f5b716]/10 flex items-center justify-center text-[#f5b716] shrink-0 mt-0.5">
                  <Heart className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-semibold text-white">Label ArtNovaTech</div>
                  <div className="text-slate-400 text-[11px]">Design • IA • Édition</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
