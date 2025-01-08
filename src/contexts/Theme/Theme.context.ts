import { createContext } from "react";
import { type ThemeContextType } from "./Theme.types";

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {},
});
