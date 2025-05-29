import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">Welcome Front End Module</h1>
      <div className="flex gap-4">
        <Link to="/controlled-form">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Controlled Form{" "}
          </button>
        </Link>
        <Link to="/rhf">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            RHF
          </button>
        </Link>
        <Link to="/contact">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Contact Form
          </button>
        </Link>
      </div>
    </div>
  );
};
