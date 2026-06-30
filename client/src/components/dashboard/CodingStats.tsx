interface Props {
  total: number;
  average: number;
  best: number;
}

const CodingStats = ({
  total,
  average,
  best,
}: Props) => {
  const stats = [
    {
      title: "Total Interviews",
      value: total,
    },
    {
      title: "Average Score",
      value: `${average}%`,
    },
    {
      title: "Best Score",
      value: `${best}%`,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">

      {stats.map((item) => (

        <div
          key={item.title}
          className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
        >

          <p className="text-zinc-400">
            {item.title}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-violet-400">
            {item.value}
          </h2>

        </div>

      ))}

    </div>
  );
};

export default CodingStats;