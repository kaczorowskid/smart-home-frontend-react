import { type ReactNode } from "react";

export type Locale = "en" | "pl";

export type LocalizationProviderProps = {
  children: ReactNode;
};

export type LocalizationContextType = {
  locale: Locale;
  setUserLocale: (locale: Locale) => void;
};
