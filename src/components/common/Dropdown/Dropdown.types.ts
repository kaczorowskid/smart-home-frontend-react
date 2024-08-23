import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { ComponentProps, ReactNode } from "react";

type DropdownItem = {
  label: string;
  onClick: () => void;
};

export type DropdownProps = {
  items: DropdownItem[];
  triggerComponent: ReactNode;
} & ComponentProps<typeof DropdownMenu>;
