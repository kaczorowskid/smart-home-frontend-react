import { useGetAllDevices } from "@/components/DevicesTable/DevicesTable.hooks";
import { useLocalStorageDevice } from "./useLocalStorageDevice.hook";
import { LocalStorageKey } from "@/utils/localStorageKeys";

export const useChangeDisplayedDevice = (localStorageKey: LocalStorageKey) => {
  const { data } = useGetAllDevices();
  const { setDeviceId } = useLocalStorageDevice(localStorageKey);

  return data?.map(({ id, name }) => ({
    label: name,
    onClick: () => setDeviceId(id),
  }));
};
