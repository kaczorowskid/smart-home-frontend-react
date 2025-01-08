import { type ReactNode, type ComponentProps } from "react";
import { type DropdownMenu } from "@/components/ui/dropdown-menu";

export type DropdownProps = ComponentProps<typeof DropdownMenu> & {
  items: DropdownItem[];
  triggerComponent: ReactNode;
};

type DropdownItem = {
  label: string;
  onClick: () => void;
};
