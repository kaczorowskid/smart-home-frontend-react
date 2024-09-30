import {
  Tooltip as ShadcnTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProps } from "./Tooltip.types";
import { Info } from "lucide-react";

export function Tooltip({
  triggerComponent,
  children,
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
