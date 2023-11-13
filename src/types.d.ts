import { Themes } from "./enums";

export type Theme = Themes.DARK | Themes.LIGHT;

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
