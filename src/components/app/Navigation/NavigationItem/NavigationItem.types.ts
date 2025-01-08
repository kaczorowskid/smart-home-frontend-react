import { type ReactNode } from "react";
import { type LucideIcon } from "lucide-react";
import { type Permission } from "@/api/types/common.types";

export type NavigationItemProps = {
  onClick: () => void;
  items: NavigationItem;
};

type NavigationItem = {
  path: string;
  title: ReactNode;
  icon: LucideIcon;
  permissions: Permission[];
};
