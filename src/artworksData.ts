import { Artwork, Exhibition } from "./types";

// Import generated images
import sunriseImg from "./assets/images/dorisa_sunrise_1779257039979.png";
import lotusImg from "./assets/images/dorisa_lotus_1779257056636.png";
import habanaImg from "./assets/images/dorisa_habana_1779257074479.png";

export const collections = [
  { id: "all", nameEn: "All Works", nameFr: "Toutes les œuvres" },
  { id: "sunrises", nameEn: "Sunrises & Sunsets", nameFr: "Soleils & Horizons" },
  { id: "caribbean", nameEn: "Caribbean Vibrations", nameFr: "Vibrations Caraïbes" },
  { id: "spirituality", nameEn: "Spirituality & Lotus", nameFr: "Spiritualité & Lotus" },
  { id: "black-white", nameEn: "Contrast Black & White", nameFr: "Contrastes Noirish" },
  { id: "angels", nameEn: "Visages d'Anges", nameFr: "Visages d'Anges" },
];

export const artworksData: Artwork[] = [
  {
    id: "sunrise-3",
    title: "Collection Sunrises #3",
    collection: "Sunrises & Sunsets",
    collectionId: "sunrises",
    year: "2023",
    medium: "Acrylic, textured plaster relief, and gold leaf on canvas",
    dimensions: "80 x 100 cm",
    imageUrl: sunriseImg,
    dominantColor: "#f59e0b", // Amber/Gold
    colorsName: "Golden amber, twilight vermilion, and textured cream",
    storyEn: "A dramatic capturing of the threshold of dawn. Thick textures of plaster rise like physical landscapes, meeting layers of amber glaze and gold leaf that capture the first victory of the day's light.",
    storyFr: "Une capture spectaculaire du seuil de l'aube. De lourdes textures de plâtre s'élèvent comme des paysages physiques, rencontrant des glacis ambrés et des feuilles d'or pour célébrer la première victoire de la lumière.",
    isOriginalAvailable: false,
  },
  {
    id: "fleur-lotus",
    title: "Collection Fleur de Lotus",
    collection: "Spirituality & Lotus",
    collectionId: "spirituality",
    year: "2024",
    medium: "Acrylic, organic fabric collage, and modeling paste on panel",
    dimensions: "70 x 70 cm",
    imageUrl: lotusImg,
    dominantColor: "#14b8a6", // Teal/Cyan
    colorsName: "Soft pastel mint, ancient gold, and raw linen",
    storyEn: "Representing the spiritual unfolding of clarity and mindfulness. Relieffed geometries of a floating lotus bloom emerge from a meditative textured turquoise sky, layered with hand-woven textile grids.",
    storyFr: "Représente l'épanouissement spirituel du détachement et de la clarté. Les géométries en relief d'un lotus flottant émergent d'un fond turquoise méditatif, superposé de trames de lin brut.",
    isOriginalAvailable: true,
  },
  {
    id: "old-habana",
    title: "My Old Habana",
    collection: "Caribbean Vibrations",
    collectionId: "caribbean",
    year: "2022",
    medium: "Acrylic, vintage newspaper collage, sand, and heavy plaster",
    dimensions: "100 x 120 cm",
    imageUrl: habanaImg,
    dominantColor: "#3b82f6", // Sky/Royal blue
    colorsName: "Ultramarine, volcanic red, sunny cadmium yellow, and plaster dust",
    storyEn: "An intense emotional journey back to Cuba's historic alleys. Warm colonial yellow and burning red collide with cobalt blue under strong light, embedded with ocean sand that holds the memory of ocean breezes.",
    storyFr: "Un voyage émotionnel intense vers les ruelles historiques de Cuba. Le jaune colonial chaud et le rouge brûlant se heurtent au cobalt sous une lumière intense, incrustés de sable marin qui garde la mémoire de la mer.",
    isOriginalAvailable: true,
  },
  {
    id: "visage-anges-2",
    title: "Collection Visages d'Anges #2",
    collection: "Visages d'Anges",
    collectionId: "angels",
    year: "2023",
    medium: "Acrylic, white charcoal, and plaster wash on raw canvas",
    dimensions: "90 x 90 cm",
    imageUrl: "", // Generated CSS pattern
    dominantColor: "#fda4af", // Soft rose
    colorsName: "Chalk white, pale coral, sage mist, and silver leaf",
    storyEn: "A minimalist ethereal portrait tracing sacred presence. Flowing, geometric white charcoal lines float like whispers above a multi-layered pink and sage surface, bringing a serene angelic stillness into the room.",
    storyFr: "Un portrait éthéré minimaliste traçant la présence du sacré. Des lignes de fusain blanc flottent comme des murmures sur une surface rose et sauge, apportant un calme angélique serein dans l'espace.",
    isOriginalAvailable: true,
  },
  {
    id: "black-white-3",
    title: "Collection Black & White #3",
    collection: "Contrast Black & White",
    collectionId: "black-white",
    year: "2024",
    medium: "Acrylic, charcoal paste, and cotton textile inlay on canvas",
    dimensions: "100 x 100 cm",
    imageUrl: "", // Generated CSS pattern
    dominantColor: "#111827", // Charcoal
    colorsName: "Deep carbon black, ivory white, and textured raw fiber",
    storyEn: "A play on dualities and shadow integrated with physical textile textures. The canvas explores high-relief dividing lines, where dark void meets bright awakening in visual and tactile conversation.",
    storyFr: "Un jeu sur les dualités et l'ombre, intégrant des reliefs textiles. La toile explore des lignes de rupture épaisses, où le néant de carbone rencontre l'éveil immaculé dans un dialogue purement tactile.",
    isOriginalAvailable: false,
  },
  {
    id: "yemaya-rainbow",
    title: "Yemaya dans Arc-en-Ciel",
    collection: "Caribbean Vibrations",
    collectionId: "caribbean",
    year: "2023",
    medium: "Acrylic and mixed hydrographic resins on canvas",
    dimensions: "120 x 80 cm",
    imageUrl: "",
    dominantColor: "#0284c7", // Turquoise ocean
    colorsName: "Emerald wave, deep sea indigo, pearlescent aquamarine",
    storyEn: "Dedicated to Yemayá, the Yoruba mother deity of the sea. Fluid resins create shimmering textures like solar ripples on crystal water, reflecting a rainbow spectrum of healing light and protective flow.",
    storyFr: "Dédié à Yemayá, la divinité Yoruba gardienne de la mer. Des résines fluides recréent des ondes lumineuses à la surface d'une eau cristalline, reflétant un prisme de guérison et de flux bienveillant.",
    isOriginalAvailable: true,
  },
  {
    id: "dance-caraibes",
    title: "Dance aux Caraïbes",
    collection: "Caribbean Vibrations",
    collectionId: "caribbean",
    year: "2021",
    medium: "Acrylic, textured fibers, and woven hemp on canvas",
    dimensions: "110 x 90 cm",
    imageUrl: "",
    dominantColor: "#e11d48", // Cadmium red
    colorsName: "Vibrant magenta, golden honey, deep terracotta",
    storyEn: "Expressing the physical ecstasy of rhythms and Caribbean drums. Swirling paths of cadmium red and orange are structured by coarse hemp textiles, representing bodies fused with high-temperature energy.",
    storyFr: "Exprime l'extase physique des rythmes et tambours des Caraïbes. Des tourbillons de rouge cadmium et d'orange sont structurés par des morceaux de chanvre brut, symbolisant les corps fusionnant avec le soleil.",
    isOriginalAvailable: false,
  },
  {
    id: "la-mirada-2",
    title: "Collection La Mirada #2",
    collection: "Spirituality & Lotus",
    collectionId: "spirituality",
    year: "2023",
    medium: "Acrylic and collage of vintage Cuban linen on panel",
    dimensions: "80 x 80 cm",
    imageUrl: "",
    dominantColor: "#8b5cf6", // Purple
    colorsName: "Mystic violet, weathered gold, ink blue",
    storyEn: "Exploring 'The Gaze' as an inward lens to mindfulness and spiritual awareness. The texture features structural layers of linen, inviting the viewer to look beyond the surface of things.",
    storyFr: "Explore 'Le Regard' comme une lentille tournée vers l'introspection. La texture intègre des strates de lin ancien, invitant le spectateur à regarder au-delà de la surface matérielle des choses.",
    isOriginalAvailable: true,
  },
  {
    id: "serenity-2",
    title: "Collection Serenity #2",
    collection: "Spirituality & Lotus",
    collectionId: "spirituality",
    year: "2024",
    medium: "Acrylic, sand plaster, and chalk glaze on canvas",
    dimensions: "100 x 80 cm",
    imageUrl: "",
    dominantColor: "#0d9488", // Teal
    colorsName: "Glacier blue, soft mint, and weathered stone grey",
    storyEn: "Constructed during quiet meditations. A soft glacier background overlaid with fine sand texture, inviting long, tranquil breathing cycles and settling the emotional self into peaceful harmony.",
    storyFr: "Conçue lors de séances de méditation profonde. Un fond bleu glacier très doux est recouvert d'un plâtre de sable fin, invitant à des cycles de respiration lents pour harmoniser le corps.",
    isOriginalAvailable: true,
  },
  {
    id: "barcelona-moi",
    title: "Barcelona et Moi",
    collection: "Spirituality & Lotus",
    collectionId: "spirituality",
    year: "2022",
    medium: "Acrylic, Mediterranean clay dust, and linen grids on canvas",
    dimensions: "90 x 110 cm",
    imageUrl: "",
    dominantColor: "#ea580c", // Burnt Orange
    colorsName: "Earthy terracotta, volcanic dust, ochre oil, and charcoal",
    storyEn: "A tribute to Gaudí's mosaics and Catalan warmth. Incorporates textured clay dust and grid meshes, expressing a deep connection between grounding clay and the absolute freedom of abstract forms.",
    storyFr: "Un hommage aux mosaïques de Gaudí et à la chaleur catalane. Intègre de la poussière d'argile brute et des réseaux de lin, symbolisant l'ancrage de la terre en fusion avec la liberté des formes.",
    isOriginalAvailable: true,
  },
  {
    id: "el-universo-2",
    title: "Collection El Universo #2",
    collection: "Sunrises & Sunsets",
    collectionId: "sunrises",
    year: "2024",
    medium: "Acrylic, marble dust plaster, and silver pigments on canvas",
    dimensions: "120 x 120 cm",
    imageUrl: "",
    dominantColor: "#312e81", // Indigo
    colorsName: "Deep night blue, stellar violet, iridescent silver stellar dust",
    storyEn: "A journey of deep contemplation. Layered indigo and violet pigments represent the expansion of consciousness, textured with raw marble dust to anchor stellar visions into a solid earthy plane.",
    storyFr: "Un voyage de contemplation profonde. Des pigments indigo et violet représentent l'expansion de la conscience, texturés avec de la poudre de marbre pour ancrer les visions stellaires dans de la matière dense.",
    isOriginalAvailable: true,
  },
  {
    id: "notre-rencontre",
    title: "Notre Rencontre",
    collection: "Contrast Black & White",
    collectionId: "black-white",
    year: "2023",
    medium: "Acrylic, volcanic basalt gravel, and cotton yarn on canvas",
    dimensions: "100 x 100 cm",
    imageUrl: "",
    dominantColor: "#4b5563", // Gray
    colorsName: "Mineral gray, rich obsidian black, vibrant scarlet suture threads",
    storyEn: "Representing an accidental but destined union of two paths. Hand-placed red sutures physically stitch together two opposing textured gray and black masses, emphasizing the beautiful scars of our relationships.",
    storyFr: "Représente l'union accidentelle mais inévitable de deux destins. Les fils écarlates cousent physiquement deux masses distinctes de gris pierre et de noir d'encre, honorant les cicatrices de nos rencontres.",
    isOriginalAvailable: false,
  }
];

