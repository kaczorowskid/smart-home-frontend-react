import { LocalStorageKey } from "@/utils/localStorageKeys";
import { useState } from "react";

export const useLocalStorageDevice = (localStorageKey: LocalStorageKey) => {
  const [localValue, setLocalValue] = useState(
    localStorage.getItem(localStorageKey) || ""
  );

  const deviceId = localStorage.getItem(localStorageKey) || localValue;

  const setDeviceId = (value: string) => {
    localStorage.setItem(localStorageKey, value);
    setLocalValue(value);
  };

  return {
    deviceId,
    setDeviceId,
  };
};
