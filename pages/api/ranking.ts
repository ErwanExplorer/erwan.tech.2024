import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

// Chemin vers le fichier JSON
const filePath = path.join(process.cwd(), 'public', 'ranking.json');

// Fonction pour lire les données du fichier JSON
const readRanking = () => {
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
};

// Fonction pour écrire des données dans le fichier JSON
const writeRanking = (data: { name: string, score: number }[]) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Retourne les données de classement
    const ranking = readRanking();
    res.status(200).json(ranking);
  } else if (req.method === 'POST') {
    // Met à jour les données de classement
    const newRanking = req.body;
    writeRanking(newRanking);
    res.status(200).json(newRanking);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
