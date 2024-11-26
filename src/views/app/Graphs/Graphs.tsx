import { DateSelector } from "@/components/app/DateSelector";
import { DeviceChart } from "@/components/app/DeviceChart";
import { PageWrapper } from "@/components/common/PageWrapper";
import { dateLastDay } from "@/constants/date.consts";
import { dateFormatter } from "@/utils/date.utils";
import { displayedDevicesKeys } from "@/utils/localStorageKeys";
import { ChartArea, Cloud, Droplet, Thermometer } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { useIntl } from "react-intl";

const { graphsTemperatureChart, graphsHumidityChart, grapshAllCharts } =
  displayedDevicesKeys;

const { onlyDate } = dateFormatter;

export const Graphs = () => {
  const { formatMessage } = useIntl();
  const [date, setDate] = useState<DateRange | undefined>(dateLastDay);

  const formattedDateRange = `${onlyDate(date?.from)} - ${onlyDate(date?.to)}`;

  return (
    <PageWrapper title={formatMessage({ id: "view.graphs" })} icon={ChartArea}>
      <div className="flex flex-col gap-5">
        <DeviceChart
          dateTo={date?.to}
          dateFrom={date?.from}
          icon={Thermometer}
          chartType="temperature"
          description={`${formatMessage({
            id: "view.temperature",
          })} - ${formattedDateRange}`}
          deviceLocalKey={graphsTemperatureChart}
          extra={
            <DateSelector
              disabledTypeChange
              date={date}
              setDate={setDate}
              chartType="temperature"
              setChartType={undefined}
            />
          }
        />
        <DeviceChart
          dateTo={date?.to}
          dateFrom={date?.from}
          icon={Droplet}
          chartType="humidity"
          description={`${formatMessage({
            id: "view.humidity",
          })} - ${formattedDateRange}`}
          deviceLocalKey={graphsHumidityChart}
        />
        <DeviceChart
          dateTo={date?.to}
          dateFrom={date?.from}
          icon={Cloud}
          chartType="all"
          description={`${formatMessage({
            id: "view.temphum",
          })} - ${formattedDateRange}`}
          deviceLocalKey={grapshAllCharts}
        />
      </div>
    </PageWrapper>
  );
};
