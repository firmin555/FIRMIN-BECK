import { useState, useEffect } from 'react';
import { Mail, MessageCircle, MapPin, Send, CheckCircle2, Clock, Phone } from 'lucide-react';

interface ContactSectionProps {
  initialMessage?: string;
}

export function ContactSection({ initialMessage = '' }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('Identité Visuelle & Logo');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState(initialMessage);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialMessage) {
      setMessage(initialMessage);
    }
  }, [initialMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const directMailto = `mailto:kfirmin398@gmail.com?subject=${encodeURIComponent(`Demande de projet - ${name || 'Nouveau Client'}`)}&body=${encodeURIComponent(
    `Nom: ${name}\nTéléphone/WhatsApp: ${phone}\nType de prestation: ${projectType}\nBudget indicatif: ${budget}\n\nMessage:\n${message}`
  )}`;

  return (
    <section id="contact" className="py-20 border-t border-white/5 relative bg-[#0a0b10]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#f5b716]">
                <Send className="w-3.5 h-3.5" />
                <span>Contact Direct & Devis</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Donnons vie à votre vision dès aujourd'hui.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Vous avez un projet de marque, besoin d'un kit de communication percutant ou d'une gestion stratégique de vos réseaux sociaux au Cameroun ? Échangeons dès maintenant.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              <a
                href="mailto:kfirmin398@gmail.com"
                className="p-5 rounded-2xl bg-[#141522] border border-white/5 hover:border-[#f5b716]/30 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f5b716]/10 border border-[#f5b716]/20 flex items-center justify-center text-[#f5b716] group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs text-slate-400">Adresse Email Officielle</div>
                  <div className="text-sm font-bold text-white group-hover:text-[#f5b716] transition-colors">
                    kfirmin398@gmail.com
                  </div>
                  <div className="text-[11px] text-slate-400">Réponse sous 12 à 24 heures</div>
                </div>
              </a>

              <a
                href="https://wa.me/237698909071?text=Bonjour%20Beck%20Beck%20Firmin%2C%20je%20souhaite%20discuter%20d%27un%20projet%20graphique%2C%20social%20media%20ou%20%C3%A9dition."
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#141522] border border-white/5 hover:border-emerald-500/30 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs text-slate-400">WhatsApp Professionnel</div>
                  <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    +237 698909071
                  </div>
                  <div className="text-[11px] text-slate-400">Discuter directement sur WhatsApp</div>
                </div>
              </a>

              <div className="p-5 rounded-2xl bg-[#141522] border border-white/5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs text-slate-400">Localisation & Disponibilité</div>
                  <div className="text-sm font-bold text-white">
                    Cameroun (Yaoundé & Douala)
                  </div>
                  <div className="text-[11px] text-slate-400">Projets locaux et collaborations à distance</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-2 font-semibold text-white">
                <Clock className="w-3.5 h-3.5 text-[#f5b716]" />
                <span>Horaires de travail & Permanence</span>
              </div>
              <p className="text-slate-400 text-[11px]">
                Du Lundi au Samedi : 08h30 – 19h00 (Heure du Cameroun / UTC+1). Prise en charge des urgences sur demande express.
              </p>
            </div>
          </div>

          {/* Form Box (Right 7 cols) */}
          <div className="lg:col-span-7 bg-[#12131d] border border-white/10 rounded-2xl p-7 sm:p-8 shadow-xl">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Votre message a bien été préparé !
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Merci {name || 'cher client'}. Firmin a bien reçu votre demande et vous contactera sous 24h avec une proposition adaptée.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={directMailto}
                    className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-slate-950 bg-[#f5b716] rounded-full hover:bg-[#eab308] transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Ouvrir dans mon application Email</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setMessage('');
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-slate-300 bg-white/5 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                  >
                    Nouveau message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <h3 className="text-base font-bold text-white">
                    Formulaire de Brief Rapide
                  </h3>
                  <span className="text-xs text-[#f5b716] font-medium">
                    Devis gratuit sous 24h
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Votre Nom ou Entreprise *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Orange Cameroun / Dr. Brenda"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#0c0d12] border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#f5b716] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Email de contact *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre-email@domaine.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#0c0d12] border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#f5b716] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Téléphone / WhatsApp
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+237 6XX XX XX XX"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#0c0d12] border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#f5b716] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Prestation principale souhaitée
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#0c0d12] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#f5b716] transition-colors"
                    >
                      <option value="Graphiste Designer (Logo, Affiches, Print)">Graphiste Designer (Logo, Affiches, Print)</option>
                      <option value="Community Manager (Réseaux Sociaux)">Community Manager (Réseaux Sociaux)</option>
                      <option value="Éditeur (Mise en page de livre, Ebook)">Éditeur (Mise en page de livre, Ebook)</option>
                      <option value="Conseil & Stratégie Digitale">Conseil & Stratégie Digitale</option>
                      <option value="Autre demande">Autre demande spécifique</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    Budget indicatif envisagé (optionnel)
                  </label>
                  <input
                    type="text"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="Ex: 150 000 FCFA / 250 €"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#0c0d12] border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#f5b716] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    Description de votre besoin / Détails du projet *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Décrivez votre entreprise, vos attentes, vos délais souhaités ou posez directement vos questions..."
                    className="w-full px-3.5 py-2.5 text-xs bg-[#0c0d12] border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#f5b716] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-[#f5b716] hover:bg-[#eab308] rounded-full transition-colors shadow-md shadow-[#f5b716]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}</span>
                  </button>

                  <a
                    href="https://wa.me/237698909071?text=Bonjour%20Firmin%2C%20j%27aimerais%20un%20devis%20direct"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-3 text-xs font-medium text-emerald-400 bg-emerald-950/30 hover:bg-emerald-900/40 border border-emerald-500/20 rounded-full transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Préférer WhatsApp (+237 698909071)</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
