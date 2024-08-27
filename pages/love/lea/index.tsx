import { Footer } from '@/components/component/footer';
import { Navbar } from '@/components/component/navbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export default function LeaPage() {
  return (
    <> 
    <Navbar />
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-[1fr_400px] md:gap-12 lg:grid-cols-[1fr_550px]">
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-6xl lg:text-6xl">I'm Léa</h1>
              <p className="text-muted-foreground text-lg md:text-xl">
                Product Manager / UI/UX Designer
              </p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Passionné par le design et la technologie, je suis chef de produit et designer UI/UX. Je suis une personne créative qui aime créer des interfaces belles et intuitives. Je suis également un chef de produit passionné par la création de produits à la fois conviviaux et innovants.
            </p>
          </div>
          <img
            src="/assets/images/hero.png"
            width={550}
            height={550}
            alt="Hero"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
          />
        </div>
      </div>
    </section>

    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contactez-moi</h2>
        <p className="text-muted-foreground text-lg md:text-xl mt-4">Vous pouvez me joindre par email à l'adresse suivante :</p>
        <a href="mailto:erwan.sagnardon@campus-la-chataigneraie.org" className="text-primary hover:underline mt-2">lea@runtechlab.com</a>
      </div>
    </section>

    <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl m-4">Me Parler :</h2>
            <Button>
                <Link href="/love/lea/chat">
                Discuter avec Léa
                </Link>
            </Button>
        </div>
    </section>

    <Footer />
    </>
  );
}

const GitlabIcon: React.FC<IconProps> = (props) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
      </svg>
    )
  }
  
  const InstagramIcon: React.FC<IconProps> = (props) => {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
      </svg>
    )
  }

