import React from "react";
import { Language } from "../types";
import { artworksData } from "../artworksData";
import { Mail, Phone, MapPin, Sparkles, Send, CheckCircle } from "lucide-react";

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    artworkId: "",
    inquiryType: "general",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      artworkId: "",
      inquiryType: "general",
      message: ""
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-stone-950 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-amber-500 block mb-3">
            {lang === "en" ? "ACQUISITION & INQUIRIES" : "CONTACT & INVITATIONS"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
            {lang === "en" ? "Contact Dorisa Camps" : "S'informer et Collaborer"}
          </h2>
          <div className="w-16 h-0.5 bg-amber-500/60 mx-auto mb-6" />
          <p className="font-sans text-stone-400 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-light">
            {lang === "en"
              ? "For inquiries about original canvases, prices, exhibition bookings, or studio visits in Toulouse, please write using the verified form below."
              : "Pour toute question relative aux prix des toiles de Dorisa, aux expositions en galerie ou aux rendez-vous privés d'atelier à Toulouse, veuillez utiliser le formulaire officiel."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Direct info credentials cards */}
          <div className="lg:col-span-4 bg-stone-900 p-8 rounded-lg border border-stone-850 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-lg text-white mb-6 font-medium">
                {lang === "en" ? "Gallery Coordinates" : "Coordonnées de l'Atelier"}
              </h3>

              <div className="flex flex-col gap-6">
                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <Mail className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-mono text-[9px] tracking-widest text-stone-500 uppercase block mb-1">
                      {lang === "en" ? "Direct Email" : "Messagerie Directe"}
                    </span>
                    <a href="mailto:dorisacamps@gmail.com" className="font-mono text-xs hover:text-amber-400 transition-colors">
                      dorisacamps@gmail.com
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <Phone className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-mono text-[9px] tracking-widest text-stone-500 uppercase block mb-1">
                      {lang === "en" ? "Advisory Advisor" : "Conseiller Artistique"}
                    </span>
                    <a href="tel:801-400-6160" className="font-mono text-xs hover:text-amber-400 transition-colors">
                      801-400-6160
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-mono text-[9px] tracking-widest text-stone-500 uppercase block mb-1">
                      {lang === "en" ? "Primary Residence" : "Atelier & Résidence"}
                    </span>
                    <p className="font-sans text-xs text-stone-300">
                      Toulouse, Occitanie, France
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Verification sign */}
            <div className="pt-8 border-t border-stone-850 mt-8">
              <span className="font-mono text-[8px] uppercase tracking-widest text-stone-500 flex items-center gap-1.5 leading-none">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" />
                {lang === "en" ? "Singulart Verified Portfolio" : "Portfolio Singulart Certifié"}
              </span>
            </div>
          </div>

          {/* Right Column: Interaction form */}
          <div className="lg:col-span-8 bg-stone-900/50 p-8 rounded-lg border border-stone-850">
            {isSubmitted ? (
              <div className="text-center py-12 flex flex-col items-center justify-center gap-4 animate-fadeIn">
                <CheckCircle className="w-14 h-14 text-emerald-400" />
                <h3 className="font-serif text-xl font-medium text-white tracking-wide">
                  {lang === "en" ? "Inquiry Received Successfully" : "Demande enregistrée avec succès"}
                </h3>
                <p className="font-sans text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
                  {lang === "en"
                    ? "Thank you for writing to Dorisa Camps. We will confirm details regarding availability, prices, and shipping logistics within 48 hours."
                    : "Merci d'avoir contacté l'atelier de Dorisa. Nous vous recontacterons sous 48 heures pour les détails de disponibilité, prix et logistique de livraison."}
                </p>

                <button
                  onClick={handleReset}
                  className="mt-6 font-mono text-[10px] tracking-widest uppercase text-amber-500 bg-stone-900 border border-stone-800 rounded px-6 py-2.5 hover:text-amber-400 transition-colors cursor-pointer"
                >
                  {lang === "en" ? "Send another message" : "Envoyer un autre message"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="font-mono text-[9px] tracking-widest text-stone-400 uppercase">
                      {lang === "en" ? "Your Full Name" : "Nom et prénom"}
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jean Dupont"
                      className="bg-stone-950 border border-stone-850 rounded px-4 py-2.5 text-xs text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500/60 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="font-mono text-[9px] tracking-widest text-stone-400 uppercase">
                      {lang === "en" ? "Email Address" : "Adresse électronique"}
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. dupont@gmail.com"
                      className="bg-stone-950 border border-stone-850 rounded px-4 py-2.5 text-xs text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500/60 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Inquiry Type */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="font-mono text-[9px] tracking-widest text-stone-400 uppercase">
                      {lang === "en" ? "Type of Inquiry" : "Type de demande"}
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="bg-stone-950 border border-stone-850 rounded px-4 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-amber-500/60 transition-colors"
                    >
                      <option value="general">{lang === "en" ? "General Conversation" : "Demande d'information générale"}</option>
                      <option value="acquisition">{lang === "en" ? "Canvas Acquisition" : "Acquisition d'une toile"}</option>
                      <option value="exhibition">{lang === "en" ? "Exhibition / Press Booking" : "Proposer une exposition / Conférence"}</option>
                      <option value="visit">{lang === "en" ? "Studio Visit Request" : "Faire une visite d'atelier"}</option>
                    </select>
                  </div>

                  {/* Selective Artwork list */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="font-mono text-[9px] tracking-widest text-stone-400 uppercase">
                      {lang === "en" ? "Selected Canvas" : "Œuvre d'intérêt (Optionnel)"}
                    </label>
                    <select
                      id="contact_artwork"
                      value={formData.artworkId}
                      onChange={(e) => setFormData({ ...formData, artworkId: e.target.value })}
                      className="bg-stone-950 border border-stone-850 rounded px-4 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-amber-500/60 transition-colors"
                    >
                      <option value="">{lang === "en" ? "-- Select Artwork (if any) --" : "-- Choisir une toile (Optionnel) --"}</option>
                      {artworksData.map((art) => (
                        <option key={art.id} value={art.id}>
                          {art.title} ({art.year})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="font-mono text-[9px] tracking-widest text-stone-400 uppercase">
                    {lang === "en" ? "Message / Inquiry details" : "Contenu de votre message"}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={lang === "en" ? "Write your thoughts or inquiry details here..." : "Écrivez votre message ou précisez votre intérêt..."}
                    className="bg-stone-950 border border-stone-850 rounded px-4 py-2.5 text-xs text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-500/60 transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="text-right mt-2">
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 group font-sans text-xs tracking-[0.2em] font-bold uppercase text-stone-900 bg-amber-400 hover:bg-amber-300 rounded px-8 py-3.5 transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    {lang === "en" ? "Send Inquiry Message" : "Envoyer la Demande"}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
