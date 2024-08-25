import { useGetAllDevices } from "@/components/DevicesTable/DevicesTable.hooks";
import { useLocalStorageDevice } from "./useLocalStorageDevice.hook";
import { DisplayedDevicesKey } from "@/utils/localStorageKeys";

export const useChangeDisplayedDevice = (
  displayedDevicesKeys: DisplayedDevicesKey
) => {
  const { data } = useGetAllDevices();
  const { setDeviceId } = useLocalStorageDevice(displayedDevicesKeys);

  return data?.map(({ id, name }) => ({
    label: name,
    onClick: () => setDeviceId(id),
  }));
};
