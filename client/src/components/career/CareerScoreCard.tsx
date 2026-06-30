import type { CareerScore } from "@/services/careerScore";

interface Props {
  score: CareerScore;
}

const CareerScoreCard = ({ score }: Props) => {
  return (
    <div className="rounded-3xl border border-violet-700 bg-violet-950/20 p-10">

      <h2 className="text-center text-3xl font-bold text-white">
        Career Readiness
      </h2>

      <h1 className="mt-6 text-center text-7xl font-bold text-violet-400">
        {score.overall}%
      </h1>

      <div className="mt-10 space-y-5">

        <div className="flex justify-between text-zinc-300">
          <span>Resume ATS</span>
          <span>{score.resume}%</span>
        </div>

        <div className="flex justify-between text-zinc-300">
          <span>AI Interview</span>
          <span>{score.interview}%</span>
        </div>

        <div className="flex justify-between text-zinc-300">
          <span>Coding Interview</span>
          <span>{score.coding}%</span>
        </div>

      </div>

    </div>
  );
};

export default CareerScoreCard;