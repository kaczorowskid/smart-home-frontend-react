import { useChangeDisplayedDevice } from "@/hooks/useChangedDisplayedDevice.hook";
import { BlindCard } from "./BlindCard";
import { DeviceItemProps } from "./DeviceItem.types";
import { EmptyDevice } from "./EmptyDevice";
import { ThermometerCard } from "./ThermometerCard";
import { useLocalStorageDevice } from "@/hooks/useLocalStorageDevice.hook";
import { useGetAllDevices, useGetDevice } from "./DeviceItem.hooks";

export const DeviceItem = ({ displayedDevicesKeys }: DeviceItemProps) => {
  const { deviceId } = useLocalStorageDevice(displayedDevicesKeys);
  const { data: allDevices } = useGetAllDevices();
  const { data } = useGetDevice({ id: deviceId || "" });
  const items = useChangeDisplayedDevice(displayedDevicesKeys, allDevices);

  if (data?.id === undefined) {
    return <EmptyDevice items={items} />;
  }

  return data?.type === "THERMOMETER" ? (
    <ThermometerCard
      name={data.name}
      items={items}
      thermometerData={data?.data}
    />
  ) : (
    <BlindCard name={data.name} items={items} blindValue={data.value} />
  );
};
