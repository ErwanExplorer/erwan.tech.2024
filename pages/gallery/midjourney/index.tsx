import { Footer } from "@/components/component/footer";
import { Navbar } from "@/components/component/navbar";
import Head from "next/head";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

// Création du tableau d'images Midjourney
const midjourneyImages = Array.from({ length: 55 }, (_, index) => ({
  id: index + 1,
  src: `/assets/images/midjourney/midjourney (${index + 1}).png`,
  alt: `Midjourney Image ${index + 1}`
}));

export default function Midjourney() {
  return (
    <>
      <Head>
        <title>Erwan.tech - Midjourney</title>
      </Head>

      <Navbar />

      <div className="gap-10 py-40 px-10">
        <h1 className="text-4xl font-bold text-center mb-10">
          Galerie des images générées par Midjourney
        </h1>

        <div className="alert alert-info mb-10">
          <strong>Attention :</strong> Les images affichées sont générées par une intelligence artificielle et ne sont pas réelles.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {midjourneyImages.map((image) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={400}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}