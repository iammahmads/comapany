import { Link } from "react-router-dom"; // Optional if you're using React Router

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-yellow-500 px-6">
      <h1 className="text-8xl font-extrabold mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        Page Not Found
      </h2>
      <p className="text-yellow-400 text-center max-w-md mb-6">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Link
        to="/"
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
