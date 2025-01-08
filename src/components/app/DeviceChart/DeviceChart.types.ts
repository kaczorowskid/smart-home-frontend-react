import { type ReactNode } from "react";
import { type LucideIcon } from "lucide-react";
import { type ChartType } from "@/types/common.types";
import { type DisplayedDevicesKey } from "@/utils/localStorageKeys";

export type DeviceChartProps = {
  icon: LucideIcon;
  extra?: ReactNode;
  deviceId?: string;
  chartType: ChartType;
  description: ReactNode;
  dateTo: Date | undefined;
  dateFrom: Date | undefined;
  deviceLocalKey?: DisplayedDevicesKey;
};
