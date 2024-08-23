import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { LucideIcon } from "lucide-react";
import { ComponentProps } from "react";

type DropdownItem = {
  label: string;
  onClick: () => void;
};

export type DropdownProps = {
  items: DropdownItem[];
  triggerIcon?: LucideIcon;
} & ComponentProps<typeof DropdownMenu>;
