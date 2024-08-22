import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/component/navbar";
import { Hero } from "@/components/component/hero";
import { Footer } from "@/components/component/footer";
import { Skills } from "@/components/component/skills";
import { MyProjets } from "@/components/component/my-projets";
import { Contact } from "@/components/component/contact";
import Head from "next/head";
import BlogVedetteSection from "@/components/component/BlogVedetteSection";
import { GetStaticProps } from "next";
import { Article } from "@/components/component/blog-section"; // Assurez-vous que ce chemin est correct

const inter = Inter({ subsets: ["latin"] });

type HomeProps = {
  latestArticle: Article;
};

export default function Home({ latestArticle }: HomeProps) {
  return (
    <>
      <Head>
        <title>Erwan Sagnardon - Software Engineer</title>
      </Head>
      <Navbar />
      <Hero />
      <Skills />
      <MyProjets />
      <Contact />
      <BlogVedetteSection latestArticle={latestArticle} />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles`);
    if (!res.ok) {
      throw new Error('Failed to fetch articles');
    }
    const articles: Article[] = await res.json();

    const latestArticle = articles
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];

    return {
      props: {
        latestArticle,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching articles:', error);
    return {
      notFound: true,
    };
  }
};