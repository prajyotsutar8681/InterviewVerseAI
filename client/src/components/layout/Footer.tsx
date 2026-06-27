const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">

        <div>
          <h2 className="text-2xl font-bold text-white">
            InterviewVerse AI
          </h2>

          <p className="mt-2 text-zinc-500">
            AI-powered career preparation platform.
          </p>
        </div>

        <div className="flex gap-8 text-zinc-400">

          <a href="#">Features</a>

          <a href="#">About</a>

          <a href="#">Contact</a>

          <a href="#">Privacy</a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;