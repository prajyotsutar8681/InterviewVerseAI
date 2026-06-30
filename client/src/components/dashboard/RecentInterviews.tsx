import AnimatedCard from "@/components/common/AnimatedCard";

interface Props {
  interviews: any[];
}

const RecentInterviews = ({
  interviews,
}: Props) => {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Recent Interviews
      </h2>

      {interviews.length === 0 ? (
        <p className="text-zinc-400">
          No interviews yet.
        </p>
      ) : (
        <div className="space-y-4">

          {interviews.map((item, index) => (
            <AnimatedCard
              key={item.id}
              delay={index * 0.1}
            >
              <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-800/40 p-4 transition hover:border-violet-600">

                <div>

                  <h3 className="font-semibold text-white">
                    {item.company}
                  </h3>

                  <p className="text-sm capitalize text-zinc-400">
                    {item.interview_type}
                  </p>

                </div>

                <div className="rounded-full bg-violet-600 px-4 py-2 font-bold text-white">
                  {item.overall_score}%
                </div>

              </div>
            </AnimatedCard>
          ))}

        </div>
      )}

    </div>
  );
};

export default RecentInterviews;