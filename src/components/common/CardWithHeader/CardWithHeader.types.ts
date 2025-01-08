import { type ReactNode } from "react";
import { type LucideIcon } from "lucide-react";

export type CardWithHeaderProps = {
  title: ReactNode;
  extra?: ReactNode;
  icon?: LucideIcon;
  children: ReactNode;
  cardClassName?: string;
  description?: ReactNode;
  hasSmallHeader?: boolean;
  contentClassName?: string;
};
