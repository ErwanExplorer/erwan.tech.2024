import dynamic from 'next/dynamic';
import { Navbar } from "@/components/component/navbar";
import { Footer } from '@/components/component/footer';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export default function PolarisDawnPage() {
    return (
        <>
            <Navbar />

            <div className="flex flex-col items-center m-4">
                <h1 className="text-3xl font-bold">Polaris Dawn</h1>
                <div className="mt-4">
                    <ReactPlayer
                        url="https://pro-erwantv.wistia.com/medias/qezh115tuh"
                    />
                </div>
                <div className="mt-6 text-lg">
                    <p><strong>Polaris Dawn</strong> est une mission spatiale habitée faisant partie du Programme Polaris. Elle sera effectuée avec un vaisseau Crew Dragon de SpaceX.</p>
                    <p><strong>Date de lancement :</strong> 27 août 2024, 07:30 UTC (prévu)</p>
                    <p><strong>Date :</strong> mar. 27 août 2024 – dim. 1 sept. 2024</p>
                    <p><strong>Date d'atterrissage :</strong> 1 septembre 2024 (prévu)</p>
                    <p><strong>Site de lancement :</strong> Centre spatial Kennedy, LC-39A</p>
                    <p><strong>Type de vaisseau :</strong> Crew Dragon</p>
                </div>
            </div>

           
            <div className="fixed bottom-0 w-full">
                <Footer />
            </div>
        </>
    );
}
