import { DateSelector } from "@/components/app/DateSelector";
import { DeviceChart } from "@/components/app/DeviceChart";
import { PageWrapper } from "@/components/common/PageWrapper";
import { dateLastDay } from "@/constants/date.consts";
import { dateFormatter } from "@/utils/date.utils";
import { displayedDevicesKeys } from "@/utils/localStorageKeys";
import { ChartArea, Cloud, Droplet, Thermometer } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";

const { graphsTemperatureChart, graphsHumidityChart, grapshAllCharts } =
  displayedDevicesKeys;

const { onlyDate } = dateFormatter;

export const Graphs = () => {
  const [date, setDate] = useState<DateRange | undefined>(dateLastDay);

  const formattedDateRange = `${onlyDate(date?.from)} - ${onlyDate(date?.to)}`;

  return (
    <PageWrapper title="Graphs" icon={ChartArea}>
      <div className="flex flex-col gap-5">
        <DeviceChart
          dateTo={date?.to}
          dateFrom={date?.from}
          icon={Thermometer}
          chartType="temperature"
          description={`Temperature - ${formattedDateRange}`}
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
          description={`Humidity - ${formattedDateRange}`}
          deviceLocalKey={graphsHumidityChart}
        />
        <DeviceChart
          dateTo={date?.to}
          dateFrom={date?.from}
          icon={Cloud}
          chartType="all"
          description={`Temperature & Humidity - ${formattedDateRange}`}
          deviceLocalKey={grapshAllCharts}
        />
      </div>
    </PageWrapper>
  );
};
