import { DevicesTable } from "@/views/app/Options/DevicesTable/DevicesTable";
import { PageWrapper } from "@/components/common/PageWrapper";
import { displayedDevicesKeys } from "@/utils/localStorageKeys";
import { Droplet, LayoutDashboard, Thermometer } from "lucide-react";
import { DeviceChart } from "@/components/app/DeviceChart";
import { DeviceItem } from "@/components/app/DeviceItem/DeviceItem";
import { dateLastDay } from "@/constants/date.consts";

const {
  dashboardTopDeviceLeftCorner,
  dashboardTopDeviceLeftMiddle,
  dashboardTopDeviceRightMiddle,
  dashboardTopDeviceRightCorner,
  dashboardTemperatureChart,
  dashboardHumidityChart,
} = displayedDevicesKeys;

const { from, to } = dateLastDay;

export const Dashboard = () => (
  <PageWrapper title="Dashboard" icon={LayoutDashboard}>
    <div className="grid grid-cols-4 gap-5">
      <DeviceItem deviceLocalKey={dashboardTopDeviceLeftCorner} />
      <DeviceItem deviceLocalKey={dashboardTopDeviceLeftMiddle} />
      <DeviceItem deviceLocalKey={dashboardTopDeviceRightMiddle} />
      <DeviceItem deviceLocalKey={dashboardTopDeviceRightCorner} />
    </div>
    <div className="flex justify-between gap-5 py-5">
      <DeviceChart
        dateTo={to}
        dateFrom={from}
        icon={Thermometer}
        chartType="temperature"
        description="Temperature"
        deviceLocalKey={dashboardTemperatureChart}
      />
      <DeviceChart
        dateTo={to}
        dateFrom={from}
        icon={Droplet}
        chartType="humidity"
        description="Humidity"
        deviceLocalKey={dashboardHumidityChart}
      />
    </div>
    <DevicesTable isDashboardPart />
  </PageWrapper>
);
