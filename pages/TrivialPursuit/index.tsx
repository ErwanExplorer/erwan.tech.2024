import { Footer } from "@/components/component/footer";
import { Navbar } from "@/components/component/navbar";
import QuizComponent from "@/components/component/TrivialPursuit";

export default function TrivialPursuitPage() {
    return (
        <>
            <Navbar />

            <div className="flex justify-center items-center m-4">
                <QuizComponent />
            </div>

            <div className="fixed bottom-0 w-full">
                <Footer />
            </div>
        </>
    )
}