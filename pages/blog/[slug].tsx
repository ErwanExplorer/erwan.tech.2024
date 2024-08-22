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
  // ... (component code remains the same)
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