import type { ResumeAnalysis } from "@/services/gemini";

import ScoreCard from "@/components/common/ScoreCard";
import ProgressBar from "@/components/common/ProgressBar";
import { downloadResumeReport } from "@/services/pdf";

interface Props {
  result: ResumeAnalysis;
}

const ResumeResult = ({ result }: Props) => {
  return (
    <div className="space-y-8">

      {/* ATS Score */}

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10">

        <h2 className="mb-8 text-center text-3xl font-bold text-white">
          ATS Resume Score
        </h2>

        <ScoreCard score={result.atsScore} />

      </div>
      <div className="mt-8 flex justify-center">

  <button
    onClick={() => downloadResumeReport(result)}
    className="rounded-xl bg-violet-600 px-8 py-3 font-semibold text-white hover:bg-violet-700 transition"
  >
    📄 Download PDF Report
  </button>

</div>

      {/* Job Match */}

      {result.jobMatch !== null && (
        <div className="rounded-3xl border border-blue-700 bg-blue-950/20 p-10">

          <h2 className="mb-8 text-center text-3xl font-bold text-blue-400">
            Job Match
          </h2>

          <ScoreCard score={result.jobMatch} />

        </div>
      )}

      {/* Progress */}

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

        <h2 className="mb-8 text-2xl font-bold text-white">
          Resume Quality
        </h2>

        <div className="space-y-6">

          <ProgressBar
            label="ATS Compatibility"
            value={result.atsScore}
          />

          <ProgressBar
            label="Content Quality"
            value={Math.min(result.atsScore + 5, 100)}
          />

          <ProgressBar
            label="Keyword Coverage"
            value={Math.max(result.atsScore - 8, 0)}
          />

        </div>

      </div>

      {/* Strengths & Weaknesses */}

      <div className="grid gap-8 lg:grid-cols-2">

        <div className="rounded-3xl border border-green-700 bg-green-950/20 p-8">

          <h2 className="mb-6 text-2xl font-bold text-green-400">
            ✅ Strengths
          </h2>

          <div className="space-y-4">

            {result.strengths.map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-zinc-900 p-4 text-zinc-300"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

        <div className="rounded-3xl border border-red-700 bg-red-950/20 p-8">

          <h2 className="mb-6 text-2xl font-bold text-red-400">
            ⚠ Weaknesses
          </h2>

          <div className="space-y-4">

            {result.weaknesses.map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-zinc-900 p-4 text-zinc-300"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Missing Keywords */}

      <div className="rounded-3xl border border-yellow-700 bg-yellow-950/20 p-8">

        <h2 className="mb-6 text-2xl font-bold text-yellow-400">
          Missing Keywords
        </h2>

        <div className="flex flex-wrap gap-3">

          {result.missingKeywords.map((keyword, index) => (
            <span
              key={index}
              className="rounded-full bg-violet-600 px-4 py-2 text-white"
            >
              {keyword}
            </span>
          ))}

        </div>

      </div>

      {/* Missing Skills */}

      {result.missingSkills.length > 0 && (

        <div className="rounded-3xl border border-orange-700 bg-orange-950/20 p-8">

          <h2 className="mb-6 text-2xl font-bold text-orange-400">
            Missing Skills
          </h2>

          <div className="flex flex-wrap gap-3">

            {result.missingSkills.map((skill, index) => (
              <span
                key={index}
                className="rounded-full bg-orange-600 px-4 py-2 text-white"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>

      )}

      {/* Suggestions */}

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

        <h2 className="mb-6 text-2xl font-bold text-white">
          AI Suggestions
        </h2>

        <div className="space-y-4">

          {result.suggestions.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-zinc-800 p-4 text-zinc-300"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

      {/* Interview Tips */}

      {result.interviewTips.length > 0 && (

        <div className="rounded-3xl border border-violet-700 bg-violet-950/20 p-8">

          <h2 className="mb-6 text-2xl font-bold text-violet-400">
            Interview Tips
          </h2>

          <div className="space-y-4">

            {result.interviewTips.map((tip, index) => (
              <div
                key={index}
                className="rounded-xl bg-zinc-900 p-4 text-zinc-300"
              >
                {tip}
              </div>
            ))}

          </div>

        </div>

      )}

      {/* Summary */}

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

        <h2 className="mb-6 text-2xl font-bold text-white">
          AI Summary
        </h2>

        <p className="leading-8 text-zinc-300">
          {result.summary}
        </p>

      </div>

    </div>
  );
};

export default ResumeResult;