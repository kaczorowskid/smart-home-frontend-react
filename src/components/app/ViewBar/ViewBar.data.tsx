import {
  ChartArea,
  LayoutDashboard,
  LucideIcon,
  RadioTower,
  Settings,
  User,
} from "lucide-react";

export type Views = "dashboard" | "devices" | "graphs" | "user" | "settings";

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
  user: {
    title: "Users",
    icon: User,
  },
  settings: {
    title: "Settings",
    icon: Settings,
  },
};
