import { type ChartType } from "@/types/common.types";
import { Cloud, Droplet, Thermometer, type LucideIcon } from "lucide-react";

export const chartTypeIconMapper: Record<ChartType, LucideIcon> = {
  all: Cloud,
  humidity: Droplet,
  temperature: Thermometer,
};
