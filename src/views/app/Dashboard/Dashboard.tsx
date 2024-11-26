import { DevicesTable } from "@/views/app/Options/DevicesTable/DevicesTable";
import { PageWrapper } from "@/components/common/PageWrapper";
import { displayedDevicesKeys } from "@/utils/localStorageKeys";
import { Droplet, LayoutDashboard, Thermometer } from "lucide-react";
import { DeviceChart } from "@/components/app/DeviceChart";
import { DeviceItem } from "@/components/app/DeviceItem/DeviceItem";
import { dateLastDay } from "@/constants/date.consts";
import { dateFormatter } from "@/utils/date.utils";
import { useIntl } from "react-intl";

const {
  dashboardTopDeviceLeftCorner,
  dashboardTopDeviceLeftMiddle,
  dashboardTopDeviceRightMiddle,
  dashboardTopDeviceRightCorner,
  dashboardTemperatureChart,
  dashboardHumidityChart,
} = displayedDevicesKeys;

const { from, to } = dateLastDay;
const { onlyDate } = dateFormatter;
const formattedDateRange = `${onlyDate(from)} - ${onlyDate(to)}`;

export const Dashboard = () => {
  const { formatMessage } = useIntl();

  return (
    <PageWrapper
      title={formatMessage({ id: "view.dashboard" })}
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
          description={`${formatMessage({
            id: "view.temperature",
          })} - ${formattedDateRange}`}
          deviceLocalKey={dashboardTemperatureChart}
        />
        <DeviceChart
          dateTo={to}
          dateFrom={from}
          icon={Droplet}
          chartType="humidity"
          description={`${formatMessage({
            id: "view.humidity",
          })} - ${formattedDateRange}`}
          deviceLocalKey={dashboardHumidityChart}
        />
      </div>
      <div className="hidden lg:block">
        <DevicesTable isDashboardPart />
      </div>
    </PageWrapper>
  );
};
