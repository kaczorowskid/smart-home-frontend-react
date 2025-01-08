import { type ChartType } from "@/types/common.types";

export const chartTypeMapper: Record<ChartType, string> = {
  humidity: "Humidity",
  temperature: "Temperature",
  all: "Temperature & Humidity",
};
