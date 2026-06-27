import type { ReactNode } from "react";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const AuthLayout = ({
  title,
  subtitle,
  children,
}: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-[#09090B] flex">

      {/* Left */}

      <div className="hidden lg:flex w-1/2 items-center justify-center relative overflow-hidden">

        <div className="absolute h-[450px] w-[450px] rounded-full bg-violet-600/20 blur-[140px]" />

        <div className="relative z-10 max-w-md">

          <h1 className="text-6xl font-bold text-white">
            InterviewVerse AI
          </h1>

          <p className="mt-8 text-zinc-400 text-lg">
            Practice interviews with AI and land your dream job.
          </p>

        </div>

      </div>

      {/* Right */}

      <div className="flex flex-1 items-center justify-center px-8">

        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

          <h2 className="text-4xl font-bold text-white">
            {title}
          </h2>

          <p className="mt-3 text-zinc-400">
            {subtitle}
          </p>

          <div className="mt-10">
            {children}
          </div>

        </div>

      </div>

    </div>
  );
};

export default AuthLayout;