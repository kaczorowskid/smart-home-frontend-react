import { ReactNode } from "react";

export type Locale = "en" | "pl";

export type LocalizationContextType = {
  locale: Locale;
  setUserLocale: (locale: Locale) => void;
};

export type LocalizationProviderProps = {
  children: ReactNode;
};
