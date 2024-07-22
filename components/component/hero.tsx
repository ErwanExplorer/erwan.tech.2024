import React from 'react';

export function Hero() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-[1fr_400px] md:gap-12 lg:grid-cols-[1fr_550px]">
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-6xl lg:text-6xl">Erwan Sagnardon</h1>
              <p className="text-muted-foreground text-lg md:text-xl">Software Engineer</p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Développeur Web passionné d'astronomie et d'aérospatiale. Mon parcours professionnel dans le développement web coexiste harmonieusement avec ma fascination pour les étoiles et l'univers. Mon rêve est de devenir ingénieur spatial, contribuant ainsi à l'exploration de l'infini.
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
  )
}