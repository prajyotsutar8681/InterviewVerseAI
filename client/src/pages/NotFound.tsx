import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#09090B] px-6">

      <h1 className="text-8xl font-extrabold text-violet-500">
        404
      </h1>

      <h2 className="mt-6 text-3xl font-bold text-white">
        Page Not Found
      </h2>

      <p className="mt-4 text-zinc-400">
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/dashboard"
        className="mt-8 rounded-xl bg-violet-600 px-8 py-3 text-white hover:bg-violet-700"
      >
        Back to Dashboard
      </Link>

    </div>
  );
};

export default NotFound;