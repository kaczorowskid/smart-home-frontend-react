import { Badge } from "@/components/ui/badge";
import { ComponentProps, ReactNode } from "react";

export type BadgeType = "info" | "destructive" | "success";

export type InfoBadgeProps = {
  type: BadgeType;
  children: ReactNode;
} & ComponentProps<typeof Badge>;
