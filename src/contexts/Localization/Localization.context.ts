import { createContext } from "react";
import { Locale, LocalizationContextType } from "./Localization.types";

export const LocalizationContext = createContext<LocalizationContextType>({
  locale: "en",
  setUserLocale: (locale: Locale) => {},
});
