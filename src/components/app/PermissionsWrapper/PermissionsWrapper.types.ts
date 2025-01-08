import { type ReactNode } from "react";
import { type Permission } from "@/api/types/common.types";

export type PermissionsWrapperProps = {
  children: ReactNode;
  permissions: Permission[];
};
