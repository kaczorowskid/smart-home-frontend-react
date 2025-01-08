import { type ReactNode } from "react";
import { type Blind, type Thermometer } from "@/api/types/common.types";

export type DeviceProviderProps = {
  data?: Blind | Thermometer;
  blind: (blind: Blind) => ReactNode;
  thermometer: (thermometer: Thermometer) => ReactNode;
};
