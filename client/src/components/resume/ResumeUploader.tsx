import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import { extractResumeText } from "@/services/resume";
import { toast } from "sonner";
import {
  analyzeResume,
  type ResumeAnalysis,
} from "@/services/gemini";

import { saveResumeAnalysis } from "@/services/resumeHistory";

import ResumeResult from "./ResumeResult";

const ResumeUploader = () => {
  const [loading, setLoading] = useState(false);

  

  const [analysis, setAnalysis] =
    useState<ResumeAnalysis | null>(null);

  

  const [jobDescription, setJobDescription] =
    useState("");

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (!acceptedFiles.length) return;

      try {
        setLoading(true);

        setAnalysis(null);

        const file = acceptedFiles[0];

        

        const text = await extractResumeText(file);

        

        const result = await analyzeResume(
          text,
          jobDescription
        );

        await saveResumeAnalysis(
  file.name,
  result
);

setAnalysis(result);

toast.success("Resume analyzed successfully!");
      } catch (error: any) {
  console.error(error);

  toast.error(
    error?.message || "Failed to analyze resume."
  );
}finally {
        setLoading(false);
      }
    },
    [jobDescription]
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

  return (
    <div className="space-y-8">

    <div
  {...getRootProps()}
  className={`${
    loading ? "pointer-events-none opacity-70" : ""
  } cursor-pointer rounded-3xl border-2 border-dashed p-16 text-center transition ${
    isDragActive
      ? "border-violet-500 bg-violet-500/10"
      : "border-zinc-700 bg-zinc-900 hover:border-violet-500"
  }`}
>
        <input {...getInputProps()} />

        <h2 className="text-3xl font-bold text-white">
          Upload Resume
        </h2>

        <p className="mt-4 text-zinc-400">
          Drag & Drop PDF or DOCX
        </p>

       <button
  type="button"
  disabled={loading}
  className="mt-8 rounded-xl bg-violet-600 px-8 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
>
  {loading ? (
    <div className="flex items-center gap-2">
      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      Analyzing...
    </div>
  ) : (
    "Browse Files"
  )}
</button>
      </div>

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

        <h2 className="text-2xl font-bold text-white">
          Job Description (Optional)
        </h2>

        <p className="mt-2 text-zinc-400">
          Paste a job description to compare your resume with a specific role.
        </p>

        <textarea
          value={jobDescription}
          onChange={(e) =>
            setJobDescription(e.target.value)
          }
          placeholder="Paste Job Description..."
          className="mt-6 h-56 w-full rounded-xl border border-zinc-700 bg-zinc-800 p-5 text-white outline-none"
        />

      </div>

      {loading && (
  <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10 text-center">

    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-violet-500 border-t-transparent animate-spin" />

    <h2 className="mt-6 text-2xl font-bold text-white">
      AI is analyzing your resume...
    </h2>

    <p className="mt-3 text-zinc-400">
      Extracting text, checking ATS score, matching keywords and generating recommendations.
    </p>

  </div>
)}

      {analysis && !loading && (
        <ResumeResult result={analysis} />
      )}

    </div>
  );
};

export default ResumeUploader;