import { createDevice, udpateDevice } from "@/api/handlers/devices.handlers";
import {
  CreateDevicePayload,
  CreateDeviceResponse,
  UpdateDevicePayload,
  UpdateDeviceResponse,
} from "@/api/types/devices.types";
import { queryClient } from "@/utils/queryClient";
import { queryKeys } from "@/utils/queryKeys";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

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
