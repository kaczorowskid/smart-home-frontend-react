import { ReactNode } from "react";

export type ThemeOption = "dark" | "light" | "system";

export type ThemeProviderProps = {
  children: ReactNode;
};
