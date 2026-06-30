import { useState } from "react";

interface InterviewSetupProps {
  interviewType: string;
  onStart: (config: {
    type: string;
    company: string;
    difficulty: string;
    questions: number;
  }) => void;
}

const InterviewSetup = ({
  interviewType,
  onStart,
}: InterviewSetupProps) => {
  const [company, setCompany] = useState("");

  const [difficulty, setDifficulty] = useState("Medium");

  const [questions, setQuestions] = useState(5);

  const popularCompanies = [
    "Google",
    "Amazon",
    "Microsoft",
    "Apple",
    "Meta",
    "Netflix",
    "OpenAI",
    "NVIDIA",
    "TCS",
    "Infosys",
    "Accenture",
    "Capgemini",
    "Wipro",
    "Cognizant",
  ];

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
      <h2 className="text-3xl font-bold text-white">
        Interview Setup
      </h2>

      <p className="mt-2 text-zinc-400">
        Configure your AI interview.
      </p>

      <div className="mt-8 space-y-6">

        {/* Company */}

        <div>
          <label className="mb-2 block text-zinc-300">
            Company
          </label>

          <input
            value={company}
            onChange={(e) =>
              setCompany(e.target.value)
            }
            list="companies"
            placeholder="Type any company..."
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-5 py-4 text-white"
          />

          <datalist id="companies">
            {popularCompanies.map((item) => (
              <option
                key={item}
                value={item}
              />
            ))}
          </datalist>
        </div>

        {/* Difficulty */}

        <div>
          <label className="mb-2 block text-zinc-300">
            Difficulty
          </label>

          <select
            value={difficulty}
            onChange={(e) =>
              setDifficulty(e.target.value)
            }
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-5 py-4 text-white"
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        {/* Questions */}

        <div>
          <label className="mb-2 block text-zinc-300">
            Number of Questions
          </label>

          <select
            value={questions}
            onChange={(e) =>
              setQuestions(Number(e.target.value))
            }
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-5 py-4 text-white"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>

        <button
          disabled={!company.trim()}
          onClick={() =>
            onStart({
              type: interviewType,
              company,
              difficulty,
              questions,
            })
          }
          className="w-full rounded-xl bg-violet-600 py-4 font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:bg-zinc-700"
        >
          Start Interview
        </button>
      </div>
    </div>
  );
};

export default InterviewSetup;