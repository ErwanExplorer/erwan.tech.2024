import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function QuizComponent() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

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

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Trivial Pursuit Informatique</CardTitle>
        <CardDescription>Testez vos connaissances en informatique !</CardDescription>
      </CardHeader>
      <CardContent>
        {showScore ? (
          <div className='score-section text-center'>
            Vous avez obtenu {score} sur {questions.length} !
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
          <Button onClick={() => {
            setCurrentQuestion(0);
            setScore(0);
            setShowScore(false);
          }}>
            Rejouer
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}