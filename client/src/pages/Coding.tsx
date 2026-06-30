import { useState } from "react";
import { toast } from "sonner";

import DashboardLayout from "@/components/layout/DashboardLayout";

import CodeEditor from "@/components/coding/CodeEditor";
import LanguageSelector from "@/components/coding/LanguageSelector";
import CodingQuestion from "@/components/coding/CodingQuestion";
import CodeReview from "@/components/coding/CodeReview";

import { saveCodingInterview } from "@/services/codingHistory";

import {
  generateCodingQuestion,
  reviewCode,
  type CodingQuestion as CodingQuestionType,
  type CodeReview as CodeReviewType,
} from "@/services/coding";

const companies = [
  "Google",
  "Amazon",
  "Microsoft",
  "Meta",
  "Apple",
  "Netflix",
  "Adobe",
  "Atlassian",
  "Uber",
  "Airbnb",
  "Oracle",
  "Salesforce",
  "NVIDIA",
  "Intel",
  "IBM",
  "Cisco",
  "LinkedIn",
  "Flipkart",
  "Swiggy",
  "Zomato",
  "PhonePe",
  "Razorpay",
  "Paytm",
  "Goldman Sachs",
  "JPMorgan",
  "TCS",
  "Infosys",
  "Wipro",
  "Accenture",
];

const difficulties = [
  "Easy",
  "Medium",
  "Hard",
];

const TOTAL_ROUNDS = 3;

