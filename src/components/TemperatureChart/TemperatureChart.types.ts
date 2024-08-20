import { AreaProps } from "recharts";
import { ChartConfig } from "../ui/chart";

export type TemperatureChartProps = {
  data: AreaProps["data"];
  config: ChartConfig;
};
