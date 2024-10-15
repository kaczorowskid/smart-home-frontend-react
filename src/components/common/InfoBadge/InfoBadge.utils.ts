import { BadgeType } from "./InfoBadge.types";

export const getBadgeColor = (type: BadgeType) => {
  switch (type) {
    case "info":
      return "badge-info";
    case "success":
      return "badge-success";
    case "destructive":
      return "badge-destructive";
    default:
      return "badge-info";
  }
};
