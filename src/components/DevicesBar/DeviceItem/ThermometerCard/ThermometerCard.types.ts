import { GetDeviceToDisplayResponse } from "@/api/types/displayedDevice.types";
import { DropdownProps } from "@/components/common/Dropdown/Dropdown.types";

export type ThermometerCardProps = {
  name: string;
  thermometers: GetDeviceToDisplayResponse["thermometers"];
  items: DropdownProps["items"];
};
