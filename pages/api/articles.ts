// pages/api/articles.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export type Article = {
  id: number;
  title: string;
  date: string;
  description: string;
  image?: string;
  video?: string; // Ajouter le champ vidéo
};

const articles: Article[] = [
  {
    "id": 1,
    "title": "Adidas Réinvente la Publicité avec l'IA : Une Révolution en 2 Heures",
    "date": "22 aout 2024",
    "description": "Découvrez comment Adidas a utilisé l'intelligence artificielle pour créer une publicité en un temps record, sans intervention humaine.",
    "image": "/assets/blog/adidas.png", // Lien vers l'image
    "video": "/assets/blog/adidas.mp4", // Lien vers la vidéo
  },
  {
    "id": 2,
    "title": "«I'm an AI»",
    "date": "15 aout 2024",
    "description": "Vidéo de 🎞️ Amitay Boneh",
    "image": "/assets/blog/iamai.png", // Lien vers l'image
    "video": "/assets/blog/iamai.mp4", // Lien vers la vidéo
  }

];

export default function handler(req: NextApiRequest, res: NextApiResponse<Article[]>) {
  res.status(200).json(articles);
}
