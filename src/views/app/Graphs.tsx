import { DeviceChart } from "@/components/app/DeviceChart";
import { displayedDevicesKeys } from "@/utils/localStorageKeys";
import { Cloud, Droplet, Thermometer } from "lucide-react";

export const Graphs = () => (
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
);
