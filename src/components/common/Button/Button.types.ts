import { Button } from "@/components/ui/button";
import { ComponentProps } from "react";

export type ButtonProps = {
  isLoading?: boolean;
} & ComponentProps<typeof Button>;
