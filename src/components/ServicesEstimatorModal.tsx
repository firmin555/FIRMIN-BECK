import { useState, useEffect } from 'react';
import { X, Calculator, Check, MessageCircle, Mail, Clock, ShieldCheck } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: (customMessage?: string) => void;
  initialService?: string;
}

export function ServicesEstimatorModal({
  isOpen,
  onClose,
  onOpenContact,
  initialService,
}: ServicesEstimatorModalProps) {
  const [currency, setCurrency] = useState<'XAF' | 'EUR'>('XAF');
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([
    'graphiste-designer',
    'community-manager',
  ]);
  const [isExpressDelivery, setIsExpressDelivery] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (initialService) {
      const match = SERVICES.find(s => s.name.toLowerCase().includes(initialService.toLowerCase()));
      if (match && !selectedServiceIds.includes(match.id)) {
        setSelectedServiceIds([match.id]);
      }
    }
  }, [initialService]);

  if (!isOpen) return null;

  const toggleService = (id: string) => {
    if (selectedServiceIds.includes(id)) {
      if (selectedServiceIds.length > 1) {
        setSelectedServiceIds(selectedServiceIds.filter(s => s !== id));
      }
    } else {
      setSelectedServiceIds([...selectedServiceIds, id]);
    }
  };

  const selectedServices = SERVICES.filter(s => selectedServiceIds.includes(s.id));
  const basePriceXAF = selectedServices.reduce((sum, s) => sum + s.basePriceXAF, 0);
  const basePriceEUR = selectedServices.reduce((sum, s) => sum + s.basePriceEUR, 0);

  const totalRawXAF = basePriceXAF * (isExpressDelivery ? 1.25 : 1.0);
  const totalRawEUR = basePriceEUR * (isExpressDelivery ? 1.25 : 1.0);

  const formatPrice = (val: number, curr: 'XAF' | 'EUR') => {
    if (curr === 'XAF') {
      return new Intl.NumberFormat('fr-FR').format(Math.round(val)) + ' FCFA';
    }
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(Math.round(val));
  };

  const serviceNames = selectedServices.map(s => s.name).join(', ');
  const estimatedAmount = currency === 'XAF' ? formatPrice(totalRawXAF, 'XAF') : formatPrice(totalRawEUR, 'EUR');

  const whatsappMessage = encodeURIComponent(
    `Bonjour Beck Beck Firmin, j'ai configuré mon projet sur votre portfolio :\n- Prestations : ${serviceNames}\n- Option : ${isExpressDelivery ? 'Livraison Express incluse' : 'Standard'}\n- Estimation : ${estimatedAmount}\n\nJ'aimerais échanger avec vous pour le démarrage.`
  );

  const handleEmailRequest = () => {
    onClose();
    const summary = `Bonjour Firmin,\n\nJe souhaite réserver les prestations suivantes :\n- Services : ${serviceNames}\n- Modalité : ${isExpressDelivery ? 'Express (+25%)' : 'Délai standard'}\n- Budget estimé : ${estimatedAmount}\n\nMerci de me recontacter pour finaliser le brief.`;
    onOpenContact(summary);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#12131b] border border-white/10 rounded-2xl overflow-hidden shadow-2xl my-8 text-left p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors border border-white/10 cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10 pr-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#f5b716] uppercase tracking-wider">
              <Calculator className="w-4 h-4" />
              <span>Grille Tarifaire & Estimation de Devis</span>
            </div>
            <h2 className="text-2xl font-extrabold text-white tracking-tight mt-1">
              Tous les services de Beck Beck Firmin
            </h2>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center gap-1 p-1 bg-[#181924] border border-white/10 rounded-xl self-start sm:self-auto">
            <button
              onClick={() => setCurrency('XAF')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                currency === 'XAF'
                  ? 'bg-[#f5b716] text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              FCFA (XAF)
            </button>
            <button
              onClick={() => setCurrency('EUR')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                currency === 'EUR'
                  ? 'bg-[#f5b716] text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Euros (€)
            </button>
          </div>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Services Checklist */}
          <div className="lg:col-span-7 space-y-3">
            {SERVICES.map((s) => {
              const isSelected = selectedServiceIds.includes(s.id);
              const priceDisplay = currency === 'XAF'
                ? formatPrice(s.basePriceXAF, 'XAF')
                : formatPrice(s.basePriceEUR, 'EUR');

              return (
                <div
                  key={s.id}
                  onClick={() => toggleService(s.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer select-none ${
                    isSelected
                      ? 'bg-[#181a26] border-[#f5b716]/60 shadow-sm'
                      : 'bg-[#141520] border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded mt-0.5 flex items-center justify-center border transition-colors ${
                          isSelected
                            ? 'bg-[#f5b716] border-[#f5b716] text-slate-950'
                            : 'border-white/20 bg-white/5'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs font-bold text-white flex items-center gap-2">
                          <span>{s.name}</span>
                          <span className="text-[11px] text-slate-400 font-normal">({s.category})</span>
                        </div>
                        <p className="text-[11px] text-slate-300 leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-xs font-bold text-[#f5b716] font-display tabular-nums">
                        {priceDisplay}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {s.unit}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Express delivery option */}
            <div
              onClick={() => setIsExpressDelivery(!isExpressDelivery)}
              className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                isExpressDelivery
                  ? 'bg-[#f5b716]/10 border-[#f5b716]/50 text-white'
                  : 'bg-[#141520] border-white/5 text-slate-300 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 font-medium">
                  <div
                    className={`w-4 h-4 rounded flex items-center justify-center border ${
                      isExpressDelivery
                        ? 'bg-[#f5b716] border-[#f5b716] text-slate-950'
                        : 'border-white/20'
                    }`}
                  >
                    {isExpressDelivery && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span>Option Express Prioritaire (sous 48h/72h)</span>
                </div>
                <span className="font-bold text-[#f5b716]">+25%</span>
              </div>
            </div>
          </div>

          {/* Right Recap Card */}
          <div className="lg:col-span-5 bg-[#161724] border border-white/10 rounded-xl p-5 space-y-5">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 pb-2 border-b border-white/10">
              Votre Estimation ({selectedServices.length} prestation{selectedServices.length > 1 ? 's' : ''})
            </div>

            <div className="space-y-2 text-xs">
              {selectedServices.map(s => (
                <div key={s.id} className="flex items-center justify-between text-slate-300">
                  <span className="truncate pr-2">{s.name}</span>
                  <span className="font-bold text-white tabular-nums shrink-0">
                    {currency === 'XAF' ? formatPrice(s.basePriceXAF, 'XAF') : formatPrice(s.basePriceEUR, 'EUR')}
                  </span>
                </div>
              ))}
              {isExpressDelivery && (
                <div className="flex items-center justify-between text-[#f5b716] font-medium">
                  <span>Délai Express (+25%)</span>
                  <span>Inclus</span>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-white/10 flex items-baseline justify-between">
              <span className="text-xs text-slate-400">Total estimé :</span>
              <span className="text-2xl font-black text-[#f5b716] font-display tabular-nums">
                {currency === 'XAF' ? formatPrice(totalRawXAF, 'XAF') : formatPrice(totalRawEUR, 'EUR')}
              </span>
            </div>

            <div className="space-y-2.5 pt-1">
              <a
                href={`https://wa.me/237698909071?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-xs font-bold text-slate-950 bg-[#f5b716] hover:bg-[#eab308] rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Commander sur WhatsApp</span>
              </a>

              <button
                onClick={handleEmailRequest}
                className="w-full py-2 px-4 text-xs font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-[#f5b716]" />
                <span>Envoyer par formulaire</span>
              </button>
            </div>

            <div className="pt-3 border-t border-white/5 space-y-1.5 text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#f5b716] shrink-0" />
                <span>Cession complète des droits & fichiers sources HD</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#f5b716] shrink-0" />
                <span>Facture & acompte sécurisé pour démarrer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
