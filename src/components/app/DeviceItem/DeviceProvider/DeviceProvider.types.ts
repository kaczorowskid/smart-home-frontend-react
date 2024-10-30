import { Blind, Thermometer } from "@/api/types/common.types";
import { ReactNode } from "react";

export type DeviceProviderProps = {
  data?: Thermometer | Blind;
  thermometer: (thermometer: Thermometer) => ReactNode;
  blind: (blind: Blind) => ReactNode;
};
