
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-white">404</h1>
      <p className="mt-4 text-lg text-gray-300">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-xl bg-white/10 px-6 py-3 text-white hover:bg-white/20 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
