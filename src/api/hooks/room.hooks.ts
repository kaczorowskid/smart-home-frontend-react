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

export const useGetOneRoom = (
  payload: GetOneRoomPayload
): UseQueryResult<GetOneRoomResponse> =>
  useQuery({
    queryKey: [queryKeys.getAllRooms, payload.id],
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
    onSuccess: async () => {
      toast.success("essa");
      await queryClient.invalidateQueries({
        queryKey: [queryKeys.getAllRooms],
      });
    },
    onError: () => {
      toast.error("no trudno ");
    },
  });

export const useUpdateRoom = (): UseMutationResult<
  UpdateRoomResponse,
  AxiosError,
  UpdateRoomPayload
> =>
  useMutation({
    mutationFn: updateRoom,
    onSuccess: async () => {
      toast.success("essa");
      await queryClient.invalidateQueries({
        queryKey: [queryKeys.getAllRooms],
      });
    },
    onError: () => {
      toast.error("no trudno ");
    },
  });

export const useDeleteRoom = (): UseMutationResult<
  DeleteRoomResponse,
  AxiosError,
  DeleteRoomPayload
> =>
  useMutation({
    mutationFn: deleteRoom,
    onSuccess: async () => {
      toast.success("room has been deleted");
      await queryClient.invalidateQueries({
        queryKey: [queryKeys.getAllRooms],
      });
    },
    onError: () => {
      toast.error("error ");
    },
  });
