import { BlindCard } from "./BlindCard";
import {
  DeviceItemProps,
  DeviceWithDeviceIdProps,
  DeviceWithLocalKeyProps,
} from "./DeviceItem.types";
import { EmptyDevice } from "./EmptyDevice";
import { ThermometerCard } from "./ThermometerCard";
import { useLocalStorageDevice } from "@/hooks/useLocalStorageDevice.hook";
import { useGetDevice, useGetAllDevices } from "./DeviceItem.hooks";
import { DeviceProvider } from "./DeviceProvider";
import { useChangeDisplayedDevice } from "@/hooks/useChangedDisplayedDevice.hook";

const DeviceWithLocalKey = ({
  displayedDeviceKey,
}: Omit<DeviceWithLocalKeyProps, "type">) => {
  const { data: allDevices } = useGetAllDevices();
  const deviceItems = useChangeDisplayedDevice(displayedDeviceKey, allDevices);
  const { deviceId } = useLocalStorageDevice(displayedDeviceKey);
  const { data } = useGetDevice({ id: deviceId || "" });

  if (!data?.type) {
    return <EmptyDevice items={deviceItems} />;
  }

  return (
    <DeviceProvider
      data={data}
      thermometer={(thermometer) => (
        <ThermometerCard
          items={deviceItems}
          name={thermometer.name}
          thermometerData={thermometer?.data}
        />
      )}
      blind={(blind) => (
        <BlindCard
          items={deviceItems}
          name={blind.name}
          blindValue={blind.value}
        />
      )}
    />
  );
};

const DeviceWithDeviceId = ({
  itemId,
}: Omit<DeviceWithDeviceIdProps, "type">) => {
  const { data } = useGetDevice({ id: itemId });

  return (
    <DeviceProvider
      data={data}
      thermometer={(thermometer) => (
        <ThermometerCard
          items={null}
          name={thermometer.name}
          thermometerData={thermometer?.data}
        />
      )}
      blind={(blind) => (
        <BlindCard items={null} name={blind.name} blindValue={blind.value} />
      )}
    />
  );
};

export const DeviceItem = (props: DeviceItemProps) => {
  if (props.type === "LOCAL") {
    return <DeviceWithLocalKey {...props} />;
  }

  return <DeviceWithDeviceId {...props} />;
};
