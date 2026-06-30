import {
  CalendarDays,
  UserCircle2,
  LogOut,
  Menu,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "@/context/AuthContext";
import { signOut } from "@/services/auth";

interface TopbarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Topbar = ({
  sidebarOpen,
  setSidebarOpen,
}: TopbarProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const displayName =
    user?.email?.split("@")[0] ?? "Guest";

  const handleLogout = async () => {
    try {
      await signOut();
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-800 bg-[#09090B]/95 backdrop-blur">

      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Left */}
        <div className="flex items-center gap-4">

          {/* Mobile Menu */}
          <button
            className="rounded-lg p-2 hover:bg-zinc-800 lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-6 w-6 text-white" />
          </button>

          <div>

            <h1 className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
              Welcome Back 👋
            </h1>

            <div className="mt-1 hidden items-center gap-2 text-sm text-zinc-400 sm:flex">
              <CalendarDays size={16} />
              <span>{today}</span>
            </div>

          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-3">

          {/* Profile */}
          <div className="hidden items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 md:flex">

            <UserCircle2
              size={36}
              className="text-violet-400"
            />

            <div>

              <p className="font-semibold capitalize text-white">
                {displayName}
              </p>

              <p className="text-xs text-zinc-500">
                InterviewVerse User
              </p>

            </div>

          </div>

          {/* Logout */}

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-xl bg-red-600 px-3 py-2 text-sm text-white transition hover:bg-red-700 sm:px-5 sm:py-3"
          >
            <LogOut size={18} />
            <span className="hidden sm:block">
              Logout
            </span>
          </button>

        </div>

      </div>

    </header>
  );
};

export default Topbar;