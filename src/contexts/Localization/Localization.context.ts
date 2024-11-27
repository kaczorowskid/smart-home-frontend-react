import { createContext } from "react";
import { LocalizationContextType } from "./Localization.types";

export const LocalizationContext = createContext<LocalizationContextType>({
  locale: "en",
  setUserLocale: () => {},
});
