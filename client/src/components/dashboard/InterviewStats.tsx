import StatCard from "@/components/common/StatCard";

import {
  Brain,
  Trophy,
  BarChart3,
} from "@/constants/icons";

interface Props {
  total: number;
  average: number;
  highest: number;
}

const InterviewStats = ({
  total,
  average,
  highest,
}: Props) => {
  return (
    <div className="grid gap-6 md:grid-cols-3">

      <StatCard
        title="Interviews"
        value={total}
        icon={<Brain size={28} />}
      />

      <StatCard
        title="Average Score"
        value={`${average}%`}
        icon={<BarChart3 size={28} />}
        delay={0.15}
      />

      <StatCard
        title="Highest Score"
        value={`${highest}%`}
        icon={<Trophy size={28} />}
        delay={0.3}
      />

    </div>
  );
};

export default InterviewStats;