import { getDeviceToDisplay } from "@/api/handlers/displayedDevice.handlers";
import {
  GetDeviceToDisplayPayload,
  GetDeviceToDisplayResponse,
} from "@/api/types/displayedDevice.types";
import { queryKeys } from "@/utils/queryKeys";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useGetDeviceToDisplay = (
  payload: GetDeviceToDisplayPayload
): UseQueryResult<GetDeviceToDisplayResponse> =>
  useQuery({
    queryKey: [queryKeys.getDevice, { order: Number(payload.order) }],
    queryFn: () => getDeviceToDisplay(payload),
  });
