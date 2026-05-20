import { Language } from "../types";
import { exhibitionsData } from "../artworksData";
import { Calendar, MapPin, Award } from "lucide-react";

interface ExhibitionsProps {
  lang: Language;
}

export default function Exhibitions({ lang }: ExhibitionsProps) {
  return (
    <section id="exhibitions" className="py-24 bg-stone-900 text-stone-100 border-t border-b border-stone-850">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-amber-500 block mb-3">
            {lang === "en" ? "HISTORIC TIMELINE" : "CHRONOLOGIE DES EXPOSITIONS"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
            {lang === "en" ? "Exhibitions & Events" : "Expositions & Événements"}
          </h2>
          <div className="w-16 h-0.5 bg-amber-500/60 mx-auto mb-6" />
          <p className="font-sans text-stone-400 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-light">
            {lang === "en"
              ? "A history of solo shows and collaborative galleries tracing her evolution across the globe, from the Wifredo Lam center in Cuba to salons in Paris, Barcelona, and Chicago."
              : "L'histoire des expositions de Dorisa Camps, retraçant son évolution du Centre Wifredo Lam à Cuba aux salons d'art moderne de Toulouse, Paris, Barcelone et Chicago."}
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {exhibitionsData.map((ex) => (
            <div 
              key={ex.id}
              className="bg-stone-950 p-6 rounded-lg border border-stone-850 hover:border-stone-750 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Year Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-amber-500 font-bold tracking-widest leading-none">
                    <Calendar className="w-3.5 h-3.5" />
                    {ex.year}
                  </div>
                  <span className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded border ${
                    ex.type === "solo" 
                      ? "bg-amber-950/20 text-amber-400 border-amber-900/40" 
                      : "bg-blue-950/20 text-blue-400 border-blue-900/40"
                  }`}>
                    {ex.type === "solo" 
                      ? (lang === "en" ? "SOLO EXHIBITION" : "EXPOSITION INDIVIDUELLE") 
                      : (lang === "en" ? "COLLECTIVE SHOW" : "SALON COLLECTIF")}
                  </span>
                </div>

                {/* Exposition title */}
                <h3 className="font-serif text-lg text-stone-100 tracking-wide mb-3 leading-snug">
                  {ex.title}
                </h3>
              </div>

              {/* Location layout */}
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-stone-900/60 font-mono text-[11px] text-stone-400">
                <MapPin className="w-3.5 h-3.5 text-stone-600 flex-shrink-0" />
                <span className="truncate">{ex.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Future Event Callout */}
        <div className="mt-16 bg-gradient-to-r from-stone-950 to-stone-900 p-8 rounded-lg border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-lg text-amber-400 font-light tracking-wide mb-1 leading-none">
              {lang === "en" ? "Toulouse Atelier Workspace" : "Atelier Principal de Toulouse"}
            </h4>
            <p className="font-sans text-stone-400 text-xs sm:text-sm font-light mt-1">
              {lang === "en" 
                ? "Visits to the studio can be arranged by personal invitation only. Send inquiries via the contact module." 
                : "Les visites d'atelier à Toulouse s'organisent uniquement sur rendez-vous privé. Prenez contact."}
            </p>
          </div>
          <div className="flex-shrink-0">
            <Award className="w-10 h-10 text-stone-700 animate-pulse" />
          </div>
        </div>

      </div>
    </section>
  );
}
