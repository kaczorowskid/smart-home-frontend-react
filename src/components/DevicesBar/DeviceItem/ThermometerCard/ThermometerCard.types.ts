import { GetDeviceResponse } from "@/api/types/devices.types";
import { DropdownProps } from "@/components/common/Dropdown/Dropdown.types";

export type ThermometerCardProps = {
  name: string;
  thermometers: GetDeviceResponse["thermometers"];
  items: DropdownProps["items"];
};
