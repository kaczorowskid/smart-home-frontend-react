import { LocalStorageKey } from "@/utils/localStorageKeys";
import { LucideIcon } from "lucide-react";

export type DeviceChartProps = {
  chartType: "temperature" | "humidity" | "all";
  description: string;
  icon: LucideIcon;
  localStorageKey: LocalStorageKey;
};
