import { type DeviceProviderProps } from "./DeviceProvider.types";

export const DeviceProvider = ({
  data,
  blind,
  thermometer,
}: DeviceProviderProps) => {
  switch (data?.type) {
    case "BLIND":
      return blind(data);
    case "THERMOMETER":
      return thermometer(data);
  }
};
