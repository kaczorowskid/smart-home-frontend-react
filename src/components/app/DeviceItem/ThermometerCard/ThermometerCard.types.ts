import { type ThermometerData } from "@/api/types/common.types";
import { type DropdownProps } from "@/components/common/Dropdown/Dropdown.types";

export type ThermometerCardProps = {
  name: string;
  isLocalKey: boolean;
  items: DropdownProps["items"];
  thermometerData?: ThermometerData[];
};
