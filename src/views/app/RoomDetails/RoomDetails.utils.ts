import { ChartType } from "@/types/common.types";

export const chartTypeMapper: Record<ChartType, string> = {
  all: "Temperature & Humidity",
  humidity: "Humidity",
  temperature: "Temperature",
};
