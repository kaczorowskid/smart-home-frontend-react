import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { type DateRange } from "react-day-picker";
import { dateFormatter } from "@/utils/date.utils";
import { dateLastDay } from "@/constants/date.consts";
import { DeviceChart } from "@/components/app/DeviceChart";
import { DateSelector } from "@/components/app/DateSelector";
import { PageWrapper } from "@/components/common/PageWrapper";
import { displayedDevicesKeys } from "@/utils/localStorageKeys";
import { Cloud, Droplet, ChartArea, Thermometer } from "lucide-react";

const { grapshAllCharts, graphsHumidityChart, graphsTemperatureChart } =
  displayedDevicesKeys;

const { dateRange } = dateFormatter;

export const Graphs = () => {
  const [date, setDate] = useState<DateRange | undefined>(dateLastDay);
  const formattedDateRange = dateRange(date?.from, date?.to);

  return (
    <PageWrapper icon={ChartArea} title={<FormattedMessage id="view.graphs" />}>
      <div className="flex flex-col gap-5">
        <DeviceChart
          dateTo={date?.to}
          icon={Thermometer}
          dateFrom={date?.from}
          chartType="temperature"
          deviceLocalKey={graphsTemperatureChart}
          description={
            <FormattedMessage
              id="view.temperature"
              values={{ date: formattedDateRange }}
            />
          }
          extra={
            <DateSelector
              date={date}
              setDate={setDate}
              disabledTypeChange
              chartType="temperature"
              setChartType={undefined}
            />
          }
        />
        <DeviceChart
          icon={Droplet}
          dateTo={date?.to}
          chartType="humidity"
          dateFrom={date?.from}
          deviceLocalKey={graphsHumidityChart}
          description={
            <FormattedMessage
              id="view.humidity"
              values={{ date: formattedDateRange }}
            />
          }
        />
        <DeviceChart
          icon={Cloud}
          chartType="all"
          dateTo={date?.to}
          dateFrom={date?.from}
          deviceLocalKey={grapshAllCharts}
          description={
            <FormattedMessage
              id="view.temphum"
              values={{ date: formattedDateRange }}
            />
          }
        />
      </div>
    </PageWrapper>
  );
};
