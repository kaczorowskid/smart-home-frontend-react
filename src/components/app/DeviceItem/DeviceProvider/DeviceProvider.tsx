import { DeviceProviderProps } from "./DeviceProvider.types";

export const DeviceProvider = ({
  data,
  thermometer,
  blind,
}: DeviceProviderProps) => {
  switch (data?.type) {
    case "THERMOMETER":
      return thermometer(data);
    case "BLIND":
      return blind(data);
  }
};
