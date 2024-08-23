import { queryKeys } from "@/utils/queryKeys";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useGetAllDevices } from "../DevicesTable/DevicesTable.hooks";
import { createOrUpdateDevice } from "@/api/handlers/displayedDevice.handlers";
import {
  CreateOrUpdateDevicePayload,
  CreateOrUpdateDeviceResponse,
} from "@/api/types/displayedDevice.types";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { queryClient } from "@/utils/queryClient";

export const useCreateOrUpdateDevice = (): UseMutationResult<
  CreateOrUpdateDeviceResponse,
  AxiosError,
  CreateOrUpdateDevicePayload
> =>
  useMutation({
    mutationFn: createOrUpdateDevice,
    onSuccess: async (data) => {
      toast.success("essa");
      await queryClient.invalidateQueries({
        queryKey: [queryKeys.getTemperatureDevice, { order: data.order }],
      });
    },
    onError: () => {
      toast.error("dupa");
    },
  });

export const useChangeDisplayedDevice = () => {
  const { data } = useGetAllDevices();
  const { mutate } = useCreateOrUpdateDevice();

  const items = (order: number) =>
    data?.map(({ id, name }) => ({
      label: name,
      onClick: () => mutate({ id, order: String(order) }),
    }));

  return items;
};
