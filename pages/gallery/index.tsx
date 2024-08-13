import React from "react";
import { Navbar } from '@/components/component/navbar';
import Head from 'next/head';
import { LayoutGridDemo } from "@/components/component/LayoutGridGallery";
import { Footer } from "@/components/component/footer";
import {Button} from "@/components/ui/button";
import Link from "next/link"

export default function Home() {
    return (
    <>
        <Head>
            <title>Erwan.tech - Galerie des images IA</title>
            <meta name="description" content="Galerie des images IA" />
        </Head>
        <Navbar />
        <h1 className="text-4xl font-bold text-center">Galerie des images IA</h1>

        <div className="flex justify-center mt-8">
            <Button className="m-4">
                <Link href="/gallery/flux">Galerie des images générée par Flux 1.0</Link>
            </Button>
            <Button className="m-4">
                <Link href="/gallery/midjourney">Galerie des images générée par Midjourney</Link>
            </Button>
        </div>

        <LayoutGridDemo />

        <Footer/>
    </>
    );
}