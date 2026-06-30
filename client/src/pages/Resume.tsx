import DashboardLayout from "@/components/layout/DashboardLayout";

import ResumeUploader from "@/components/resume/ResumeUploader";
import ResumeHistory from "@/components/resume/ResumeHistory";

const Resume = () => {
  return (
    <DashboardLayout>

      <div className="space-y-8">

        <div>

          <h1 className="text-4xl font-bold text-white">
            Resume Analyzer
          </h1>

          <p className="mt-2 text-zinc-400">
            Upload your resume and receive AI-powered ATS feedback.
          </p>

        </div>

        <ResumeUploader />

        <ResumeHistory />

      </div>

    </DashboardLayout>
  );
};

export default Resume;