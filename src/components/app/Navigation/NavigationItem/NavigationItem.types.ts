import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

type NavigationItem = {
  title: ReactNode;
  icon: LucideIcon;
  path: string;
};

export type NavigationItemProps = {
  items: NavigationItem;
  onClick: () => void;
};
