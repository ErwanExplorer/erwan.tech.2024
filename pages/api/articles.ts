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
    const filePath = path.join(process.cwd(), 'data', 'articles.json');
    console.log('File path:', filePath);

    if (!fs.existsSync(filePath)) {
      console.error('File does not exist:', filePath);
      return res.status(404).json([]);
    }

    const jsonData = fs.readFileSync(filePath, 'utf8');
    const articles: Article[] = JSON.parse(jsonData);

    res.status(200).json(articles);
  } catch (error) {
    console.error('Error reading articles:', error);
    res.status(500).json([]);
  }
}