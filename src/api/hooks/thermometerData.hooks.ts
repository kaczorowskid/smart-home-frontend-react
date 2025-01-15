import { queryKeys } from "@/utils/queryKeys";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { getOneSensorDataLogs } from "../handlers/thermometerData.handlers";
import {
  type GetOneSensorDataLogsPayload,
  type GetOneSensorDataLogsResponse,
} from "../types/thermometerData.types";

export const useGetOneSensorDataLogs = (
  payload: GetOneSensorDataLogsPayload,
  isOpen: boolean
): UseQueryResult<GetOneSensorDataLogsResponse> =>
  useQuery({
    enabled: isOpen,
    queryFn: () => getOneSensorDataLogs({ id: payload.id }),
    queryKey: [queryKeys.getOneSensorDataByDeviceId, Object.values(payload)],
  });
