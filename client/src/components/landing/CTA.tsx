import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { useAuth } from "@/context/AuthContext";

const CTA = () => {
  const { session } = useAuth();

  return (
    <section className="bg-[#09090B] py-28">

      <div className="mx-auto max-w-6xl px-6">

        <div className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-900/40 via-zinc-900 to-cyan-900/30 p-14 text-center">

          {/* Background Glow */}

          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-violet-600/20 blur-3xl" />

          <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative">

            <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">

              <Sparkles size={16} />

              AI-Powered Interview Preparation

            </div>

            <h2 className="mt-8 text-5xl font-bold text-white">
              Ready to Land Your Dream Job?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              Master technical interviews, optimize your resume,
              solve coding challenges, and receive personalized
              AI career guidance—all from one intelligent platform.
            </p>

            <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

              {/* Smart Button */}

              <Link
                to={session ? "/dashboard" : "/register"}
                className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-10 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-violet-700"
              >
                {session ? "Go to Dashboard" : "Get Started Free"}

                <ArrowRight size={20} />
              </Link>

              <Link
                to={session ? "/dashboard" : "/login"}
                className="rounded-xl border border-zinc-700 bg-zinc-900 px-10 py-4 font-semibold text-white transition-all duration-300 hover:border-cyan-500 hover:bg-zinc-800"
              >
                {session ? "Continue Learning" : "Login"}
              </Link>

            </div>

            <p className="mt-8 text-sm text-zinc-500">
              No credit card required • Powered by Google Gemini AI • Free to use
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTA;