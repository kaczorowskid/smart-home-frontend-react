import { Icon } from "@/components/common/Icon";
import { cn } from "@/lib/utils";
import { NavigationItemProps } from "./NavigationItem.types";
import { Link, useLocation } from "react-router-dom";

export const NavigationItem = ({ title, icon, path }: NavigationItemProps) => {
  const { pathname } = useLocation();

  const isActive = pathname === path;

  return (
    <Link
      to={path}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-4 my-2 text-muted-foreground transition-all hover:text-primary hover:bg-secondary",
        isActive && "bg-secondary"
      )}
    >
      <Icon name={icon} />
      {title}
    </Link>
  );
};
