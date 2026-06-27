import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import PasswordInput from "./PasswordInput";
import AuthButton from "./AuthButton";

import { signUp } from "@/services/auth";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    const { error } = await signUp(email, password);

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setSuccess(
      "Registration successful! Please check your email to verify your account."
    );

    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };

  return (
    <form
      onSubmit={handleRegister}
      className="space-y-5"
    >
      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 text-white outline-none focus:border-violet-500"
      />

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
        <p className="text-red-500 text-sm">
          {error}
        </p>
      )}

      {success && (
        <p className="text-green-500 text-sm">
          {success}
        </p>
      )}

      <AuthButton
        text="Create Account"
        loading={loading}
      />

      <p className="text-center text-zinc-400">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-violet-400 hover:underline"
        >
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;