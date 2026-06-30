import { Link } from "react-router-dom";
import AnimatedCard from "@/components/common/AnimatedCard";

const actions = [
  {
    title: "AI Interview",
    description: "Practice interviews with AI.",
    link: "/interview",
    color: "bg-violet-600",
  },
  {
    title: "Resume Analyzer",
    description: "Improve your ATS score.",
    link: "/resume",
    color: "bg-blue-600",
  },
  {
    title: "Coding Arena",
    description: "Solve coding challenges.",
    link: "/coding",
    color: "bg-green-600",
  },
];

const QuickActions = () => {
  return (
    <div>

      <h2 className="mb-6 text-2xl font-bold text-white">
        Quick Actions
      </h2>

      <div className="grid gap-6 md:grid-cols-3">

        {actions.map((action, index) => (
          <AnimatedCard
            key={action.title}
            delay={index * 0.2}
          >
            <Link
              to={action.link}
              className="block rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:shadow-xl hover:shadow-violet-500/20"
            >

              <div
                className={`mb-4 inline-block rounded-xl px-4 py-2 font-semibold text-white ${action.color}`}
              >
                {action.title}
              </div>

              <p className="text-zinc-400">
                {action.description}
              </p>

            </Link>
          </AnimatedCard>
        ))}

      </div>

    </div>
  );
};

export default QuickActions;