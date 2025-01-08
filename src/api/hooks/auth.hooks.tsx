import { toast } from "sonner";
import { type AxiosError } from "axios";
import { useUserStore } from "@/stores/user";
import { queryKeys } from "@/utils/queryKeys";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { routesPath } from "@/routes/routesPath";
import { apiErrorMapper } from "@/utils/errorMapper";
import { type CustomAxiosError } from "@/types/common.types";
import { ErrorNotification } from "@/components/common/Notification";
import {
  useQuery,
  useMutation,
  type UseQueryResult,
  type UseMutationResult,
} from "@tanstack/react-query";
import {
  loginUser,
  logoutUser,
  authorizeUser,
} from "../handlers/auth.handlers";
import {
  type LoginUserPayload,
  type LoginUserResponse,
  type LogoutUserResponse,
  type AuthorizeUserResponse,
} from "../types/auth.types";

export const useAuthorizeUser = (): UseQueryResult<
  AuthorizeUserResponse,
  AxiosError
> =>
  useQuery({
    retry: false,
    queryFn: authorizeUser,
    queryKey: [queryKeys.authorizeUser],
  });

export const useLogin = (): UseMutationResult<
  LoginUserResponse,
  AxiosError,
  LoginUserPayload
> => {
  const { setUser } = useUserStore();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (user) => {
      setUser({
        ...user,
        isLoggedIn: true,
      });
      navigate(routesPath.app.dashboard);
    },
    onError: (error: CustomAxiosError) => {
      toast.error(
        <FormattedMessage
          id="error.login"
          values={{
            error: () => (
              <ErrorNotification>{apiErrorMapper(error)}</ErrorNotification>
            ),
          }}
        />
      );
    },
  });
};

export const useLogoutUser = (): UseMutationResult<
  LogoutUserResponse,
  AxiosError,
  void
> => {
  return useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      window.location.replace(routesPath.base);
    },
    onError: (error: CustomAxiosError) => {
      toast.error(
        <FormattedMessage
          id="error.register"
          values={{
            error: () => (
              <ErrorNotification>{apiErrorMapper(error)}</ErrorNotification>
            ),
          }}
        />
      );
    },
  });
};
