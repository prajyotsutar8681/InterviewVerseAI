import ScoreCard from "@/components/common/ScoreCard";

interface Props {
  score: number;
  recommendation: string;
  strengths: string[];
  weaknesses: string[];
  learningPlan: string[];
}

const InterviewResult = ({
  score,
  recommendation,
  strengths,
  weaknesses,
  learningPlan,
}: Props) => {
  return (
    <div className="space-y-8">

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10">

        <h2 className="mb-8 text-center text-3xl font-bold text-white">
          Coding Interview Result
        </h2>

        <ScoreCard score={score} />

      </div>

      <div className="rounded-3xl border border-violet-700 bg-violet-950/20 p-8">

        <h2 className="mb-4 text-2xl font-bold text-violet-400">
          Hiring Recommendation
        </h2>

        <h3 className="text-4xl font-bold text-white">
          {recommendation}
        </h3>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        <div className="rounded-3xl border border-green-700 bg-green-950/20 p-8">

          <h2 className="mb-5 text-2xl font-bold text-green-400">
            Strengths
          </h2>

          <div className="space-y-3">

            {strengths.map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-zinc-900 p-4 text-zinc-300"
              >
                • {item}
              </div>
            ))}

          </div>

        </div>

        <div className="rounded-3xl border border-red-700 bg-red-950/20 p-8">

          <h2 className="mb-5 text-2xl font-bold text-red-400">
            Weaknesses
          </h2>

          <div className="space-y-3">

            {weaknesses.map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-zinc-900 p-4 text-zinc-300"
              >
                • {item}
              </div>
            ))}

          </div>

        </div>

      </div>

      <div className="rounded-3xl border border-blue-700 bg-blue-950/20 p-8">

        <h2 className="mb-5 text-2xl font-bold text-blue-400">
          Personalized Learning Plan
        </h2>

        <div className="space-y-3">

          {learningPlan.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-zinc-900 p-4 text-zinc-300"
            >
              • {item}
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default InterviewResult;