import { routesPath } from "@/routes/routesPath";
import { NavigationItemProps } from "./NavigationItem";

export const menuItems: NavigationItemProps["items"][] = [
  {
    title: "Dashboard",
    path: routesPath.app.dashboard,
    icon: "LayoutDashboard",
  },
  {
    title: "Graphs",
    path: routesPath.app.graphs,
    icon: "ChartArea",
  },
  {
    title: "Rooms",
    path: routesPath.app.rooms,
    icon: "House",
  },
  {
    title: "Settings",
    path: routesPath.app.settings,
    icon: "Settings",
  },
];
