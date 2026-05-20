import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Biography from "./components/Biography";
import Exhibitions from "./components/Exhibitions";
import Contact from "./components/Contact";
import { Language } from "./types";
import { Palette, Globe, Mail, Heart, ArrowUp, Compass } from "lucide-react";

export default function App() {
  // Since her original domain is free.fr (French server), we default to French but support easy English conversions
  const [lang, setLang] = React.useState<Language>("fr");
  const [activeSection, setActiveSection] = React.useState("home");
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  // Scroll to top display detection
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
      
      // Determine active section based on scroll offsets
      const sections = ["home", "gallery", "philosophy", "biography", "exhibitions", "contact"];
      for (const sec of sections) {
        const check = document.getElementById(sec);
        if (check) {
          const rect = check.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="font-sans text-stone-300 bg-stone-950 min-h-screen relative selection:bg-amber-400 selection:text-stone-900 scroll-smooth">
      
      {/* Premium Header toolbar navigation */}
      <Header 
        lang={lang} 
        setLang={setLang} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />

      <main>
        {/* HERO HEADER DISPLAY */}
        <Hero 
          lang={lang} 
          onExploreGallery={() => handleNavigateToSection("gallery")}
        />

        {/* GALLERIES INTERACTIVE CATALOG */}
        <Gallery 
          lang={lang} 
        />

        {/* CHRONOLOGY & GENESIS */}
        <Biography lang={lang} />

        {/* EVENTS & EXHIBITIONS CALENDAR */}
        <Exhibitions lang={lang} />

        {/* CONTACT COMPONENT FOR PRICE REQUESTS */}
        <Contact lang={lang} />
      </main>

      {/* FOOTER */}
      <footer className="bg-stone-990 border-t border-stone-900 py-16 text-stone-400 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-8 md:flex-row">
          
          {/* Trademark branding */}
          <div className="text-center md:text-left flex flex-col gap-2">
            <h5 className="font-serif text-md tracking-[0.2em] text-white">
              DORISA CAMPS
            </h5>
            <p className="font-mono text-[9px] text-stone-500 uppercase tracking-widest leading-none mt-1">
              {lang === "en" 
                ? "Original works & Art therapy meditations" 
                : "Œuvres originales & Ateliers de Méditation chromatique"}
            </p>
          </div>

          {/* Inspirational quote */}
          <p className="font-serif max-w-sm italic text-xs leading-relaxed text-stone-500 text-center md:text-right font-light">
            &ldquo;{lang === "en" 
              ? "Through abstract layers, I seek the union of structural touch, physical canvas threads, and healing colors." 
              : "À travers les couches de matière, je cherche l'union entre le geste physique, le fil de lin et la guérison chromatique."}&rdquo;
          </p>

          {/* Link directory */}
          <div className="flex flex-col items-center md:items-end gap-3.5 text-xs font-mono">
            <a 
              href="mailto:dorisacamps@gmail.com" 
              className="hover:text-amber-400 transition-colors"
            >
              dorisacamps@gmail.com
            </a>
            <span className="text-stone-600 text-[10px]">
              {lang === "en" 
                ? "Redesigned with precision from http://dorisacamps.free.fr/" 
                : "Redessiné avec élégance depuis http://dorisacamps.free.fr/"}
            </span>
          </div>

        </div>

        <div className="text-center pt-10 mt-10 border-t border-stone-900 text-[10px] text-stone-600 font-mono tracking-widest select-none">
          © {new Date().getFullYear()} DORISA CAMPS STUDIO. ALL RIGHTS RESERVED.
        </div>
      </footer>

      {/* Scroll to Top floating round button */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full border border-stone-800 bg-stone-950 text-stone-400 hover:text-amber-400 hover:border-amber-500/60 shadow-lg flex items-center justify-center transition-all scale-90 sm:scale-100 hover:scale-110 duration-300 focus:outline-none cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

    </div>
  );
}
