import { type ComponentProps } from "react";
import { type Button } from "@/components/ui/button";

export type ButtonProps = {
  isLoading?: boolean;
} & ComponentProps<typeof Button>;
