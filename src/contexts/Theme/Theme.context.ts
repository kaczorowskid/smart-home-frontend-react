import { createContext } from "react";
import { ThemeContextType } from "./Theme.types";

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {},
});
