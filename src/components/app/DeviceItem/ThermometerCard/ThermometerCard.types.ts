import { ThermometerData } from "@/api/types/common.types";
import { DropdownProps } from "@/components/common/Dropdown/Dropdown.types";

export type ThermometerCardProps = {
  name: string;
  isLocalKey: boolean;
  items: DropdownProps["items"];
  thermometerData?: ThermometerData[];
};
