import { useState, createContext, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const getInitialMode = () => {
    const stored = localStorage.getItem("darkMode");
    return stored === null ? true : stored === "true";
  };

  const [darkMode, setDarkMode] = useState(getInitialMode);

  const toggleTheme = () => {
    setDarkMode((mode) => {
      const updated = !mode;
      localStorage.setItem("darkMode", updated); // Save new value
      return updated;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
