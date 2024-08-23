import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CardWithHeader } from "../common/CardWithHeader/CardWithHeader";
import { useGetDeviceHumidityForGraph } from "./HumidityChart.hooks";
import { config } from "./HumidityChart.schema";
import { Droplet } from "lucide-react";

export const HumidityChart = () => {
  const { data } = useGetDeviceHumidityForGraph({
    deviceId: "c8e16bcf-7bda-426c-bd99-4e2d3f5092f9",
  });

  return (
    <CardWithHeader
      title="Humidity"
      description="Outdoor humidity"
      icon={Droplet}
      cardClassName="flex-grow"
      contentClassName="h-80"
    >
      <ResponsiveContainer width="100%" height="100%">
        <ChartContainer config={config}>
          <AreaChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 5)}
            />
            <YAxis
              dataKey="humidity"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="humidity"
              type="natural"
              fill="var(--color-humidity)"
              fillOpacity={0.4}
              stroke="var(--color-humidity)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </ResponsiveContainer>
    </CardWithHeader>
  );
};
