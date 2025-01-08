import { useGetOneDevice } from "@/api/hooks/devices.hooks";
import { useSelectorDataSource } from "@/hooks/useSelectorDataSource.hook";
import { BlindCard } from "./BlindCard";
import { EmptyDevice } from "./EmptyDevice";
import { DeviceProvider } from "./DeviceProvider";
import { ThermometerCard } from "./ThermometerCard";
import { type DeviceItemNewProps } from "./DeviceItem.types";

export const DeviceItem = ({
  deviceId,
  deviceLocalKey,
}: DeviceItemNewProps) => {
  const { id, items, isLocalKey } = useSelectorDataSource(
    deviceId,
    deviceLocalKey,
    "ALL"
  );
  const { data } = useGetOneDevice({ id: id || "" });

  if (!data?.type) {
    return <EmptyDevice items={items} />;
  }

  return (
    <DeviceProvider
      data={data}
      blind={(blind) => (
        <BlindCard
          items={items}
          name={blind.name}
          isLocalKey={isLocalKey}
          blindValue={blind.value}
        />
      )}
      thermometer={(thermometer) => (
        <ThermometerCard
          items={items}
          isLocalKey={isLocalKey}
          name={thermometer.name}
          thermometerData={thermometer?.data}
        />
      )}
    />
  );
};
