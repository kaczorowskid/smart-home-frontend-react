import { Info } from "lucide-react";
import {
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
  Tooltip as ShadcnTooltip,
} from "@/components/ui/tooltip";
import { type TooltipProps } from "./Tooltip.types";

export function Tooltip({
  children,
  triggerComponent,
  ...props
}: TooltipProps) {
  return (
    <TooltipProvider>
      <ShadcnTooltip {...props}>
        <TooltipTrigger asChild>{triggerComponent || <Info />}</TooltipTrigger>
        <TooltipContent>{children}</TooltipContent>
      </ShadcnTooltip>
    </TooltipProvider>
  );
}
