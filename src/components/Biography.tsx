import React from "react";
import { Language } from "../types";
import { Palette, Compass, Activity, ShieldCheck, Flower } from "lucide-react";

interface BiographyProps {
  lang: Language;
}

export default function Biography({ lang }: BiographyProps) {
  const [activeTab, setActiveTab] = React.useState<"story" | "philosophy" | "milestones">("story");

  const milestones = [
    {
      year: "1975",
      titleEn: "Early Artistic Core",
      titleFr: "Premiers Pas à Santa Clara",
      descriptionEn: "At age 15 in Santa Clara, Cuba, Dorisa enters drawings, ceramics, and geometric compositions, absorbing the rich light and Caribbean hues of her home country.",
      descriptionFr: "À l'âge de 15 ans à Santa Clara, Cuba, Dorisa commence à dessiner, manipuler la céramique et concevoir des abstractions géométriques, s'imprégnant de la vive lumière caraïbe."
    },
    {
      year: "1994",
      titleEn: "Textile Designing & Master weaver",
      titleFr: "Créatrice Textile & Maître Tisserand",
      descriptionEn: "She becomes a professional textile designer. This training implants a permanent fascination with fabrics, coarse yarns, natural canvas textures, and manual collages that defines her current canvases.",
      descriptionFr: "Elle développe sa carrière de designer textile. C'est durant cette période qu'elle acquiert sa passion pour la fibre, le fil brut et les collages de tissus qui caractérisent ses œuvres actuelles."
    },
    {
      year: "2005",
      titleEn: "The Toulouse Sanctuary",
      titleFr: "Le Sanctuaire de Toulouse",
      descriptionEn: "Moves to Toulouse, France. She establishes her primary creative space. Her work shifts fully from geometric design into abstract expressionism, weaving physical fibers together with plaster reliefs.",
      descriptionFr: "Installation à Toulouse, en France. Elle y établit son atelier de création. Son expression délaisse les motifs géométriques pour l'abstraction physique, reliant fils de coton et reliefs de plâtre."
    },
    {
      year: "2018 - Present",
      titleEn: "The Healing & Meditative Art Journey",
      titleFr: "L'Art Curatif et Méditatif",
      descriptionEn: "Deepening a spiritual connection between drawing and well-being. Creation of the 'Breathing and Color Therapy' collections, exhibited globally at fairs from Paris, Barcelona, to Chicago.",
      descriptionFr: "Approfondissement du lien entre la création plastique et le bien-être thérapeutique. Lancement des collections de chromothérapie, exposées à Paris, Barcelone et Chicago."
    }
  ];

  return (
    <section id="biography" className="py-24 bg-stone-900 border-t border-b border-stone-850 text-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-amber-500 block mb-3">
            {lang === "en" ? "GENESIS & REVELATION" : "GENÈSE & RÉVÉLATION"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
            {lang === "en" ? "Meet Dorisa Camps" : "Rencontrez Dorisa Camps"}
          </h2>
          <div className="w-16 h-0.5 bg-amber-500/60 mx-auto" />
        </div>

        {/* Content Navigation Tabs */}
        <div className="flex justify-center border-b border-stone-800 max-w-lg mx-auto mb-16">
          <button
            onClick={() => setActiveTab("story")}
            className={`flex-1 py-4 text-center font-mono text-xs tracking-widest uppercase cursor-pointer border-b-2 transition-all focus:outline-none ${
              activeTab === "story" ? "text-amber-400 border-amber-550 font-medium" : "text-stone-400 border-transparent"
            }`}
          >
            {lang === "en" ? "Le parcours" : "L'Histoire"}
          </button>
          <button
            onClick={() => setActiveTab("philosophy")}
            className={`flex-1 py-4 text-center font-mono text-xs tracking-widest uppercase cursor-pointer border-b-2 transition-all focus:outline-none ${
              activeTab === "philosophy" ? "text-amber-400 border-amber-550 font-medium" : "text-stone-400 border-transparent"
            }`}
          >
            {lang === "en" ? "Philosophy" : "Philosophie"}
          </button>
          <button
            onClick={() => setActiveTab("milestones")}
            className={`flex-1 py-4 text-center font-mono text-xs tracking-widest uppercase cursor-pointer border-b-2 transition-all focus:outline-none ${
              activeTab === "milestones" ? "text-amber-400 border-amber-550 font-medium" : "text-stone-400 border-transparent"
            }`}
          >
            {lang === "en" ? "Milestones" : "Parcours Chronologique"}
          </button>
        </div>

        {/* Tab contents */}
        {activeTab === "story" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-fadeIn">
            {/* Visual Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-2 bg-stone-950 border border-stone-800 rounded-lg max-w-sm w-full">
                {/* Simulated Artist portrait layout / aesthetic frame */}
                <div className="aspect-square bg-stone-900 rounded flex flex-col items-center justify-center p-8 border border-stone-850 relative overflow-hidden group">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                  <Palette className="w-16 h-16 text-amber-500/40 mb-4 group-hover:scale-110 transition-transform duration-500" />
                  <h4 className="font-serif text-md tracking-[0.15em] text-white">Dorisa Camps</h4>
                  <span className="font-mono text-[10px] text-stone-400 tracking-widest mt-2 uppercase">
                    {lang === "en" ? "Citizen of the World" : "Citoyenne du Monde"}
                  </span>
                  <p className="font-serif text-stone-500 text-xs text-center italic mt-6 font-light">
                    &ldquo;{lang === "en" ? "Every canvas incorporates a physical memory of my roots and my spiritual path." : "Chaque toile intègre la mémoire physique de mes racines et de mon parcours spirituel."}&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-stone-300">
              <h3 className="font-serif text-2xl text-white font-light tracking-wide leading-snug">
                {lang === "en" 
                  ? "A tapestry of Cuban heat, European light, and textile designs." 
                  : "Une tapisserie de chaleur cubaine, de lumière européenne et de création textile."}
              </h3>
              
              <p className="font-sans text-stone-400 text-sm leading-relaxed font-light">
                {lang === "en"
                  ? "Born in Santa Clara, Cuba, Dorisa was deeply immersed in drawing and manual arts before her teens. She developed an expert hand as a textile weaver and master designer—a career that completely transformed her understanding of composition, grids, and geometric balances."
                  : "Née à Santa Clara, Cuba, Dorisa s'est immergée dans le dessin et les arts manuels dès son enfance. Elle s'est ensuite forgée une solide formation de designer et maîtresse tisserande—un métier qui a transformé sa compréhension des rythmes, des structures et de l'espace."}
              </p>

              <p className="font-sans text-stone-400 text-sm leading-relaxed font-light">
                {lang === "en"
                  ? "Upon moving to Toulouse, France, her materials evolved. Rather than merely painting color, she began embedding tangible history. Incorporating plaster relieffing, volcanic sand, handcrafted linen strands, and vintage fabrics, her canvas is felt as much as it is seen. The colors act as structural vibrations representing deep water, blazing horizons, and the protective energy cycles of natural life."
                  : "En s'installant à Toulouse, en France, ses matériaux se métamorphosent. Au lieu de simplement peindre de la couleur, elle y incruste une histoire sensible. Mêlant reliefs de plâtre, sable volcanique, trames de chanvre et tissus anciens, ses toiles exigent d'être ressenties autant que vues. Les couleurs agissent comme des vibrations architecturales célébrant l'océan profond, des horizons flamboyants et l'énergie protectrice de la nature."}
              </p>
            </div>
          </div>
        )}

        {/* Philosophy Tab */}
        {activeTab === "philosophy" && (
          <div id="philosophy" className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fadeIn text-stone-300">
            {/* Box 1 */}
            <div className="bg-stone-950 p-8 rounded-lg border border-stone-850 hover:border-amber-500/30 transition-all group">
              <Compass className="w-8 h-8 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-serif text-lg text-white mb-4">
                {lang === "en" ? "Tactile Expressionism" : "L'Expressionnisme Tactile"}
              </h3>
              <p className="font-sans text-stone-400 text-xs sm:text-sm leading-relaxed font-light">
                {lang === "en"
                  ? "Art is physical. The integration of high-relief modeling pastes, organic linens, and sand creates shadows and valleys that break flat canvas patterns, demanding to be touched and fully felt."
                  : "L'art est matière. L'intégration de plâtre à relief, de lin brut et de sable marin crée des ombres et des vallées, cassant la planéité de la toile pour une expérience purement tactile."}
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-stone-950 p-8 rounded-lg border border-stone-850 hover:border-amber-500/30 transition-all group">
              <Flower className="w-8 h-8 text-emerald-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-serif text-lg text-white mb-4">
                {lang === "en" ? "Art as Meditation" : "L'Art comme Méditation"}
              </h3>
              <p className="font-sans text-stone-400 text-xs sm:text-sm leading-relaxed font-light">
                {lang === "en"
                  ? "Every brushstroke represents a breathing cycle. The soft gradients of sunset corals and turquoise seas are meticulously layered, inviting the viewer into slow respiration and mindful contemplation."
                  : "Chaque coup de pinceau représente un cycle respiratoire. Les dégradés de coraux et de mers turquoises sont patiemment superposés pour guider le spectateur vers la méditation."}
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-stone-950 p-8 rounded-lg border border-stone-850 hover:border-amber-500/30 transition-all group">
              <Activity className="w-8 h-8 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-serif text-lg text-white mb-4">
                {lang === "en" ? "Caribbean Roots" : "Racines Caribéennes"}
              </h3>
              <p className="font-sans text-stone-400 text-xs sm:text-sm leading-relaxed font-light">
                {lang === "en"
                  ? "The color palette pays ultimate homage to Cuba's heat, Yoruba deities (like Yemayá), ancestral spirits, and Havana nights. It carries a healing vital energy that restores spiritual warmth."
                  : "La palette de couleurs rend un vibrant hommage à Cuba, aux divinités Yoruba (comme Yemayá), aux ancêtres et aux nuits de La Havane. Une vitalité curative qui réchauffe l'âme."}
              </p>
            </div>
          </div>
        )}

        {/* Chronology Tab */}
        {activeTab === "milestones" && (
          <div className="max-w-3xl mx-auto flex flex-col gap-8 relative items-stretch animate-fadeIn">
            {/* Center line */}
            <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 w-[1px] bg-stone-800" />

            {milestones.map((mil, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx} 
                  className={`flex flex-col sm:flex-row relative items-stretch justify-start sm:justify-between py-2 ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Circle dot on timeline */}
                  <div className="absolute top-6 left-4 sm:left-1/2 -translate-x-[5px] w-2.5 h-2.5 rounded-full bg-amber-500 border border-stone-900 z-10" />

                  {/* Card holder */}
                  <div className="w-full sm:w-[45%] pl-10 sm:pl-0">
                    <div className="bg-stone-950 p-6 rounded-lg border border-stone-850 select-none">
                      <span className="font-mono text-xs font-bold text-amber-500 block mb-2">
                        {mil.year}
                      </span>
                      <h4 className="font-serif text-base text-white tracking-wide mb-3">
                        {lang === "en" ? mil.titleEn : mil.titleFr}
                      </h4>
                      <p className="font-sans text-stone-400 text-xs leading-relaxed font-light">
                        {lang === "en" ? mil.descriptionEn : mil.descriptionFr}
                      </p>
                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden sm:block w-[45%]" />
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
