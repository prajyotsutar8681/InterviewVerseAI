import { Briefcase, Brain, Code2, Building2 } from "lucide-react";

interface InterviewSelectorProps {
  onSelect: (type: string) => void;
}

const interviewTypes = [
  {
    id: "hr",
    title: "HR Interview",
    description: "Communication, personality and HR questions.",
    icon: Briefcase,
  },
  {
    id: "technical",
    title: "Technical Interview",
    description: "Programming and technical concepts.",
    icon: Code2,
  },
  {
    id: "behavioral",
    title: "Behavioral Interview",
    description: "Leadership and situational questions.",
    icon: Brain,
  },
  {
    id: "company",
    title: "Company Specific",
    description: "Interview questions based on a company.",
    icon: Building2,
  },
];

const InterviewSelector = ({ onSelect }: InterviewSelectorProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {interviewTypes.map((type) => (
        <button
          key={type.id}
          onClick={() => onSelect(type.id)}
          className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-left transition hover:border-violet-500 hover:scale-[1.02]"
        >
          <type.icon className="mb-4 text-violet-400" size={36} />

          <h2 className="text-2xl font-bold text-white">
            {type.title}
          </h2>

          <p className="mt-2 text-zinc-400">
            {type.description}
          </p>
        </button>
      ))}
    </div>
  );
};

export default InterviewSelector;