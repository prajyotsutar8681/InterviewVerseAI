import DashboardLayout from "@/components/layout/DashboardLayout";

const Resume = () => {
  return (
    <DashboardLayout>
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-10">
        <h1 className="text-4xl font-bold text-white">
          Resume Analyzer
        </h1>

        <p className="mt-4 text-zinc-400">
          Upload your resume to receive AI-powered feedback.
        </p>
      </div>
    </DashboardLayout>
  );
};

export default Resume;