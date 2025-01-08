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
  createDevice,
  deleteDevice,
  getAllBlinds,
  getOneDevice,
  udpateDevice,
  getAllDevices,
  getAllThermometers,
  getDeviceDataForGraph,
} from "../handlers/devices.handlers";
import {
  type CreateDevicePayload,
  type DeleteDevicePayload,
  type GetOneDevicePayload,
  type UpdateDevicePayload,
  type CreateDeviceResponse,
  type DeleteDeviceResponse,
  type GetAllBlindsResponse,
  type UpdateDeviceResponse,
  type GetAllDevicesResponse,
  type GetOneDevicesResponse,
  type GetAllThermometersResponse,
  type GetDeviceDataForGraphPayload,
  type GetDeviceDataForGraphResponse,
} from "../types/devices.types";

export const useGetOneDevice = (
  payload: GetOneDevicePayload
): UseQueryResult<GetOneDevicesResponse> =>
  useQuery({
    enabled: !!payload.id,
    queryFn: () => getOneDevice(payload),
    queryKey: [queryKeys.getOneDevice, Object.values(payload)],
  });

export const useGetAllDevices = (
  enabled: boolean
): UseQueryResult<GetAllDevicesResponse> =>
  useQuery({
    enabled,
    queryFn: getAllDevices,
    queryKey: [queryKeys.getAllDevices],
  });

export const useGetDeviceDataForGraph = (
  payload: GetDeviceDataForGraphPayload
): UseQueryResult<GetDeviceDataForGraphResponse> =>
  useQuery({
    enabled: !!payload.deviceId,
    queryFn: () => getDeviceDataForGraph(payload),
    queryKey: [queryKeys.getDeviceDataForGraph, Object.values(payload)],
  });

export const useGetAllThermometers =
  (): UseQueryResult<GetAllThermometersResponse> =>
    useQuery({
      queryFn: getAllThermometers,
      queryKey: [queryKeys.getAllThermometers],
    });

export const useGetAllBlinds = (): UseQueryResult<GetAllBlindsResponse> =>
  useQuery({
    queryFn: getAllBlinds,
    queryKey: [queryKeys.getAllBlinds],
  });

export const useCreateDevice = (): UseMutationResult<
  CreateDeviceResponse,
  AxiosError,
  CreateDevicePayload
> =>
  useMutation({
    mutationFn: createDevice,
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
        queryKey: [queryKeys.getAllDevices],
      });
    },
  });

export const useUpdateDevice = (): UseMutationResult<
  UpdateDeviceResponse,
  AxiosError,
  UpdateDevicePayload
> =>
  useMutation({
    mutationFn: udpateDevice,
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
        queryKey: [queryKeys.getAllDevices],
      });
    },
  });

export const useDeleteDevice = (): UseMutationResult<
  DeleteDeviceResponse,
  AxiosError,
  DeleteDevicePayload
> =>
  useMutation({
    mutationFn: deleteDevice,
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
        queryKey: [queryKeys.getAllDevices],
      });
    },
  });
