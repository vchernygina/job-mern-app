import { Outlet } from "react-router-dom";
import { LeftSidebarBig, NavBar } from "../components";
import { createContext, useContext, useState } from "react";

const DashboardContext = createContext();

const DashboardLayout = ({ isDarkThemeEnabled }) => {
  const user = { name: "vira" };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log("logout user");
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <main className="main">
        {showSidebar && <LeftSidebarBig />}

        <div className="main-inner">
          <div className="nav-bar">
            <NavBar />
          </div>
          <div className="outlet-bar">
            <Outlet />
          </div>
        </div>
      </main>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
