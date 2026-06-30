import {
  BrainCircuit,
  Sparkles,
  ShieldCheck,
  GraduationCap,
  BarChart3,
  Rocket,
} from "lucide-react";

const highlights = [
  {
    icon: BrainCircuit,
    title: "AI-Powered Evaluation",
    description:
      "Receive detailed feedback, performance scores, and personalized recommendations powered by Google's Gemini AI.",
  },
  {
    icon: GraduationCap,
    title: "Company-Focused Preparation",
    description:
      "Practice interview questions and coding challenges inspired by leading product and service-based companies.",
  },
  {
    icon: BarChart3,
    title: "Track Your Growth",
    description:
      "Monitor resume scores, coding performance, interview results, and overall career readiness from one dashboard.",
  },
  {
    icon: Sparkles,
    title: "Personalized Career Guidance",
    description:
      "Generate AI-driven learning roadmaps, identify skill gaps, and receive tailored preparation strategies.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Cloud History",
    description:
      "Your interview sessions, resume analyses, and coding results are securely stored for future reference.",
  },
  {
    icon: Rocket,
    title: "Placement Ready Platform",
    description:
      "Everything you need—from resume analysis to coding interviews and career coaching—in one modern platform.",
  },
];

const PlatformHighlights = () => {
  return (
    <section className="bg-[#09090B] py-28" id="highlights">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            Why Choose InterviewVerse AI?
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Prepare Smarter, Perform Better
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
            InterviewVerse AI combines artificial intelligence,
            coding practice, resume optimization, analytics,
            and career guidance into one seamless interview
            preparation platform.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {highlights.map((item) => (

            <div
              key={item.title}
              className="group rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-xl hover:shadow-violet-500/10"
            >

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 transition group-hover:scale-110">

                <item.icon className="h-7 w-7 text-white" />

              </div>

              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
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