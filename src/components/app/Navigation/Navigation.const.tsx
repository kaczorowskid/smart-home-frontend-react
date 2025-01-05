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
import { permissionsList } from "@/api/types/common.types";

export const menuItems: NavigationItemProps["items"][] = [
  {
    permissions: [permissionsList.IS_ADMIN, permissionsList.DASHBOARD_VIEW],
    title: <FormattedMessage id="menu.dashboard" />,
    path: routesPath.app.dashboard,
    icon: LayoutDashboard,
  },
  {
    permissions: [permissionsList.IS_ADMIN, permissionsList.GRAPHS_VIEW],
    title: <FormattedMessage id="menu.graphs" />,
    path: routesPath.app.graphs,
    icon: ChartArea,
  },
  {
    permissions: [permissionsList.IS_ADMIN, permissionsList.ROOMS_VIEW],
    title: <FormattedMessage id="menu.rooms" />,
    path: routesPath.app.rooms,
    icon: House,
  },
  {
    permissions: [permissionsList.IS_ADMIN, permissionsList.OPTIONS_VIEW],
    title: <FormattedMessage id="menu.options" />,
    path: routesPath.app.options,
    icon: NotebookPen,
  },
  {
    permissions: [permissionsList.IS_ADMIN, permissionsList.SETTINGS_VIEW],
    title: <FormattedMessage id="menu.settings" />,
    path: routesPath.app.settings,
    icon: Settings,
  },
];
