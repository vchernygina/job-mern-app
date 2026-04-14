import { FaAlignLeft } from "react-icons/fa";
import Logo from "./Logo";
import { useDashboardContext } from "../pages/DashboardLayout";
import LogaoutContainer from "./LogoutContainer";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  const { toggleSidebar, isDarkTheme } = useDashboardContext();
  return (
    <div className="flex items-center justify-between h-full w-full">
      <button
        type="button"
        className="text-2xl text-purple-700 hover:text-purple-900 transition"
        onClick={toggleSidebar}
      >
        <FaAlignLeft />
      </button>

      <div className="flex items-center gap-2 ">
        <Logo />
        <h4 className="logo-text">dashboard</h4>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <LogaoutContainer />
      </div>
    </div>
  );
};

export default NavBar;
