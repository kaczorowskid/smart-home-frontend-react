import { DisplayedDevicesKey } from "@/utils/localStorageKeys";
import { useChangeDisplayedDevice } from "./useChangedDisplayedDevice.hook";
import { useLocalStorageDevice } from "./useLocalStorageDevice.hook";
import { useGetAllDevices } from "@/views/app/Settings/DevicesTable/DevicesTable.hooks";

export const useSelectorDataSource = (
  deviceId: string | undefined,
  deviceLocalKey: DisplayedDevicesKey | undefined,
  devicesType: "ALL" | "THERMOMETER"
) => {
  const isLocalKey = !!deviceLocalKey;

  const { data: allDevices } = useGetAllDevices(isLocalKey);
  const devices =
    devicesType === "ALL"
      ? allDevices
      : allDevices?.filter((item) => item.type === devicesType);

  const items = isLocalKey
    ? useChangeDisplayedDevice(deviceLocalKey, devices)
    : [];

  const device = isLocalKey ? useLocalStorageDevice(deviceLocalKey) : null;

  return {
    isLocalKey,
    items,
    id: isLocalKey ? device?.deviceId : deviceId,
  };
};
