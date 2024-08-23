import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownProps } from "./Dropdown.types";

export const Dropdown = ({
  items,
  triggerComponent,
  ...props
}: DropdownProps) => {
  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger asChild>{triggerComponent}</DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.map(({ label, onClick }) => (
          <DropdownMenuItem key={label} onClick={onClick}>
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
