import { useChangeDisplayedDevice } from "../DevicesBar.hooks";
import { BlindCard } from "./BlindCard/BlindCard";
import { useGetDeviceToDisplay } from "./DeviceItem.hooks";
import { DeviceItemProps } from "./DeviceItem.types";
import { ThermometerCard } from "./ThermometerCard/ThermometerCard";

export const DeviceItem = ({ order }: DeviceItemProps) => {
  const items = useChangeDisplayedDevice();
  const { data } = useGetDeviceToDisplay({ order: String(order) });

  return data?.type === "THERMOMETER" ? (
    <ThermometerCard
      name={data?.name || ""}
      items={items(order) || []}
      thermometers={data?.thermometers}
    />
  ) : (
    <BlindCard name={data?.name || ""} items={items(order) || []} blinds={{}} />
  );
};
