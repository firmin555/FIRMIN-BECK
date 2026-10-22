import { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Wrench, Calendar, Building2 } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectService: (serviceName: string) => void;
}

export function ProjectModal({ project, onClose, onSelectService }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#12131b] border border-white/10 rounded-2xl overflow-hidden shadow-2xl my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors border border-white/10 cursor-pointer"
          aria-label="Fermer la vue détaillée"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Frame */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-[#0c0d12] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12131b] via-transparent to-black/40" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2 text-xs font-medium text-[#f5b716] mb-1">
              <span>{project.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{project.year}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Metadata bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#f5b716] shrink-0" />
              <div>
                <div className="text-slate-400 text-[11px]">Client</div>
                <div className="font-semibold text-white truncate">{project.client}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#f5b716] shrink-0" />
              <div>
                <div className="text-slate-400 text-[11px]">Année de production</div>
                <div className="font-semibold text-white">{project.year}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <Wrench className="w-4 h-4 text-[#f5b716] shrink-0" />
              <div>
                <div className="text-slate-400 text-[11px]">Outils mobilisés</div>
                <div className="font-semibold text-white truncate">{project.tools.join(', ')}</div>
              </div>
            </div>
          </div>

          {/* Description & Problem/Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-[#f5b716] uppercase tracking-wider mb-2">
                  Le Défi Initial
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-[#f5b716] uppercase tracking-wider mb-2">
                  La Solution Créative
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Results & Deliverables */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                  Livrables Fournis
                </h3>
                <ul className="space-y-2 text-xs text-slate-300">
                  {project.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#f5b716] mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                  Impacts & Résultats
                </h3>
                <div className="space-y-2">
                  {project.results.map((res, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              Un projet similaire à développer pour votre marque ou entreprise ?
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onSelectService(project.categoryLabel);
                }}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-slate-950 bg-[#f5b716] hover:bg-[#eab308] rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Commander un projet équivalent</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
