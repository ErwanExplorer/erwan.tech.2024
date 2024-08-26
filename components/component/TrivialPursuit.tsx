import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface QuizComponentProps {
  ranking: { name: string, score: number }[];
  updateRanking: (newRanking: { name: string, score: number }[]) => void;
}

export default function QuizComponent({ ranking, updateRanking }: QuizComponentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userName, setUserName] = useState('');
  const [showUserNameInput, setShowUserNameInput] = useState(true);

  // Questions for the quiz
  const questions = [
    {
      questionText: 'Que signifie HTML ?',
      answerOptions: [
        { answerText: 'Hyper Text Markup Language', isCorrect: true },
        { answerText: 'High Tech Modern Language', isCorrect: false },
        { answerText: 'Hyper Transfer Markup Language', isCorrect: false },
        { answerText: 'Home Tool Markup Language', isCorrect: false },
      ],
    },
    {
      questionText: 'Quel langage est principalement utilisé pour styliser les pages web ?',
      answerOptions: [
        { answerText: 'Java', isCorrect: false },
        { answerText: 'Python', isCorrect: false },
        { answerText: 'CSS', isCorrect: true },
        { answerText: 'XML', isCorrect: false },
      ],
    },
    {
      questionText: 'Qu\'est-ce que SQL ?',
      answerOptions: [
        { answerText: 'Structured Question Language', isCorrect: false },
        { answerText: 'Structured Query Language', isCorrect: true },
        { answerText: 'Simple Query Language', isCorrect: false },
        { answerText: 'Standard Query Language', isCorrect: false },
      ],
    },
    {
      questionText: 'Quel est le nom du fondateur de Microsoft ?',
      answerOptions: [
        { answerText: 'Steve Jobs', isCorrect: false },
        { answerText: 'Mark Zuckerberg', isCorrect: false },
        { answerText: 'Bill Gates', isCorrect: true },
        { answerText: 'Elon Musk', isCorrect: false },
      ],
    },
    {
      questionText: 'Quelle est l\'unité de base de stockage en informatique ?',
      answerOptions: [
        { answerText: 'Bit', isCorrect: true },
        { answerText: 'Byte', isCorrect: false },
        { answerText: 'Kilobyte', isCorrect: false },
        { answerText: 'Megabyte', isCorrect: false },
      ],
    },
  ];

  // Handle answer option click
  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      setShowUserNameInput(false);

      if (userName.trim() !== '') {
        const newRanking = [...ranking, { name: userName, score }];
        updateRanking(newRanking);
      }
    }
  };

  // Handle name input submission
  const handleNameSubmit = () => {
    if (userName.trim() !== '') {
      setShowUserNameInput(false);
    }
  };

  // Handle replay action
  const handleReplay = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setShowUserNameInput(true);
    setUserName('');
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Trivial Pursuit Informatique</CardTitle>
        <CardDescription>Testez vos connaissances en informatique !</CardDescription>
      </CardHeader>
      <CardContent>
        {showUserNameInput ? (
          <div className='text-center'>
            <input
              type='text'
              placeholder='Entrez votre pseudo'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className='border p-2 rounded mb-2'
            />
            <Button onClick={handleNameSubmit}>Commencer le quiz</Button>
          </div>
        ) : showScore ? (
          <div className='text-center'>
            <div>Vous avez obtenu {score} sur {questions.length} !</div>
            <div className='mt-4'>
              <h2 className='text-xl'>Classement :</h2>
              <ul>
                {ranking.length > 0 ? (
                  ranking.sort((a, b) => b.score - a.score).map((entry, index) => (
                    <li key={index}>{entry.name} : {entry.score}</li>
                  ))
                ) : (
                  <li>Aucun score disponible</li>
                )}
              </ul>
            </div>
            <Button onClick={handleReplay}>Rejouer</Button>
          </div>
        ) : (
          <>
            <div className='question-section mb-4'>
              <div className='question-count mb-2'>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                  className="w-full mb-2"
                >
                  {answerOption.answerText}
                </Button>
              ))}
            </div>
          </>
        )}
      </CardContent>
      <CardFooter className="justify-center">
        {showScore && (
          <Button onClick={handleReplay}>
            Rejouer
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}