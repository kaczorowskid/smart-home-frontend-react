import { ReactNode } from "react";

export type ThemeOption = "dark" | "light";

export type ThemeContextType = {
  theme: ThemeOption;
  setTheme: (theme: ThemeOption) => void;
};

export type ThemeProviderProps = {
  children: ReactNode;
};
