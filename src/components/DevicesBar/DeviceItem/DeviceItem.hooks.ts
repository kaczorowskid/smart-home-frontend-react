import { getOneDevice } from "@/api/handlers/devices.handlers";
import { GetDevicePayload, GetDeviceResponse } from "@/api/types/devices.types";
import { queryKeys } from "@/utils/queryKeys";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useGetDevice = (
  payload: GetDevicePayload
): UseQueryResult<GetDeviceResponse> =>
  useQuery({
    queryKey: [queryKeys.getDevice, payload.id],
    queryFn: () => getOneDevice(payload),
  });
