// components/BlogSection.tsx

export type Article = {
  id: number;
  title: string;
  date: string;
  description: string;
  image?: string;
  video?: string; // Ajouter le champ vidéo
};

type BlogSectionProps = {
  articles: Article[];
};

export default function BlogSection({ articles }: BlogSectionProps) {
  return (
    <div className="bg-background text-foreground">
      <header className="px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-5xl">
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
          {articles.map((article) => (
            <article key={article.id} className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_2fr] md:gap-6 lg:gap-8">
              <img
                src={article.image}
                alt={article.title}
                width={400}
                height={300}
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <div className="space-y-2">
                <div className="text-sm font-medium text-muted-foreground">Published on {article.date}</div>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  {article.title}
                </h2>
                <p className="text-muted-foreground">
                  {article.description}
                </p>
                {/* Intégration de la vidéo */}
                {article.video && (
                  <video controls className="w-full rounded-lg">
                    <source src={article.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch('http://localhost:3000/api/articles');
  const articles: Article[] = await res.json();

  // Pass data to the page via props
  return { props: { articles } }
}
