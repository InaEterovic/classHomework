import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">Welcome Front End Module</h1>
      <div className="flex gap-4">
        <Link to="/effect-hook">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Go to Use Effect Demo
          </button>
        </Link>
        <Link to="/state-hook">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Go to Use State Demo
          </button>
        </Link>
        <Link to="/ref-hook">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Go to Use Ref Demo
          </button>
        </Link>
      </div>
    </div>
  );
};
