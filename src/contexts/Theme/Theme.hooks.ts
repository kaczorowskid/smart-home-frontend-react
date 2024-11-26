import { useContext } from "react";
import { ThemeContext } from "./Theme.context";

export const useTheme = () => useContext(ThemeContext);
