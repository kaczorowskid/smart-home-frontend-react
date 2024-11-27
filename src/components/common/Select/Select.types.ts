import { Select } from "@/components/ui/select";
import { ComponentProps, ReactNode } from "react";

type Item = {
  name: ReactNode;
  value: string;
};

export type SelectProps = {
  label?: string;
  placeholder?: string;
  items: Item[];
} & ComponentProps<typeof Select>;
