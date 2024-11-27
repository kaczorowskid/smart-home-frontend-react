import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";
import {
  CreateRoomPayload,
  CreateRoomResponse,
  DeleteRoomPayload,
  DeleteRoomResponse,
  GetAllRoomsResponse,
  GetOneRoomPayload,
  GetOneRoomResponse,
  UpdateRoomPayload,
  UpdateRoomResponse,
} from "../types/room.types";
import { queryKeys } from "@/utils/queryKeys";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getOneRoom,
  updateRoom,
} from "../handlers/room.handlers";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { queryClient } from "@/utils/queryClient";
import { FormattedMessage } from "react-intl";
import {
  ErrorNotification,
  SuccessNotification,
} from "@/components/common/Notification";

export const useGetOneRoom = (
  payload: GetOneRoomPayload
): UseQueryResult<GetOneRoomResponse> =>
  useQuery({
    queryKey: [queryKeys.getAllRooms, Object.values(payload)],
    queryFn: () => getOneRoom({ id: payload.id }),
    enabled: !!payload.id,
  });

export const useGetAllRooms = (): UseQueryResult<GetAllRoomsResponse> =>
  useQuery({
    queryKey: [queryKeys.getAllRooms],
    queryFn: getAllRooms,
  });

export const useCreateRoom = (): UseMutationResult<
  CreateRoomResponse,
  AxiosError,
  CreateRoomPayload
> =>
  useMutation({
    mutationFn: createRoom,
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
        queryKey: [queryKeys.getAllRooms],
      });
    },
    onError: ({ message }) => {
      toast.error(
        <FormattedMessage
          id="error.add"
          values={{
            error: () => <ErrorNotification>{message}</ErrorNotification>,
          }}
        />
      );
    },
  });

export const useUpdateRoom = (): UseMutationResult<
  UpdateRoomResponse,
  AxiosError,
  UpdateRoomPayload
> =>
  useMutation({
    mutationFn: updateRoom,
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
        queryKey: [queryKeys.getAllRooms],
      });
    },
    onError: ({ message }) => {
      toast.error(
        <FormattedMessage
          id="error.update"
          values={{
            error: () => <ErrorNotification>{message}</ErrorNotification>,
          }}
        />
      );
    },
  });

export const useDeleteRoom = (): UseMutationResult<
  DeleteRoomResponse,
  AxiosError,
  DeleteRoomPayload
> =>
  useMutation({
    mutationFn: deleteRoom,
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
        queryKey: [queryKeys.getAllRooms],
      });
    },
    onError: ({ message }) => {
      toast.error(
        <FormattedMessage
          id="error.delete"
          values={{
            error: () => <ErrorNotification>{message}</ErrorNotification>,
          }}
        />
      );
    },
  });
