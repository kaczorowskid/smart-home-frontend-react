import { Badge } from "@/components/ui/badge";
import { ComponentProps } from "react";

export type VerifiedBadgeProps = {
  isVerified: boolean;
} & ComponentProps<typeof Badge>;
