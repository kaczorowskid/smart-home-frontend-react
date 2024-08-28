import {
  getAllThermometers,
  getDeviceDataForGraph,
} from "@/api/handlers/devices.handlers";
import {
  GetAllThermometersResponse,
  GetDeviceDataForGraphPayload,
  GetDeviceDataForGraphResponse,
} from "@/api/types/devices.types";
import { queryKeys } from "@/utils/queryKeys";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useGetDeviceDataForGraph = (
  payload: GetDeviceDataForGraphPayload
): UseQueryResult<GetDeviceDataForGraphResponse> =>
  useQuery({
    queryKey: [queryKeys.getDeviceDataForGraph, ...Object.values(payload)],
    queryFn: () => getDeviceDataForGraph(payload),
    enabled: !!payload.deviceId,
  });

export const useGetAllThermometers =
  (): UseQueryResult<GetAllThermometersResponse> =>
    useQuery({
      queryKey: [queryKeys.getAllThermometers],
      queryFn: getAllThermometers,
    });
