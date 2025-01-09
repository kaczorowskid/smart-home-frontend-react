import { toast } from "sonner";
import { type AxiosError } from "axios";
import { queryKeys } from "@/utils/queryKeys";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { routesPath } from "@/routes/routesPath";
import { queryClient } from "@/utils/queryClient";
import { apiErrorMapper } from "@/utils/errorMapper";
import { type CustomAxiosError } from "@/types/common.types";
import {
  ErrorNotification,
  SuccessNotification,
} from "@/components/common/Notification";
import {
  useQuery,
  useMutation,
  type UseQueryResult,
  type UseMutationResult,
} from "@tanstack/react-query";
import {
  deleteUser,
  getOneUser,
  updateUser,
  getAllUsers,
  getUserByToken,
  createUserByAdmin,
  registerAndVerifyUser,
} from "../handlers/user.handlers";
import {
  type DeleteUserPayload,
  type GetOneUserPayload,
  type UpdateUserPayload,
  type DeleteUserResponse,
  type GetOneUserResponse,
  type UpdateUserResponse,
  type GetAllUsersResponse,
  type GetUserByTokenPayload,
  type GetUserByTokenResponse,
  type CreateUserByAdminPayload,
  type CreateUserByAdminResponse,
  type RegisterAndVerifyUserPayload,
  type RegisterAndVerifyUserResponse,
} from "../types/user.types";

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
    enabled: !!payload.id,
    queryFn: () => getOneUser({ id: payload.id }),
    queryKey: [queryKeys.getOneUser, Object.values(payload)],
  });

export const useGetAllUsers = (): UseQueryResult<GetAllUsersResponse> =>
  useQuery({
    queryFn: getAllUsers,
    queryKey: [queryKeys.getAllUsers],
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
    onSuccess: async ({ email }) => {
      toast.success(
        <FormattedMessage
          id="success.add"
          values={{
            success: () => <SuccessNotification>{email}</SuccessNotification>,
          }}
        />
      );

      await queryClient.invalidateQueries({
        queryKey: [queryKeys.getAllUsers],
      });
    },
  });

export const useUpdateUser = (): UseMutationResult<
  UpdateUserResponse,
  AxiosError,
  UpdateUserPayload
> =>
  useMutation({
    mutationFn: updateUser,
    onError: (error: CustomAxiosError) => {
      toast.error(
        <FormattedMessage
          id="error.update"
          values={{
            error: () => (
              <ErrorNotification>{apiErrorMapper(error)}</ErrorNotification>
            ),
          }}
        />
      );
    },
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
  });

export const useDeleteUser = (): UseMutationResult<
  DeleteUserResponse,
  AxiosError,
  DeleteUserPayload
> =>
  useMutation({
    mutationFn: deleteUser,
    onError: (error: CustomAxiosError) => {
      toast.error(
        <FormattedMessage
          id="error.delete"
          values={{
            error: () => (
              <ErrorNotification>{apiErrorMapper(error)}</ErrorNotification>
            ),
          }}
        />
      );
    },
    onSuccess: async ({ email }) => {
      toast.success(
        <FormattedMessage
          id="success.delete"
          values={{
            success: () => <SuccessNotification>{email}</SuccessNotification>,
          }}
        />
      );

      await queryClient.invalidateQueries({
        queryKey: [queryKeys.getAllUsers],
      });
    },
  });
