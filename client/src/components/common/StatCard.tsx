import AnimatedCard from "./AnimatedCard";
import type { ReactNode } from "react";

interface Props {
  title: string;
  value: string | number;
  icon: ReactNode;
  delay?: number;
}

const StatCard = ({
  title,
  value,
  icon,
  delay = 0,
}: Props) => {
  return (
    <AnimatedCard delay={delay}>
      <div className="group rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:shadow-xl hover:shadow-violet-500/20">

        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600 text-white transition group-hover:scale-110">
          {icon}
        </div>

        <p className="text-zinc-400">
          {title}
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          {value}
        </h2>

      </div>
    </AnimatedCard>
  );
};

export default StatCard;