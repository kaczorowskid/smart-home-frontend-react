import { routesPath } from "@/routes/routesPath";
import { IconProps } from "../common/Icon/Icon.types";

type MenuItem = {
  title: string;
  path: string;
  icon: IconProps["name"];
};

export const menuItems: MenuItem[] = [
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
    title: "Devices",
    path: routesPath.app.devices,
    icon: "RadioTower",
  },
  {
    title: "Settings",
    path: routesPath.app.settings,
    icon: "Settings",
  },
];
