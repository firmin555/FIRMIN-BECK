import { Sparkles, Clock, ShieldCheck, Heart, Send, ArrowRight } from 'lucide-react';

interface WhyChooseMeSectionProps {
  onOpenContact: () => void;
}

export function WhyChooseMeSection({ onOpenContact }: WhyChooseMeSectionProps) {
  const pillars = [
    {
      icon: <Sparkles className="w-6 h-6 stroke-[1.8] text-slate-800" />,
      title: 'Créativité',
      desc: 'Des visuels qui marquent les esprits',
    },
    {
      icon: <Clock className="w-6 h-6 stroke-[1.8] text-slate-800" />,
      title: 'Réactivité',
      desc: 'Un accompagnement à chaque étape',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 stroke-[1.8] text-slate-800" />,
      title: 'Qualité',
      desc: 'Un travail soigné et professionnel',
    },
    {
      icon: <Heart className="w-6 h-6 stroke-[1.8] text-slate-800" />,
      title: 'Passion',
      desc: 'Un engagement total pour vos projets',
    },
  ];

  return (
    <section className="py-20 bg-[#f8f9fa] text-slate-900 text-left border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-12">
          Pourquoi <span className="text-[#f5b716]">me choisir ?</span>
        </h2>

        {/* 2 Columns: Pillars Left, CTA Box Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: 4 Pillars Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            {pillars.map((p, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-center space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-950">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Yellow Box CTA (5 cols) */}
          <div className="lg:col-span-5 relative bg-[#fef9e8] border border-amber-200/80 rounded-2xl p-7 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm overflow-hidden">
            
            {/* Top decorative diagonal stripes */}
            <div className="absolute top-4 right-6 flex gap-1.5 opacity-80" aria-hidden="true">
              <span className="w-1 h-6 bg-[#f5b716] rounded-full transform rotate-45" />
              <span className="w-1 h-6 bg-[#f5b716] rounded-full transform rotate-45" />
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100/80 flex items-center justify-center text-slate-900 shrink-0 mt-1">
                <Send className="w-6 h-6 stroke-[1.8]" />
              </div>

              <div className="space-y-2 pr-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-950 leading-snug">
                  Prêt à donner vie à votre projet ?
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Contactez-moi dès maintenant pour discuter de vos besoins et obtenir un devis personnalisé.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Me contacter</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
