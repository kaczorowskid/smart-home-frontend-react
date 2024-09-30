import { UserRole } from "@/types/common.types";

export const getBadgeColor = (role: UserRole) => {
  switch (role) {
    case "ADMIN":
      return "bg-badge-secondary";
    case "USER":
      return "bg-badge";
    default:
      return "bg-badge";
  }
};

export const getBadgeText = (role: UserRole) => {
  return role;
};
