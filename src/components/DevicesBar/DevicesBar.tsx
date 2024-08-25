import { displayedDevicesKeys } from "@/utils/localStorageKeys";
import { DeviceItem } from "./DeviceItem/DeviceItem";

export const DevicesBar = () => (
  <div className="grid grid-cols-4 gap-5">
    <DeviceItem
      displayedDevicesKeys={displayedDevicesKeys.dashboardTopDeviceLeftCorner}
    />
    <DeviceItem
      displayedDevicesKeys={displayedDevicesKeys.dashboardTopDeviceLeftMiddle}
    />
    <DeviceItem
      displayedDevicesKeys={displayedDevicesKeys.dashboardTopDeviceRightMiddle}
    />
    <DeviceItem
      displayedDevicesKeys={displayedDevicesKeys.dashboardTopDeviceRightCorner}
    />
  </div>
);
