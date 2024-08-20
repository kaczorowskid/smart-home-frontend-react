import { getTemperatureDevice } from "@/api/handlers/devices.handlers";
import { GetTemperatureDeviceResponse } from "@/api/types/devices.types";
import { queryKeys } from "@/utils/queryKeys";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useGetTemperatureDevice = (
  id: string
): UseQueryResult<GetTemperatureDeviceResponse> =>
  useQuery({
    queryKey: [queryKeys.getTemperatureDevice, id],
    queryFn: () => getTemperatureDevice({ id }),
    enabled: !!id,
  });
