import { Select } from "@/components/ui/select";
import { ComponentProps } from "react";

type Item = {
  name: string;
  value: string;
};

export type SelectProps = {
  label?: string;
  placeholder?: string;
  items: Item[];
} & ComponentProps<typeof Select>;
