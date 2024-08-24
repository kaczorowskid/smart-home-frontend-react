import {
  ChartArea,
  LayoutDashboard,
  LucideIcon,
  RadioTower,
  Settings,
} from "lucide-react";

export type Views = "dashboard" | "devices" | "graphs" | "settings";

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
  graphs: {
    title: "Graphs",
    icon: ChartArea,
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
