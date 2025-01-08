import { type Tooltip } from "@/components/ui/tooltip";
import { type ReactNode, type ComponentProps } from "react";

export type TooltipProps = ComponentProps<typeof Tooltip> & {
  triggerComponent?: ReactNode;
};
