import { getDevicesToBeDisplayedIds } from "@/api/handlers/devices.handlers";
import { GetDeviceToBeDisplayedIdResponse } from "@/api/types/devices.types";
import { queryKeys } from "@/utils/queryKeys";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useGetDevicesToBeDisplayedIds = (): UseQueryResult<
  GetDeviceToBeDisplayedIdResponse[]
> =>
  useQuery({
    queryKey: [queryKeys.getDevicesToBeDisplayedIds],
    queryFn: getDevicesToBeDisplayedIds,
  });
