import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/component/navbar';
import { Footer } from '@/components/component/footer';
import { Article } from '@/components/component/blog-section';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export default function ArticlePage() {
  const router = useRouter();
  const { slug } = router.query;  // Récupère le slug depuis les paramètres de la route
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return; // Assurez-vous que le slug est défini avant de faire l'appel API

    const fetchArticle = async () => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      if (!apiUrl) {
        setError('API URL is not defined');
        return;
      }

      try {
        const res = await fetch(`${apiUrl}/api/articles`);
        if (!res.ok) {
          throw new Error(`Failed to fetch articles, status: ${res.status}`);
        }

        const articles: Article[] = await res.json();
        const foundArticle = articles.find((a) => a.slug === slug);

        if (!foundArticle) {
          setError('Article not found');
        } else {
          setArticle(foundArticle);
        }
      } catch (err) { // Renommer 'error' en 'err'
        if (err instanceof Error) { // Vérifier si 'err' est une instance d'Error
          setError(`Error fetching article: ${err.message}`);
        } else {
          setError('Unknown error occurred'); // Gérer les erreurs inconnues
        }
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!article) return <p>Article not found</p>;

  return (
    <div>
      <Head>
        <title>{article.title} - Erwan.tech</title>
        <meta name="description" content={article.description} />
      </Head>
      <Navbar />
      <main className="px-4 py-12 md:px-6 lg:px-8">
        <article className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{article.title}</h1>
          <div className="text-muted-foreground mt-2">Published on {article.date}</div>

          <p className="mt-6 text-lg">{article.description}</p>
          {article.image && (
            <img
              src={article.image}
              alt={article.title}
              className="mt-6 w-full rounded-lg object-cover"
            />
          )}
          <div className="mt-6 text-lg" dangerouslySetInnerHTML={{ __html: article.content }} />

          {article.video && (
            <div className="mt-6 w-full rounded-lg">
              <ReactPlayer url={article.video} controls width="100%" />
            </div>
          )}
          <footer className="mt-6 text-lg text-muted-foreground">{article.footer}</footer>
          {article.credits && (
            <footer className="mt-2 text-lg text-muted-foreground">Crédits : {article.credits}</footer>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
}