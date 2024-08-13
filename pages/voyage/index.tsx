import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Navbar } from '@/components/component/navbar';
import { Footer } from '@/components/component/footer';

// Création du tableau des prochains voyages d'Erwan
const prochainsVoyages = [
  {
    id: 1,
    destination: "Madrid, Espagne",
    date: "15 mars 2024",
    description: "Je vais visiter Madrid, la capitale de l'Espagne, pour découvrir la culture espagnole et profiter du soleil.",
    image: "/assets/images/voyages/espagne.png",
    alt: "madrid, espagne"
  },
  {
    id: 2,
    destination: "Coming, Italie",
    date: "mi-2025",
    description: "Je vais visiter l'Itale, pour découvrir la culture italienne et profiter du soleil.",
    image: "/assets/images/voyages/italie.png",
    alt: "rome, italie"
  },
  {
    id: 3,
    destination: "Seoul, Corée du Sud",
    date: "2026-2027",
    description: "Je vais visiter Séoul, la capitale de la Corée du Sud, pour découvrir la culture coréenne.",
    image: "/assets/images/voyages/coree.png",
    alt: "seoul, coree du sud"
  }
];

export default function Voyages() {
  return (
    <>
    <Navbar />
      <div className="py-40 px-10">
        <h1 className="text-4xl font-bold text-center mb-10">
          Mes Prochains Voyages
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prochainsVoyages.map((voyage) => (
            <Card key={voyage.id} className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Image
                  src={voyage.image}
                  alt={voyage.alt}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{voyage.destination}</h2>
                  <p className="text-sm text-gray-600 mb-4">{voyage.date}</p>
                  <p className="text-gray-700">{voyage.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
