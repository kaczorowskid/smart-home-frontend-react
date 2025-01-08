import { type Blind } from "@/api/types/common.types";
import { type DropdownProps } from "@/components/common/Dropdown/Dropdown.types";

export type BlindCardProps = {
  name: string;
  isLocalKey: boolean;
  blindValue: Blind["value"];
  items: DropdownProps["items"];
};
