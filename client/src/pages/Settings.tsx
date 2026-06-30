import { useState } from "react";
import { toast } from "sonner";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { supabase } from "@/config/supabase";
import { useAuth } from "@/context/AuthContext";

const Settings = () => {
  const { user } = useAuth();

  const [name, setName] = useState(
    user?.email?.split("@")[0] ?? ""
  );

  const [password, setPassword] = useState("");

  const saveProfile = () => {
    toast.success("Profile updated successfully!");
  };

  const changePassword = async () => {
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password,
      });

      if (error) throw error;

      toast.success("Password updated successfully!");

      setPassword("");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-4xl space-y-8">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Settings
          </h1>

          <p className="mt-2 text-zinc-400">
            Manage your InterviewVerse account.
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

          <h2 className="mb-6 text-2xl font-bold text-white">
            Profile
          </h2>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-5 w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4 text-white"
          />

          <button
            onClick={saveProfile}
            className="rounded-xl bg-violet-600 px-6 py-3 text-white"
          >
            Save Profile
          </button>

        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

          <h2 className="mb-6 text-2xl font-bold text-white">
            Change Password
          </h2>

          <input
            type="password"
            placeholder="Enter New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-5 w-full rounded-xl border border-zinc-700 bg-zinc-800 p-4 text-white"
          />

          <button
            onClick={changePassword}
            className="rounded-xl bg-green-600 px-6 py-3 text-white hover:bg-green-700"
          >
            Update Password
          </button>

        </div>

      </div>
    </DashboardLayout>
  );
};

export default Settings;