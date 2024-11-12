import { useUserStore } from "@/stores/user";
import { AdminOnlyWrapperProps } from "./AdminOnlyWrapper.types";

export const AdminOnlyWrapper = ({ children }: AdminOnlyWrapperProps) => {
  const { role } = useUserStore();

  const isAdmin = role === "ADMIN";

  return isAdmin ? <>{children}</> : null;
};
