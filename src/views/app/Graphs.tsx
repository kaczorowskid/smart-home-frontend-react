import { DeviceChart } from "@/components/app/DeviceChart";
import { PageWrapper } from "@/components/common/PageWrapper";
import { displayedDevicesKeys } from "@/utils/localStorageKeys";
import { ChartArea, Cloud, Droplet, Thermometer } from "lucide-react";

export const Graphs = () => (
  <PageWrapper title="Graphs" icon={ChartArea}>
    <div className="flex flex-col gap-5">
      <DeviceChart
        displayedDeviceKeys={displayedDevicesKeys.graphsTemperatureChart}
        chartType="temperature"
        description="Temperature"
        icon={Thermometer}
      />
      <DeviceChart
        displayedDeviceKeys={displayedDevicesKeys.graphsHumidityChart}
        chartType="humidity"
        description="Humidity"
        icon={Droplet}
      />
      <DeviceChart
        displayedDeviceKeys={displayedDevicesKeys.grapshAllCharts}
        chartType="all"
        description="Temperature & Humidity"
        icon={Cloud}
      />
    </div>
  </PageWrapper>
);
