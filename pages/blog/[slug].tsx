import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Article } from '@/components/component/blog-section';
import { Navbar } from '@/components/component/navbar';
import { Footer } from '@/components/component/footer';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

type ArticlePageProps = {
  article: Article;
};

export default function ArticlePage({ article }: ArticlePageProps) {
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

export const getStaticPaths: GetStaticPaths = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error('NEXT_PUBLIC_API_URL is not defined');
  }

  try {
    const res = await fetch(`${apiUrl}/api/articles`);

    if (!res.ok) {
      throw new Error(`Failed to fetch articles, status: ${res.status}`);
    }

    const articles: Article[] = await res.json();

    const paths = articles.map((article) => ({
      params: { slug: article.slug },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.error('Error fetching articles:', error);
    return { paths: [], fallback: false };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error('NEXT_PUBLIC_API_URL is not defined');
  }

  try {
    const res = await fetch(`${apiUrl}/api/articles`);

    if (!res.ok) {
      throw new Error(`Failed to fetch articles, status: ${res.status}`);
    }

    const articles: Article[] = await res.json();

    const article = articles.find((a) => a.slug === params?.slug);

    if (!article) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        article,
      },
    };
  } catch (error) {
    console.error('Error fetching article:', error);
    return {
      notFound: true,
    };
  }
};
