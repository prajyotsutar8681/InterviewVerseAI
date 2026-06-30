const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "Apple",
  "Netflix",
  "Adobe",
  "Oracle",
  "NVIDIA",
  "Uber",
  "Airbnb",
  "Salesforce",
  "LinkedIn",
  "Atlassian",
  "Intel",
  "IBM",
  "Cisco",
  "Goldman Sachs",
  "JPMorgan",
  "Flipkart",
  "Swiggy",
  "Zomato",
  "PhonePe",
  "Razorpay",
  "Paytm",
  "TCS",
  "Infosys",
  "Wipro",
  "Accenture",
  "Capgemini",
];

const Companies = () => {
  return (
    <section className="border-y border-white/10 bg-zinc-950 py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-violet-400">
            Prepare for the Best
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Interview Practice for Top Companies
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Experience company-inspired interview questions,
            coding challenges, and AI-powered feedback based on
            the hiring patterns of leading global organizations.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">

          {companies.map((company) => (

            <div
              key={company}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500/10 hover:shadow-lg hover:shadow-violet-500/20"
            >

              <p className="font-semibold text-zinc-300 transition group-hover:text-white">
                {company}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Companies;