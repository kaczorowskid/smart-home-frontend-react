import { routesPath } from "@/routes/routesPath";
import { NavigationItemProps } from "./NavigationItem";

export const menuItems: NavigationItemProps["items"][] = [
  {
    title: "Dashboard",
    path: routesPath.app.dashboard,
    icon: "LayoutDashboard",
  },
  {
    title: "Rooms",
    path: routesPath.app.rooms,
    icon: "House",
  },
  {
    title: "Graphs",
    path: routesPath.app.graphs,
    icon: "ChartArea",
  },
  {
    title: "Settings",
    path: routesPath.app.settings,
    icon: "Settings",
  },
];
