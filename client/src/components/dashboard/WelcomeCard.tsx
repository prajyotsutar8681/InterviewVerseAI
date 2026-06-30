import { useAuth } from "@/context/AuthContext";
import {
  Target,
  Trophy,
  Sparkles,
} from "lucide-react";

const WelcomeCard = () => {
  const { session } = useAuth();

  const email = session?.user?.email ?? "User";

  return (
    <div className="rounded-3xl border border-violet-700 bg-gradient-to-r from-violet-950/30 to-zinc-900 p-8">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-lg font-semibold text-white">
            {email}
          </p>

          <p className="mt-3 max-w-xl leading-7 text-zinc-400">
            Continue your interview preparation.
            Practice coding, improve your resume,
            take AI mock interviews, and monitor
            your overall career readiness from one place.
          </p>

        </div>

        <Sparkles
          size={60}
          className="hidden text-violet-500 lg:block"
        />

      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

          <Target
            className="mb-3 text-violet-400"
            size={28}
          />

          <h3 className="font-semibold text-white">
            Resume
          </h3>

          <p className="mt-2 text-sm text-zinc-400">
            Improve your ATS score.
          </p>

        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

          <Trophy
            className="mb-3 text-green-400"
            size={28}
          />

          <h3 className="font-semibold text-white">
            Interviews
          </h3>

          <p className="mt-2 text-sm text-zinc-400">
            Practice AI mock interviews.
          </p>

        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

          <Sparkles
            className="mb-3 text-cyan-400"
            size={28}
          />

          <h3 className="font-semibold text-white">
            Career Coach
          </h3>

          <p className="mt-2 text-sm text-zinc-400">
            Build your personalized roadmap.
          </p>

        </div>

      </div>

    </div>
  );
};

export default WelcomeCard;