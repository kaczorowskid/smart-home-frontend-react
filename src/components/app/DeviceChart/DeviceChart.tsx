import { useIntl } from "react-intl";
import { endOfDay, startOfDay } from "date-fns";
import { dateFormatter } from "@/utils/date.utils";
import { dateLastDay } from "@/constants/date.consts";
import { useGetDeviceDataForGraph } from "@/api/hooks/devices.hooks";
import { useSelectorDataSource } from "@/hooks/useSelectorDataSource.hook";
import {
  ChartTooltip,
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Line,
  XAxis,
  YAxis,
  LineChart,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { config } from "./DeviceChart.schemas";
import { Dropdown } from "../../common/Dropdown";
import { type DeviceChartProps } from "./DeviceChart.types";
import { CardWithHeader } from "../../common/CardWithHeader";

const { to, from } = dateLastDay;
const { onlyHour, hourAndDate } = dateFormatter;

export const DeviceChart = ({
  icon,
  extra,
  dateTo,
  deviceId,
  dateFrom,
  chartType,
  description,
  deviceLocalKey,
}: DeviceChartProps) => {
  const { id, items, isLocalKey } = useSelectorDataSource(
    deviceId,
    deviceLocalKey,
    "THERMOMETER"
  );

  const { formatMessage } = useIntl();

  const { data } = useGetDeviceDataForGraph({
    deviceId: id || "",
    dateTo: (dateTo && endOfDay(dateTo)) || to,
    dateFrom: (dateFrom && startOfDay(dateFrom)) || from,
  });

  return (
    <CardWithHeader
      icon={icon}
      extra={extra}
      cardClassName="flex-1"
      contentClassName="h-80"
      description={description}
      title={
        isLocalKey ? (
          <Dropdown
            items={items}
            triggerComponent={
              <div className="cursor-pointer hover:text-muted-foreground">
                {data?.name ||
                  formatMessage({
                    id: "component.click-to-attach-device",
                  })}
              </div>
            }
          />
        ) : (
          <div>
            {data?.name ||
              formatMessage({ id: "component.click-to-attach-device" })}
          </div>
        )
      }
    >
      <ResponsiveContainer width="100%" height="100%">
        <ChartContainer config={config}>
          <LineChart data={data?.data} accessibilityLayer>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickMargin={8}
              minTickGap={50}
              tickLine={false}
              axisLine={false}
              interval="preserveStartEnd"
              tickFormatter={(value) => onlyHour(value) || ""}
            />
            <YAxis
              width={30}
              tickMargin={8}
              tickLine={false}
              axisLine={false}
              domain={["dataMin", "dataMax"]}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="dot"
                  labelFormatter={(label) => hourAndDate(label)}
                />
              }
            />
            {(chartType === "temperature" || chartType === "all") && (
              <Line
                dot={false}
                type="natural"
                dataKey="temperature"
                stroke="var(--color-temperature)"
              />
            )}
            {(chartType === "humidity" || chartType === "all") && (
              <Line
                dot={false}
                type="natural"
                dataKey="humidity"
                stroke="var(--color-humidity)"
              />
            )}
          </LineChart>
        </ChartContainer>
      </ResponsiveContainer>
    </CardWithHeader>
  );
};
