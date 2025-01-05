import { Permission } from "@/api/types/common.types";
import { useUserStore } from "@/stores/user";

export const usePermissions = (requiredPermissions: Permission[]) => {
  const {
    role: { permissions },
  } = useUserStore();

  const userPermissionsList = permissions?.map(({ permission }) => permission);

  return requiredPermissions.some((permission) =>
    userPermissionsList?.includes(permission)
  );
};
