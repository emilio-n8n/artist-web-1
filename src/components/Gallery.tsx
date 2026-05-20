import React from "react";
import { Artwork, Language } from "../types";
import { artworksData, collections } from "../artworksData";
import { Search, SlidersHorizontal, ZoomIn, Eye, Heart, HelpCircle, AlertCircle, Sparkles } from "lucide-react";

interface GalleryProps {
  lang: Language;
}

export default function Gallery({ lang }: GalleryProps) {
  const [selectedCollection, setSelectedCollection] = React.useState("all");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedArtwork, setSelectedArtwork] = React.useState<Artwork | null>(null);

  const filteredCart = artworksData.filter((art) => {
    const matchesCollection = selectedCollection === "all" || art.collectionId === selectedCollection;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.colorsName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.medium.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCollection && matchesSearch;
  });

  // Unique abstract physical CSS canvas generator for missing image URLs
  const renderAbstractCSSCanvas = (art: Artwork) => {
    const mainColor = art.dominantColor;
    return (
      <div 
        className="w-full h-full relative overflow-hidden flex items-center justify-center select-none"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${mainColor}33 0%, #171513 100%)`
        }}
      >
        {/* Plaster texture layer simulated with radial hashes */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 10px'
          }}
        />

        {/* Abstract physical grids simulating her textile weave roots */}
        <div className="absolute inset-0 flex flex-col justify-between p-4 opac-20">
          <div className="w-full h-[1px] bg-stone-800/20" />
          <div className="w-full h-[1px] bg-stone-800/20" />
          <div className="w-full h-[1px] bg-stone-800/20" />
          <div className="w-full h-[1px] bg-stone-800/30" />
          <div className="w-full h-[1px] bg-stone-800/20" />
        </div>
        <div className="absolute inset-0 flex justify-between p-4">
          <div className="h-full w-[1px] bg-stone-800/20" />
          <div className="h-full w-[1px] bg-stone-800/20" />
          <div className="h-full w-[1px] bg-stone-800/20" />
          <div className="h-full w-[1px] bg-stone-800/30" />
          <div className="h-full w-[1px] bg-stone-800/20" />
        </div>

        {/* Core textured paint splotches / shapes */}
        <div 
          className="w-56 h-56 rounded-full blur-3xl absolute opacity-30 animate-pulse"
          style={{ backgroundColor: mainColor }}
        />
        
        {/* Dynamic geometric overlay lines representing her early 15yo geometric works */}
        <div 
          className="absolute w-40 h-40 border border-amber-500/10 rounded-full rotate-45 transform"
          style={{ borderColor: `${mainColor}22` }}
        />
        <div 
          className="absolute w-24 h-24 border border-stone-100/10 rotate-12 transform"
          style={{ borderColor: `${mainColor}33` }}
        />
        <div 
          className="absolute w-52 h-4 border-l border-r border-amber-500/10 -rotate-45"
          style={{ borderColor: `${mainColor}11` }}
        />

        {/* Centered focal visual point */}
        <div className="relative z-10 text-center px-6">
          <div 
            className="w-12 h-12 rounded-full border flex items-center justify-center mx-auto mb-3 shadow-lg"
            style={{ 
              borderColor: `${mainColor}80`,
              boxShadow: `0 0 20px ${mainColor}30`,
              backgroundColor: "#0c0a09"
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: mainColor }} />
          </div>
          <span className="font-mono text-[9px] tracking-[0.25em] text-stone-300 uppercase block mb-1">
            {art.collection}
          </span>
          <span className="font-serif text-sm text-stone-100 block max-w-xs truncate px-4">
            {art.title}
          </span>
        </div>

        {/* Label plate edge decor */}
        <div className="absolute bottom-2 right-2 font-mono text-[8px] text-stone-500 uppercase tracking-widest pl-1 py-0.5 border-l border-stone-850">
          DC ABSTRACT STUDIO
        </div>
      </div>
    );
  };

  return (
    <section id="gallery" className="py-24 bg-stone-950 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-amber-500 block mb-3">
            {lang === "en" ? "MUSEUM COLLECTIONS" : "COLLECTIONS PRIVÉES"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-6">
            {lang === "en" ? "The Artworks Catalog" : "La Galerie des Toiles"}
          </h2>
          <div className="w-16 h-0.5 bg-amber-500/60 mx-auto mb-6" />
          <p className="font-sans text-stone-400 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-light">
            {lang === "en"
              ? "Filter by collection or keywords to explore original paintings. Select any artwork to read its chronicle, appreciate its dimensions, or load it into the meditative breathing space."
              : "Filtrez par collection ou mot-clé pour explorer les œuvres originales. Sélectionnez une toile pour lire sa chronique, contempler sa matière ou la charger dans l'espace respiratoire."}
          </p>
        </div>

        {/* Filter and Search Bar Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-900 mb-12">
          {/* Collection Tab buttons */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-4 md:pb-0 custom-scrollbar whitespace-nowrap mask-gradient">
            {collections.map((col) => (
              <button
                key={col.id}
                onClick={() => setSelectedCollection(col.id)}
                className={`px-4 py-2 rounded text-xs tracking-wider uppercase font-mono cursor-pointer transition-all border outline-none focus:outline-none ${
                  selectedCollection === col.id
                    ? "text-amber-400 bg-stone-900 border-stone-750"
                    : "text-stone-400 border-transparent hover:text-stone-200 hover:bg-stone-900/40"
                }`}
              >
                {lang === "en" ? col.nameEn : col.nameFr}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={lang === "en" ? "Search paintings..." : "Rechercher une toile..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-900 border border-stone-850 rounded px-10 py-2 text-xs text-stone-100 placeholder-stone-550 focus:outline-none focus:border-amber-500/60 transition-colors"
            />
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredCart.length === 0 ? (
          <div className="text-center py-20 bg-stone-900/20 border border-stone-900 rounded-lg">
            <AlertCircle className="w-10 h-10 text-stone-600 mx-auto mb-3 animate-pulse" />
            <p className="font-sans text-stone-400 text-sm font-light">
              {lang === "en" ? "No artworks match your search parameters." : "Aucune œuvre ne correspond à vos critères."}
            </p>
            <button 
              onClick={() => { setSearchQuery(""); setSelectedCollection("all"); }}
              className="mt-4 font-mono text-[10px] uppercase text-amber-500 hover:text-amber-400 underline leading-none"
            >
              {lang === "en" ? "Reset filters" : "Réinitialiser les filtres"}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCart.map((art) => {
              return (
                <div 
                  key={art.id}
                  onClick={() => setSelectedArtwork(art)}
                  className="group bg-stone-900 p-3 rounded-lg border border-stone-850 hover:border-stone-700 transition-all duration-300 flex flex-col items-stretch text-left shadow-lg hover:shadow-2xl hover:-translate-y-1 relative cursor-pointer"
                >
                  {/* Status Badges */}
                  <div className="absolute top-6 left-6 z-20 flex flex-col gap-1.5 items-start">
                    {/* Availability */}
                    <span className={`text-[8px] tracking-[0.15em] font-mono uppercase px-2 py-0.5 rounded shadow-sm border font-medium ${
                      art.isOriginalAvailable 
                        ? "bg-emerald-950/95 text-emerald-400 border-emerald-900/40" 
                        : "bg-red-950/95 text-red-400 border-red-900/40"
                    }`}>
                      {art.isOriginalAvailable 
                        ? (lang === "en" ? "AVAILABLE" : "ORIGINAL DISPONIBLE") 
                        : (lang === "en" ? "COLLECTED" : "HORS STOCK / SANS PRIX")}
                    </span>
                  </div>

                  {/* Artwork Container frame */}
                  <div className="aspect-[4/5] bg-stone-950 rounded overflow-hidden relative border border-stone-850">
                    {art.imageUrl ? (
                      <img 
                        src={art.imageUrl} 
                        alt={art.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 select-none"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      renderAbstractCSSCanvas(art)
                    )}

                    {/* Interactive hover overlay */}
                    <div className="absolute inset-0 bg-stone-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-stone-900 border border-stone-700 hover:border-amber-400 hover:text-amber-400 flex items-center justify-center text-stone-300 transition-all scale-90 group-hover:scale-100 duration-300 pointer-events-none">
                        <Eye className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Description Labels */}
                  <div className="mt-4 pb-2 px-1 flex flex-col justify-between flex-1">
                    <div>
                      <span className="font-mono text-[9px] text-amber-500 uppercase tracking-widest block mb-1">
                        {art.collection}
                      </span>
                      <h3 className="font-serif text-base text-stone-100 tracking-wide font-medium leading-tight group-hover:text-amber-400 transition-colors">
                        {art.title}
                      </h3>
                      <p className="font-mono text-[10px] text-stone-400 mt-2 truncate">
                        {art.medium}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-stone-850 flex items-center justify-between text-stone-500 font-mono text-[10px]">
                      <span>{art.dimensions}</span>
                      <span className="text-stone-400">{art.year}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Detailed Artwork Modal Overlay Portfolio Plaque */}
        {selectedArtwork && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/90 backdrop-blur-md animate-fadeIn overflow-y-auto">
            <div 
              className="bg-stone-900 border border-stone-800 rounded-lg max-w-4xl w-full p-6 md:p-8 relative shadow-2xl flex flex-col lg:flex-row gap-8 max-h-[90vh] overflow-y-auto custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button inside modal card corner */}
              <button 
                onClick={() => setSelectedArtwork(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full border border-stone-800 hover:border-stone-700 bg-stone-950/60 hover:text-amber-400 text-stone-400 flex items-center justify-center cursor-pointer transition-colors z-20"
              >
                ✕
              </button>

              {/* Painting Frame left side */}
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                <div className="relative p-1.5 bg-stone-950 border border-stone-850 rounded w-full aspect-[4/5] overflow-hidden">
                  {selectedArtwork.imageUrl ? (
                    <img 
                      src={selectedArtwork.imageUrl} 
                      alt={selectedArtwork.title} 
                      className="w-full h-full object-cover select-none"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    renderAbstractCSSCanvas(selectedArtwork)
                  )}
                </div>
              </div>

              {/* Text metadata details Plaque right side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[9px] tracking-widest text-amber-500 uppercase px-2 py-0.5 border border-amber-500/20 bg-amber-500/5 rounded">
                      {selectedArtwork.collection}
                    </span>
                    <span className="font-mono text-[10px] text-stone-500">
                      {selectedArtwork.year}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-white tracking-wide mb-4">
                    {selectedArtwork.title}
                  </h3>

                  {/* Technical data table */}
                  <div className="flex flex-col gap-2.5 pb-5 border-b border-stone-800 mb-6 text-stone-300 font-mono text-[11px] select-all">
                    <div className="flex justify-between">
                      <span className="text-stone-500">{lang === "en" ? "Medium" : "Technique"}</span>
                      <span className="text-right truncate max-w-[200px] sm:max-w-xs">{selectedArtwork.medium}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">{lang === "en" ? "Dimensions" : "Dimensions"}</span>
                      <span>{selectedArtwork.dimensions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">{lang === "en" ? "Color Palette" : "Harmonie chromatique"}</span>
                      <span className="text-right text-amber-400/80">{selectedArtwork.colorsName}</span>
                    </div>
                  </div>

                  {/* Narrative descriptions */}
                  <div className="mb-6">
                    <h4 className="font-serif text-xs uppercase tracking-[0.15em] text-stone-400 mb-2">
                      {lang === "en" ? "Artist's Chronicle" : "La Chronique de la Toile"}
                    </h4>
                    <p className="font-sans text-stone-300 text-xs sm:text-sm leading-relaxed font-light">
                      {lang === "en" ? selectedArtwork.storyEn : selectedArtwork.storyFr}
                    </p>
                  </div>
                </div>

                {/* Foot buttons */}
                <div className="pt-5 border-t border-stone-850">
                  <button
                    onClick={() => {
                      setSelectedArtwork(null);
                      // Scroll to contact and specify query
                      const inquiryElement = document.getElementById("contact_artwork") as HTMLSelectElement;
                      if (inquiryElement) {
                        inquiryElement.value = selectedArtwork.id;
                      }
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full font-sans text-[10px] tracking-[0.2em] font-bold uppercase text-stone-900 bg-amber-400 hover:bg-amber-300 rounded py-3.5 transition-colors cursor-pointer text-center"
                  >
                    {lang === "en" ? "Inquire Acquisition" : "Demande d'acquisition"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
