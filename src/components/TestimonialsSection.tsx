import { MessageSquareQuote, Star, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export function TestimonialsSection() {
  return (
    <section id="temoignages" className="py-20 border-t border-white/5 relative bg-[#0d0e15]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>Retours d'Expérience & Témoignages</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ce que disent les marques et partenaires qui m'accordent leur confiance.
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Des collaborations basées sur le respect des délais, la rigueur esthétique et des résultats mesurables sur le terrain.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-300 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Témoignages authentifiés et vérifiés</span>
          </div>
        </div>

        {/* 3 Testimonials in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id}
              className="p-7 rounded-2xl bg-[#141522] border border-white/5 flex flex-col justify-between space-y-6 hover:border-white/20 transition-all"
            >
              <div className="space-y-4">
                {/* Rating & Metric badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 tabular-nums">
                    {t.metric}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  "{t.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-bold text-slate-950 text-xs">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-bold text-white">
                    {t.author}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
