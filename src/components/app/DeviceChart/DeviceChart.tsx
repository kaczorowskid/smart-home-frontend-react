import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CardWithHeader } from "../../common/CardWithHeader";
import { DeviceChartProps } from "./DeviceChart.types";
import { config } from "./DeviceChart.schemas";
import { Dropdown } from "../../common/Dropdown";
import { useSelectorDataSource } from "@/hooks/useSelectorDataSource.hook";
import { useGetDeviceDataForGraph } from "@/api/hooks/devices.hooks";
import { dateLastDay } from "@/constants/date.consts";
import { dateFormatter } from "@/utils/date.utils";
import { endOfDay, startOfDay } from "date-fns";

const { from, to } = dateLastDay;

export const DeviceChart = ({
  chartType,
  description,
  icon,
  deviceId,
  deviceLocalKey,
  extra,
  dateFrom,
  dateTo,
}: DeviceChartProps) => {
  const { isLocalKey, id, items } = useSelectorDataSource(
    deviceId,
    deviceLocalKey,
    "THERMOMETER"
  );

  const { data } = useGetDeviceDataForGraph({
    deviceId: id || "",
    dateFrom: (dateFrom && startOfDay(dateFrom)) || from,
    dateTo: (dateTo && endOfDay(dateTo)) || to,
  });

  return (
    <CardWithHeader
      title={
        isLocalKey ? (
          <Dropdown
            items={items}
            triggerComponent={
              <div className="cursor-pointer hover:text-muted-foreground">
                {data?.name || "Click to attach device"}
              </div>
            }
          />
        ) : (
          <div>{data?.name || "Click to attach device"}</div>
        )
      }
      description={description}
      icon={icon}
      cardClassName="flex-grow"
      contentClassName="h-80"
      extra={extra}
    >
      <ResponsiveContainer width="100%" height="100%">
        <ChartContainer config={config}>
          <LineChart accessibilityLayer data={data?.data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              interval="preserveStartEnd"
              minTickGap={50}
              tickFormatter={(value) => value.substring(11, 16)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              domain={["dataMin", "dataMax"]}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={dateFormatter.hourAndDate}
                  indicator="dot"
                />
              }
            />
            {(chartType === "temperature" || chartType === "all") && (
              <Line
                dataKey="temperature"
                type="natural"
                stroke="var(--color-temperature)"
                dot={false}
              />
            )}
            {(chartType === "humidity" || chartType === "all") && (
              <Line
                dataKey="humidity"
                type="natural"
                stroke="var(--color-humidity)"
                dot={false}
              />
            )}
          </LineChart>
        </ChartContainer>
      </ResponsiveContainer>
    </CardWithHeader>
  );
};
