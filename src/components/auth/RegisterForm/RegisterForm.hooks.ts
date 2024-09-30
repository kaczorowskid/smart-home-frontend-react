import {
  getUserByToken,
  registerAndVerifyUser,
} from "@/api/handlers/user.handlers";
import {
  GetUserByTokenPayload,
  GetUserByTokenResponse,
  RegisterAndVerifyUserPayload,
  RegisterAndVerifyUserResponse,
} from "@/api/types/user.types";
import { routesPath } from "@/routes/routesPath";
import { queryKeys } from "@/utils/queryKeys";
import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useGetUserByToken = (
  payload: GetUserByTokenPayload
): UseQueryResult<GetUserByTokenResponse> =>
  useQuery({
    queryKey: [queryKeys.getOneUser],
    queryFn: () => getUserByToken({ token: payload.token }),
  });

export const useRegisterAndVerify = (): UseMutationResult<
  RegisterAndVerifyUserResponse,
  AxiosError,
  RegisterAndVerifyUserPayload
> => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: registerAndVerifyUser,
    onSuccess: () => {
      toast.success("essa");
      navigate(routesPath.auth.login);
    },
    onError: () => {
      toast.error("no trudno ");
    },
  });
};
