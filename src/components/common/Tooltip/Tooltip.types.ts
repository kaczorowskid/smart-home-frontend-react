import { Tooltip } from "@/components/ui/tooltip";
import { ComponentProps, ReactNode } from "react";

export type TooltipProps = {
  triggerComponent?: ReactNode;
} & ComponentProps<typeof Tooltip>;
