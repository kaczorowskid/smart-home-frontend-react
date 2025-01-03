import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";
import {
  CreateRolePayload,
  CreateRoleResponse,
  DeleteRolePayload,
  DeleteRoleResponse,
  GetAllPermissionsResponse,
  GetAllRolesResponse,
  GetOneRolePayload,
  GetOneRoleResponse,
  UpdateRolePayload,
  UpdateRoleResponse,
} from "../types/role.types";
import { queryKeys } from "@/utils/queryKeys";
import {
  createRole,
  deleteRole,
  getAllPermissions,
  getAllRoles,
  getOneRole,
  updateRole,
} from "../handlers/role.handlers";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { FormattedMessage } from "react-intl";
import {
  ErrorNotification,
  SuccessNotification,
} from "@/components/common/Notification";
import { queryClient } from "@/utils/queryClient";
import { CustomAxiosError } from "@/types/common.types";
import { apiErrorMapper } from "@/utils/errorMapper";

export const useGetAllRoles = (): UseQueryResult<GetAllRolesResponse> =>
  useQuery({
    queryKey: [queryKeys.getAllRoles],
    queryFn: getAllRoles,
  });

export const useGetAllPermissions =
  (): UseQueryResult<GetAllPermissionsResponse> =>
    useQuery({
      queryKey: [queryKeys.getAllPermissions],
      queryFn: getAllPermissions,
    });

export const useGetOneRole = (
  payload: GetOneRolePayload
): UseQueryResult<GetOneRoleResponse> =>
  useQuery({
    queryKey: [queryKeys.getOneRole],
    queryFn: () => getOneRole({ id: payload.id }),
    enabled: !!payload.id,
  });

export const useCreateRole = (): UseMutationResult<
  CreateRoleResponse,
  AxiosError,
  CreateRolePayload
> =>
  useMutation({
    mutationFn: createRole,
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

export const useUpdateRole = (): UseMutationResult<
  UpdateRoleResponse,
  AxiosError,
  UpdateRolePayload
> =>
  useMutation({
    mutationFn: updateRole,
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
  });

export const useDeleteRole = (): UseMutationResult<
  DeleteRoleResponse,
  AxiosError,
  DeleteRolePayload
> =>
  useMutation({
    mutationFn: deleteRole,
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
  });
