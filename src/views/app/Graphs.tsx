import { DateSelector } from "@/components/app/DateSelector";
import { DeviceChart } from "@/components/app/DeviceChart";
import { PageWrapper } from "@/components/common/PageWrapper";
import { dateLastDay } from "@/constants/date.consts";
import { displayedDevicesKeys } from "@/utils/localStorageKeys";
import { ChartArea, Cloud, Droplet, Thermometer } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";

const { graphsTemperatureChart, graphsHumidityChart, grapshAllCharts } =
  displayedDevicesKeys;

export const Graphs = () => {
  const [date, setDate] = useState<DateRange | undefined>(dateLastDay);

  return (
    <PageWrapper title="Graphs" icon={ChartArea}>
      <div className="flex flex-col gap-5">
        <DeviceChart
          dateTo={date?.to}
          dateFrom={date?.from}
          icon={Thermometer}
          chartType="temperature"
          description="Temperature"
          deviceLocalKey={graphsTemperatureChart}
          extra={
            <DateSelector
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
          description="Humidity"
          deviceLocalKey={graphsHumidityChart}
        />
        <DeviceChart
          dateTo={date?.to}
          dateFrom={date?.from}
          icon={Cloud}
          chartType="all"
          description="Temperature & Humidity"
          deviceLocalKey={grapshAllCharts}
        />
      </div>
    </PageWrapper>
  );
};
