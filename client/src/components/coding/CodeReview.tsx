import type { CodeReview as CodeReviewType } from "@/services/coding";

import ScoreCard from "@/components/common/ScoreCard";

interface Props {
  review: CodeReviewType;
}

const CodeReview = ({ review }: Props) => {
  return (
    <div className="space-y-8">

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10">

        <h2 className="mb-8 text-center text-3xl font-bold text-white">
          AI Code Review
        </h2>

        <ScoreCard score={review.overallScore} />

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        <div className="rounded-3xl border border-green-700 bg-green-950/20 p-8">

          <h2 className="mb-4 text-2xl font-bold text-green-400">
            Correctness
          </h2>

          <p className="leading-8 text-zinc-300">
            {review.correctness}
          </p>

        </div>

        <div className="rounded-3xl border border-blue-700 bg-blue-950/20 p-8">

          <h2 className="mb-4 text-2xl font-bold text-blue-400">
            Logic Review
          </h2>

          <p className="leading-8 text-zinc-300">
            {review.logic}
          </p>

        </div>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        <div className="rounded-3xl border border-violet-700 bg-violet-950/20 p-8">

          <h2 className="mb-4 text-2xl font-bold text-violet-400">
            Time Complexity
          </h2>

          <h3 className="text-4xl font-bold text-white">
            {review.timeComplexity}
          </h3>

        </div>

        <div className="rounded-3xl border border-orange-700 bg-orange-950/20 p-8">

          <h2 className="mb-4 text-2xl font-bold text-orange-400">
            Space Complexity
          </h2>

          <h3 className="text-4xl font-bold text-white">
            {review.spaceComplexity}
          </h3>

        </div>

      </div>

      <div className="rounded-3xl border border-red-700 bg-red-950/20 p-8">

        <h2 className="mb-6 text-2xl font-bold text-red-400">
          Bugs Found
        </h2>

        <div className="space-y-3">

          {review.bugs.map((bug, index) => (
            <div
              key={index}
              className="rounded-xl bg-zinc-900 p-4 text-zinc-300"
            >
              • {bug}
            </div>
          ))}

        </div>

      </div>

      <div className="rounded-3xl border border-yellow-700 bg-yellow-950/20 p-8">

        <h2 className="mb-6 text-2xl font-bold text-yellow-400">
          Edge Cases
        </h2>

        <div className="space-y-3">

          {review.edgeCases.map((edge, index) => (
            <div
              key={index}
              className="rounded-xl bg-zinc-900 p-4 text-zinc-300"
            >
              • {edge}
            </div>
          ))}

        </div>

      </div>

      <div className="rounded-3xl border border-cyan-700 bg-cyan-950/20 p-8">

        <h2 className="mb-6 text-2xl font-bold text-cyan-400">
          Improvements
        </h2>

        <div className="space-y-3">

          {review.improvements.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-zinc-900 p-4 text-zinc-300"
            >
              • {item}
            </div>
          ))}

        </div>

      </div>

      <div className="rounded-3xl border border-indigo-700 bg-indigo-950/20 p-8">

        <h2 className="mb-6 text-2xl font-bold text-indigo-400">
          Optimal Solution
        </h2>

        <pre className="overflow-x-auto rounded-xl bg-zinc-950 p-6 text-sm text-green-400">
{review.optimalSolution}
        </pre>

      </div>

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

        <h2 className="mb-6 text-2xl font-bold text-white">
          AI Summary
        </h2>

        <p className="leading-8 text-zinc-300">
          {review.summary}
        </p>

      </div>

    </div>
  );
};

export default CodeReview;