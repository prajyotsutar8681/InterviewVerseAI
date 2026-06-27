import AuthLayout from "@/components/common/AuthLayout";

const Login = () => {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to continue your interview journey."
    >
      <form className="space-y-5">
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
          Login
        </button>
      </form>
    </AuthLayout>
  );
};

export default Login;