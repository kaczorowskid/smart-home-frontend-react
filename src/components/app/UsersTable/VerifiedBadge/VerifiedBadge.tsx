import { Badge } from "@/components/ui/badge";
import { VerifiedBadgeProps } from "./VerifiedBadge.types";
import { getBadgeColor, getBadgeText } from "./VerifiedBadge.utils";

export const VerifiedBadge = ({ isVerified, ...props }: VerifiedBadgeProps) => {
  const badgeColor = getBadgeColor(isVerified);
  const badgeText = getBadgeText(isVerified);

  return (
    <Badge variant="outline" className={`${badgeColor}`} {...props}>
      {badgeText}
    </Badge>
  );
};
