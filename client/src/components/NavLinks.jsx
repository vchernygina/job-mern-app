import { useDashboardContext } from "../pages/DashboardLayout";
import links from "../utils/links";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <div className="nav-links flex flex-col gap-4">
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            to={path}
            key={text}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                isActive
                  ? "bg-purple-100 text-purple-700 font-semibold"
                  : "text-gray-600 hover:text-purple-700 hover:bg-purple-50"
              }`
            }
            onClick={toggleSidebar}
            end
          >
            <span className="text-lg">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
