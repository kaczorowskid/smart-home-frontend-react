import { SelectProps } from "@/components/common/Select/Select.types";

export const itemsType = [
  {
    name: "Thermometer",
    value: "THERMOMETER",
  },
  {
    name: "Blind",
    value: "BLIND",
  },
] as const satisfies SelectProps["items"];

export type ItemValue = (typeof itemsType)[number]["value"];
