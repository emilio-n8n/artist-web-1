import { Language } from "../types";
import { ArrowRight, Sparkles } from "lucide-react";
import sunrisePic from "../assets/images/dorisa_sunrise_1779257039979.png";

interface HeroProps {
  lang: Language;
  onExploreGallery: () => void;
}

export default function Hero({ lang, onExploreGallery }: HeroProps) {
  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-20 flex items-center justify-center bg-stone-950 overflow-hidden"
    >
      {/* Abstract structural aesthetic layout background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-amber-500/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(24,24,27,0.1)_0%,rgba(12,12,13,0.9)_80%)]" />
        
        {/* Delicate structural architectural borders */}
        <div className="absolute inset-y-0 left-12 border-l border-stone-900/40 hidden lg:block" />
        <div className="absolute inset-y-0 right-12 border-r border-stone-900/40 hidden lg:block" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Slogan & Info Texts */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex self-center lg:self-start items-center gap-2 px-3 py-1 bg-stone-900/80 border border-stone-800 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-stone-300 uppercase leading-none">
              {lang === "en" ? "Official Artist Portfolio" : "Portfolio Officiel de l'Artiste"}
            </span>
          </div>

          {/* Subtitle location */}
          <p className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-amber-500 leading-none">
            Santa Clara, Cuba — Toulouse, France
          </p>

          {/* Main Display Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-light tracking-tight text-white leading-[1.1] max-w-2xl">
            {lang === "en" ? "Tactile Journeys into" : "Voyages Tactiles de la"} <br />
            <span className="italic font-normal font-serif text-amber-400">
              {lang === "en" ? "Mindfulness" : "Pleine Conscience"}
            </span>
          </h1>

          {/* Slogan */}
          <div className="border-l-2 border-stone-850 pl-6 my-2 text-left hidden sm:block">
            <p className="font-serif text-lg md:text-xl italic text-stone-300 tracking-wide font-light">
              &ldquo;{lang === "en" ? "A Sunset is a Story & a Sunrise is a Victory." : "Un coucher de soleil est une Histoire, et un lever de soleil est une Victoire."}&rdquo;
            </p>
          </div>

          <p className="font-sans text-stone-400 text-sm md:text-base leading-relaxed max-w-xl font-light">
            {lang === "en" 
              ? "Through the fusion of canvas, relief modeling paste, and fabric collages, explore abstract expressionism as a pathway to emotional harmony, spiritual breathing, and therapeutic healing."
              : "Par la fusion de la toile d'acrylique, des reliefs en plâtre et des collages de tissus, explorez l'expressionnisme abstrait comme une passerelle d'harmonie émotionnelle et de guérison thérapeutique."}
          </p>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 justify-center lg:justify-start">
            <button
              onClick={onExploreGallery}
              className="w-full sm:w-auto flex items-center justify-center gap-2 group font-sans text-xs tracking-[0.2em] font-bold uppercase text-stone-950 bg-amber-400 hover:bg-amber-300 rounded px-6 py-4 transition-all duration-300 shadow shadow-amber-500/20 cursor-pointer"
            >
              {lang === "en" ? "Explore Gallery" : "Ouvrir la Galerie"}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Featured Painting Frame (Right Side) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group p-1.5 bg-stone-900 border border-stone-800 rounded-lg shadow-2xl max-w-sm md:max-w-md w-full">
            {/* Gallery Light Source Effect */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-48 h-12 bg-amber-500/10 rounded-full blur-xl opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-2 left-6 px-2.5 py-1 bg-stone-950/90 rounded-sm border border-stone-800 font-mono text-[9px] tracking-wider text-amber-500 z-20">
              {lang === "en" ? "FEATURED CANVAS" : "TOILE À LA UNE"}
            </div>

            {/* Canvas Shadow Backdroping */}
            <div className="aspect-[4/5] bg-stone-950 rounded overflow-hidden relative border border-stone-800">
              <img 
                src={sunrisePic} 
                alt="Featured Art Sunrise" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 select-none artwork-glow"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-60" />
            </div>

            {/* Label Plaque */}
            <div className="mt-4 pb-2 px-3 flex items-center justify-between">
              <div>
                <h3 className="font-serif text-sm tracking-wide text-stone-100 font-medium">
                  Collection Sunrises #3
                </h3>
                <p className="font-mono text-[10px] text-stone-400 mt-1">
                  80 x 100 cm | 2023
                </p>
              </div>
              <div className="text-right">
                <span className="font-mono text-[9px] tracking-widest text-amber-500 uppercase px-1.5 py-0.5 border border-amber-500/20 bg-amber-500/5 rounded">
                  {lang === "en" ? "Exhibited" : "Exposé"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative vertical coordinates - Elegant look */}
      <div className="absolute bottom-6 right-8 font-mono text-[9px] text-stone-600/60 hidden md:flex flex-col gap-1 tracking-widest text-right">
        <span>CUBANO-FRANÇAISE</span>
        <span>Santa Clara, CU ➜ Toulouse, FR</span>
      </div>
    </section>
  );
}
