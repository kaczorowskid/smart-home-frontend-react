import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export type PageWrapperProps = {
  title: ReactNode;
  icon: LucideIcon;
  extra?: ReactNode;
  children: ReactNode;
};
