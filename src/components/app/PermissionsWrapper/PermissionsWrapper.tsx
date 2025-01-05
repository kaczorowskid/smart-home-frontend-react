import { usePermissions } from "@/hooks/usePermissions.hook";
import { PermissionsWrapperProps } from "./PermissionsWrapper.types";

export const PermissionsWrapper = ({
  permissions,
  children,
}: PermissionsWrapperProps) => {
  const canSeeSection = usePermissions(permissions);

  return canSeeSection ? <>{children}</> : null;
};
