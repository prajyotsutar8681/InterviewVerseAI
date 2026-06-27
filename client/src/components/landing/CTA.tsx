import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-[#09090B] py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-900/30 to-cyan-900/20 p-12 text-center">

          <h2 className="text-4xl font-bold text-white">
            Ready to Ace Your Next Interview?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
            Build confidence with AI-powered mock interviews, resume analysis,
            coding practice, and personalized career guidance—all in one place.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/register"
              className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-700"
            >
              Get Started
              <ArrowRight size={20} />
            </Link>

            <Link
              to="/login"
              className="rounded-xl border border-zinc-700 px-8 py-4 font-semibold text-white transition hover:border-cyan-500"
            >
              Login
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;