import { DisplayedDevicesKey } from "@/utils/localStorageKeys";
import { LucideIcon } from "lucide-react";

export type DeviceChartProps = {
  chartType: "temperature" | "humidity" | "all";
  description: string;
  icon: LucideIcon;
  deviceId?: string;
  deviceLocalKey?: DisplayedDevicesKey;
};
