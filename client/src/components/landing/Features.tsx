import {
  Brain,
  Code2,
  Mic,
  FileText,
  BarChart3,
  Route,
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "AI Mock Interviews",
    description:
      "Practice HR and technical interviews with AI-generated questions and instant feedback.",
  },
  {
    icon: FileText,
    title: "Resume ATS Analyzer",
    description:
      "Upload your resume and receive ATS scoring, keyword analysis, and personalized improvement suggestions.",
  },
  {
    icon: Code2,
    title: "Coding Arena",
    description:
      "Solve company-inspired coding challenges and receive detailed AI-powered code reviews.",
  },
  {
    icon: Brain,
    title: "AI Career Coach",
    description:
      "Generate personalized learning roadmaps, identify skill gaps, and prepare for your dream company.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Track interview scores, coding performance, resume progress, and overall career readiness.",
  },
  {
    icon: Route,
    title: "Career Roadmaps",
    description:
      "Receive structured learning paths, recommended projects, resources, and interview preparation plans.",
  },
];

const Features = () => {
  return (
    <section className="bg-[#09090B] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-violet-400">
            Platform Features
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Everything You Need to Crack Interviews
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-zinc-400">
            InterviewVerse AI combines interview practice,
            resume optimization, coding assessments, analytics,
            and career guidance into one intelligent platform.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="group rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-xl hover:shadow-violet-500/10"
            >

              <feature.icon className="mb-6 h-12 w-12 text-violet-400 transition group-hover:scale-110" />

              <h3 className="mb-4 text-2xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="leading-7 text-zinc-400">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Features;