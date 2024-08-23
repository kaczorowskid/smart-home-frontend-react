import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownProps } from "./Dropdown.types";

export const Dropdown = ({
  items,
  triggerIcon: Icon,
  ...props
}: DropdownProps) => {
  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger asChild>
        {Icon ? (
          <Icon className="cursor-pointer text-muted-foreground hover:text-white" />
        ) : (
          <Button variant="outline">Open</Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.map(({ label, onClick }) => (
          <DropdownMenuItem onClick={onClick}>{label}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
