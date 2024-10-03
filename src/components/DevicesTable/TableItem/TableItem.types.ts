import { DeviceType } from "@/types/common.types";
import { SetStateAction } from "react";

export type TableItemProps = {
  id?: string;
  name?: string;
  type?: DeviceType;
  deviceId?: string;
  selectedValue: string;
  setSelectedValue: (value: SetStateAction<string>) => void;
  isDashboardPart: boolean;
};
