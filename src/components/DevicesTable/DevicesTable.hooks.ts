import { getAllDevices } from "@/api/handlers/devices.handlers";
import { GetDeviceResponse } from "@/api/types/devices.types";
import { queryKeys } from "@/utils/queryKeys";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useGetAllDevices = (): UseQueryResult<GetDeviceResponse[]> =>
  useQuery({
    queryKey: [queryKeys.getAllDevices],
    queryFn: getAllDevices,
  });