export const exhibitionsData: Exhibition[] = [
  {
    id: "ex-1",
    year: "2025",
    title: "Symphonie de la Matière (Symphony of Matter)",
    location: "Galerie d'Art Moderne, Toulouse, France",
    type: "solo",
  },
  {
    id: "ex-2",
    year: "2024",
    title: "Echoes of the Caribbean: Art of Cuba",
    location: "Menezes Art Gallery, Paris, France",
    type: "group",
  },
  {
    id: "ex-3",
    year: "2023",
    title: "Meditation in Textures: Solitary Journeys",
    location: "Alliance Française Exhibition Rooms, Chicago, USA",
    type: "solo",
  },
  {
    id: "ex-4",
    year: "2022",
    title: "Barcelona, Cuba, and Myself: Merging Horizons",
    location: "Centro Cultural de Gràcia, Barcelona, Spain",
    type: "solo",
  },
  {
    id: "ex-5",
    year: "2020",
    title: "Bienal de La Habana: Raíces Geométricas",
    location: "Centro de Arte Contemporáneo Wifredo Lam, Havana, Cuba",
    type: "group",
  },
  {
    id: "ex-6",
    year: "2018",
    title: "Textures et Souvenirs d'Enfance",
    location: "Espace Saint-Cyprien, Toulouse, France",
    type: "solo",
  }
];
