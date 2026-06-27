const ProgressCards = () => {
  const stats = [
    {
      title: "Resume Score",
      value: "0%",
    },
    {
      title: "Interviews",
      value: "0",
    },
    {
      title: "Coding Solved",
      value: "0",
    },
    {
      title: "Career Readiness",
      value: "0%",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
        >
          <p className="text-zinc-400">
            {item.title}
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default ProgressCards;