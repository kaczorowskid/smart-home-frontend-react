import { getDeviceTemperatureForGraph } from "@/api/handlers/devices.handlers";
import {
  GetDeviceTemperatureForGraphPayload,
  GetDeviceTemperatureForGraphResponse,
} from "@/api/types/devices.types";
import { queryKeys } from "@/utils/queryKeys";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useGetDeviceTemperatureForGraph = (
  payload: GetDeviceTemperatureForGraphPayload
): UseQueryResult<GetDeviceTemperatureForGraphResponse[]> =>
  useQuery({
    queryKey: [
      queryKeys.getDeviceTemperatureForGraph,
      ...Object.values(payload),
    ],
    queryFn: () => getDeviceTemperatureForGraph(payload),
    enabled: !!payload.deviceId,
  });
