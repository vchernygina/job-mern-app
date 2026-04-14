import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import { useDashboardContext } from "../pages/DashboardLayout";

function LogaoutContainer() {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();
  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center gap-2 bg-purple-700 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-800 transition"
        onClick={() => setShowLogout(!showLogout)}
      >
        <FaUserCircle />
        <span className="capitalize">{user?.name || "Guest"}</span>
        <FaCaretDown />
      </button>
      <div
        className={`absolute top-[45px] right-0 w-full text-center text-white bg-purple-700 hover:bg-purple-800 rounded-lg transition ${
          showLogout ? "visible" : "invisible"
        }`}
      >
        <button
          type="button"
          className="flex items-center gap-2 justify-center w-full py-2 bg-purple-700 hover:bg-purple-800 transition rounded-lg"
          onClick={logoutUser}
        >
          logout
        </button>
      </div>
    </div>
  );
}

export default LogaoutContainer;
