import { DevicesTable } from "@/views/app/Options/DevicesTable/DevicesTable";
import { PageWrapper } from "@/components/common/PageWrapper";
import { displayedDevicesKeys } from "@/utils/localStorageKeys";
import { Droplet, LayoutDashboard, Thermometer } from "lucide-react";
import { DeviceChart } from "@/components/app/DeviceChart";
import { DeviceItem } from "@/components/app/DeviceItem/DeviceItem";
import { dateLastDay } from "@/constants/date.consts";
import { dateFormatter } from "@/utils/date.utils";
import { FormattedMessage } from "react-intl";

const {
  dashboardTopDeviceLeftCorner,
  dashboardTopDeviceLeftMiddle,
  dashboardTopDeviceRightMiddle,
  dashboardTopDeviceRightCorner,
  dashboardTemperatureChart,
  dashboardHumidityChart,
} = displayedDevicesKeys;

const { from, to } = dateLastDay;
const { dateRange } = dateFormatter;
const formattedDateRange = dateRange(from, to);

export const Dashboard = () => (
  <PageWrapper
    title={<FormattedMessage id="view.dashboard" />}
    icon={LayoutDashboard}
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
        description={
          <FormattedMessage
            id="view.temperature"
            values={{ date: formattedDateRange }}
          />
        }
        deviceLocalKey={dashboardTemperatureChart}
      />
      <DeviceChart
        dateTo={to}
        dateFrom={from}
        icon={Droplet}
        chartType="humidity"
        description={
          <FormattedMessage
            id="view.humidity"
            values={{ date: formattedDateRange }}
          />
        }
        deviceLocalKey={dashboardHumidityChart}
      />
    </div>
    <div className="hidden lg:block">
      <DevicesTable isDashboardPart />
    </div>
  </PageWrapper>
);
