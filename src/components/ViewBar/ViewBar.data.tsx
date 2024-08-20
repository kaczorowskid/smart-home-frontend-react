import {
  LayoutDashboard,
  LucideIcon,
  RadioTower,
  Settings,
} from "lucide-react";

export type Views = "dashboard" | "devices" | "settings";

type ViewsData = {
  [key in Views]: {
    title: string;
    icon: LucideIcon;
  };
};

export const viewsData: ViewsData = {
  dashboard: {
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  devices: {
    title: "Devices",
    icon: RadioTower,
  },
  settings: {
    title: "Settings",
    icon: Settings,
  },
};
