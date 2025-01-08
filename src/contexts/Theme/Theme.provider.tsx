import { useState, useEffect } from "react";
import { themeKeys } from "@/utils/localStorageKeys";
import { ThemeContext } from "./Theme.context";
import { type ThemeOption, type ThemeProviderProps } from "./Theme.types";

export const ThemeProvider = ({
  children,
}: ThemeProviderProps): JSX.Element => {
  const [theme, setTheme] = useState<ThemeOption>(
    (localStorage.getItem(themeKeys.theme) as ThemeOption) || "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    root.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: (theme: ThemeOption) => {
          localStorage.setItem(themeKeys.theme, theme);
          setTheme(theme);
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
