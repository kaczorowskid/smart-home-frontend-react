import { type Select } from "@/components/ui/select";
import { type ReactNode, type ComponentProps } from "react";

export type SelectProps = ComponentProps<typeof Select> & {
  items: Item[];
  label?: string;
  placeholder?: string;
};

type Item = {
  value: string;
  name: ReactNode;
};
