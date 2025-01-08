import { type LucideIcon } from "lucide-react";

export type Icon = {
  action: string;
  icon: LucideIcon;
  color: React.HTMLAttributes<HTMLDivElement>["className"];
};
