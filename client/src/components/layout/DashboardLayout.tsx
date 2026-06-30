import { useState } from "react";
import type { ReactNode } from "react";

import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({
  children,
}: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090B] lg:flex">

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}

      <div
        className={`fixed left-0 top-0 z-50 h-full transform transition-transform duration-300 lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar closeSidebar={() => setSidebarOpen(false)} />
      </div>

      {/* Main Content */}

      <div className="flex min-h-screen flex-1 flex-col">

        <Topbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;