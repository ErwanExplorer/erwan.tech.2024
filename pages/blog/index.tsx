import type { GetStaticProps } from 'next';
import Head from 'next/head';
import type { Article } from '@/components/component/blog-section';
import BlogSection from '@/components/component/blog-section';
import { Navbar } from '@/components/component/navbar';
import { Footer } from '@/components/component/footer';

type HomeProps = {
  articles: Article[];
};

export default function Home({ articles }: HomeProps) {
  return (
    <div>
      <Head>
        <title>Blog de Erwan.tech - IA, Technologie, Développement et Plus</title>
        <meta name="description" content="Bienvenue sur le blog de Erwan.tech, où je partage mes pensées, idées et expériences sur l'intelligence artificielle, le développement de logiciels, la technologie, et plus encore." />
        <meta name="keywords" content="blog, IA, intelligence artificielle, technologie, développement de logiciels, React, Next.js, AWS, serverless" />
        <meta name="author" content="Erwan.tech" />
        <meta property="og:title" content="Blog de Erwan.tech - IA, Technologie, Développement et Plus" />
        <meta property="og:description" content="Bienvenue sur le blog de Erwan.tech, où je partage mes pensées, idées et expériences sur l'intelligence artificielle, le développement de logiciels, la technologie, et plus encore." />
        <meta property="og:image" content="https://erwan.tech/assets/images/icon.png" />
        <meta property="og:url" content="https://erwan.tech/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog de Erwan.tech - IA, Technologie, Développement et Plus" />
        <meta name="twitter:description" content="Bienvenue sur le blog de Erwan.tech, où je partage mes pensées, idées et expériences sur l'intelligence artificielle, le développement de logiciels, la technologie, et plus encore." />
        <meta name="twitter:image" content="https://erwan.tech/assets/images/icon.png" />
        <link rel="canonical" href="https://erwan.tech/blog" />
      </Head>
      <Navbar />
      <BlogSection articles={articles} />
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    // Appel à l'API interne pour obtenir les articles
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles`);

    if (!res.ok) {
      throw new Error(`Failed to fetch articles, status: ${res.status}`);
    }

    // Récupération des données
    const articles: Article[] = await res.json();

    return { props: { articles } };
  } catch (error) {
    console.error('Error fetching articles:', error);

    // Gestion des erreurs : retourne une liste vide d'articles si une erreur se produit
    return { props: { articles: [] } };
  }
};