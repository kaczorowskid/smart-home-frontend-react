import { toast } from "sonner";
import { type AxiosError } from "axios";
import { queryKeys } from "@/utils/queryKeys";
import { FormattedMessage } from "react-intl";
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
  createRole,
  deleteRole,
  getOneRole,
  updateRole,
  getAllRoles,
  getAllPermissions,
} from "../handlers/role.handlers";
import {
  type CreateRolePayload,
  type DeleteRolePayload,
  type GetOneRolePayload,
  type UpdateRolePayload,
  type CreateRoleResponse,
  type DeleteRoleResponse,
  type GetOneRoleResponse,
  type UpdateRoleResponse,
  type GetAllRolesResponse,
  type GetAllPermissionsResponse,
} from "../types/role.types";

export const useGetAllRoles = (): UseQueryResult<GetAllRolesResponse> =>
  useQuery({
    queryFn: getAllRoles,
    queryKey: [queryKeys.getAllRoles],
  });

export const useGetAllPermissions =
  (): UseQueryResult<GetAllPermissionsResponse> =>
    useQuery({
      queryFn: getAllPermissions,
      queryKey: [queryKeys.getAllPermissions],
    });

export const useGetOneRole = (
  payload: GetOneRolePayload
): UseQueryResult<GetOneRoleResponse> =>
  useQuery({
    enabled: !!payload.id,
    queryKey: [queryKeys.getOneRole],
    queryFn: () => getOneRole({ id: payload.id }),
  });

export const useCreateRole = (): UseMutationResult<
  CreateRoleResponse,
  AxiosError,
  CreateRolePayload
> =>
  useMutation({
    mutationFn: createRole,
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
        queryKey: [queryKeys.getAllRoles],
      });
    },
  });

export const useUpdateRole = (): UseMutationResult<
  UpdateRoleResponse,
  AxiosError,
  UpdateRolePayload
> =>
  useMutation({
    mutationFn: updateRole,
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
        queryKey: [queryKeys.getAllRoles],
      });
    },
  });

export const useDeleteRole = (): UseMutationResult<
  DeleteRoleResponse,
  AxiosError,
  DeleteRolePayload
> =>
  useMutation({
    mutationFn: deleteRole,
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
    onSuccess: async ({ name }) => {
      toast.success(
        <FormattedMessage
          id="success.delete"
          values={{
            success: () => <SuccessNotification>{name}</SuccessNotification>,
          }}
        />
      );

      await queryClient.invalidateQueries({
        queryKey: [queryKeys.getAllRoles],
      });
    },
  });
