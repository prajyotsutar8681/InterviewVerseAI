import {
  LayoutDashboard,
  Mic,
  Code2,
  FileText,
  BarChart3,
  LogOut,
  Bot,
  Settings,
  X,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

import { signOut } from "@/services/auth";

interface SidebarProps {
  closeSidebar: () => void;
}

const Sidebar = ({ closeSidebar }: SidebarProps) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut();

      closeSidebar();

      navigate("/login");

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const menu = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: Mic,
      label: "AI Interview",
      path: "/interview",
    },
    {
      icon: Code2,
      label: "Coding Arena",
      path: "/coding",
    },
    {
      icon: FileText,
      label: "Resume Analyzer",
      path: "/resume",
    },
    {
      icon: Bot,
      label: "Career Coach",
      path: "/career",
    },
    {
      icon: BarChart3,
      label: "Analytics",
      path: "/analytics",
    },
    {
      icon: Settings,
      label: "Settings",
      path: "/settings",
    },
  ];

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-zinc-800 bg-[#09090B] px-6 py-8">

      {/* Mobile Close Button */}

      <div className="mb-4 flex justify-end lg:hidden">
        <button
          onClick={closeSidebar}
          className="rounded-lg p-2 hover:bg-zinc-800"
        >
          <X className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Logo */}

      <div className="mb-10">

        <h1 className="text-3xl font-extrabold tracking-wide text-white">
          InterviewVerse
        </h1>

        <p className="mt-2 text-sm text-zinc-500">
          AI Interview Platform
        </p>

      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2">

        {menu.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            onClick={closeSidebar}
            className={({ isActive }) =>
              `flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-200 ${
                isActive
                  ? "bg-violet-600 text-white shadow-lg"
                  : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
              }`
            }
          >
            <item.icon size={20} />

            <span className="font-medium">
              {item.label}
            </span>

          </NavLink>
        ))}

      </nav>

      {/* Logout */}

      <button
        onClick={handleLogout}
        className="mt-6 flex items-center gap-4 rounded-xl border border-red-500/20 px-4 py-3 text-red-400 transition hover:bg-red-500/10 hover:text-red-300"
      >
        <LogOut size={20} />

        <span className="font-medium">
          Logout
        </span>

      </button>

    </aside>
  );
};

export default Sidebar;