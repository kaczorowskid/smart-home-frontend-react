import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export type CardWithHeaderProps = {
  cardClassName?: string;
  contentClassName?: string;
  title: string;
  description?: string;
  hasSmallHeader?: boolean;
  extra?: ReactNode;
  icon?: LucideIcon;
  children: ReactNode;
};
