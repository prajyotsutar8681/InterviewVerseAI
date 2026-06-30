import { useEffect, useState } from "react";

import { getResumeHistory } from "@/services/resumeHistory";

const ResumeHistory = () => {
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    const data = await getResumeHistory();
    setHistory(data);
  };

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Previous Resume Analyses
      </h2>

      {history.length === 0 ? (
        <p className="text-zinc-400">
          No previous analyses.
        </p>
      ) : (
        <div className="space-y-4">

          {history.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-zinc-800 bg-zinc-800 p-5"
            >
              <div className="flex justify-between">

                <div>

                  <h3 className="font-semibold text-white">
                    {item.file_name}
                  </h3>

                  <p className="text-zinc-400">
                    ATS Score: {item.ats_score}%
                  </p>

                </div>

                <span className="text-zinc-500">
                  {new Date(
                    item.created_at
                  ).toLocaleDateString()}
                </span>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default ResumeHistory;