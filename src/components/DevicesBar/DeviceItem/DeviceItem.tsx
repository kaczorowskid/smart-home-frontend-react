import { useChangeDisplayedDevice } from "@/hooks/useChangedDisplayedDevice.hook";
import { BlindCard } from "./BlindCard/BlindCard";
import { DeviceItemProps } from "./DeviceItem.types";
import { EmptyDevice } from "./EmptyDevice/EmptyDevice";
import { ThermometerCard } from "./ThermometerCard/ThermometerCard";
import { useLocalStorageDevice } from "@/hooks/useLocalStorageDevice.hook";
import { useGetDevice } from "./DeviceItem.hooks";

export const DeviceItem = ({ localStorageKey }: DeviceItemProps) => {
  const { deviceId } = useLocalStorageDevice(localStorageKey);
  const items = useChangeDisplayedDevice(localStorageKey);
  const { data } = useGetDevice({ id: deviceId || "" });

  if (data?.id === undefined) {
    return <EmptyDevice items={items || []} />;
  }

  return data?.type === "THERMOMETER" ? (
    <ThermometerCard
      name={data?.name || ""}
      items={items || []}
      thermometers={data?.thermometers}
    />
  ) : (
    <BlindCard name={data?.name || ""} items={items || []} blinds={{}} />
  );
};
