import { getAllDevices } from "@/api/handlers/devices.handlers";
import { GetAllDevicesResponse } from "@/api/types/devices.types";
import { queryKeys } from "@/utils/queryKeys";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useGetAllDevices = (): UseQueryResult<GetAllDevicesResponse> =>
  useQuery({
    queryKey: [queryKeys.getAllDevices],
    queryFn: getAllDevices,
  });
