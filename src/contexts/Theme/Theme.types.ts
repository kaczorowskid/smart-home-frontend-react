import { type ReactNode } from "react";

export type ThemeOption = "dark" | "light";

export type ThemeProviderProps = {
  children: ReactNode;
};

export type ThemeContextType = {
  theme: ThemeOption;
  setTheme: (theme: ThemeOption) => void;
};
