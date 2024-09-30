import { deleteUser, getAllUsers } from "@/api/handlers/user.handlers";
import {
  DeleteUserPayload,
  DeleteUserResponse,
  GetAllUsersResponse,
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

export const useGetAllUsers = (): UseQueryResult<GetAllUsersResponse> =>
  useQuery({
    queryKey: [queryKeys.getAllUsers],
    queryFn: getAllUsers,
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
