import { useEffect, useState } from "react";
import { getCodingHistory } from "@/services/codingHistory";

interface HistoryItem {
  id: string;
  company: string;
  difficulty: string;
  language: string;
  final_score: number;
  recommendation: string;
  created_at: string;
}

const CodingHistory = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const data = await getCodingHistory();
      setHistory(data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <p className="text-zinc-400">Loading interview history...</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Coding Interview History
      </h2>

      {history.length === 0 ? (
        <p className="text-zinc-400">
          No coding interviews completed yet.
        </p>
      ) : (
        <div className="space-y-4">

          {history.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-zinc-700 bg-zinc-800 p-5"
            >
              <div className="flex items-center justify-between">

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.company}
                  </h3>

                  <p className="mt-1 text-zinc-400">
                    {item.difficulty} • {item.language}
                  </p>

                  <p className="mt-2 text-sm text-zinc-500">
                    {new Date(item.created_at).toLocaleString()}
                  </p>
                </div>

                <div className="text-right">

                  <h2 className="text-4xl font-bold text-violet-400">
                    {item.final_score}%
                  </h2>

                  <p className="mt-2 text-zinc-300">
                    {item.recommendation}
                  </p>

                </div>

              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default CodingHistory;