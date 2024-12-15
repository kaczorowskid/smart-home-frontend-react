import { routesPath } from "@/routes/routesPath";
import { NavigationItemProps } from "./NavigationItem";
import { FormattedMessage } from "react-intl";
import {
  ChartArea,
  House,
  LayoutDashboard,
  NotebookPen,
  Settings,
} from "lucide-react";

export const menuItems: NavigationItemProps["items"][] = [
  {
    title: <FormattedMessage id="menu.dashboard" />,
    path: routesPath.app.dashboard,
    icon: LayoutDashboard,
  },
  {
    title: <FormattedMessage id="menu.graphs" />,
    path: routesPath.app.graphs,
    icon: ChartArea,
  },
  {
    title: <FormattedMessage id="menu.rooms" />,
    path: routesPath.app.rooms,
    icon: House,
  },
  {
    title: <FormattedMessage id="menu.options" />,
    path: routesPath.app.options,
    icon: NotebookPen,
  },
  {
    title: <FormattedMessage id="menu.settings" />,
    path: routesPath.app.settings,
    icon: Settings,
  },
];
