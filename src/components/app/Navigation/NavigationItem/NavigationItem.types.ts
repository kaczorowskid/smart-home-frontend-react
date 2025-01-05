import { Permission } from "@/api/types/common.types";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

type NavigationItem = {
  permissions: Permission[];
  title: ReactNode;
  icon: LucideIcon;
  path: string;
};

export type NavigationItemProps = {
  items: NavigationItem;
  onClick: () => void;
};
