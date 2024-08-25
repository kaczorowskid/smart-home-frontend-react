import { DeviceChart } from "@/components/DeviceChart/DeviceChart";
import { DevicesBar } from "@/components/DevicesBar/DevicesBar";
import { DevicesTable } from "@/components/DevicesTable/DevicesTable";
import { localShorageKeys } from "@/utils/localStorageKeys";
import { Droplet, Thermometer } from "lucide-react";

export const Dashboard = () => (
  <>
    <DevicesBar />
    <div className="flex justify-between gap-5 py-5">
      <DeviceChart
        localStorageKey={localShorageKeys.dashboardTemperatureChart}
        chartType="temperature"
        description="Temperature"
        icon={Thermometer}
      />
      <DeviceChart
        localStorageKey={localShorageKeys.dashboardHumidityChart}
        chartType="humidity"
        description="Humidity"
        icon={Droplet}
      />
    </div>
    <DevicesTable isDashboardPart />
  </>
);
