import { type ReactNode } from "react";
import { type GetOneDevicesResponse } from "@/api/types/devices.types";
import {
  type Blind,
  type DeviceType,
  type Thermometer,
} from "@/api/types/common.types";

export type FormProviderProps = {
  selectedType: DeviceType;
  data?: GetOneDevicesResponse;
  blindForm: (record?: Blind) => ReactNode;
  thermometerForm: (record?: Thermometer) => ReactNode;
};
