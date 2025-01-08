import { usePermissions } from "@/hooks/usePermissions.hook";
import { type PermissionsWrapperProps } from "./PermissionsWrapper.types";

export const PermissionsWrapper = ({
  children,
  permissions,
}: PermissionsWrapperProps) => {
  const canSeeSection = usePermissions(permissions);

  return canSeeSection ? <>{children}</> : null;
};
