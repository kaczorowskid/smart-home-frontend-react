import { DateSelector } from "@/components/app/DateSelector";
import { DeviceChart } from "@/components/app/DeviceChart";
import { PageWrapper } from "@/components/common/PageWrapper";
import { dateLastDay } from "@/constants/date.consts";
import { dateFormatter } from "@/utils/date.utils";
import { displayedDevicesKeys } from "@/utils/localStorageKeys";
import { ChartArea, Cloud, Droplet, Thermometer } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { FormattedMessage } from "react-intl";

const { graphsTemperatureChart, graphsHumidityChart, grapshAllCharts } =
  displayedDevicesKeys;

const { dateRange } = dateFormatter;

export const Graphs = () => {
  const [date, setDate] = useState<DateRange | undefined>(dateLastDay);
  const formattedDateRange = dateRange(date?.from, date?.to);

  return (
    <PageWrapper title={<FormattedMessage id="view.graphs" />} icon={ChartArea}>
      <div className="flex flex-col gap-5">
        <DeviceChart
          dateTo={date?.to}
          dateFrom={date?.from}
          icon={Thermometer}
          chartType="temperature"
          description={
            <FormattedMessage
              id="view.temperature"
              values={{ date: formattedDateRange }}
            />
          }
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
          description={
            <FormattedMessage
              id="view.humidity"
              values={{ date: formattedDateRange }}
            />
          }
          deviceLocalKey={graphsHumidityChart}
        />
        <DeviceChart
          dateTo={date?.to}
          dateFrom={date?.from}
          icon={Cloud}
          chartType="all"
          description={
            <FormattedMessage
              id="view.temphum"
              values={{ date: formattedDateRange }}
            />
          }
          deviceLocalKey={grapshAllCharts}
        />
      </div>
    </PageWrapper>
  );
};
