import AuthLayout from "@/components/common/AuthLayout";

const Register = () => {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start preparing for interviews with AI."
    >
      <form className="space-y-5">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 text-white outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 text-white outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 text-white outline-none"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-violet-600 py-4 font-semibold text-white transition hover:bg-violet-700"
        >
          Create Account
        </button>
      </form>
    </AuthLayout>
  );
};

export default Register;