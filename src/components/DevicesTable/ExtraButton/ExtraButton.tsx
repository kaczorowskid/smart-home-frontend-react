import { Button } from "@/components/ui/button";
import { ExtraButtonProps } from "./ExtraButton.types";
import { routesPath } from "@/routes/routesPath";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const ExtraButton = ({ isDashboardPart }: ExtraButtonProps) => {
  const dashboardPart = (
    <Button asChild variant="outline">
      <Link to={routesPath.app.devices}>Go to Devices</Link>
    </Button>
  );

  const searchBar = (
    <div className="relative ml-auto flex-1 md:grow-0">
      <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search..."
        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
      />
    </div>
  );

  return <>{isDashboardPart ? dashboardPart : searchBar}</>;
};
