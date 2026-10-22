import { Linkedin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export function Footer({ onOpenContact }: FooterProps) {
  const scrollTo = (id: string) => {
    if (id === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0d0e12] text-slate-400 text-xs py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        
        {/* Top Row: Brand, Nav, Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#f5b716] flex items-center justify-center font-black text-slate-950 text-sm shadow-sm shrink-0">
              <span className="tracking-tighter">B·</span>
            </div>
            <div className="text-left">
              <div className="font-extrabold text-white text-sm tracking-tight">
                Beck Beck Firmin
              </div>
              <div className="text-[11px] text-slate-400">
                Graphiste · Community Manager · Éditeur
              </div>
            </div>
          </div>

          {/* Navigation links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <button onClick={() => scrollTo('#')} className="hover:text-white transition-colors cursor-pointer">
              Accueil
            </button>
            <button onClick={() => scrollTo('#a-propos')} className="hover:text-white transition-colors cursor-pointer">
              À propos
            </button>
            <button onClick={() => scrollTo('#services')} className="hover:text-white transition-colors cursor-pointer">
              Services
            </button>
            <button onClick={() => scrollTo('#portfolio')} className="hover:text-white transition-colors cursor-pointer">
              Portfolio
            </button>
            <button onClick={() => scrollTo('#temoignages')} className="hover:text-white transition-colors cursor-pointer">
              Témoignages
            </button>
            <button onClick={() => scrollTo('#contact')} className="hover:text-white transition-colors cursor-pointer">
              Contact
            </button>
          </div>

          {/* Social media icons */}
          <div className="flex items-center gap-3 text-slate-400">
            <a
              href="https://www.linkedin.com/in/firmin-beck-beck-245242238"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#f5b716] hover:text-slate-950 transition-all flex items-center justify-center"
              aria-label="LinkedIn de Beck Beck Firmin"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#f5b716] hover:text-slate-950 transition-all flex items-center justify-center"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#f5b716] hover:text-slate-950 transition-all flex items-center justify-center"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#f5b716] hover:text-slate-950 transition-all flex items-center justify-center"
              aria-label="X"
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#f5b716] hover:text-slate-950 transition-all flex items-center justify-center"
              aria-label="YouTube"
            >
              <Youtube className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Bottom Row: Handwritten cursive tagline & copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="font-script text-xl sm:text-2xl text-white tracking-wide">
            Design, communication, édition — pour un impact durable.
          </div>

          <div className="text-[11px] text-slate-400">
            © 2025 Beck Beck Firmin. Tous droits réservés.
          </div>
        </div>

      </div>
    </footer>
  );
}
