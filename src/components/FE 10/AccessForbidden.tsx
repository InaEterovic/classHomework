import { Link } from "react-router-dom";

const AccessForbidden: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold text-red-700">403</h1>
      <p className="text-xl mt-2">
        Access Forbidden: You don’t have permission to view this page.
      </p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default AccessForbidden;
