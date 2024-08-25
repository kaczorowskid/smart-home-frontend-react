import { DeviceChart } from "@/components/DeviceChart/DeviceChart";
import { localShorageKeys } from "@/utils/localStorageKeys";
import { Cloud, Droplet, Thermometer } from "lucide-react";

export const Graphs = () => (
  <div className="flex flex-col gap-5">
    <DeviceChart
      localStorageKey={localShorageKeys.graphsTemperatureChart}
      chartType="temperature"
      description="Temperature"
      icon={Thermometer}
    />
    <DeviceChart
      localStorageKey={localShorageKeys.graphsHumidityChart}
      chartType="humidity"
      description="Humidity"
      icon={Droplet}
    />
    <DeviceChart
      localStorageKey={localShorageKeys.grapshAllCharts}
      chartType="all"
      description="Temperature & Humidity"
      icon={Cloud}
    />
  </div>
);
