import {
  CalendarDays,
  UserCircle2,
  LogOut,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "@/context/AuthContext";
import { signOut } from "@/services/auth";

const Topbar = () => {
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
    await signOut();
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-zinc-800 bg-[#09090B]/95 px-8 py-5 backdrop-blur">

      {/* Left */}

      <div>

        <h1 className="text-3xl font-bold text-white">
          Welcome Back 👋
        </h1>

        <div className="mt-2 flex items-center gap-2 text-sm text-zinc-400">

          <CalendarDays size={16} />

          <span>{today}</span>

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        {/* Profile */}

        <div className="flex items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3">

          <UserCircle2
            size={38}
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
          className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-white transition hover:bg-red-700"
        >

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </header>
  );
};

export default Topbar;