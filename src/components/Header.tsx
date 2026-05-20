import React from "react";
import { Language } from "../types";
import { Globe, Menu, X, Heart } from "lucide-react";

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export default function Header({ lang, setLang, activeSection, setActiveSection }: HeaderProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const sections = [
    { id: "home", labelEn: "Home", labelFr: "Accueil" },
    { id: "gallery", labelEn: "The Gallery", labelFr: "La Galerie" },
    { id: "philosophy", labelEn: "Philosophy", labelFr: "Philosophie" },
    { id: "biography", labelEn: "The Artist", labelFr: "L'Artiste" },
    { id: "exhibitions", labelEn: "Exhibitions", labelFr: "Expositions" },
    { id: "contact", labelEn: "Contact", labelFr: "Contact" },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-stone-900/80 backdrop-blur-md border-b border-stone-850 text-stone-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Monogram / Brand */}
        <button 
          onClick={() => handleNavClick("home")}
          className="group flex items-center gap-3 text-left focus:outline-none"
        >
          <div className="w-10 h-10 rounded-full border border-amber-500/40 flex items-center justify-center font-serif text-lg tracking-widest text-amber-400 group-hover:border-amber-400 group-hover:bg-amber-500/5 transition-all duration-300">
            DC
          </div>
          <div>
            <h1 className="font-serif text-lg tracking-[0.2em] font-medium leading-none group-hover:text-amber-400 transition-colors">
              DORISA CAMPS
            </h1>
            <span className="font-mono text-[9px] tracking-widest text-stone-400 uppercase mt-1 block">
              {lang === "en" ? "Abstract Expressionism" : "Expressionnisme Abstrait"}
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => handleNavClick(sec.id)}
              className={`font-sans text-xs tracking-[0.15em] uppercase font-medium hover:text-amber-400 transition-all relative py-2 border-b-2 leading-none cursor-pointer focus:outline-none ${
                activeSection === sec.id 
                  ? "text-amber-400 border-amber-500/85" 
                  : "text-stone-400 border-transparent"
              }`}
            >
              {lang === "en" ? sec.labelEn : sec.labelFr}
            </button>
          ))}
        </nav>

        {/* Action Controls (Language & Direct Inquire Button) */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Language Selector */}
          <div className="flex items-center gap-1.5 border border-stone-800 rounded-full px-3 py-1 bg-stone-950/40">
            <Globe className="w-3.5 h-3.5 text-stone-400" />
            <div className="flex items-center gap-1 font-mono text-[10px] tracking-widest">
              <button 
                onClick={() => setLang("en")}
                className={`px-1 rounded hover:text-amber-400 transition-colors uppercase ${lang === "en" ? "text-amber-400 font-semibold" : "text-stone-400"}`}
              >
                EN
              </button>
              <span className="text-stone-600">/</span>
              <button 
                onClick={() => setLang("fr")}
                className={`px-1 rounded hover:text-amber-400 transition-colors uppercase ${lang === "fr" ? "text-amber-400 font-semibold" : "text-stone-400"}`}
              >
                FR
              </button>
            </div>
          </div>

          <button
            onClick={() => handleNavClick("contact")}
            className="group flex items-center gap-1.5 font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded px-4 py-2 transition-all duration-300 shadow shadow-amber-500/10 cursor-pointer"
          >
            <Heart className="w-3 h-3 transition-transform group-hover:scale-125" />
            {lang === "en" ? "Inquire" : "Acquérir"}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            className="flex items-center gap-1 font-mono text-[11px] tracking-widest text-stone-300 hover:text-amber-400 uppercase py-1 px-2 border border-stone-800 rounded bg-stone-950/30"
          >
            <Globe className="w-3 h-3" />
            {lang === "en" ? "FR" : "EN"}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center border border-stone-850 rounded hover:border-stone-700 hover:text-amber-400 transition-all focus:outline-none"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop & Content */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-stone-950 border-b border-stone-850 py-8 px-6 flex flex-col gap-6 animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => handleNavClick(sec.id)}
                className={`text-left font-serif text-lg tracking-wider hover:text-amber-400 py-1 transition-colors ${
                  activeSection === sec.id ? "text-amber-400 font-medium pl-2 border-l-2 border-amber-400" : "text-stone-300"
                }`}
              >
                {lang === "en" ? sec.labelEn : sec.labelFr}
              </button>
            ))}
          </nav>

          <div className="pt-4 border-t border-stone-900">
            <button
              onClick={() => handleNavClick("contact")}
              className="w-full flex items-center justify-center gap-2 font-sans text-xs tracking-[0.2em] uppercase font-bold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded py-3 transition-colors"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              {lang === "en" ? "Acquire Artwork" : "Acquérir une œuvre"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
