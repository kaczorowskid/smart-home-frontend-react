import { Blind, Thermometer } from "@/api/types/common.types";
import { GetOneDevicesResponse } from "@/api/types/devices.types";
import { DeviceType } from "@/types/common.types";
import { ReactNode } from "react";

export type FormProviderProps = {
  data?: GetOneDevicesResponse;
  selectedType?: DeviceType;
  thermometerForm: (record?: Thermometer) => ReactNode;
  blindForm: (record?: Blind) => ReactNode;
};
