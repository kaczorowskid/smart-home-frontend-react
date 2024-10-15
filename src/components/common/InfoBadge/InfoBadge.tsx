import { Badge } from "@/components/ui/badge";
import { InfoBadgeProps } from "./InfoBadge.types";
import { getBadgeColor } from "./InfoBadge.utils";

export const InfoBadge = ({ type, children, ...props }: InfoBadgeProps) => {
  const badgeColor = getBadgeColor(type);

  return (
    <Badge
      variant="outline"
      className={`text-${badgeColor} border-${badgeColor}`}
      {...props}
    >
      {children}
    </Badge>
  );
};
