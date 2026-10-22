import { PenTool, Megaphone, BookOpen, Lightbulb, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
  onOpenEstimator: () => void;
}

export function ServicesSection({ onSelectService, onOpenEstimator }: ServicesSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'pen':
        return <PenTool className="w-6 h-6 stroke-[1.8] text-slate-800" />;
      case 'megaphone':
        return <Megaphone className="w-6 h-6 stroke-[1.8] text-slate-800" />;
      case 'book':
        return <BookOpen className="w-6 h-6 stroke-[1.8] text-slate-800" />;
      case 'lightbulb':
        return <Lightbulb className="w-6 h-6 stroke-[1.8] text-slate-800" />;
      default:
        return <PenTool className="w-6 h-6 stroke-[1.8] text-slate-800" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#f8f9fa] text-slate-900 text-left border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header matching user mockup */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Mes <span className="text-[#f5b716]">services</span>
            </h2>
            <p className="text-sm text-slate-600 max-w-xl">
              Des solutions <strong className="text-slate-900 font-semibold">créatives et digitales</strong> pour faire rayonner votre image et donner vie à vos projets.
            </p>
          </div>

          <button
            onClick={onOpenEstimator}
            className="group inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-[#eab308] transition-colors whitespace-nowrap cursor-pointer self-start md:self-end"
          >
            <span>Découvrir tous mes services</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const isYellowBtn = service.buttonColor === 'yellow';

            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service.name)}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 group cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Clean line icon */}
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(service.icon)}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-950">
                      {service.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Circle Arrow Button matching mockup */}
                <div className="pt-2">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                    isYellowBtn
                      ? 'bg-[#f5b716] text-slate-950 group-hover:bg-[#eab308]'
                      : 'bg-slate-950 text-white group-hover:bg-slate-800'
                  }`}>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
