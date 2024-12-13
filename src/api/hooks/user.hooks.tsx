import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";
import {
  CreateUserByAdminPayload,
  CreateUserByAdminResponse,
  DeleteUserPayload,
  DeleteUserResponse,
  GetAllUsersResponse,
  GetOneUserPayload,
  GetOneUserResponse,
  GetUserByTokenPayload,
  GetUserByTokenResponse,
  RegisterAndVerifyUserPayload,
  RegisterAndVerifyUserResponse,
  UpdateUserPayload,
  UpdateUserResponse,
} from "../types/user.types";
import { AxiosError } from "axios";
import {
  createUserByAdmin,
  deleteUser,
  getAllUsers,
  getOneUser,
  getUserByToken,
  registerAndVerifyUser,
  updateUser,
} from "../handlers/user.handlers";
import { toast } from "sonner";
import { queryClient } from "@/utils/queryClient";
import { queryKeys } from "@/utils/queryKeys";
import { useNavigate } from "react-router-dom";
import { routesPath } from "@/routes/routesPath";
import { FormattedMessage } from "react-intl";
import {
  ErrorNotification,
  SuccessNotification,
} from "@/components/common/Notification";
import { CustomAxiosError } from "@/types/common.types";
import { apiErrorMapper } from "@/utils/errorMapper";

export const useGetUserByToken = (
  payload: GetUserByTokenPayload
): UseQueryResult<GetUserByTokenResponse> =>
  useQuery({
    queryKey: [queryKeys.getOneUser],
    queryFn: () => getUserByToken({ token: payload.token }),
  });

export const useGetOneUser = (
  payload: GetOneUserPayload
): UseQueryResult<GetOneUserResponse> =>
  useQuery({
    queryKey: [queryKeys.getOneUser, Object.values(payload)],
    queryFn: () => getOneUser({ id: payload.id }),
    enabled: !!payload.id,
  });

export const useGetAllUsers = (): UseQueryResult<GetAllUsersResponse> =>
  useQuery({
    queryKey: [queryKeys.getAllUsers],
    queryFn: getAllUsers,
  });

export const useRegisterAndVerify = (): UseMutationResult<
  RegisterAndVerifyUserResponse,
  AxiosError,
  RegisterAndVerifyUserPayload
> => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: registerAndVerifyUser,
    onSuccess: ({ name }) => {
      toast.success(
        <FormattedMessage
          id="success.verify"
          values={{
            success: () => <SuccessNotification>{name}</SuccessNotification>,
          }}
        />
      );
      navigate(routesPath.auth.login);
    },
    onError: (error: CustomAxiosError) => {
      toast.error(
        <FormattedMessage
          id="error.verify"
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

export const useCreateUserByAdmin = (): UseMutationResult<
  CreateUserByAdminResponse,
  AxiosError,
  CreateUserByAdminPayload
> =>
  useMutation({
    mutationFn: createUserByAdmin,
    onSuccess: async ({ name }) => {
      toast.success(
        <FormattedMessage
          id="success.add"
          values={{
            success: () => <SuccessNotification>{name}</SuccessNotification>,
          }}
        />
      );

      await queryClient.invalidateQueries({
        queryKey: [queryKeys.getAllUsers],
      });
    },
    onError: (error: CustomAxiosError) => {
      toast.error(
        <FormattedMessage
          id="error.add"
          values={{
            error: () => (
              <ErrorNotification>{apiErrorMapper(error)}</ErrorNotification>
            ),
          }}
        />
      );
    },
  });

export const useUpdateUser = (): UseMutationResult<
  UpdateUserResponse,
  AxiosError,
  UpdateUserPayload
> =>
  useMutation({
    mutationFn: updateUser,
    onSuccess: async ({ name }) => {
      toast.success(
        <FormattedMessage
          id="success.update"
          values={{
            success: () => <SuccessNotification>{name}</SuccessNotification>,
          }}
        />
      );

      await queryClient.invalidateQueries({
        queryKey: [queryKeys.getAllUsers],
      });
    },
    onError: (error: CustomAxiosError) => {
      toast.error(
        <FormattedMessage
          id="error.add"
          values={{
            error: () => (
              <ErrorNotification>{apiErrorMapper(error)}</ErrorNotification>
            ),
          }}
        />
      );
    },
  });

export const useDeleteUser = (): UseMutationResult<
  DeleteUserResponse,
  AxiosError,
  DeleteUserPayload
> =>
  useMutation({
    mutationFn: deleteUser,
    onSuccess: async ({ name }) => {
      toast.success(
        <FormattedMessage
          id="success.add"
          values={{
            success: () => <SuccessNotification>{name}</SuccessNotification>,
          }}
        />
      );

      await queryClient.invalidateQueries({
        queryKey: [queryKeys.getAllUsers],
      });
    },
    onError: (error: CustomAxiosError) => {
      toast.error(
        <FormattedMessage
          id="error.add"
          values={{
            error: () => (
              <ErrorNotification>{apiErrorMapper(error)}</ErrorNotification>
            ),
          }}
        />
      );
    },
  });
