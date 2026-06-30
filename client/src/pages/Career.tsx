import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";

import DashboardLayout from "@/components/layout/DashboardLayout";

import {
  generateCareerRoadmap,
  type CareerRoadmap,
} from "@/services/career";

import { extractResumeText } from "@/services/resume";

import CareerScoreCard from "@/components/career/CareerScoreCard";

import {
  getCareerScore,
  type CareerScore,
} from "@/services/careerScore";

const companies = [
  "Google",
  "Amazon",
  "Microsoft",
  "Meta",
  "Apple",
  "Netflix",
];

const levels = [
  "Beginner",
  "Intermediate",
  "Advanced",
];

const Career = () => {
  const [company, setCompany] = useState("Google");

  const [role, setRole] =
    useState("Software Engineer");

  const [level, setLevel] =
    useState("Intermediate");

  const [resume, setResume] =
    useState("");

  const [resumeFile, setResumeFile] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [roadmap, setRoadmap] =
    useState<CareerRoadmap | null>(null);

  const [careerScore, setCareerScore] =
    useState<CareerScore | null>(null);

  useEffect(() => {
    const loadCareerScore = async () => {
      try {
        const score =
          await getCareerScore();

        setCareerScore(score);
      } catch (error) {
        console.error(error);
      }
    };

    loadCareerScore();
  }, []);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (!acceptedFiles.length) return;

      try {
        const file = acceptedFiles[0];

        setResumeFile(file.name);

        const text =
          await extractResumeText(file);

        setResume(text);

        toast.success(
          "Resume uploaded successfully!"
        );
      } catch (error) {
        console.error(error);

        toast.error(
          "Failed to extract resume."
        );
      }
    },
    []
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
  });

  const generateRoadmap = async () => {
    try {
      setLoading(true);

      const result =
        await generateCareerRoadmap(
          company,
          role,
          level,
          resume
        );

      setRoadmap(result);

      toast.success(
        "Career roadmap generated!"
      );
    } catch (error: any) {
      console.error(error);

      toast.error(
        error?.message ??
          "Failed to generate roadmap."
      );
    } finally {
      setLoading(false);
    }
  };
    return (
    <DashboardLayout>

      <div className="mx-auto max-w-7xl space-y-8">

        {careerScore && (
          <CareerScoreCard score={careerScore} />
        )}

        <div>

          <h1 className="text-4xl font-bold text-white">
            AI Career Coach
          </h1>

          <p className="mt-2 text-zinc-400">
            Get a personalized roadmap to your dream company.
          </p>

        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          <div>

            <label className="mb-2 block text-white">
              Dream Company
            </label>

            <select
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-3 text-white"
            >
              {companies.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

          </div>

          <div>

            <label className="mb-2 block text-white">
              Target Role
            </label>

            <input
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-3 text-white"
            />

          </div>

          <div>

            <label className="mb-2 block text-white">
              Current Level
            </label>

            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-3 text-white"
            >
              {levels.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

          </div>

        </div>

        <div
          {...getRootProps()}
          className={`cursor-pointer rounded-3xl border-2 border-dashed p-12 text-center transition ${
            isDragActive
              ? "border-violet-500 bg-violet-500/10"
              : "border-zinc-700 bg-zinc-900"
          }`}
        >

          <input {...getInputProps()} />

          <h2 className="text-2xl font-bold text-white">
            Upload Resume (Optional)
          </h2>

          <p className="mt-3 text-zinc-400">
            Drag & Drop PDF or DOCX
          </p>

          <button
            type="button"
            className="mt-6 rounded-xl bg-violet-600 px-6 py-3 text-white"
          >
            Browse Resume
          </button>

          {resumeFile && (
            <p className="mt-5 text-green-400">
              ✓ {resumeFile}
            </p>
          )}

        </div>

        <button
          onClick={generateRoadmap}
          disabled={loading}
          className="rounded-xl bg-violet-600 px-8 py-3 font-semibold text-white hover:bg-violet-700 disabled:opacity-50"
        >
          {loading ? (
            <div className="flex items-center gap-2">

              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />

              Generating Personalized Roadmap...

            </div>
          ) : (
            "Generate Personalized Career Roadmap"
          )}
        </button>

        {roadmap && (

          <div className="space-y-8">

            <div className="rounded-3xl border border-violet-700 bg-violet-950/20 p-8 text-center">

              <h2 className="text-3xl font-bold text-white">
                Career Readiness Score
              </h2>

              <h1 className="mt-5 text-7xl font-bold text-violet-400">
                {roadmap.readinessScore}%
              </h1>

            </div>

            <div className="grid gap-8 lg:grid-cols-2">

              <div className="rounded-3xl border border-red-700 bg-red-950/20 p-8">

                <h2 className="mb-5 text-2xl font-bold text-red-400">
                  Missing Skills
                </h2>

                {roadmap.missingSkills.map((skill, i) => (
                  <div
                    key={i}
                    className="mb-3 rounded-xl bg-zinc-900 p-3 text-zinc-300"
                  >
                    {skill}
                  </div>
                ))}

              </div>

              <div className="rounded-3xl border border-green-700 bg-green-950/20 p-8">

                <h2 className="mb-5 text-2xl font-bold text-green-400">
                  Learning Roadmap
                </h2>

                {roadmap.roadmap.map((step, i) => (
                  <div
                    key={i}
                    className="mb-3 rounded-xl bg-zinc-900 p-3 text-zinc-300"
                  >
                    {step}
                  </div>
                ))}

              </div>

            </div>

            <div className="grid gap-8 lg:grid-cols-3">

              <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

                <h2 className="mb-5 text-xl font-bold text-white">
                  Recommended Projects
                </h2>

                {roadmap.projects.map((item, i) => (
                  <div key={i} className="mb-3 text-zinc-300">
                    • {item}
                  </div>
                ))}

              </div>

              <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

                <h2 className="mb-5 text-xl font-bold text-white">
                  Learning Resources
                </h2>

                {roadmap.resources.map((item, i) => (
                  <div key={i} className="mb-3 text-zinc-300">
                    • {item}
                  </div>
                ))}

              </div>

              <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

                <h2 className="mb-5 text-xl font-bold text-white">
                  Interview Tips
                </h2>

                {roadmap.interviewTips.map((item, i) => (
                  <div key={i} className="mb-3 text-zinc-300">
                    • {item}
                  </div>
                ))}

              </div>

            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

              <h2 className="mb-5 text-2xl font-bold text-white">
                AI Summary
              </h2>

              <p className="leading-8 text-zinc-300">
                {roadmap.summary}
              </p>

            </div>

          </div>

        )}

      </div>

    </DashboardLayout>
  );
};

export default Career;