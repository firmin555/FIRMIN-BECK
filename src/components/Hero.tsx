import { ArrowRight, BookOpen, Linkedin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[680px] lg:min-h-[760px] flex items-center bg-[#0d0e12] overflow-hidden text-left">
      {/* 
        Full-bleed Background Image Scene (No card box, full immersive photo canvas)
        Matching user reference mockup Portfolio_cr_atif_dans_un_espace_moderne_bba4812f.png
      */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/firmin_portrait_hd.png"
          alt="Beck Beck Firmin - Graphiste, Community Manager et Éditeur"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[72%_20%] sm:object-[68%_20%] md:object-[65%_25%] lg:object-[center_22%] select-none pointer-events-none"
        />

        {/* 
          Master Gradient Scrim:
          Dark vignette on the left half so text is 100% crisp and readable,
          while seamlessly fading towards the right so Firmin and his studio are visible.
        */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#0d0e12] via-[#0d0e12]/95 sm:via-[#0d0e12]/85 md:via-[#0d0e12]/70 lg:via-[#0d0e12]/50 to-transparent pointer-events-none" 
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-transparent to-[#0d0e12]/60 pointer-events-none" 
        />
      </div>

      {/* Handwritten script overlay in top-right area matching user reference */}
      <div className="absolute top-24 right-6 sm:right-10 lg:right-24 z-10 hidden sm:block pointer-events-none select-none text-right drop-shadow-lg">
        <div className="font-script text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.05] font-medium">
          <div>Créativité</div>
          <div>Stratégie</div>
          <div>Impact</div>
        </div>
        {/* Yellow curved stroke under "Impact" */}
        <svg
          className="w-28 sm:w-36 h-3 text-[#f5b716] ml-auto mt-1"
          viewBox="0 0 140 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 9C40 4 95 3 137 9"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-28 w-full">
        <div className="max-w-2xl lg:max-w-xl space-y-6">
          
          {/* Kicker */}
          <div className="text-xs sm:text-[13px] font-bold tracking-widest uppercase text-[#f5b716] flex items-center gap-2">
            <span>GRAPHISTE</span>
            <span className="text-[#f5b716]/60">•</span>
            <span>COMMUNITY MANAGER</span>
            <span className="text-[#f5b716]/60">•</span>
            <span>ÉDITEUR</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white tracking-tight leading-[1.1]">
            Vos idées prennent vie avec le{' '}
            <span className="text-[#f5b716]">digital</span> et le{' '}
            <span className="text-[#f5b716]">design</span>
          </h1>

          {/* Subtitle / Bio */}
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl drop-shadow-sm">
            Je suis <strong className="text-white font-semibold">Firmin Beck Beck</strong>, graphiste designer freelance, community manager et éditeur au Cameroun. J'aide les marques, entreprises et auteurs à valoriser leur image et à rayonner grâce à des identités visuelles percutantes, des stratégies digitales sur mesure et des maquettes éditoriales d'exception.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <button
              onClick={() => scrollTo('services')}
              className="px-7 py-3.5 text-xs sm:text-sm font-bold text-slate-950 bg-[#f5b716] hover:bg-[#eab308] rounded-full transition-all shadow-lg shadow-[#f5b716]/20 flex items-center gap-2 cursor-pointer"
            >
              <span>Mes services</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo('portfolio')}
              className="px-7 py-3.5 text-xs sm:text-sm font-semibold text-white bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/25 rounded-full transition-colors flex items-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#f5b716]" />
              <span>Feuilleter mon book (22 planches)</span>
            </button>
          </div>

          {/* Social Icons including user's real LinkedIn */}
          <div className="pt-4 flex items-center gap-4 text-white/80">
            <a
              href="https://www.linkedin.com/in/firmin-beck-beck-245242238"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f5b716] transition-colors p-1"
              aria-label="LinkedIn de Beck Beck Firmin"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f5b716] transition-colors p-1"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f5b716] transition-colors p-1"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f5b716] transition-colors p-1"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f5b716] transition-colors p-1"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
