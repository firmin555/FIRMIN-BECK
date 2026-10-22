import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenBook?: () => void;
  activeSection?: string;
}

export function Navbar({ onOpenContact, onOpenBook, activeSection = 'accueil' }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'accueil', label: 'Accueil', href: '#' },
    { id: 'a-propos', label: 'À propos', href: '#a-propos' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
    { id: 'temoignages', label: 'Témoignages', href: '#temoignages' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0d0e12]/95 backdrop-blur-md border-b border-white/5 py-3 shadow-lg' 
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
        
        {/* Brand Zone */}
        <a 
          href="#" 
          onClick={(e) => handleLinkClick(e, '#')}
          className="flex items-center gap-3 group"
        >
          {/* Logo badge matching user design: Stylized B with yellow & white accents */}
          <div className="w-9 h-9 rounded-lg bg-[#f5b716] flex items-center justify-center font-black text-slate-950 text-base shadow-sm shrink-0">
            <span className="tracking-tighter">B·</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-white text-base tracking-tight leading-tight">
              Beck Beck Firmin
            </span>
            <span className="text-[11px] text-slate-300 font-medium tracking-wide">
              Design • Communication • Édition
            </span>
          </div>
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-slate-200">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative py-1 transition-colors hover:text-white whitespace-nowrap shrink-0 ${
                  isActive ? 'text-white font-semibold' : 'text-slate-300'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f5b716] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="flex items-center gap-2.5 shrink-0">
          {onOpenBook && (
            <button
              onClick={onOpenBook}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-full transition-all cursor-pointer"
            >
              <span>Book officiel (22 planches)</span>
            </button>
          )}

          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-950 bg-[#f5b716] hover:bg-[#eab308] rounded-full transition-all shadow-md shadow-[#f5b716]/15 cursor-pointer"
          >
            <span>Travaillons ensemble</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-200 hover:text-white rounded-lg focus:outline-none"
            aria-label="Menu de navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111218]/98 backdrop-blur-xl border-b border-white/10 px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-slate-300 hover:text-[#f5b716] text-sm font-medium py-1.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 px-4 text-xs font-bold text-slate-950 bg-[#f5b716] rounded-full text-center flex items-center justify-center gap-2"
            >
              <span>Travaillons ensemble</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
