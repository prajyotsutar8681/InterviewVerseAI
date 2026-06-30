import type { CareerScore } from "@/services/careerScore";

interface Props {
  score: CareerScore;
}

const getRecommendation = (score: number) => {
  if (score >= 90) return "🌟 Strong Hire";
  if (score >= 80) return "✅ Hire";
  if (score >= 70) return "👍 Lean Hire";
  return "📚 Keep Improving";
};

const CareerScoreCard = ({ score }: Props) => {
  return (
    <div className="rounded-3xl border border-violet-700 bg-violet-950/20 p-10">

      <h2 className="text-center text-3xl font-bold text-white">
        Career Readiness
      </h2>

      <h1 className="mt-5 text-center text-7xl font-bold text-violet-400">
        {score.overall}%
      </h1>

      <p className="mt-4 text-center text-xl text-green-400">
        {getRecommendation(score.overall)}
      </p>

      <div className="mt-10 space-y-6">

        <div>

          <div className="mb-2 flex justify-between text-zinc-300">
            <span>Resume ATS</span>
            <span>{score.resume}%</span>
          </div>

          <div className="h-2 rounded-full bg-zinc-700">
            <div
              className="h-2 rounded-full bg-blue-500"
              style={{
                width: `${score.resume}%`,
              }}
            />
          </div>

        </div>

        <div>

          <div className="mb-2 flex justify-between text-zinc-300">
            <span>AI Interview</span>
            <span>{score.interview}%</span>
          </div>

          <div className="h-2 rounded-full bg-zinc-700">
            <div
              className="h-2 rounded-full bg-green-500"
              style={{
                width: `${score.interview}%`,
              }}
            />
          </div>

        </div>

        <div>

          <div className="mb-2 flex justify-between text-zinc-300">
            <span>Coding</span>
            <span>{score.coding}%</span>
          </div>

          <div className="h-2 rounded-full bg-zinc-700">
            <div
              className="h-2 rounded-full bg-violet-500"
              style={{
                width: `${score.coding}%`,
              }}
            />
          </div>

        </div>

      </div>

    </div>
  );
};

export default CareerScoreCard;