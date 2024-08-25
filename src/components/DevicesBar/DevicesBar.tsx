import { localShorageKeys } from "@/utils/localStorageKeys";
import { DeviceItem } from "./DeviceItem/DeviceItem";

export const DevicesBar = () => (
  <div className="grid grid-cols-4 gap-5">
    <DeviceItem
      localStorageKey={localShorageKeys.dashboardTopDeviceLeftCorner}
    />
    <DeviceItem
      localStorageKey={localShorageKeys.dashboardTopDeviceLeftMiddle}
    />
    <DeviceItem
      localStorageKey={localShorageKeys.dashboardTopDeviceRightMiddle}
    />
    <DeviceItem
      localStorageKey={localShorageKeys.dashboardTopDeviceRightCorner}
    />
  </div>
);
