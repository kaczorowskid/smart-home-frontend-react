import { DeviceChart } from "@/components/app/DeviceChart";
import { DevicesBar } from "@/components/app/DevicesBar";
import { DevicesTable } from "@/components/app/DevicesTable/DevicesTable";
import { PageWrapper } from "@/components/common/PageWrapper";
import { displayedDevicesKeys } from "@/utils/localStorageKeys";
import { Droplet, LayoutDashboard, Thermometer } from "lucide-react";

export const Dashboard = () => (
  <PageWrapper title="Dashboard" icon={LayoutDashboard}>
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
  </PageWrapper>
);
