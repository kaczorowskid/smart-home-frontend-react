import { getOneRoom } from "@/api/handlers/room.handlers";
import { GetOneRoomPayload, GetOneRoomResponse } from "@/api/types/room.types";
import { queryKeys } from "@/utils/queryKeys";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useGetOneRoom = (
  payload: GetOneRoomPayload
): UseQueryResult<GetOneRoomResponse> =>
  useQuery({
    queryKey: [queryKeys.getAllRooms, payload.id],
    queryFn: () => getOneRoom({ id: payload.id }),
    enabled: !!payload.id,
  });
