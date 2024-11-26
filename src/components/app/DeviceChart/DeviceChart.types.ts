import { ChartType } from "@/types/common.types";
import { DisplayedDevicesKey } from "@/utils/localStorageKeys";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export type DeviceChartProps = {
  chartType: ChartType;
  description: ReactNode;
  icon: LucideIcon;
  dateFrom: Date | undefined;
  dateTo: Date | undefined;
  extra?: ReactNode;
  deviceId?: string;
  deviceLocalKey?: DisplayedDevicesKey;
};
