import {
  createDevice,
  deleteDevice,
  getOneDevice,
  udpateDevice,
} from "@/api/handlers/devices.handlers";
import {
  CreateDevicePayload,
  CreateDeviceResponse,
  DeleteDevicePayload,
  DeleteDeviceResponse,
  GetOneDevicePayload,
  GetOneDevicesResponse,
  UpdateDevicePayload,
  UpdateDeviceResponse,
} from "@/api/types/devices.types";
import { queryClient } from "@/utils/queryClient";
import { queryKeys } from "@/utils/queryKeys";
import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const useGetOneDevice = (
  payload: GetOneDevicePayload
): UseQueryResult<GetOneDevicesResponse> =>
  useQuery({
    queryKey: [queryKeys.getOneDevice, payload.id],
    queryFn: () => getOneDevice(payload),
    enabled: !!payload.id,
  });

export const useCreateDevice = (): UseMutationResult<
  CreateDeviceResponse,
  AxiosError,
  CreateDevicePayload
> =>
  useMutation({
    mutationFn: createDevice,
    onSuccess: async () => {
      toast.success("essa");
      await queryClient.invalidateQueries({
        queryKey: [queryKeys.getAllDevices],
      });
    },
    onError: () => {
      toast.error("dupa");
    },
  });

export const useUpdateDevice = (): UseMutationResult<
  UpdateDeviceResponse,
  AxiosError,
  UpdateDevicePayload
> =>
  useMutation({
    mutationFn: udpateDevice,
    onSuccess: async () => {
      toast.success("essa");
      await queryClient.invalidateQueries({
        queryKey: [queryKeys.getAllDevices],
      });
    },
    onError: () => {
      toast.error("dupa");
    },
  });

export const useDeleteDevice = (): UseMutationResult<
  DeleteDeviceResponse,
  AxiosError,
  DeleteDevicePayload
> =>
  useMutation({
    mutationFn: deleteDevice,
    onSuccess: async () => {
      toast.success("essa");
      await queryClient.invalidateQueries({
        queryKey: [queryKeys.getAllDevices],
      });
    },
    onError: () => {
      toast.error("dupa");
    },
  });
