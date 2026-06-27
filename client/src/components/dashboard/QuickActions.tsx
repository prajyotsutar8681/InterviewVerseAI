import { useNavigate } from "react-router-dom";
import {
  Mic,
  FileText,
  Code2,
  BarChart3,
} from "lucide-react";

const QuickActions = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "AI Interview",
      icon: Mic,
      path: "/interview",
    },
    {
      title: "Resume Analyzer",
      icon: FileText,
      path: "/resume",
    },
    {
      title: "Coding Arena",
      icon: Code2,
      path: "/coding",
    },
    {
      title: "Analytics",
      icon: BarChart3,
      path: "/analytics",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <button
          key={card.title}
          onClick={() => navigate(card.path)}
          className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-left transition hover:border-violet-500 hover:-translate-y-1"
        >
          <card.icon
            size={34}
            className="mb-5 text-violet-400"
          />

          <h2 className="text-xl font-semibold text-white">
            {card.title}
          </h2>

          <p className="mt-2 text-zinc-400">
            Open Module
          </p>
        </button>
      ))}
    </div>
  );
};

export default QuickActions;