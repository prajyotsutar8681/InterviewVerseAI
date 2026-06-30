interface Props {
  average: number;
}

const AIRoadmap = ({ average }: Props) => {
  let roadmap: string[] = [];

  if (average >= 90) {
    roadmap = [
      "Master System Design",
      "Practice Low-Level Design",
      "Solve Advanced Dynamic Programming",
      "Prepare for Behavioral Interviews",
    ];
  } else if (average >= 80) {
    roadmap = [
      "Practice Dynamic Programming",
      "Master Graph Algorithms",
      "Improve Greedy Algorithms",
      "Take More Mock Interviews",
    ];
  } else if (average >= 70) {
    roadmap = [
      "Strengthen Arrays & Strings",
      "Practice Binary Trees",
      "Learn Recursion & Backtracking",
      "Master Sliding Window",
    ];
  } else {
    roadmap = [
      "Arrays",
      "Strings",
      "Hash Maps",
      "Sorting & Searching",
    ];
  }

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-6 text-2xl font-bold text-white">
        AI Learning Roadmap
      </h2>

      <div className="space-y-4">

        {roadmap.map((item) => (
          <div
            key={item}
            className="rounded-xl border border-zinc-700 bg-zinc-800 p-4 text-white"
          >
            ✅ {item}
          </div>
        ))}

      </div>

    </div>
  );
};

export default AIRoadmap;