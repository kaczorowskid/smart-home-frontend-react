import { LucideIcon } from "lucide-react";

export type Icon = {
  icon: LucideIcon;
  action: string;
  color: React.HTMLAttributes<HTMLDivElement>["className"];
};
