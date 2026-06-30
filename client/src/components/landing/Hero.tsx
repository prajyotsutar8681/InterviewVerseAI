import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#09090B] pt-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-10 h-56 w-56 rounded-full bg-violet-600/20 blur-[100px] sm:left-20 sm:top-20 sm:h-72 sm:w-72 sm:blur-[120px]" />
      <div className="absolute bottom-10 right-0 h-56 w-56 rounded-full bg-cyan-500/20 blur-[100px] sm:bottom-20 sm:right-20 sm:h-72 sm:w-72 sm:blur-[120px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-10 lg:grid-cols-2">

        {/* Left Side */}
        <div>

          <span className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-xs text-violet-300 sm:text-sm">
            🚀 AI Powered Interview Preparation
          </span>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
            Master Every
            <br />
            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              Interview
            </span>
            <br />
            with AI
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
            Practice real HR and technical interviews, solve coding challenges,
            analyze confidence, improve your resume and receive AI-powered
            feedback — all in one platform.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <button
              onClick={() => navigate("/register")}
              className="w-full rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-700 sm:w-auto"
            >
              Start Free
            </button>

            <button
              onClick={() => navigate("/login")}
              className="w-full rounded-xl border border-zinc-700 px-8 py-4 font-semibold text-white transition hover:border-violet-500 sm:w-auto"
            >
              Watch Demo
            </button>

          </div>

        </div>

        {/* Right Side */}
        <div className="relative">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl sm:p-8">

            <h2 className="mb-6 text-lg font-bold text-white sm:text-xl">
              Live Interview Dashboard
            </h2>

            <div className="space-y-4">

              <div className="rounded-xl bg-zinc-800 p-3 text-sm text-white sm:p-4 sm:text-base">
                🎤 HR Interview
              </div>

              <div className="rounded-xl bg-zinc-800 p-3 text-sm text-white sm:p-4 sm:text-base">
                💻 Coding Challenge
              </div>

              <div className="rounded-xl bg-zinc-800 p-3 text-sm text-white sm:p-4 sm:text-base">
                📄 Resume Analysis
              </div>

              <div className="rounded-xl bg-zinc-800 p-3 text-sm text-white sm:p-4 sm:text-base">
                📈 AI Score : 94%
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;