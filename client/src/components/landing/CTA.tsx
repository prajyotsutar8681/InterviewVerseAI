import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#09090B] py-28">

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-white/5 p-16 text-center backdrop-blur-xl">

        <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
          Ready?
        </span>

        <h2 className="mt-8 text-5xl font-bold text-white">
          Your Dream Job Starts Here
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          Practice with AI, improve every day and become interview ready for
          Google, Amazon, Microsoft, TCS, Infosys and more.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <button className="flex items-center justify-center gap-3 rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-700">
            Start Free
            <ArrowRight size={20}/>
          </button>

          <button className="rounded-xl border border-zinc-700 px-8 py-4 font-semibold text-white transition hover:border-cyan-400">
            Watch Demo
          </button>

        </div>

      </div>

    </section>
  );
};

export default CTA;