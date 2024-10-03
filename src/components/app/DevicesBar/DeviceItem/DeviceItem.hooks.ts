import { getAllDevices, getOneDevice } from "@/api/handlers/devices.handlers";
import {
  GetAllDevicesResponse,
  GetOneDevicePayload,
  GetOneDevicesResponse,
} from "@/api/types/devices.types";
import { queryKeys } from "@/utils/queryKeys";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useGetDevice = (
  payload: GetOneDevicePayload
): UseQueryResult<GetOneDevicesResponse> =>
  useQuery({
    queryKey: [queryKeys.getOneDevice, payload.id],
    queryFn: () => getOneDevice(payload),
  });

export const useGetAllDevices = (): UseQueryResult<GetAllDevicesResponse> =>
  useQuery({
    queryKey: [queryKeys.getAllDevices],
    queryFn: getAllDevices,
  });
