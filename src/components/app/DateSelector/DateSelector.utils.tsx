import { ChartType } from "@/types/common.types";
import { Cloud, Droplet, LucideIcon, Thermometer } from "lucide-react";

export const chartTypeIconMapper: Record<ChartType, LucideIcon> = {
  all: Cloud,
  temperature: Thermometer,
  humidity: Droplet,
};
