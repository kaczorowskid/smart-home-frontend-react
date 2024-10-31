import {
  getAllThermometers,
  getDeviceDataForGraph,
} from "@/api/handlers/devices.handlers";
import {
  GetAllThermometersResponse,
  GetDeviceDataForGraphPayload,
  GetDeviceDataForGraphResponse,
} from "@/api/types/devices.types";
import { useChangeDisplayedDevice } from "@/hooks/useChangedDisplayedDevice.hook";
import { useLocalStorageDevice } from "@/hooks/useLocalStorageDevice.hook";
import { DisplayedDevicesKey } from "@/utils/localStorageKeys";
import { queryKeys } from "@/utils/queryKeys";
import { useGetAllDevices } from "@/views/app/Settings/DevicesTable/DevicesTable.hooks";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useGetDeviceDataForGraph = (
  payload: GetDeviceDataForGraphPayload
): UseQueryResult<GetDeviceDataForGraphResponse> =>
  useQuery({
    queryKey: [queryKeys.getDeviceDataForGraph, ...Object.values(payload)],
    queryFn: () => getDeviceDataForGraph(payload),
    enabled: !!payload.deviceId,
  });

export const useGetAllThermometers = (
  enabled: boolean
): UseQueryResult<GetAllThermometersResponse> =>
  useQuery({
    queryKey: [queryKeys.getAllThermometers],
    queryFn: getAllThermometers,
    enabled,
  });

export const useSelectorDataSource = (
  deviceId: string | undefined,
  deviceLocalKey: DisplayedDevicesKey | undefined,
  devicesType: "ALL" | "THERMOMETER"
) => {
  const isLocalKey = !!deviceLocalKey;

  const { data: allDevices } = useGetAllDevices(isLocalKey);
  const devices =
    devicesType === "ALL"
      ? allDevices
      : allDevices?.filter((item) => item.type === devicesType);

  const items = isLocalKey
    ? useChangeDisplayedDevice(deviceLocalKey, devices)
    : [];

  const device = isLocalKey ? useLocalStorageDevice(deviceLocalKey) : null;

  return {
    isLocalKey,
    items,
    id: isLocalKey ? device?.deviceId : deviceId,
  };
};
