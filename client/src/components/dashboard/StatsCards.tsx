interface Props {
  resume: number;
  interview: number;
  coding: number;
  overall: number;
}

const cards = [
  {
    title: "Resume ATS",
    key: "resume",
    color: "text-blue-400",
  },
  {
    title: "Interview",
    key: "interview",
    color: "text-green-400",
  },
  {
    title: "Coding",
    key: "coding",
    color: "text-violet-400",
  },
  {
    title: "Career Score",
    key: "overall",
    color: "text-yellow-400",
  },
];

const StatsCards = ({
  resume,
  interview,
  coding,
  overall,
}: Props) => {

  const values = {
    resume,
    interview,
    coding,
    overall,
  };

  return (

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => (

        <div
          key={card.title}
          className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8"
        >

          <p className="text-zinc-400">
            {card.title}
          </p>

          <h1
            className={`mt-4 text-5xl font-bold ${card.color}`}
          >
            {
              values[
                card.key as keyof typeof values
              ]
            }
            %
          </h1>

        </div>

      ))}

    </div>

  );
};

export default StatsCards;