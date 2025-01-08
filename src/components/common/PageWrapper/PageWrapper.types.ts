import { type ReactNode } from "react";
import { type LucideIcon } from "lucide-react";

export type PageWrapperProps = {
  title: ReactNode;
  icon: LucideIcon;
  extra?: ReactNode;
  children: ReactNode;
};
