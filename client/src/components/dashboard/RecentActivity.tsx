const RecentActivity = () => {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
      <h2 className="text-2xl font-bold text-white">
        Recent Activity
      </h2>

      <div className="mt-8 rounded-xl border border-dashed border-zinc-700 p-10 text-center">
        <p className="text-zinc-400">
          No activity yet.

          Start your first AI Interview to see progress here.
        </p>
      </div>
    </div>
  );
};

export default RecentActivity;