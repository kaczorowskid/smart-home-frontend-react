import { FormattedMessage } from "react-intl";
import { dateFormatter } from "@/utils/date.utils";
import { dateLastDay } from "@/constants/date.consts";
import { DeviceChart } from "@/components/app/DeviceChart";
import { PageWrapper } from "@/components/common/PageWrapper";
import { displayedDevicesKeys } from "@/utils/localStorageKeys";
import { DeviceItem } from "@/components/app/DeviceItem/DeviceItem";
import { Droplet, Thermometer, LayoutDashboard } from "lucide-react";
import { DevicesTable } from "@/views/app/Options/DevicesTable/DevicesTable";

const {
  dashboardHumidityChart,
  dashboardTemperatureChart,
  dashboardTopDeviceLeftCorner,
  dashboardTopDeviceLeftMiddle,
  dashboardTopDeviceRightMiddle,
  dashboardTopDeviceRightCorner,
} = displayedDevicesKeys;

const { to, from } = dateLastDay;
const { dateRange } = dateFormatter;
const formattedDateRange = dateRange(from, to);

export const Dashboard = () => (
  <PageWrapper
    icon={LayoutDashboard}
    title={<FormattedMessage id="view.dashboard" />}
  >
    <div className="gap-5 flex flex-col lg:grid lg:grid-cols-4">
      <DeviceItem deviceLocalKey={dashboardTopDeviceLeftCorner} />
      <DeviceItem deviceLocalKey={dashboardTopDeviceLeftMiddle} />
      <DeviceItem deviceLocalKey={dashboardTopDeviceRightMiddle} />
      <DeviceItem deviceLocalKey={dashboardTopDeviceRightCorner} />
    </div>
    <div className="gap-5 pt-5 flex flex-col lg:flex lg:flex-row lg:justify-between lg:py-5">
      <DeviceChart
        dateTo={to}
        dateFrom={from}
        icon={Thermometer}
        chartType="temperature"
        deviceLocalKey={dashboardTemperatureChart}
        description={
          <FormattedMessage
            id="view.temperature"
            values={{ date: formattedDateRange }}
          />
        }
      />
      <DeviceChart
        dateTo={to}
        icon={Droplet}
        dateFrom={from}
        chartType="humidity"
        deviceLocalKey={dashboardHumidityChart}
        description={
          <FormattedMessage
            id="view.humidity"
            values={{ date: formattedDateRange }}
          />
        }
      />
    </div>
    <div className="hidden lg:block">
      <DevicesTable isDashboardPart />
    </div>
  </PageWrapper>
);
