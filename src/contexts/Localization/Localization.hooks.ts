import { useContext } from "react";
import { LocalizationContext } from "./Localization.context";

export const useLocalization = () => useContext(LocalizationContext);
