import { Bell } from "lucide-react";

const Topbar = () => {
  return (
    <header className="flex items-center justify-between border-b border-zinc-800 bg-[#09090B] px-8 py-5">

      <h1 className="text-2xl font-bold text-white">
        Dashboard
      </h1>

      <button className="rounded-xl border border-zinc-700 p-3 text-zinc-400 transition hover:border-violet-500 hover:text-white">
        <Bell size={20} />
      </button>

    </header>
  );
};

export default Topbar;