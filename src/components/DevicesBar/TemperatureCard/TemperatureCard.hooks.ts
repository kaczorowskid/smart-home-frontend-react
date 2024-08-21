import { getTemperatureDevice } from "@/api/handlers/devices.handlers";
import {
  GetTemperatureDevicePayload,
  GetTemperatureDeviceResponse,
} from "@/api/types/devices.types";
import { queryKeys } from "@/utils/queryKeys";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useGetTemperatureDevice = (
  payload: GetTemperatureDevicePayload
): UseQueryResult<GetTemperatureDeviceResponse> =>
  useQuery({
    queryKey: [queryKeys.getTemperatureDevice, ...Object.values(payload)],
    queryFn: () => getTemperatureDevice(payload),
    enabled: !!payload.id,
  });
