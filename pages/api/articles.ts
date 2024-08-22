import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export type Article = {
  id: number;
  title: string;
  date: string;
  description: string;
  image?: string;
  video?: string;
  slug: string;
  content: string;
  footer: string;
  credits?: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Article[]>) {
  try {
    // Mise à jour du chemin pour le fichier articles.json dans le dossier "data" à la racine du projet
    const filePath = path.join(process.cwd(), 'data', 'articles.json');
    console.log('File path:', filePath);  // Ajout d'un log pour vérifier le chemin du fichier

    // Vérification si le fichier existe avant de le lire
    if (!fs.existsSync(filePath)) {
      console.error('File does not exist:', filePath);
      return res.status(404).json([]);
    }

    // Lecture et parsing du fichier JSON
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const articles: Article[] = JSON.parse(jsonData);

    res.status(200).json(articles);
  } catch (error) {
    console.error('Error reading articles:', error);
    res.status(500).json([]);
  }
}