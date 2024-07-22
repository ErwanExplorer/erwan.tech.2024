import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/component/navbar";
import { Hero } from "@/components/component/hero";
import { Footer } from "@/components/component/footer";
import { Skills } from "@/components/component/skills";
import { MyProjets } from "@/components/component/my-projets";

const inter = Inter({ subsets: ["latin"] });
  
export default function Home() {
  return (
   <>
      <Navbar />
      <Hero />
      <Skills />
      <MyProjets />
      <Footer />
   </>
  );
}
