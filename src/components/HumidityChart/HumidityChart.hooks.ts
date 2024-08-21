import { getDeviceHumidityForGraph } from "@/api/handlers/devices.handlers";
import {
  GetDeviceHumidityForGraphPayload,
  GetDeviceHumidityForGraphResponse,
} from "@/api/types/devices.types";
import { queryKeys } from "@/utils/queryKeys";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useGetDeviceHumidityForGraph = (
  payload: GetDeviceHumidityForGraphPayload
): UseQueryResult<GetDeviceHumidityForGraphResponse[]> =>
  useQuery({
    queryKey: [queryKeys.getDeviceHumidityForGraph, ...Object.values(payload)],
    queryFn: () => getDeviceHumidityForGraph(payload),
    enabled: !!payload.deviceId,
  });
