import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 font-bold text-white">
            IV
          </div>

          <span className="text-xl font-bold text-white">
            InterviewVerse AI
          </span>
        </div>

        <nav className="hidden gap-8 md:flex">
          <a href="#" className="text-zinc-300 hover:text-white">Features</a>
          <a href="#" className="text-zinc-300 hover:text-white">Companies</a>
          <a href="#" className="text-zinc-300 hover:text-white">Pricing</a>
          <a href="#" className="text-zinc-300 hover:text-white">Contact</a>
        </nav>

        <div className="hidden gap-3 md:flex">
          <button className="rounded-xl border border-zinc-700 px-5 py-2 text-white transition hover:border-violet-500">
            Login
          </button>

          <button className="rounded-xl bg-violet-600 px-5 py-2 text-white transition hover:bg-violet-700">
            Get Started
          </button>
        </div>

        <button className="md:hidden">
          <Menu className="text-white" />
        </button>

      </div>
    </header>
  );
};

export default Navbar;