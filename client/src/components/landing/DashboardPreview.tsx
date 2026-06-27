const DashboardPreview = () => {
  return (
    <section className="bg-[#09090B] py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Live AI Dashboard
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Experience the Future of Interview Preparation
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400">
            Everything happens in one intelligent dashboard powered by AI.
          </p>

        </div>

        <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

          <div className="grid gap-6 lg:grid-cols-3">

            {/* Left */}

            <div className="space-y-6">

              <div className="rounded-2xl bg-zinc-900 p-6">
                <p className="text-zinc-400">Interview Score</p>

                <h2 className="mt-4 text-5xl font-bold text-green-400">
                  94%
                </h2>
              </div>

              <div className="rounded-2xl bg-zinc-900 p-6">
                <p className="text-zinc-400">
                  Confidence
                </p>

                <div className="mt-4 h-3 rounded-full bg-zinc-700">

                  <div className="h-3 w-[88%] rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />

                </div>

                <p className="mt-3 text-green-400">
                  Excellent
                </p>

              </div>

            </div>

            {/* Center */}

            <div className="rounded-2xl bg-zinc-900 p-6">

              <p className="text-zinc-400">
                AI Interview
              </p>

              <div className="mt-8 rounded-xl bg-zinc-800 p-5">

                <p className="text-violet-400 font-semibold">
                  AI Interviewer
                </p>

                <p className="mt-2 text-white">
                  Tell me about yourself.
                </p>

              </div>

              <div className="mt-5 rounded-xl bg-violet-600/20 p-5">

                <p className="text-cyan-300 font-semibold">
                  Candidate
                </p>

                <p className="mt-2 text-zinc-300">
                  I am a software engineering student passionate about AI and Full Stack Development...
                </p>

              </div>

            </div>

            {/* Right */}

            <div className="space-y-6">

              <div className="rounded-2xl bg-zinc-900 p-6">

                <p className="text-zinc-400">
                  Resume Score
                </p>

                <h2 className="mt-4 text-5xl font-bold text-cyan-400">
                  91
                </h2>

              </div>

              <div className="rounded-2xl bg-zinc-900 p-6">

                <p className="text-zinc-400">
                  AI Feedback
                </p>

                <ul className="mt-5 space-y-3 text-sm">

                  <li className="text-green-400">
                    ✔ Strong communication
                  </li>

                  <li className="text-green-400">
                    ✔ Good confidence
                  </li>

                  <li className="text-yellow-400">
                    ▲ Improve technical depth
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default DashboardPreview;