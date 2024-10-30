import { ThermometerData } from "@/api/types/common.types";
import { DropdownProps } from "@/components/common/Dropdown/Dropdown.types";

export type ThermometerCardProps = {
  name: string;
  items: DropdownProps["items"] | null;
  thermometerData?: ThermometerData[];
};
