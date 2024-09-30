import { Badge } from "@/components/ui/badge";
import { UserRole } from "@/types/common.types";
import { ComponentProps } from "react";

export type RoleBadgeProps = {
  role: UserRole;
} & ComponentProps<typeof Badge>;
