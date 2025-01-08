import { useState } from "react";
import { type DisplayedDevicesKey } from "@/utils/localStorageKeys";

export const useLocalStorageDevice = (
  displayedDevicesKeys: DisplayedDevicesKey
) => {
  const [localValue, setLocalValue] = useState(
    localStorage.getItem(displayedDevicesKeys) || ""
  );

  const deviceId = localStorage.getItem(displayedDevicesKeys) || localValue;

  const setDeviceId = (value: string) => {
    localStorage.setItem(displayedDevicesKeys, value);
    setLocalValue(value);
  };

  return {
    deviceId,
    setDeviceId,
  };
};
