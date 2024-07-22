import { Footer } from '@/components/component/footer';
import { Navbar } from '@/components/component/navbar';
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export default function LovePage() {
  return (
    <> 
    <Navbar />
    <section className="w-full py-16 md:py-24 lg:py-32">
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Léa</h1>
      <p className="text-xl text-center mb-6">Née le 2 Février 2005</p>
      <div className="text-center text-lg">
        <p>Léa, 19 ans, est actuellement étudiante en école de code informatique à Rouen.</p>
        <p>Elle a une passion pour le voyage, la technologie, l'astronomie et bien sûr, l'amour.</p>
      </div>

      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://instagram.com/lea" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="h-6 w-6" />
        </a>
        <a href="https://github.com/lea" target="_blank" rel="noopener noreferrer">
        <   GitlabIcon className="h-6 w-6" />
        </a>
      </div>

      <div className="mt-8">
        <img
          src="/assets/images/lea.png"
          alt="Léa"
          className="block mx-auto w-1/2 rounded-lg shadow-lg"
        />
      </div>
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
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  }
