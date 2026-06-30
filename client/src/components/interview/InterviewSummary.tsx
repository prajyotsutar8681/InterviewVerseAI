import type { InterviewEvaluation } from "@/services/gemini";


import ScoreCard from "@/components/common/ScoreCard";
import ProgressBar from "@/components/common/ProgressBar";

interface Props {
  result: InterviewEvaluation;
}

const InterviewSummary = ({ result }: Props) => {
  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

        <h1 className="text-center text-4xl font-bold text-white">
          🎉 Interview Completed
        </h1>

        <p className="mt-3 text-center text-zinc-400">
          Here's your AI-generated interview performance report.
        </p>

      </div>

      {/* Overall Score */}

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10">

        <ScoreCard score={result.overallScore} />

      </div>

      {/* Skills */}

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

        <h2 className="mb-8 text-3xl font-bold text-white">
          Performance Breakdown
        </h2>

        <div className="space-y-6">

          <ProgressBar
            label="Communication"
            value={result.communication}
          />

          <ProgressBar
            label="Technical Knowledge"
            value={result.technicalKnowledge}
          />

          <ProgressBar
            label="Confidence"
            value={result.confidence}
          />

        </div>

      </div>

      {/* Strengths & Improvements */}

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Strengths */}

        <div className="rounded-3xl border border-green-700 bg-green-950/20 p-8">

          <h2 className="mb-6 text-2xl font-bold text-green-400">
            ✅ Strengths
          </h2>

          <ul className="space-y-4">

            {result.strengths.map((item, index) => (
              <li
                key={index}
                className="rounded-xl bg-zinc-900 p-4 text-zinc-300"
              >
                {item}
              </li>
            ))}

          </ul>

        </div>

        {/* Improvements */}

        <div className="rounded-3xl border border-yellow-700 bg-yellow-950/20 p-8">

          <h2 className="mb-6 text-2xl font-bold text-yellow-400">
            📈 Areas to Improve
          </h2>

          <ul className="space-y-4">

            {result.improvements.map((item, index) => (
              <li
                key={index}
                className="rounded-xl bg-zinc-900 p-4 text-zinc-300"
              >
                {item}
              </li>
            ))}

          </ul>

        </div>

      </div>

      {/* AI Summary */}

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

        <h2 className="mb-6 text-2xl font-bold text-white">
          🤖 AI Summary
        </h2>

        <p className="leading-8 text-zinc-300">
          {result.summary}
        </p>

      </div>

      {/* Action Buttons */}

      <div className="flex flex-col gap-4 sm:flex-row">

      

        <button
          onClick={() => window.location.href = "/dashboard"}
          className="flex-1 rounded-2xl border border-zinc-700 bg-zinc-900 py-4 text-lg font-semibold text-white transition hover:bg-zinc-800"
        >
          ← Back to Dashboard
        </button>

      </div>

    </div>
  );
};

export default InterviewSummary;