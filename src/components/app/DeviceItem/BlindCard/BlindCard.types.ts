import { Blind } from "@/api/types/common.types";
import { DropdownProps } from "@/components/common/Dropdown/Dropdown.types";

export type BlindCardProps = {
  name: string;
  isLocalKey: boolean;
  items: DropdownProps["items"];
  blindValue: Blind["value"];
};
