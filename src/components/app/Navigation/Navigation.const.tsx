import { FormattedMessage } from "react-intl";
import { routesPath } from "@/routes/routesPath";
import { permissionsList } from "@/api/types/common.types";
import {
  House,
  Settings,
  ChartArea,
  NotebookPen,
  LayoutDashboard,
} from "lucide-react";
import { type NavigationItemProps } from "./NavigationItem";

export const menuItems: NavigationItemProps["items"][] = [
  {
    icon: LayoutDashboard,
    path: routesPath.app.dashboard,
    title: <FormattedMessage id="menu.dashboard" />,
    permissions: [permissionsList.IS_ADMIN, permissionsList.DASHBOARD_VIEW],
  },
  {
    icon: ChartArea,
    path: routesPath.app.graphs,
    title: <FormattedMessage id="menu.graphs" />,
    permissions: [permissionsList.IS_ADMIN, permissionsList.GRAPHS_VIEW],
  },
  {
    icon: House,
    path: routesPath.app.rooms,
    title: <FormattedMessage id="menu.rooms" />,
    permissions: [permissionsList.IS_ADMIN, permissionsList.ROOMS_VIEW],
  },
  {
    icon: NotebookPen,
    path: routesPath.app.options,
    title: <FormattedMessage id="menu.options" />,
    permissions: [permissionsList.IS_ADMIN, permissionsList.OPTIONS_VIEW],
  },
  {
    icon: Settings,
    path: routesPath.app.settings,
    title: <FormattedMessage id="menu.settings" />,
    permissions: [permissionsList.IS_ADMIN, permissionsList.SETTINGS_VIEW],
  },
];
