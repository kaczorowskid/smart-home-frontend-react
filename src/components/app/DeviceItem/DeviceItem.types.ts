import { DisplayedDevicesKey } from "@/utils/localStorageKeys";

export type DeviceWithLocalKeyProps = {
  type: "LOCAL";
  displayedDeviceKey: DisplayedDevicesKey;
};

export type DeviceWithDeviceIdProps = {
  type: "ID";
  itemId: string;
};

export type DeviceItemProps = DeviceWithLocalKeyProps | DeviceWithDeviceIdProps;
