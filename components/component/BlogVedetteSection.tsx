import dynamic from 'next/dynamic';
import { Article } from './blog-section'; // Assurez-vous que ce chemin est correct
import Link from 'next/link';
import { Button } from '../ui/button';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

type BlogVedetteSectionProps = {
  latestArticle: Article;
};

export default function BlogVedetteSection({ latestArticle }: BlogVedetteSectionProps) {
  return (
    <div className="bg-background text-foreground">
      <main className="px-4 pb-12 md:px-6 md:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto grid max-w-5xl gap-8 md:gap-12 lg:gap-16">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
           Mon Article en vedette
        </h1>
          <article key={latestArticle.id} className="space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">
                Published on {latestArticle.date}
              </div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                {latestArticle.title}
              </h2>
              <p className="text-muted-foreground">
                {latestArticle.description}
              </p>
            </div>
            {latestArticle.video && (
              <div className="mt-6">
                <ReactPlayer url={latestArticle.video} controls width="100%" />
              </div>
            )}
          </article>
        <div className="mt-8 text-center">
          <Link href="/blog">
            <Button>Voir tous les articles</Button>
          </Link>
        </div>
        </div>
      </main>
    </div>
  );
}