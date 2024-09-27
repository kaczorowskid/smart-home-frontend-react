import { getAllUsers } from "@/api/handlers/user.handlers";
import { GetAllUsersResponse } from "@/api/types/user.types";
import { queryKeys } from "@/utils/queryKeys";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useGetAllusers = (): UseQueryResult<GetAllUsersResponse> =>
  useQuery({
    queryKey: [queryKeys.getAllUsers],
    queryFn: getAllUsers,
  });
