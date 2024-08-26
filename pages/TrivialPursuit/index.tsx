import { useEffect, useState } from 'react';
import { Footer } from "@/components/component/footer";
import { Navbar } from "@/components/component/navbar";
import QuizComponent from "@/components/component/TrivialPursuit";

export default function TrivialPursuitPage() {
  const [ranking, setRanking] = useState<{ name: string, score: number }[]>([]);

  // Fetch the ranking data when the component mounts
  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const response = await fetch('/api/ranking');
        const data = await response.json();
        setRanking(data);
      } catch (error) {
        console.error('Failed to fetch ranking data', error);
      }
    };
    fetchRanking();
  }, []);

  // Update ranking data
  const updateRanking = async (newRanking: { name: string, score: number }[]) => {
    try {
      await fetch('/api/ranking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRanking),
      });
      setRanking(newRanking);
    } catch (error) {
      console.error('Failed to update ranking data', error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center m-4">
        <QuizComponent ranking={ranking} updateRanking={updateRanking} />

        <div className='mt-8'>
          <h2 className='text-xl mb-2'>Classement (Nombre de bonne réponse) :</h2>
          <ul>
            {ranking.sort((a, b) => b.score - a.score).map((entry, index) => (
              <li key={index}>{entry.name} : {entry.score}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </>
  );
}