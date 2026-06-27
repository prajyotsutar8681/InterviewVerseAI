import {
  Brain,
  Code2,
  Mic,
  FileText,
  BarChart3,
  Camera,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Mock Interviews",
    description: "Practice HR and technical interviews powered by AI.",
  },
  {
    icon: Mic,
    title: "Voice Interaction",
    description: "Talk naturally with the AI interviewer.",
  },
  {
    icon: Code2,
    title: "Coding Challenges",
    description: "Solve real interview coding problems.",
  },
  {
    icon: Camera,
    title: "Confidence Analysis",
    description: "Track eye contact and facial confidence.",
  },
  {
    icon: FileText,
    title: "Resume Analyzer",
    description: "Improve your ATS score with AI suggestions.",
  },
  {
    icon: BarChart3,
    title: "Performance Dashboard",
    description: "Track progress with detailed analytics.",
  },
];

const Features = () => {
  return (
    <section className="bg-[#09090B] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-4 text-center text-5xl font-bold text-white">
          Everything You Need
        </h2>

        <p className="mb-16 text-center text-zinc-400">
          One platform. Complete interview preparation.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-violet-500 hover:bg-white/10"
            >
              <feature.icon className="mb-6 h-12 w-12 text-violet-400" />

              <h3 className="mb-4 text-2xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="text-zinc-400">
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