import { DeviceChart } from "@/components/app/DeviceChart";
import { PageWrapper } from "@/components/common/PageWrapper";
import { displayedDevicesKeys } from "@/utils/localStorageKeys";
import { ChartArea, Cloud, Droplet, Thermometer } from "lucide-react";

const { graphsTemperatureChart, graphsHumidityChart, grapshAllCharts } =
  displayedDevicesKeys;

export const Graphs = () => (
  <PageWrapper title="Graphs" icon={ChartArea}>
    <div className="flex flex-col gap-5">
      <DeviceChart
        icon={Thermometer}
        chartType="temperature"
        description="Temperature"
        deviceLocalKey={graphsTemperatureChart}
      />
      <DeviceChart
        icon={Droplet}
        chartType="humidity"
        description="Humidity"
        deviceLocalKey={graphsHumidityChart}
      />
      <DeviceChart
        icon={Cloud}
        chartType="all"
        description="Temperature & Humidity"
        deviceLocalKey={grapshAllCharts}
      />
    </div>
  </PageWrapper>
);
