import { BlindCard } from "./BlindCard";
import { DeviceItemNewProps } from "./DeviceItem.types";
import { EmptyDevice } from "./EmptyDevice";
import { ThermometerCard } from "./ThermometerCard";
import { DeviceProvider } from "./DeviceProvider";
import { useSelectorDataSource } from "@/hooks/useSelectorDataSource.hook";
import { useGetOneDevice } from "@/api/hooks/devices.hooks";

export const DeviceItem = ({
  deviceId,
  deviceLocalKey,
}: DeviceItemNewProps) => {
  const { id, items } = useSelectorDataSource(deviceId, deviceLocalKey, "ALL");
  const { data } = useGetOneDevice({ id: id || "" });

  if (!data?.type) {
    return <EmptyDevice items={items} />;
  }

  return (
    <DeviceProvider
      data={data}
      thermometer={(thermometer) => (
        <ThermometerCard
          items={items}
          name={thermometer.name}
          thermometerData={thermometer?.data}
        />
      )}
      blind={(blind) => (
        <BlindCard items={items} name={blind.name} blindValue={blind.value} />
      )}
    />
  );
};
