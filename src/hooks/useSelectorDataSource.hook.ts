import { useGetAllDevices } from "@/api/hooks/devices.hooks";
import { type DisplayedDevicesKey } from "@/utils/localStorageKeys";
import { useLocalStorageDevice } from "./useLocalStorageDevice.hook";
import { useChangeDisplayedDevice } from "./useChangedDisplayedDevice.hook";

export const useSelectorDataSource = (
  deviceId: string | undefined,
  deviceLocalKey: undefined | DisplayedDevicesKey,
  devicesType: "ALL" | "THERMOMETER"
) => {
  const isLocalKey = !!deviceLocalKey;

  const { data: allDevices } = useGetAllDevices(isLocalKey);

  const devices =
    devicesType === "ALL"
      ? allDevices
      : allDevices?.filter((item) => item.type === devicesType);

  const items = useChangeDisplayedDevice(
    deviceLocalKey as DisplayedDevicesKey,
    devices || []
  );
  const device = useLocalStorageDevice(deviceLocalKey as DisplayedDevicesKey);

  const filteredItems = isLocalKey ? items : [];
  const selectedDevice = isLocalKey ? device : null;

  return {
    isLocalKey,
    items: filteredItems,
    id: isLocalKey ? selectedDevice?.deviceId : deviceId,
  };
};
