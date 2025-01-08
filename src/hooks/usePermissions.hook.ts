import { useUserStore } from "@/stores/user";
import { type Permission } from "@/api/types/common.types";

export const usePermissions = (requiredPermissions: Permission[]) => {
  const {
    role: { permissions },
  } = useUserStore();

  const userPermissionsList = permissions?.map(({ permission }) => permission);

  return requiredPermissions.some((permission) =>
    userPermissionsList?.includes(permission)
  );
};
