import { useState } from "react";

import QuestionCard from "./QuestionCard";
import InterviewSummary from "./InterviewSummary";

import {
  evaluateInterview,
  type InterviewQuestion,
  type InterviewEvaluation,
  type InterviewConfig,
} from "@/services/gemini";

import { saveInterview } from "@/services/interview";

interface InterviewPlayerProps {
  questions: InterviewQuestion[];
  config: InterviewConfig;
}

const InterviewPlayer = ({
  questions,
  config,
}: InterviewPlayerProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);

  const [result, setResult] =
    useState<InterviewEvaluation | null>(null);

  const handleNext = async (answer: string) => {
    const updatedAnswers = [...answers];

    updatedAnswers[currentQuestion] = answer;

    setAnswers(updatedAnswers);

    // Move to next question
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      return;
    }

    // Last question completed
    try {
      setLoading(true);

      const evaluation = await evaluateInterview(
        questions,
        updatedAnswers
      );

      // Save interview report in Supabase
      await saveInterview(
        config,
        evaluation
      );

      setResult(evaluation);
    } catch (error) {
      console.error(error);

      alert("Failed to evaluate interview.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-10 text-center">
        <h2 className="text-3xl font-bold text-white">
          Evaluating Interview...
        </h2>

        <p className="mt-4 text-zinc-400">
          Gemini is reviewing your answers and preparing your report...
        </p>
      </div>
    );
  }

  if (result) {
    return <InterviewSummary result={result} />;
  }

  return (
    <QuestionCard
      question={questions[currentQuestion].question}
      current={currentQuestion}
      total={questions.length}
      onNext={handleNext}
    />
  );
};

export default InterviewPlayer;