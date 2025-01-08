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
  createRoom,
  deleteRoom,
  getOneRoom,
  updateRoom,
  getAllRooms,
} from "../handlers/room.handlers";
import {
  type CreateRoomPayload,
  type DeleteRoomPayload,
  type GetOneRoomPayload,
  type UpdateRoomPayload,
  type CreateRoomResponse,
  type DeleteRoomResponse,
  type GetOneRoomResponse,
  type UpdateRoomResponse,
  type GetAllRoomsResponse,
} from "../types/room.types";

export const useGetOneRoom = (
  payload: GetOneRoomPayload
): UseQueryResult<GetOneRoomResponse> =>
  useQuery({
    enabled: !!payload.id,
    queryFn: () => getOneRoom({ id: payload.id }),
    queryKey: [queryKeys.getAllRooms, Object.values(payload)],
  });

export const useGetAllRooms = (): UseQueryResult<GetAllRoomsResponse> =>
  useQuery({
    queryFn: getAllRooms,
    queryKey: [queryKeys.getAllRooms],
  });

export const useCreateRoom = (): UseMutationResult<
  CreateRoomResponse,
  AxiosError,
  CreateRoomPayload
> =>
  useMutation({
    mutationFn: createRoom,
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
        queryKey: [queryKeys.getAllRooms],
      });
    },
  });

export const useUpdateRoom = (): UseMutationResult<
  UpdateRoomResponse,
  AxiosError,
  UpdateRoomPayload
> =>
  useMutation({
    mutationFn: updateRoom,
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
        queryKey: [queryKeys.getAllRooms],
      });
    },
  });

export const useDeleteRoom = (): UseMutationResult<
  DeleteRoomResponse,
  AxiosError,
  DeleteRoomPayload
> =>
  useMutation({
    mutationFn: deleteRoom,
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
        queryKey: [queryKeys.getAllRooms],
      });
    },
  });
