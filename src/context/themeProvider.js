import { useState, createContext, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const getInitialMode = () => {
    const stored = localStorage.getItem("lightMode");
    return stored === null ? true : stored === "true";
  };

  const [lightMode, setDarkMode] = useState(getInitialMode);

  const toggleTheme = () => {
    setDarkMode((mode) => {
      const updated = !mode;
      localStorage.setItem("lightMode", updated); // Save new value
      return updated;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      lightMode ? "light" : "dark"
    );
  }, [lightMode]);

return (
  <ThemeContext.Provider value={{ toggleTheme, darkMode: !lightMode, theme: lightMode ? "light" : "dark" }}>
    {children}
  </ThemeContext.Provider>
);

};
