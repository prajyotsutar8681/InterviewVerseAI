import {
  LayoutDashboard,
  Mic,
  Code2,
  FileText,
  BarChart3,
  LogOut,
  Bot,
  Settings,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { signOut } from "@/services/auth";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate("/login");
  };

  const menu = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
    },
    {
      icon: Mic,
      label: "AI Interview",
    },
    {
      icon: Code2,
      label: "Coding Arena",
    },
    {
      icon: FileText,
      label: "Resume Analyzer",
    },
    {
      icon: Bot,
      label: "Career Coach",
    },
    {
      icon: BarChart3,
      label: "Analytics",
    },
    {
      icon: Settings,
      label: "Settings",
    },
  ];

  return (
    <aside className="flex min-h-screen w-72 flex-col border-r border-zinc-800 bg-[#09090B] p-6">

      {/* Logo */}
      <div>
        <h1 className="mb-10 text-3xl font-bold text-white">
          InterviewVerse
        </h1>
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-3">
        {menu.map((item) => (
          <button
            key={item.label}
            className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="mt-6 flex w-full items-center gap-4 rounded-xl px-4 py-3 text-red-400 transition hover:bg-red-500/10 hover:text-red-300"
      >
        <LogOut size={20} />
        <span>Logout</span>
      </button>
    </aside>
  );
};

export default Sidebar;