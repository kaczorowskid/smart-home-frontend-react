import { Permission } from "@/api/types/common.types";
import { ReactNode } from "react";

export type PermissionsWrapperProps = {
  permissions: Permission[];
  children: ReactNode;
};
