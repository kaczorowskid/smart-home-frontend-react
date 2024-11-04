import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";
import {
  CreateDevicePayload,
  CreateDeviceResponse,
  DeleteDevicePayload,
  DeleteDeviceResponse,
  GetAllBlindsResponse,
  GetAllDevicesResponse,
  GetAllThermometersResponse,
  GetDeviceDataForGraphPayload,
  GetDeviceDataForGraphResponse,
  GetOneDevicePayload,
  GetOneDevicesResponse,
  UpdateDevicePayload,
  UpdateDeviceResponse,
} from "../types/devices.types";
import { queryKeys } from "@/utils/queryKeys";
import {
  createDevice,
  deleteDevice,
  getAllBlinds,
  getAllDevices,
  getAllThermometers,
  getDeviceDataForGraph,
  getOneDevice,
  udpateDevice,
} from "../handlers/devices.handlers";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { queryClient } from "@/utils/queryClient";

export const useGetOneDevice = (
  payload: GetOneDevicePayload
): UseQueryResult<GetOneDevicesResponse> =>
  useQuery({
    queryKey: [queryKeys.getOneDevice, payload.id],
    queryFn: () => getOneDevice(payload),
    enabled: !!payload.id,
  });

export const useGetAllDevices = (
  enabled: boolean
): UseQueryResult<GetAllDevicesResponse> =>
  useQuery({
    queryKey: [queryKeys.getAllDevices],
    queryFn: getAllDevices,
    enabled,
  });

export const useGetDeviceDataForGraph = (
  payload: GetDeviceDataForGraphPayload
): UseQueryResult<GetDeviceDataForGraphResponse> =>
  useQuery({
    queryKey: [queryKeys.getDeviceDataForGraph, Object.values(payload)],
    queryFn: () => getDeviceDataForGraph(payload),
    enabled: !!payload.deviceId,
  });

export const useGetAllThermometers =
  (): UseQueryResult<GetAllThermometersResponse> =>
    useQuery({
      queryKey: [queryKeys.getAllThermometers],
      queryFn: getAllThermometers,
    });

export const useGetAllBlinds = (): UseQueryResult<GetAllBlindsResponse> =>
  useQuery({
    queryKey: [queryKeys.getAllBlinds],
    queryFn: getAllBlinds,
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
