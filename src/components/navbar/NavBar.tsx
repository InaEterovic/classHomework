import { useNavigate } from "react-router-dom";
import { useTheme } from "../FE 13/context/ThemeContext.tsx";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  const onSwitchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav
      className={` w-full p-4 flex justify-between ${
        theme === "dark" ? "bg-zinc-800" : "bg-gray-200"
      }`}
    >
      <span onClick={() => navigate("/")} className="cursor-pointer">
        Front End Module
      </span>
      <button
        className="bg-blue-500 text-amber-50 p-2 rounded-sm"
        onClick={onSwitchTheme}
      >
        Switch to {theme === "light" ? "dark" : "light"} mode
      </button>
    </nav>
  );
};

export default Navbar;
