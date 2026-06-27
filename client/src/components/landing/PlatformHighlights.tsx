import {
  BrainCircuit,
  FileText,
  Code2,
  Mic,
  BarChart3,
  Target,
} from "lucide-react";

const highlights = [
  {
    icon: BrainCircuit,
    title: "Gemini AI Interview Engine",
    description:
      "Practice realistic HR and technical interviews powered by Google's Gemini AI.",
  },
  {
    icon: FileText,
    title: "ATS Resume Analyzer",
    description:
      "Upload your resume and receive actionable ATS feedback with keyword suggestions.",
  },
  {
    icon: Code2,
    title: "Coding Practice Arena",
    description:
      "Solve coding problems in a VS Code-like editor with AI-powered feedback.",
  },
  {
    icon: Mic,
    title: "Voice-Based Mock Interviews",
    description:
      "Answer interview questions naturally using your voice for a realistic experience.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Track interview scores, coding progress, and communication improvements over time.",
  },
  {
    icon: Target,
    title: "Personalized Career Roadmap",
    description:
      "Receive AI-generated recommendations tailored to your target role and current skill level.",
  },
];

const PlatformHighlights = () => {
  return (
    <section className="bg-[#09090B] py-28" id="highlights">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            Platform Highlights
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Everything You Need To Prepare Smarter
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
            InterviewVerse AI combines interview preparation, coding practice,
            resume analysis and AI guidance into one complete platform.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500">
                <item.icon className="h-7 w-7 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default PlatformHighlights;