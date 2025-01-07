import { Blind, DeviceType, Thermometer } from "@/api/types/common.types";
import { GetOneDevicesResponse } from "@/api/types/devices.types";
import { ReactNode } from "react";

export type FormProviderProps = {
  data?: GetOneDevicesResponse;
  selectedType: DeviceType;
  thermometerForm: (record?: Thermometer) => ReactNode;
  blindForm: (record?: Blind) => ReactNode;
};
