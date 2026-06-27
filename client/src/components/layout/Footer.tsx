const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black py-10">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">

        <div>

          <h2 className="text-2xl font-bold text-white">
            InterviewVerse AI
          </h2>

          <p className="mt-2 text-zinc-500">
            The Complete AI Career Platform.
          </p>

        </div>

        <div className="flex gap-8 text-zinc-400">

          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;