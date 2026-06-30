import { useEffect, useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";

import { getResumeHistory } from "@/services/resumeHistory";
import { getInterviewHistory } from "@/services/interview";
import { getCodingHistory } from "@/services/codingHistory";

const Analytics = () => {

  const [resumeHistory, setResumeHistory] = useState<any[]>([]);
  const [interviewHistory, setInterviewHistory] = useState<any[]>([]);
  const [codingHistory, setCodingHistory] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const loadData = async () => {

      try {

        const [
          resumes,
          interviews,
          coding,
        ] = await Promise.all([
          getResumeHistory(),
          getInterviewHistory(),
          getCodingHistory(),
        ]);

        setResumeHistory(resumes);
        setInterviewHistory(interviews);
        setCodingHistory(coding);

      } finally {

        setLoading(false);

      }

    };

    loadData();

  }, []);

  const averageResume =
    resumeHistory.length === 0
      ? 0
      : Math.round(
          resumeHistory.reduce(
            (sum, item) => sum + item.ats_score,
            0
          ) / resumeHistory.length
        );

  const averageInterview =
    interviewHistory.length === 0
      ? 0
      : Math.round(
          interviewHistory.reduce(
            (sum, item) => sum + item.overall_score,
            0
          ) / interviewHistory.length
        );

  const averageCoding =
    codingHistory.length === 0
      ? 0
      : Math.round(
          codingHistory.reduce(
            (sum, item) => sum + item.final_score,
            0
          ) / codingHistory.length
        );

  const careerScore = Math.round(
    (
      averageResume +
      averageInterview +
      averageCoding
    ) / 3
  );

  const recommendation =
    careerScore >= 90
      ? "🌟 Strong Hire"
      : careerScore >= 80
      ? "✅ Hire"
      : careerScore >= 70
      ? "👍 Lean Hire"
      : "📚 Keep Improving";

  if (loading) {

    return (

      <DashboardLayout>

        <div className="flex justify-center py-20">

          <div className="h-12 w-12 animate-spin rounded-full border-4 border-violet-500 border-t-transparent" />

        </div>

      </DashboardLayout>

    );

  }
    return (
    <DashboardLayout>

      <div className="mx-auto max-w-7xl space-y-8">

        <div>

          <h1 className="text-4xl font-bold text-white">
            Analytics Dashboard
          </h1>

          <p className="mt-2 text-zinc-400">
            Track your interview preparation progress.
          </p>

        </div>

        {/* Stats */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-3xl border border-violet-700 bg-violet-950/20 p-8">

            <p className="text-zinc-400">
              Resume Analyses
            </p>

            <h2 className="mt-3 text-5xl font-bold text-white">
              {resumeHistory.length}
            </h2>

          </div>

          <div className="rounded-3xl border border-green-700 bg-green-950/20 p-8">

            <p className="text-zinc-400">
              AI Interviews
            </p>

            <h2 className="mt-3 text-5xl font-bold text-white">
              {interviewHistory.length}
            </h2>

          </div>

          <div className="rounded-3xl border border-blue-700 bg-blue-950/20 p-8">

            <p className="text-zinc-400">
              Coding Interviews
            </p>

            <h2 className="mt-3 text-5xl font-bold text-white">
              {codingHistory.length}
            </h2>

          </div>

          <div className="rounded-3xl border border-yellow-700 bg-yellow-950/20 p-8">

            <p className="text-zinc-400">
              Career Readiness
            </p>

            <h2 className="mt-3 text-5xl font-bold text-violet-400">
              {careerScore}%
            </h2>

          </div>

        </div>

        {/* Performance */}

        <div className="grid gap-8 lg:grid-cols-3">

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="mb-6 text-2xl font-bold text-white">
              Resume ATS
            </h2>

            <h1 className="text-6xl font-bold text-violet-400">
              {averageResume}%
            </h1>

          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="mb-6 text-2xl font-bold text-white">
              Interview Score
            </h2>

            <h1 className="text-6xl font-bold text-green-400">
              {averageInterview}%
            </h1>

          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

            <h2 className="mb-6 text-2xl font-bold text-white">
              Coding Score
            </h2>

            <h1 className="text-6xl font-bold text-blue-400">
              {averageCoding}%
            </h1>

          </div>

        </div>

        {/* Recommendation */}

        <div className="rounded-3xl border border-violet-700 bg-violet-950/20 p-10 text-center">

          <h2 className="text-3xl font-bold text-white">
            AI Recommendation
          </h2>

          <h1 className="mt-6 text-5xl font-bold text-violet-400">
            {recommendation}
          </h1>

          <p className="mt-5 text-zinc-300">

            {careerScore >= 90 &&
              "Excellent performance! You're well prepared for top product-based companies."}

            {careerScore >= 80 &&
              careerScore < 90 &&
              "You're close to being interview-ready. Continue practicing coding and mock interviews."}

            {careerScore >= 70 &&
              careerScore < 80 &&
              "You're making good progress. Focus on improving weak areas to boost your readiness."}

            {careerScore < 70 &&
              "Continue practicing coding, resume optimization, and mock interviews to improve your readiness."}

          </p>

        </div>

        {/* Recent Activity */}

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

          <h2 className="mb-8 text-2xl font-bold text-white">
            Recent Activity
          </h2>

          <div className="space-y-5">

            {resumeHistory.slice(0, 3).map((item) => (

              <div
                key={item.id}
                className="rounded-xl bg-zinc-800 p-4"
              >

                <p className="font-semibold text-white">
                  📄 {item.file_name}
                </p>

                <p className="text-zinc-400">
                  ATS Score: {item.ats_score}%
                </p>

              </div>

            ))}

            {interviewHistory.slice(0, 3).map((item) => (

              <div
                key={item.id}
                className="rounded-xl bg-zinc-800 p-4"
              >

                <p className="font-semibold text-white">
                  🎤 {item.company} Interview
                </p>

                <p className="text-zinc-400">
                  Score: {item.overall_score}%
                </p>

              </div>

            ))}

            {codingHistory.slice(0, 3).map((item) => (

              <div
                key={item.id}
                className="rounded-xl bg-zinc-800 p-4"
              >

                <p className="font-semibold text-white">
                  💻 {item.company} Coding
                </p>

                <p className="text-zinc-400">
                  Score: {item.final_score}%
                </p>

              </div>

            ))}

            {resumeHistory.length === 0 &&
              interviewHistory.length === 0 &&
              codingHistory.length === 0 && (

              <div className="rounded-xl bg-zinc-800 p-8 text-center">

                <p className="text-zinc-400">
                  No analytics available yet.
                  Complete a Resume Analysis, AI Interview or Coding Interview to see your progress.
                </p>

              </div>

            )}

          </div>

        </div>

      </div>

    </DashboardLayout>
  );

};

export default Analytics;