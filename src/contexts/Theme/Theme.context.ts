import { createContext } from "react";
import { ThemeContextType, ThemeOption } from "./Theme.types";

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: (theme: ThemeOption) => {},
});
