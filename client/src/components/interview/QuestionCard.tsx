import { useState } from "react";
import VoiceRecorder from "./VoiceRecorder";

interface QuestionCardProps {
  question: string;
  current: number;
  total: number;
  onNext: (answer: string) => void;
}

const QuestionCard = ({
  question,
  current,
  total,
  onNext,
}: QuestionCardProps) => {
  const [answer, setAnswer] = useState("");

  const progress = ((current + 1) / total) * 100;

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold text-white">
          Question {current + 1} of {total}
        </h2>

        <span className="font-semibold text-violet-400">
          {Math.round(progress)}%
        </span>

      </div>

      {/* Progress Bar */}

      <div className="mt-4 h-3 w-full rounded-full bg-zinc-800 overflow-hidden">

        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-700"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

      {/* Question */}

      <div className="mt-8">

        <p className="text-xl leading-9 text-white">
          {question}
        </p>

      </div>

      {/* Voice Recorder */}

      <div className="mt-6">

        <VoiceRecorder
          onTranscript={(text) => setAnswer(text)}
        />

      </div>

      {/* Answer */}

      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Type your answer or use the microphone..."
        className="mt-6 h-44 w-full rounded-xl border border-zinc-700 bg-zinc-800 p-5 text-white outline-none transition focus:border-violet-500"
      />

      {/* Character Count */}

      <div className="mt-2 text-right text-sm text-zinc-400">
        {answer.length} characters
      </div>

      {/* Action */}

      <div className="mt-8 flex justify-end">

        <button
          disabled={answer.trim().length === 0}
          onClick={() => {
            onNext(answer);
            setAnswer("");
          }}
          className="rounded-xl bg-violet-600 px-8 py-3 font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:bg-zinc-700"
        >
          {current === total - 1
            ? "Finish Interview"
            : "Next Question"}
        </button>

      </div>

    </div>
  );
};

export default QuestionCard;