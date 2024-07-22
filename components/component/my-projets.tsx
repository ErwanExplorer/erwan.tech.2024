import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import React from 'react'

export function MyProjets(): JSX.Element {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mes Projets</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Découvrez les projets sur lesquels j'ai travaillé.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <img
                src="/assets/images/projet1.png"
                alt="Project Image"
                width={600}
                height={400}
                className="rounded-t-lg object-cover w-full"
              />
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <CardTitle>AIFlix</CardTitle>
              <CardDescription>AIFlix est un site proposant des court métrages (mini films) générés par l'intelligence artificielle ainsi que des histoires écrites par l'IA.</CardDescription>
              <div className="flex items-center gap-2">
                <Link href="https://aiflix.erwan.tech/" className="text-primary hover:underline" prefetch={false}>
                  Voir le dépôt
                </Link>
                <Separator orientation="vertical" className="h-4" />
                <GithubIcon className="w-5 h-5 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <img
                src="/assets/images/projet2.png"
                alt="Project Image"
                width={600}
                height={400}
                className="rounded-t-lg object-cover w-full"
              />
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <CardTitle>Générateur de même</CardTitle>
              <CardDescription>Génération de même avec des images générer par l'IA Midjourney.</CardDescription>
              <div className="flex items-center gap-2">
                <Link href="https://erwanexplorer.github.io/generator-meme-midjourney/" className="text-primary hover:underline" prefetch={false}>
                  Voir le dépôt
                </Link>
                <Separator orientation="vertical" className="h-4" />
                <GithubIcon className="w-5 h-5 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <img
                src="/assets/images/projet3.png"
                alt="Project Image"
                width={600}
                height={400}
                className="rounded-t-lg object-cover w-full"
              />
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <CardTitle>Projet 3</CardTitle>
              <CardDescription>A venir...</CardDescription>
              <div className="flex items-center gap-2">
                <Link href="#" className="text-primary hover:underline" prefetch={false}>
                  Voir le dépôt
                </Link>
                <Separator orientation="vertical" className="h-4" />
                <GithubIcon className="w-5 h-5 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

interface IconProps extends React.SVGProps<SVGSVGElement> {}

function GithubIcon(props: IconProps): JSX.Element {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function XIcon(props: IconProps): JSX.Element {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}