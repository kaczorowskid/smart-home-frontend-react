import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";
import {
  AuthorizeUserResponse,
  LoginUserPayload,
  LoginUserResponse,
  LogoutUserResponse,
} from "../types/auth.types";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import {
  authorizeUser,
  loginUser,
  logoutUser,
} from "../handlers/auth.handlers";
import { routesPath } from "@/routes/routesPath";
import { toast } from "sonner";
import { queryKeys } from "@/utils/queryKeys";
import { useUserStore } from "@/stores/user";
import { FormattedMessage } from "react-intl";
import { ErrorNotification } from "@/components/common/Notification";
import { CustomAxiosError } from "@/types/common.types";
import { apiErrorMapper } from "@/utils/errorMapper";

export const useAuthorizeUser = (): UseQueryResult<
  AuthorizeUserResponse,
  AxiosError
> =>
  useQuery({
    queryKey: [queryKeys.authorizeUser],
    queryFn: authorizeUser,
    retry: false,
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
