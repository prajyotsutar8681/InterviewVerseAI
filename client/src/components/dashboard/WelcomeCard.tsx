import { useAuth } from "@/context/AuthContext";

const WelcomeCard = () => {
  const { session } = useAuth();

  const email = session?.user?.email ?? "User";

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
      <h1 className="text-4xl font-bold text-white">
        Welcome Back 👋
      </h1>

      <p className="mt-2 text-lg text-violet-400">
        {email}
      </p>

      <p className="mt-5 text-zinc-400">
        Ready to ace your next interview today?
      </p>
    </div>
  );
};

export default WelcomeCard;