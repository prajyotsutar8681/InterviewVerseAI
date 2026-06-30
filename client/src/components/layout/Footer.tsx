import {
  Code2,
  Briefcase,
  Mail,
  Globe,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="border-t border-zinc-800 bg-black"
    >
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold text-white">
              InterviewVerse AI
            </h2>

            <p className="mt-5 leading-7 text-zinc-400">
              AI-powered interview preparation platform helping
              students and professionals excel in technical
              interviews, resume optimization, coding assessments,
              career planning, and placement preparation.
            </p>

          </div>

          {/* Platform */}

          <div>

            <h3 className="mb-5 text-xl font-semibold text-white">
              Platform
            </h3>

            <ul className="space-y-3">

              <li>
                <a
                  href="/interview"
                  className="text-zinc-400 transition hover:text-violet-400"
                >
                  AI Mock Interviews
                </a>
              </li>

              <li>
                <a
                  href="/resume"
                  className="text-zinc-400 transition hover:text-violet-400"
                >
                  Resume Analyzer
                </a>
              </li>

              <li>
                <a
                  href="/coding"
                  className="text-zinc-400 transition hover:text-violet-400"
                >
                  Coding Arena
                </a>
              </li>

              <li>
                <a
                  href="/career"
                  className="text-zinc-400 transition hover:text-violet-400"
                >
                  Career Coach
                </a>
              </li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="mb-5 text-xl font-semibold text-white">
              Resources
            </h3>

            <ul className="space-y-3">

              <li>
                <a
                  href="/dashboard"
                  className="text-zinc-400 transition hover:text-violet-400"
                >
                  Dashboard
                </a>
              </li>

              <li>
                <a
                  href="/analytics"
                  className="text-zinc-400 transition hover:text-violet-400"
                >
                  Analytics
                </a>
              </li>

              <li>
                <a
                  href="/career"
                  className="text-zinc-400 transition hover:text-violet-400"
                >
                  Career Roadmap
                </a>
              </li>

              <li>
                <a
                  href="/settings"
                  className="text-zinc-400 transition hover:text-violet-400"
                >
                  Settings
                </a>
              </li>

            </ul>

          </div>

          {/* Connect */}

          <div>

            <h3 className="mb-5 text-xl font-semibold text-white">
              Connect
            </h3>

            <div className="space-y-4">

              <a
                href="https://github.com/prajyotsutar8681"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 transition hover:text-violet-400"
              >
                <Code2 size={18} />
                <span>GitHub</span>
              </a>

              {/* Replace with your LinkedIn URL */}

              <a
                href="https://www.linkedin.com/in/prajyot-sutar-010027334/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 transition hover:text-violet-400"
              >
                <Briefcase size={18} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://prjnew.itsfolio.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-400 transition hover:text-violet-400"
              >
                <Globe size={18} />
                <span>Portfolio</span>
              </a>

              {/* Replace with your email */}

              <a
                href="mailto:your-prajyotsutar8681@example.com"
                className="flex items-center gap-3 text-zinc-400 transition hover:text-violet-400"
              >
                <Mail size={18} />
                <span>Contact</span>
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 md:flex-row">

          <p className="text-center text-sm text-zinc-500">
            © 2026 InterviewVerse AI. All rights reserved.
          </p>

          <p className="text-center text-sm text-zinc-500">
            Built with ❤️ using React • TypeScript • Tailwind CSS • Supabase • Gemini AI
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;