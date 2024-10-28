import {
  getAllBlinds,
  getAllThermometers,
} from "@/api/handlers/devices.handlers";
import {
  createRoom,
  deleteRoom,
  getOneRoom,
  updateRoom,
} from "@/api/handlers/room.handlers";
import {
  GetAllBlindsResponse,
  GetAllThermometersResponse,
} from "@/api/types/devices.types";
import {
  CreateRoomPayload,
  CreateRoomResponse,
  DeleteRoomPayload,
  DeleteRoomResponse,
  GetOneRoomPayload,
  UpdateRoomPayload,
  UpdateRoomResponse,
} from "@/api/types/room.types";
import { GetOneUserResponse } from "@/api/types/user.types";
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

export const useGetOneRoom = (
  payload: GetOneRoomPayload
): UseQueryResult<GetOneUserResponse> =>
  useQuery({
    queryKey: [queryKeys.getOneRoom, payload.id],
    queryFn: () => getOneRoom({ id: payload.id }),
    enabled: !!payload.id,
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
