import { type Locale } from "./Localization.types";

export const getLocale = () => {
  switch (navigator.language) {
    case "en":
      return "en";
    case "pl":
      return "pl";
    default:
      return "en";
  }
};

export const getMessages = (locale: Locale) => {
  switch (locale) {
    case "en":
      return import("@/langs/en");
    case "pl":
      return import("@/langs/pl");
    default:
      return import("@/langs/en");
  }
};
