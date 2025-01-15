import { type DeviceStatus } from "@/api/types/common.types";
import { type DropdownProps } from "@/components/common/Dropdown/Dropdown.types";

export type ThermometerCardProps = {
  name: string;
  isLocalKey: boolean;
  date: Date | undefined;
  deviceStatus: DeviceStatus;
  battery: number | undefined;
  humidity: number | undefined;
  deviceId: string | undefined;
  items: DropdownProps["items"];
  temperature: number | undefined;
};
