import { useDashboardContext } from "../pages/DashboardLayout";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const LeftSidebarBig = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();
  return (
    <div
      className={
        showSidebar
          ? "show-sidebar sidebar-contaiber fixed inset-0 bg-black/40 flex"
          : "sidebar-contaiber fixed inset-0 bg-black/40 flex"
      }
    >
      <div className="w-64 bg-white h-full shadow-xl p-6 relative">
        <button
          type="button"
          className="absolute top-4 right-4 text-2xl text-red-600 hover:text-red-800"
          onClick={toggleSidebar}
        >
          <FaTimes />
        </button>

        <header className="mb-8">
          <Logo />
        </header>
        <NavLinks />
      </div>
    </div>
  );
};

export default LeftSidebarBig;
