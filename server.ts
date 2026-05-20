import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini client lazily
  let aiClient: GoogleGenAI | null = null;
  function getAi() {
    if (!aiClient) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        console.warn("GEMINI_API_KEY is not defined in the environment. Using graceful fallback mode.");
        return null;
      }
      aiClient = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
    return aiClient;
  }

  // API route for generating meditative descriptions
  app.post("/api/meditation-story", async (req, res) => {
    const { title, collection, dominantColors, focusTheme, lang = "en" } = req.body;

    const isFr = lang.toLowerCase() === "fr";

    // Graceful fallbacks in case API fails or key is missing
    const defaultTextsEn: Record<string, string[]> = {
      peace: [
        "Inhale and let your gaze drift into the layers of this painting. There is a quiet stillness resting beneath these brushstrokes, a soft refuge prepared just for you. Exhale, releasing the weight of the day into this serene blue and white space.",
        "Allow the canvas of your mind to settle as you observe the deep textures. Each color holds a silent promise of tranquility. Let your breathing slow, aligning with the peaceful rhythm of this silent creation.",
        "As you focus on the shapes, feel the gentle pause between each breath. The artwork invites you into a sanctuary of stillness, where nothing is demanded of you. Rest in the harmony of these soft transitions."
      ],
      clarity: [
        "Look upon this composition and find a point of clean, vibrant light. The strokes are solid, yet they move with absolute freedom. Let your mind align with this simple clarity, filtering out the chaotic noises of the outer world.",
        "Inhale the light and structure of this artwork. The relief is tangible, reminding you of the beauty in grounded presence. Exhale, emptying your chest of confusion and welcoming the quiet sharpness of truth.",
        "This painting is a window into the core of your own awareness. Each line guides you deeper towards pure, undistracted observation. Let the calm colors sweep away any clouds of doubt."
      ],
      warmth: [
        "Feel the solar energy radiating from these warm pigments, invoking the gold and amber hues of a Cuban sunrise. Breathe in this soft, healing light, allowing it to expand inside your chest. You are safe, enveloped by the creative fire of life.",
        "Let the vibrant warmth of this canvas remind you of a gentle sunrise breaking through darkness. Each crimson and saffron wave is an invitation to begin again, renewed. Rest your awareness in the loving embrace of this radiant heat.",
        "The light within this work speaks directly to the soul's inner fire. Let your breath fan this gentle warmth, feeling it fill your hands and heart. You are connected to the boundless warmth of the cosmos."
      ],
      strength: [
        "Observe the powerful textures and bold plaster reliefs of this canvas. There is an unwavering stance in its composition, a mountain-like resilience that mirrors your own depth. Draw strength from these heavy, confident strokes.",
        "Inhale the courage woven into the fabric and relief of this painting. Every contrast and dark color serves to define the brilliance of the light. Stand tall in your awareness, as solid as the artwork before you.",
        "Let the energy of this painting remind you that you are capable of holding both the storm and the sky. Breathe deeply, filling your belly with the raw, creative power of this abstract space."
      ]
    };

    const defaultTextsFr: Record<string, string[]> = {
      peace: [
        "Inspirez profondément et laissez votre regard dériver à travers les couches de cette œuvre. Il existe un silence paisible sous chaque coup de pinceau, un refuge conçu pour vous. Expirez, relâchant la tension de la journée dans cet espace serein.",
        "Permettez à votre esprit de s'apaiser en observant ces textures profondes. Chaque couleur porte une promesse silencieuse de tranquillité. Ralentissez votre respiration pour l'aligner avec le rythme interne de cette création.",
        "En vous concentrant sur les formes, ressentez la pause naturelle entre chaque respiration. L'œuvre vous invite dans un sanctuaire de calme absolu, où rien ne vous est demandé. Reposez-vous dans l'harmonie de ces transitions."
      ],
      clarity: [
        "Contemplez cette composition et trouvez un point de lumière pure et vibrante. Les lignes sont nettes, mais elles se déplacent en toute liberté. Laissez votre esprit s'aligner sur cette clarté, filtrant les bruits extérieurs.",
        "Inspirez la structure et la présence de cette peinture. Le relief est tangible, vous rappelant la beauté du moment présent. Expirez, libérant toute confusion pour accueillir l'harmonie simple de la vérité.",
        "Cette toile est une fenêtre ouverte sur votre propre conscience pure. Chaque ligne vous guide vers l'observation simple et attentive. Laissez les couleurs douces balayer les nuages du doute."
      ],
      warmth: [
        "Ressentez l'énergie solaire qui émane de ces pigments chauds, évoquant les nuances ambrées d'un lever de soleil cubain. Inspirez cette lumière douce et curative pour l'infuser dans votre cœur. Vous êtes enveloppé par le feu créatif de la vie.",
        "Laissez la chaleur vibrante de cette œuvre vous rappeler une aube bienveillante perçant l'obscurité. Chaque vague de pourpre et de safran est une invitation à renaître. Posez votre esprit dans l'étreinte de cette lumière infinie.",
        "La lumière au cœur de cette peinture parle directement au feu intérieur de votre âme. Laissez votre souffle nourrir cette douce chaleur, la ressentant se propager dans tout votre être. Vous êtes relié à la chaleur de l'univers."
      ],
      strength: [
        "Observez les textures puissantes et les reliefs en plâtre de cette toile. Il y a une résilience inébranlable dans sa structure, une force de montagne qui reflète votre propre profondeur. Puisez votre force dans ces traits confiants.",
        "Inspirez le courage tissé dans la matière et les collages de cette peinture. Chaque contraste et ombre sert à révéler l'éclat de la lumière. Tenez-vous debout dans votre conscience, aussi solide que cette œuvre.",
        "Laissez l'énergie de cette œuvre vous rappeler que vous êtes capable d'accueillir la tempête et le ciel. Respirez profondément, vous connectant au pouvoir créateur brut de cet espace abstrait."
      ]
    };

    const themeKey = (focusTheme || "peace").toLowerCase() as keyof typeof defaultTextsEn;
    const selectedList = isFr ? (defaultTextsFr[themeKey] || defaultTextsFr.peace) : (defaultTextsEn[themeKey] || defaultTextsEn.peace);
    const fallbackText = selectedList[Math.floor(Math.random() * selectedList.length)];

    try {
      const ai = getAi();
      if (!ai) {
        return res.json({ text: fallbackText, isFallback: true });
      }

      const prompt = isFr
        ? `Tu es un curateur poétique de pleine conscience et d'art-thérapie. Écris une méditation ou une introspection contemplative guidée et poétique de 3 phrases maximum, inspirée par la peinture abstraite de l'artiste Dorisa Camps intitulée "${title}" de sa collection "${collection}". 
          L'énergie chromatique dominante est : "${dominantColors}". Le thème de méditation choisi par l'utilisateur est : "${focusTheme}".
          Le ton doit être serein, doux, apaisant et inviter à une respiration lente et un retour vers soi. Ne mets AUCUN titre, entête, astérisque de mise en forme ou métadonnée. Donne directement le paragraphe de méditation en français.`
        : `You are a poetic mindfulness curator and art therapy guide. Write a tranquil, poetic meditative introspection of maximum 3 sentences inspired by the abstract artwork of artist Dorisa Camps titled "${title}" from her "${collection}" collection.
          The dominant color energy is "${dominantColors}". The user's meditation focus is "${focusTheme}".
          The tone should be serene, soft, calming, and invite slow breathing and self-reflection. Do NOT include any titles, headers, markdown stars, or metadata. Return only the direct meditation paragraph in English.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          temperature: 0.8,
        }
      });

      const generatedText = response.text ? response.text.trim() : null;

      if (!generatedText) {
        throw new Error("Empty response from Gemini API");
      }

      return res.json({ text: generatedText, isFallback: false });

    } catch (error: any) {
      console.error("Error generating meditation narrative via Gemini API:", error);
      // Fallback to random text
      return res.json({ text: fallbackText, isFallback: true });
    }
  });

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
