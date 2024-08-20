import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CardWithHeader } from "../common/CardWithHeader/CardWithHeader";
import { TemperatureChartProps } from "./TemperatureChart.types";

export const TemperatureChart = ({ data, config }: TemperatureChartProps) => {
  return (
    <CardWithHeader
      title="Temperature"
      description="Outdoor temperature"
      cardClassName="flex-grow"
      contentClassName="h-80"
    >
      <ResponsiveContainer width="100%" height="100%">
        <ChartContainer config={config}>
          <AreaChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="var(--color-mobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </ResponsiveContainer>
    </CardWithHeader>
  );
};
