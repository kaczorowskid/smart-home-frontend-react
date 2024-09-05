import { authorizeUser } from "@/api/handlers/auth.handlers";
import { AuthorizeUserResponse } from "@/api/types/auth.types";
import { queryKeys } from "@/utils/queryKeys";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useAuthorizeUser = (): UseQueryResult<
  AuthorizeUserResponse,
  AxiosError
> =>
  useQuery({
    queryKey: [queryKeys.authorizeUser],
    queryFn: authorizeUser,
  });
