import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 font-bold text-white">
            IV
          </div>

          <span className="text-xl font-bold text-white">
            InterviewVerse AI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-zinc-300 hover:text-white">
            Features
          </a>

          <a href="#companies" className="text-zinc-300 hover:text-white">
            Companies
          </a>

          <a href="#stats" className="text-zinc-300 hover:text-white">
            Statistics
          </a>

          <a href="#contact" className="text-zinc-300 hover:text-white">
            Contact
          </a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="rounded-xl border border-zinc-700 px-5 py-2 text-white hover:border-violet-500"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-violet-600 px-5 py-2 text-white hover:bg-violet-700"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-7 w-7 text-white" />
          ) : (
            <Menu className="h-7 w-7 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-zinc-800 bg-zinc-950 md:hidden">

          <div className="flex flex-col p-6">

            <a
              href="#features"
              onClick={() => setIsOpen(false)}
              className="py-3 text-zinc-300 hover:text-white"
            >
              Features
            </a>

            <a
              href="#companies"
              onClick={() => setIsOpen(false)}
              className="py-3 text-zinc-300 hover:text-white"
            >
              Companies
            </a>

            <a
              href="#stats"
              onClick={() => setIsOpen(false)}
              className="py-3 text-zinc-300 hover:text-white"
            >
              Statistics
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="py-3 text-zinc-300 hover:text-white"
            >
              Contact
            </a>

            <div className="mt-6 flex flex-col gap-3">

              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="rounded-xl border border-zinc-700 py-3 text-center text-white"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="rounded-xl bg-violet-600 py-3 text-center text-white"
              >
                Get Started
              </Link>

            </div>

          </div>

        </div>
      )}
    </header>
  );
};

export default Navbar;