import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export type CardWithHeaderProps = {
  cardClassName?: string;
  contentClassName?: string;
  title: ReactNode;
  description?: string;
  hasSmallHeader?: boolean;
  extra?: ReactNode;
  icon?: LucideIcon;
  children: ReactNode;
};
