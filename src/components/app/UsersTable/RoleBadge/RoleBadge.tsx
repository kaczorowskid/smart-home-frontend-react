import { Badge } from "@/components/ui/badge";
import { RoleBadgeProps } from "./RoleBadge.types";
import { getBadgeColor, getBadgeText } from "./RoleBadge.utils";

export const RoleBadge = ({ role, ...props }: RoleBadgeProps) => {
  const badgeColor = getBadgeColor(role);
  const badgeText = getBadgeText(role);

  return (
    <Badge variant="outline" className={`${badgeColor}`} {...props}>
      {badgeText}
    </Badge>
  );
};
