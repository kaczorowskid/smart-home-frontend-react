import { DeviceChart } from "@/components/DeviceChart";
import { DevicesBar } from "@/components/DevicesBar";
import { DevicesTable } from "@/components/DevicesTable";
import { displayedDevicesKeys } from "@/utils/localStorageKeys";
import { Droplet, Thermometer } from "lucide-react";

export const Dashboard = () => (
  <>
    <DevicesBar />
    <div className="flex justify-between gap-5 py-5">
      <DeviceChart
        displayedDeviceKeys={displayedDevicesKeys.dashboardTemperatureChart}
        chartType="temperature"
        description="Temperature"
        icon={Thermometer}
      />
      <DeviceChart
        displayedDeviceKeys={displayedDevicesKeys.dashboardHumidityChart}
        chartType="humidity"
        description="Humidity"
        icon={Droplet}
      />
    </div>
    <DevicesTable isDashboardPart />
  </>
);
