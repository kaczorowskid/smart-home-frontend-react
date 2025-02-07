import { type ReactNode } from "react";
import { type GetOneDeviceResponse } from "@/api/types/devices.types";
import {
  type Blind,
  type DeviceType,
  type Thermometer,
} from "@/api/types/common.types";

export type FormProviderProps = {
  selectedType: DeviceType;
  data?: GetOneDeviceResponse;
  blindForm: (record?: Blind) => ReactNode;
  thermometerForm: (record?: Thermometer) => ReactNode;
};
