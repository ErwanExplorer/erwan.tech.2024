import React from 'react';

export function Contact() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contactez-moi</h2>
        <p className="text-muted-foreground text-lg md:text-xl mt-4">Vous pouvez me joindre par email à l'adresse suivante :</p>
        <a href="mailto:erwan.sagnardon@campus-la-chataigneraie.org" className="text-primary hover:underline mt-2">erwan.sagnardon@campus-la-chataigneraie.org</a>
      </div>
    </section>
  );
}
