"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface QuizProps {
  questions: QuizQuestion[];
  title?: string;
}

export function Quiz({
  questions,
  title = "Test Your Understanding",
}: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const handleAnswerSelect = (index: number) => {
    if (answered) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    const isCorrect =
      selectedAnswer === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }

    setAnswered(true);
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setAnswered(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswered(false);
  };

  const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <Card className="mt-8 border-2">
      <CardHeader>
        <CardTitle className="font-nunito text-2xl text-primary">
          {title}
        </CardTitle>
        <CardDescription className="font-sans">
          Question {currentQuestion + 1} of {questions.length}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="mb-6">
          <h3 className="text-xl font-nunito font-semibold text-foreground mb-4">
            {questions[currentQuestion].question}
          </h3>
          <div className="space-y-2">
            {questions[currentQuestion].options.map((option, index) => {
              let buttonVariant: "default" | "outline" | "secondary" =
                "outline";
              if (answered) {
                if (index === questions[currentQuestion].correctAnswer) {
                  buttonVariant = "default";
                } else if (index === selectedAnswer && !isCorrect) {
                  buttonVariant = "secondary";
                }
              } else if (selectedAnswer === index) {
                buttonVariant = "default";
              }

              return (
                <Button
                  key={index}
                  variant={buttonVariant}
                  className={`w-full justify-start text-left font-sans h-auto py-3 px-4 whitespace-normal ${
                    answered &&
                    index === questions[currentQuestion].correctAnswer
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : answered && index === selectedAnswer && !isCorrect
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : ""
                  }`}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={answered}
                >
                  <span className="mr-2 font-semibold">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                  {answered &&
                    index === questions[currentQuestion].correctAnswer && (
                      <span className="ml-auto">✓</span>
                    )}
                  {answered && index === selectedAnswer && !isCorrect && (
                    <span className="ml-auto">✗</span>
                  )}
                </Button>
              );
            })}
          </div>
        </div>

        {showResult && (
          <div
            className={`rounded-lg p-4 border-l-4 ${
              isCorrect
                ? "bg-green-50 border-green-500"
                : "bg-red-50 border-red-500"
            }`}
          >
            <p
              className={`font-nunito font-semibold mb-2 ${
                isCorrect ? "text-green-800" : "text-red-800"
              }`}
            >
              {isCorrect
                ? "🎉 Excellent! You got it right!"
                : "💪 Not quite, but keep trying!"}
            </p>
            {questions[currentQuestion].explanation && (
              <p className="text-foreground font-sans text-sm">
                {questions[currentQuestion].explanation}
              </p>
            )}
          </div>
        )}

        <div className="flex gap-2 pt-4">
          {!answered ? (
            <Button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="font-nunito"
            >
              Submit Answer
            </Button>
          ) : (
            <>
              {!isLastQuestion ? (
                <Button onClick={handleNext} className="font-nunito">
                  Next Question →
                </Button>
              ) : (
                <div className="w-full space-y-4">
                  <div className="bg-primary/10 rounded-lg p-6 text-center border-2 border-primary">
                    <p className="text-2xl font-nunito font-bold text-primary mb-2">
                      Quiz Complete! 🎊
                    </p>
                    <p className="text-lg font-sans text-foreground">
                      You scored {score} out of {questions.length}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {score === questions.length
                        ? "Perfect score! You're a star! ⭐"
                        : score >= questions.length / 2
                        ? "Great job! Keep learning and you'll master this! 🌟"
                        : "Good effort! Practice makes perfect! 💪"}
                    </p>
                  </div>
                  <Button
                    onClick={handleRestart}
                    className="w-full font-nunito"
                  >
                    Try Again
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
