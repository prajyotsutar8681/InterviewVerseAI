interface Props {
  score: number;
}

const CareerTips = ({ score }: Props) => {

  let tips: string[] = [];

  if (score >= 90) {

    tips = [
      "Start applying for FAANG companies.",
      "Practice System Design.",
      "Take mock HR interviews.",
    ];

  } else if (score >= 80) {

    tips = [
      "Improve Dynamic Programming.",
      "Practice behavioral questions.",
      "Solve 3 coding questions daily.",
    ];

  } else {

    tips = [
      "Strengthen DSA fundamentals.",
      "Improve resume ATS score.",
      "Take more AI mock interviews.",
    ];

  }

  return (

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-6 text-2xl font-bold text-white">
        AI Career Suggestions
      </h2>

      <div className="space-y-4">

        {tips.map((tip) => (

          <div
            key={tip}
            className="rounded-xl bg-zinc-800 p-4 text-white"
          >
            🚀 {tip}
          </div>

        ))}

      </div>

    </div>

  );

};

export default CareerTips;