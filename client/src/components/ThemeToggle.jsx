import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useDashboardContext } from "../pages/DashboardLayout";

function ThemeToggle() {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();
  return (
    <div onClick={toggleDarkTheme}>
      {isDarkTheme ? <BsFillSunFill /> : <BsFillMoonFill />}
    </div>
  );
}

export default ThemeToggle;
