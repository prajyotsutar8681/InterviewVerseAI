import type { CodingQuestion as CodingQuestionType } from "@/services/coding";

interface Props {
  question: CodingQuestionType;
}

const CodingQuestion = ({ question }: Props) => {
  return (
    <div className="space-y-6 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <div className="flex items-center justify-between">

        <h2 className="text-3xl font-bold text-white">
          {question.title}
        </h2>

        <span
          className={`rounded-full px-4 py-2 text-sm font-semibold ${
            question.difficulty === "Easy"
              ? "bg-green-600 text-white"
              : question.difficulty === "Medium"
              ? "bg-yellow-500 text-black"
              : "bg-red-600 text-white"
          }`}
        >
          {question.difficulty}
        </span>

      </div>

      <div className="rounded-xl bg-zinc-800 p-4">

        <p className="text-sm uppercase tracking-wide text-zinc-400">
          Company
        </p>

        <h3 className="mt-2 text-xl font-semibold text-violet-400">
          {question.company}
        </h3>

      </div>

      <div>

        <h3 className="mb-3 text-xl font-bold text-white">
          Problem Statement
        </h3>

        <p className="whitespace-pre-wrap leading-8 text-zinc-300">
          {question.description}
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-xl bg-zinc-800 p-5">

          <h3 className="mb-3 text-lg font-bold text-green-400">
            Example Input
          </h3>

          <pre className="whitespace-pre-wrap text-zinc-300">
            {question.input}
          </pre>

        </div>

        <div className="rounded-xl bg-zinc-800 p-5">

          <h3 className="mb-3 text-lg font-bold text-blue-400">
            Expected Output
          </h3>

          <pre className="whitespace-pre-wrap text-zinc-300">
            {question.output}
          </pre>

        </div>

      </div>

      <div>

        <h3 className="mb-4 text-xl font-bold text-white">
          Constraints
        </h3>

        <ul className="space-y-3">

          {question.constraints.map((constraint, index) => (
            <li
              key={index}
              className="rounded-xl bg-zinc-800 p-4 text-zinc-300"
            >
              • {constraint}
            </li>
          ))}

        </ul>

      </div>

      <div>

        <h3 className="mb-4 text-xl font-bold text-white">
          Hints
        </h3>

        <ul className="space-y-3">

          {question.hints.map((hint, index) => (
            <li
              key={index}
              className="rounded-xl border border-violet-700 bg-violet-900/20 p-4 text-zinc-300"
            >
              💡 {hint}
            </li>
          ))}

        </ul>

      </div>

    </div>
  );
};

export default CodingQuestion;