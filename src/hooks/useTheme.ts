import { useLayoutEffect, useState } from "react";

export const useTheme = () => {
  const savedTheme = localStorage.getItem("theme") ?? "light";
  const initialTheme = savedTheme === "dark" ? "dark" : "light";

  const [theme, setTheme] = useState(initialTheme);

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    updateFavicon(theme);
  }, [theme]);

  const updateFavicon = (theme: string) => {
    const favicon = document.getElementById("favicon") as HTMLLinkElement;
    if (favicon) {
      favicon.href = `/favicon-${theme}.ico`;
    }
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};
