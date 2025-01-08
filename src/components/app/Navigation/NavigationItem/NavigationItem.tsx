import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { type NavigationItemProps } from "./NavigationItem.types";

export const NavigationItem = ({
  onClick,
  items: { path, title, icon: Icon },
}: NavigationItemProps) => {
  const { pathname } = useLocation();
  const isActive = pathname === path;

  return (
    <Link
      to={path}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-4 my-2 text-muted-foreground transition-colors hover:text-primary hover:bg-secondary",
        isActive && "bg-secondary"
      )}
    >
      <Icon />
      {title}
    </Link>
  );
};
