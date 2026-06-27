import { Users, Brain, Briefcase, Trophy } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "50K+",
    title: "Students"
  },
  {
    icon: Brain,
    number: "1M+",
    title: "AI Interviews"
  },
  {
    icon: Briefcase,
    number: "250+",
    title: "Companies"
  },
  {
    icon: Trophy,
    number: "94%",
    title: "Success Rate"
  }
];

const Stats = () => {
  return (
    <section className="bg-zinc-950 py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-violet-500"
            >

              <item.icon className="mx-auto mb-5 h-12 w-12 text-violet-400"/>

              <h2 className="text-5xl font-bold text-white">
                {item.number}
              </h2>

              <p className="mt-4 text-zinc-400">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Stats;