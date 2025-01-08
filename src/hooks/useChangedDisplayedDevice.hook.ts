import { type DisplayedDevicesKey } from "@/utils/localStorageKeys";
import { useLocalStorageDevice } from "./useLocalStorageDevice.hook";

type DataType = {
  id: string;
  name: string;
};

export const useChangeDisplayedDevice = <T extends DataType[]>(
  displayedDevicesKeys: DisplayedDevicesKey,
  data?: T
) => {
  const { setDeviceId } = useLocalStorageDevice(displayedDevicesKeys);

  return (
    data?.map(({ id, name }) => ({
      label: name,
      onClick: () => setDeviceId(id),
    })) || []
  );
};
