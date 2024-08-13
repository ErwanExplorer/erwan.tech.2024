import { Footer } from "@/components/component/footer";
import { Navbar } from "@/components/component/navbar";
import {ParallaxScroll} from "@/components/ui/parallax-scroll";
import Head from "next/head";

export default function Flux() {
    return (
        <>
        <Head>
            <title>Erwan.tech - Galerie des images générée par Flux 1.0</title>
            <meta name="description" content="Galerie des images générée par Flux 1.0" />
        </Head>
        <Navbar />
            <div className="gap-10 py-40 px-10">
                <h1 className="text-4xl font-bold text-center">Galerie des images générée par Flux 1.0</h1>
                <ParallaxScroll images={images} />
            </div>
        <Footer />
        </>
    )
}

const images = [
    "/assets/images/flux/flux (1).jpg",
    "/assets/images/flux/flux (1).png",
    "/assets/images/flux/flux (1).webp",
    "/assets/images/flux/flux (2).png",
    "/assets/images/flux/flux (2).webp",
    "/assets/images/flux/flux (3).png",
    "/assets/images/flux/flux (3).webp",
    "/assets/images/flux/flux (4).png",
    "/assets/images/flux/flux (4).webp",
    "/assets/images/flux/flux (5).png",
    "/assets/images/flux/flux (5).webp",
    "/assets/images/flux/flux (6).webp",
    "/assets/images/flux/flux (7).webp",
    "/assets/images/flux/flux (8).webp",
    "/assets/images/flux/flux (9).webp",
]