import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/component/navbar';
import { Footer } from '@/components/component/footer';

const anciensEleves = [
  { nom: "Julie ALEXANDRE--BRIC", fonction: "Développeuse Web" },
  { nom: "Adam ASSUMANI", fonction: "Ingénieur Logiciel" },
  { nom: "Adam BELLANGER", fonction: "Data Scientist" },
  { nom: "Théo BESNARD", fonction: "Concepteur UX/UI" },
  { nom: "Romain BOUCOURT", fonction: "Développeur Mobile" },
  { nom: "Kaëlig CAMESELLA", fonction: "Spécialiste Sécurité" },
  { nom: "Yvann CATE", fonction: "Analyste Données" },
  { nom: "Alexis CHALOINE", fonction: "Chef de Projet" },
  { nom: "Gabriel CHARPENTIER", fonction: "Développeur Back-end" },
  { nom: "Philémon DOISE", fonction: "Intégrateur" },
  { nom: "Kylian FLANDRIN", fonction: "Développeur Front-end" },
  { nom: "Mathéo FONTAINE", fonction: "Consultant IT" },
  { nom: "Leo FORTIN", fonction: "Administrateur Système" },
  { nom: "Lenny GIRARD", fonction: "Spécialiste Réseau" },
  { nom: "Yaniss IDDER", fonction: "Développeur Full-stack" },
  { nom: "Enzo JOUEN", fonction: "Concepteur de Jeux" },
  { nom: "Mehdi LARBI-BOUAMRANE", fonction: "Ingénieur Système" },
  { nom: "Faran LAZAR", fonction: "Développeur Web" },
  { nom: "Thomas LEBATTEUR", fonction: "Spécialiste Cyber Sécurité" },
  { nom: "Maxime LEROY", fonction: "Chef de Projet" },
  { nom: "Etienne MONTI", fonction: "Développeur Mobile" },
  { nom: "Theophile MPASSI", fonction: "Concepteur UX/UI" },
  { nom: "Corentin NOLLET-BARRAY", fonction: "Développeur Back-end" },
  { nom: "Bryan ROHOMUN", fonction: "Intégrateur" },
  { nom: "Erwan Sagnardon", fonction: "Développeur Front-end et CEO" },
  { nom: "Eric UNG", fonction: "Consultant IT et CTO" },
];

export default function AnciensEleves() {
  return (
    <> 
    <Navbar />
    <div className="py-40 px-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Anciens Élèves de la Première SN
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {anciensEleves.map((eleve) => (
          <Card key={eleve.nom} className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <h2 className="text-xl font-bold mb-2">{eleve.nom}</h2>
             <Badge className="mb-4">{eleve.fonction}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
}
