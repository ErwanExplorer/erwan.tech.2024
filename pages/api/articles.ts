// pages/api/articles.ts

import type { NextApiRequest, NextApiResponse } from 'next';

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

const articles: Article[] = [
  {
    id: 1,
    title: "Adidas Réinvente la Publicité avec l'IA : Une Révolution en 2 Heures",
    slug: "adidas-reinvente-la-publicite-avec-l-ia-une-revolution-en-2-heures",
    date: "2024-08-20", // Date au format ISO
    description: "Découvrez comment Adidas a utilisé l'intelligence artificielle pour créer une publicité en un temps record, sans intervention humaine.",
    image: "/assets/blog/adidas.png",
    video: "https://pro-erwantv.wistia.com/medias/iz3iifu5wm",
    content: "<p>Adidas a utilisé l'IA pour concevoir une campagne publicitaire révolutionnaire en seulement deux heures. Cette approche novatrice marque un tournant dans la manière dont les publicités sont créées et diffusées.</p>",
    footer: "Découvrez comment Adidas a utilisé l'intelligence artificielle pour créer une publicité en un temps record, sans intervention humaine.",
    credits: "Article écrit par Erwan"
  },
  {
    id: 2,
    title: "«I'm an AI»",
    slug: "i-m-an-ai",
    date: "2024-08-16", // Date au format ISO
    description: "Vidéo de 🎞️ Amitay Boneh",
    image: "/assets/blog/iamai.png",
    video: "https://pro-erwantv.wistia.com/medias/x9zu98c9g6",
    content: "<p>La vidéo «I'm an AI» de Amitay Boneh explore les implications et les possibilités offertes par l'intelligence artificielle dans divers domaines.</p>",
    footer: "Vidéo de 🎞️ Amitay Boneh",
    credits: "Article écrit par Erwan"
  },
  {
    id: 3,
    title: "Le Lancement de Polaris Dawn : Un Nouveau Chapitre pour les Missions Spatiales Habitées",
    slug: "le-lancement-de-polaris-dawn-un-nouveau-chapitre-pour-les-missions-spatiales-habitees",
    date: "2024-08-22", // Date au format ISO
    description: "Le 27 août 2024 marquera le lancement de Polaris Dawn, la première mission spatiale habitée du programme Polaris de la NASA, une étape clé vers l'exploration spatiale avancée.",
    image: "/assets/blog/polarisdawn.png",
    video: "https://pro-erwantv.wistia.com/medias/qezh115tuh",
    content: "<p>Le 27 août 2024, la NASA entamera une nouvelle ère de l'exploration spatiale avec le lancement de Polaris Dawn, la première des trois missions habitées prévues dans le cadre du programme Polaris. Cette mission pionnière marque un moment historique pour l'agence spatiale, visant à repousser les limites de l'exploration humaine dans l'espace.</p><p>Polaris Dawn a pour objectif de démontrer des technologies avancées et de mener des recherches cruciales pour les futures missions spatiales. Les astronautes à bord vont explorer de nouvelles technologies, effectuer des expériences en microgravité et préparer le terrain pour des missions plus ambitieuses, notamment vers la Lune et Mars.</p><p>Ce lancement symbolise non seulement une avancée technologique majeure, mais aussi un renouveau dans l'engagement de la NASA envers l'exploration spatiale habitées. Le programme Polaris, avec ses trois missions successives, a pour but de renforcer les capacités humaines dans l'espace et de faire progresser notre compréhension de l'environnement spatial.</p>",
    footer: "Le 27 août 2024, ne manquez pas le lancement de Polaris Dawn, une étape cruciale vers l'avenir de l'exploration spatiale humaine.",
    credits: "Article écrit par Erwan"
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse<Article[]>) {
  res.status(200).json(articles);
}
