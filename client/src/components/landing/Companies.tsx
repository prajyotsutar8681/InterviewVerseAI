const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "TCS",
  "Infosys",
  "Accenture",
];

const Companies = () => {
  return (
    <section className="border-y border-white/10 bg-zinc-950 py-16">
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-10 text-center text-zinc-400 uppercase tracking-[0.3em] text-sm">
          Practice for Companies Like
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">

          {companies.map((company) => (
            <div
              key={company}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-lg font-semibold text-zinc-300 transition duration-300 hover:border-violet-500 hover:bg-violet-500/10 hover:text-white"
            >
              {company}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Companies;