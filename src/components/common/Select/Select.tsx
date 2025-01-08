import {
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectValue,
  SelectContent,
  SelectTrigger,
  Select as ShadcnSelect,
} from "@/components/ui/select";
import { type SelectProps } from "./Select.types";

export const Select = ({
  label,
  items,
  placeholder,
  ...props
}: SelectProps) => {
  return (
    <ShadcnSelect {...props}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {label && <SelectLabel>{label}</SelectLabel>}
          {items.map(({ name, value }) => (
            <SelectItem key={value} value={value}>
              {name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </ShadcnSelect>
  );
};
