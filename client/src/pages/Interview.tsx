import { useState } from "react";
import { toast } from "sonner";

import DashboardLayout from "@/components/layout/DashboardLayout";
import InterviewSelector from "@/components/interview/InterviewSelector";
import InterviewSetup from "@/components/interview/InterviewSetup";
import InterviewPlayer from "@/components/interview/InterviewPlayer";

import {
  generateInterviewQuestions,
  type InterviewConfig,
  type InterviewQuestion,
} from "@/services/gemini";

const Interview = () => {
  const [selectedType, setSelectedType] = useState("");

  const [config, setConfig] =
    useState<InterviewConfig | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [questions, setQuestions] =
    useState<InterviewQuestion[]>([]);

  const handleStartInterview = async (
    interviewConfig: InterviewConfig
  ) => {
    try {
      setLoading(true);

      setConfig(interviewConfig);

      const generatedQuestions =
        await generateInterviewQuestions(
          interviewConfig
        );

      setQuestions(generatedQuestions);

      toast.success(
        "Interview generated successfully!"
      );
    } catch (error: any) {
      console.error(error);

      toast.error(
        error?.message ||
          "Failed to generate interview questions."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>

      <div className="space-y-8">

        {/* Header */}

        <div>

          <h1 className="text-4xl font-bold text-white">
            AI Interview
          </h1>

          <p className="mt-2 text-zinc-400">
            Practice realistic AI-generated interview
            questions tailored to your target company
            and role.
          </p>

        </div>

        {/* Interview Type */}

        {!selectedType && (
          <div
            className={
              loading
                ? "pointer-events-none opacity-60"
                : ""
            }
          >
            <InterviewSelector
              onSelect={setSelectedType}
            />
          </div>
        )}

        {/* Interview Setup */}

        {selectedType &&
          !config &&
          questions.length === 0 && (
            <div
              className={
                loading
                  ? "pointer-events-none opacity-60"
                  : ""
              }
            >
              <InterviewSetup
                interviewType={selectedType}
                onStart={handleStartInterview}
              />
            </div>
          )}

        {/* Loading */}

        {loading && (

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-violet-600 border-t-transparent animate-spin" />

            <h2 className="mt-8 text-3xl font-bold text-white">
              Generating AI Interview...
            </h2>

            <p className="mt-4 text-zinc-400">
              Our AI is preparing personalized
              interview questions based on your
              selected company, role and difficulty.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-zinc-800 px-5 py-3 text-sm text-zinc-300">

              <div className="h-4 w-4 animate-spin rounded-full border-2 border-violet-500 border-t-transparent" />

              Please wait...

            </div>

          </div>

        )}

        {/* Interview */}

        {!loading &&
          config &&
          questions.length > 0 && (
            <InterviewPlayer
              questions={questions}
              config={config}
            />
          )}

      </div>

    </DashboardLayout>
  );
};

export default Interview;