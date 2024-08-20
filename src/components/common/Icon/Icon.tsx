import { icons } from "lucide-react";
import { IconProps } from "./Icon.types";

export const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = icons[name];

  return <LucideIcon {...props} />;
};
