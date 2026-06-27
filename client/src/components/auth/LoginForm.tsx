import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import PasswordInput from "./PasswordInput";
import AuthButton from "./AuthButton";

import { signIn } from "@/services/auth";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const { error } = await signIn(email, password);

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    navigate("/dashboard");
  };

  return (
    <form
      onSubmit={handleLogin}
      className="space-y-5"
    >
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 text-white outline-none focus:border-violet-500"
      />

      <PasswordInput
        value={password}
        onChange={setPassword}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}

      <AuthButton
        text="Login"
        loading={loading}
      />

      <p className="text-center text-zinc-400">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-violet-400 hover:underline"
        >
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;