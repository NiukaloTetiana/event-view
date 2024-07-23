import { GiSun } from "react-icons/gi";
import { BsMoonStars } from "react-icons/bs";

import { useTheme } from "../../hooks";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex justify-center items-center bg-textColor rounded-[50%] shadow-md cursor-pointer p-2 pointer-events-auto lg:hover:bg-hoverColor lg:hover:shadow-lg transition duration-300"
    >
      {theme === "light" ? (
        <BsMoonStars className="fill-bgFirstColor size-4" />
      ) : (
        <GiSun className="fill-accentColor size-4" />
      )}
    </button>
  );
};
