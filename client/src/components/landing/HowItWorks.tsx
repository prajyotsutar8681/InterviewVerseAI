import { Brain, Mic, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Brain,
    title: "Choose Your Interview",
    description:
      "Select HR, Technical, Company-specific or Coding interviews based on your goals.",
  },
  {
    icon: Mic,
    title: "Talk With AI",
    description:
      "Answer realistic questions using voice or text while the AI evaluates your responses.",
  },
  {
    icon: BarChart3,
    title: "Get Detailed Feedback",
    description:
      "Receive ATS score, communication score, confidence analysis and personalized improvement tips.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-zinc-950 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            Simple Process
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            How InterviewVerse Works
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Prepare for interviews in just three simple steps with
            personalized AI guidance.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500">
                <step.icon className="h-8 w-8 text-white" />
              </div>

              <span className="text-sm font-semibold text-violet-400">
                Step {index + 1}
              </span>

              <h3 className="mt-3 text-2xl font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-4 text-zinc-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;