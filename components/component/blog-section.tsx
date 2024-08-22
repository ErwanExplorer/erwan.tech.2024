import Link from 'next/link';
import { Button } from '../ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

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

type BlogSectionProps = {
  articles: Article[];
};

export default function BlogSection({ articles }: BlogSectionProps) {
  // Fonction pour convertir la date en un objet Date pour le tri
  const parseDate = (dateString: string) => new Date(dateString);

  // Trier les articles par date du plus récent au moins récent
  const sortedArticles = articles.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());

  return (
    <div className="bg-background text-foreground">
      <header className="px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-5xl">
          <Alert variant="default" className='m-4'>
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>Le blog est actuellement en version alpha. Des améliorations sont à venir.</AlertDescription>
          </Alert>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Blog de Erwan.tech
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Bienvenue sur mon blog où je partage mes pensées, mes idées et mes expériences sur le développement de logiciels, la technologie et plus encore.
          </p>
        </div>
      </header>
      <main className="px-4 pb-12 md:px-6 md:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto grid max-w-5xl gap-8 md:gap-12 lg:gap-16">
          {sortedArticles.map((article) => (
            <article key={article.id} className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_2fr] md:gap-6 lg:gap-8">
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={300}
                  className="aspect-[4/3] w-full rounded-lg object-cover"
                />
              )}
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">Published on {article.date}</div>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  {article.title}
                </h2>
                <p className="text-muted-foreground">
                  {article.description}
                </p>
               
                {/* Bouton Lire Plus */}
                <Link href={`/blog/${article.slug}`}>
                   <Button>Lire plus</Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}