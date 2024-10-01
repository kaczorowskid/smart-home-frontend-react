import {
  deleteUser,
  getOneUser,
  updateUser,
} from "@/api/handlers/user.handlers";
import {
  DeleteUserPayload,
  DeleteUserResponse,
  GetOneUserPayload,
  GetOneUserResponse,
  UpdateUserPayload,
  UpdateUserResponse,
} from "@/api/types/user.types";
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

export const useUpdateUser = (): UseMutationResult<
  UpdateUserResponse,
  AxiosError,
  UpdateUserPayload
> =>
  useMutation({
    mutationFn: updateUser,
    onSuccess: async () => {
      toast.success("essa");
      await queryClient.invalidateQueries({
        queryKey: [queryKeys.getAllUsers],
      });
    },
    onError: () => {
      toast.error("no trudno ");
    },
  });

export const useDeleteUser = (): UseMutationResult<
  DeleteUserResponse,
  AxiosError,
  DeleteUserPayload
> =>
  useMutation({
    mutationFn: deleteUser,
    onSuccess: async () => {
      toast.success("user has been deleted");
      await queryClient.invalidateQueries({
        queryKey: [queryKeys.getAllUsers],
      });
    },
    onError: () => {
      toast.error("error ");
    },
  });

export const useGetOneUser = (
  payload: GetOneUserPayload
): UseQueryResult<GetOneUserResponse> =>
  useQuery({
    queryKey: [queryKeys.getOneUser, payload.email],
    queryFn: () => getOneUser({ email: payload.email }),
  });
