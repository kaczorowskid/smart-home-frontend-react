import { DeviceChart } from "@/components/app/DeviceChart";
import { DevicesTable } from "@/views/app/Settings/DevicesTable/DevicesTable";
import { PageWrapper } from "@/components/common/PageWrapper";
import { displayedDevicesKeys } from "@/utils/localStorageKeys";
import { Droplet, LayoutDashboard, Thermometer } from "lucide-react";
import { DeviceItem } from "@/components/app/DeviceItem";

const {
  dashboardTopDeviceLeftCorner,
  dashboardTopDeviceLeftMiddle,
  dashboardTopDeviceRightMiddle,
  dashboardTopDeviceRightCorner,
  dashboardTemperatureChart,
  dashboardHumidityChart,
} = displayedDevicesKeys;

export const Dashboard = () => (
  <PageWrapper title="Dashboard" icon={LayoutDashboard}>
    <div className="grid grid-cols-4 gap-5">
      <DeviceItem
        type="LOCAL"
        displayedDeviceKey={dashboardTopDeviceLeftCorner}
      />
      <DeviceItem
        type="LOCAL"
        displayedDeviceKey={dashboardTopDeviceLeftMiddle}
      />
      <DeviceItem
        type="LOCAL"
        displayedDeviceKey={dashboardTopDeviceRightMiddle}
      />
      <DeviceItem
        type="LOCAL"
        displayedDeviceKey={dashboardTopDeviceRightCorner}
      />
    </div>
    <div className="flex justify-between gap-5 py-5">
      <DeviceChart
        icon={Thermometer}
        chartType="temperature"
        description="Temperature"
        displayedDeviceKey={dashboardTemperatureChart}
      />
      <DeviceChart
        icon={Droplet}
        chartType="humidity"
        description="Humidity"
        displayedDeviceKey={dashboardHumidityChart}
      />
    </div>
    <DevicesTable isDashboardPart />
  </PageWrapper>
);