const Coding = () => {
  const [company, setCompany] = useState("Google");
  const [difficulty, setDifficulty] = useState("Easy");
  const [language, setLanguage] = useState("JavaScript");

  const [round, setRound] = useState(1);

  const [question, setQuestion] =
    useState<CodingQuestionType | null>(null);

  const [review, setReview] =
    useState<CodeReviewType | null>(null);

  const [code, setCode] = useState("");

  const [scores, setScores] = useState<number[]>([]);

  const [loadingQuestion, setLoadingQuestion] =
    useState(false);

  const [loadingReview, setLoadingReview] =
    useState(false);

  const generateQuestion = async (
    currentRound: number
  ) => {
    try {
      setLoadingQuestion(true);

      setQuestion(null);
      setReview(null);

      const result =
        await generateCodingQuestion(
          company,
          difficulty,
          language,
          currentRound
        );

      setQuestion(result);

      setCode("");

    } catch (error: any) {

      console.error(error);

      toast.error(
        error?.message ??
        "Failed to generate coding interview."
      );

    } finally {

      setLoadingQuestion(false);

    }
  };

  const reviewSolution = async () => {

    if (!question) return;

    // ⭐ NEW VALIDATION

    if (code.trim().length === 0) {

      toast.error(
        "Please write your solution before submitting."
      );

      return;

    }

    try {

      setLoadingReview(true);

      const result =
        await reviewCode(
          question.description,
          code,
          language
        );

      setReview(result);

      const updatedScores = [
        ...scores,
        result.overallScore,
      ];

      setScores(updatedScores);

      if (round === TOTAL_ROUNDS) {

        const finalAverage = Math.round(
          updatedScores.reduce(
            (a, b) => a + b,
            0
          ) / updatedScores.length
        );

        await saveCodingInterview(
          company,
          difficulty,
          language,
          finalAverage,
          updatedScores,
          getRecommendation(finalAverage)
        );

      }

    } catch (error: any) {

      console.error(error);

      toast.error(
        error?.message ??
        "Failed to review code."
      );

    } finally {

      setLoadingReview(false);

    }

  };

  const nextRound = async () => {

    if (round >= TOTAL_ROUNDS) return;

    const next = round + 1;

    setRound(next);
setReview(null);
    await generateQuestion(next);

  };

  const average =
    scores.length === 0
      ? 0
      : Math.round(
          scores.reduce((a, b) => a + b, 0) /
            scores.length
        );

  const getRecommendation = (
    score: number
  ) => {

    if (score >= 90) return "Strong Hire";

    if (score >= 80) return "Hire";

    if (score >= 70) return "Lean Hire";

    return "No Hire";

  };
  return (
  <DashboardLayout>

    <div className="mx-auto max-w-7xl space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-white">
          AI Coding Interview
        </h1>

        <p className="mt-2 text-zinc-400">
          Practice real multi-round coding interviews inspired by top tech companies.
        </p>

        <p className="mt-4 text-violet-400 font-semibold">
          {company} Interview Track
        </p>

        <p className="text-zinc-400">
          Round {round} of {TOTAL_ROUNDS}
        </p>

      </div>

      {/* Progress */}

      <div className="h-3 rounded-full bg-zinc-800">

        <div
          className="h-3 rounded-full bg-violet-600 transition-all duration-500"
          style={{
            width: `${(round / TOTAL_ROUNDS) * 100}%`,
          }}
        />

      </div>

      {/* Configuration */}

      <div className="grid gap-6 lg:grid-cols-3">

        <div>

          <label className="mb-2 block text-white">
            Company
          </label>

          <select
            value={company}
            disabled={question !== null}
            onChange={(e) =>
              setCompany(e.target.value)
            }
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-3 text-white"
          >
            {companies.map((item) => (
              <option key={item}>
                {item}
              </option>
            ))}
          </select>

        </div>

        <div>

          <label className="mb-2 block text-white">
            Difficulty
          </label>

          <select
            value={difficulty}
            disabled={question !== null}
            onChange={(e) =>
              setDifficulty(e.target.value)
            }
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-3 text-white"
          >
            {difficulties.map((item) => (
              <option key={item}>
                {item}
              </option>
            ))}
          </select>

        </div>

        <LanguageSelector
          language={language}
          
          setLanguage={setLanguage}
        />

      </div>

      {!question && (

        <button
          onClick={() => generateQuestion(round)}
          disabled={loadingQuestion}
          className="rounded-xl bg-violet-600 px-8 py-3 font-semibold text-white hover:bg-violet-700 disabled:opacity-50"
        >

          {loadingQuestion ? (

            <div className="flex items-center gap-2">

              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />

              Generating Interview...

            </div>

          ) : (

            "Start Interview"

          )}

        </button>

      )}

      {question && (

        <>

          <CodingQuestion
            question={question}
          />

          <CodeEditor
            language={language}
            code={code}
            setCode={setCode}
          />

          {!review && (

            <button
              onClick={reviewSolution}
              disabled={loadingReview}
              className="rounded-xl bg-green-600 px-8 py-3 font-semibold text-white hover:bg-green-700 disabled:opacity-50"
            >

              {loadingReview ? (

                <div className="flex items-center gap-2">

                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />

                  Reviewing...

                </div>

              ) : (

                "Review with AI"

              )}

            </button>

          )}

          {review && (

            <>

              <CodeReview
                review={review}
              />
              <div className="rounded-xl border border-violet-700 bg-violet-950/20 p-6">

  <p className="text-zinc-400">
    Round {round} Score
  </p>

  <h2 className="mt-2 text-4xl font-bold text-violet-400">
    {review.overallScore}%
  </h2>

</div>

              {round < TOTAL_ROUNDS ? (

                <button
                  onClick={nextRound}
                  className="rounded-xl bg-violet-600 px-8 py-3 font-semibold text-white hover:bg-violet-700"
                >
                  Continue to Round {round + 1}
                </button>

              ) : (

                <div className="rounded-3xl border border-violet-700 bg-violet-950/20 p-10 text-center">

                  <h2 className="text-3xl font-bold text-white">
                    🎉 Interview Completed
                  </h2>

                  <p className="mt-6 text-zinc-400">
                    Final Average Score
                  </p>

                  <h1 className="mt-4 text-7xl font-bold text-violet-400">
                    {average}%
                  </h1>

                  <div className="mt-8 rounded-2xl border border-zinc-700 bg-zinc-900 p-6">

                    <h3 className="text-2xl font-bold text-violet-400">
                      {getRecommendation(average)}
                    </h3>

                    <p className="mt-2 text-zinc-300">
                      Your interview has been completed successfully and the results have been saved.
                    </p>

                  </div>

                </div>

              )}

            </>

          )}

        </>

      )}

    </div>

  </DashboardLayout>
);

};

export default Coding;