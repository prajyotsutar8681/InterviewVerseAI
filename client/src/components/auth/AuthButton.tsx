interface AuthButtonProps {
  text: string;
  loading?: boolean;
}

const AuthButton = ({
  text,
  loading = false,
}: AuthButtonProps) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full rounded-xl bg-violet-600 py-4 font-semibold text-white transition hover:bg-violet-700 disabled:opacity-50"
    >
      {loading ? "Please wait..." : text}
    </button>
  );
};

export default AuthButton;
