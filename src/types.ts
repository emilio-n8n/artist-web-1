export interface Artwork {
  id: string;
  title: string;
  collection: string;
  collectionId: string;
  year: string;
  medium: string;
  dimensions: string;
  imageUrl: string;
  dominantColor: string; // Tailwind hex color
  colorsName: string;
  storyEn: string;
  storyFr: string;
  isOriginalAvailable: boolean;
}

export interface Exhibition {
  id: string;
  year: string;
  title: string;
  location: string;
  type: "solo" | "group";
}

export type Language = "en" | "fr";
