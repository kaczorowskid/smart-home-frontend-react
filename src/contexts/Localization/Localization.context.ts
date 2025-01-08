import { createContext } from "react";
import { type LocalizationContextType } from "./Localization.types";

export const LocalizationContext = createContext<LocalizationContextType>({
  locale: "en",
  setUserLocale: () => {},
});
