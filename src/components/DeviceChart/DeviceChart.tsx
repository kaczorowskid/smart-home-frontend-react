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
import { DeviceChartProps } from "./DeviceChart.types";
import { useGetDeviceDataForGraph } from "./DeviceChart.hooks";
import { config } from "./DeviceChart.schemas";
import { useLocalStorageDevice } from "@/hooks/useLocalStorageDevice.hook";
import { useChangeDisplayedDevice } from "@/hooks/useChangedDisplayedDevice.hook";
import { Dropdown } from "../common/Dropdown/Dropdown";

export const DeviceChart = ({
  chartType,
  description,
  icon,
  localStorageKey,
}: DeviceChartProps) => {
  const { deviceId } = useLocalStorageDevice(localStorageKey);
  const items = useChangeDisplayedDevice(localStorageKey);
  const { data } = useGetDeviceDataForGraph({
    deviceId: deviceId || "",
  });

  return (
    <CardWithHeader
      title={
        <Dropdown
          items={items || []}
          triggerComponent={
            <div className="cursor-pointer hover:text-muted-foreground">
              {data?.name}
            </div>
          }
        />
      }
      description={description}
      icon={icon}
      cardClassName="flex-grow"
      contentClassName="h-80"
    >
      <ResponsiveContainer width="100%" height="100%">
        <ChartContainer config={config}>
          <AreaChart accessibilityLayer data={data?.thermometers}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 5)}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            {(chartType === "temperature" || chartType === "all") && (
              <Area
                dataKey="temperature"
                type="natural"
                fill="var(--color-temperature)"
                fillOpacity={0.4}
                stroke="var(--color-temperature)"
                stackId="a"
              />
            )}
            {(chartType === "humidity" || chartType === "all") && (
              <Area
                dataKey="humidity"
                type="natural"
                fill="var(--color-humidity)"
                fillOpacity={0.4}
                stroke="var(--color-humidity)"
                stackId="a"
              />
            )}
          </AreaChart>
        </ChartContainer>
      </ResponsiveContainer>
    </CardWithHeader>
  );
};
