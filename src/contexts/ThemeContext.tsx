import { createContext } from "react";

import { PropsWithChildren } from "../interfaces";
import { ThemeContextType } from "../types";

import useTheme from "../hooks/useTheme";

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
