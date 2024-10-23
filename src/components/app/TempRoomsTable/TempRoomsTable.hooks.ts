import { getAllRooms } from "@/api/handlers/room.handlers";
import { GetAllRoomsResponse } from "@/api/types/room.types";
import { queryKeys } from "@/utils/queryKeys";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useGetAllRooms = (): UseQueryResult<GetAllRoomsResponse> =>
  useQuery({
    queryKey: [queryKeys.getAllRooms],
    queryFn: getAllRooms,
  });
