import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#09090B] pt-24">
      {/* Background Glow */}
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Side */}
        <div>

          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            🚀 AI Powered Interview Preparation
          </span>

          <h1 className="mt-8 text-6xl font-extrabold leading-tight text-white lg:text-7xl">
            Master Every
            <br />
            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              Interview
            </span>
            <br />
            with AI
          </h1>

          <p className="mt-8 max-w-xl text-lg text-zinc-400">
            Practice real HR and technical interviews, solve coding challenges,
            analyze confidence, improve your resume and receive AI feedback —
            all in one platform.
          </p>

          <div className="mt-10 flex gap-4">

            <button
              onClick={() => navigate("/register")}
              className="rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-700"
            >
              Start Free
            </button>

            <button
              onClick={() => navigate("/login")}
              className="rounded-xl border border-zinc-700 px-8 py-4 font-semibold text-white transition hover:border-violet-500"
            >
              Watch Demo
            </button>

          </div>

        </div>

        {/* Right Side */}
        <div className="relative">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">

            <h2 className="mb-6 text-xl font-bold text-white">
              Live Interview Dashboard
            </h2>

            <div className="space-y-4">

              <div className="rounded-xl bg-zinc-800 p-4">
                🎤 HR Interview
              </div>

              <div className="rounded-xl bg-zinc-800 p-4">
                💻 Coding Challenge
              </div>

              <div className="rounded-xl bg-zinc-800 p-4">
                📄 Resume Analysis
              </div>

              <div className="rounded-xl bg-zinc-800 p-4">
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