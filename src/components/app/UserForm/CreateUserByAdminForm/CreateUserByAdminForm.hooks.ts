import { createUserByAdmin } from "@/api/handlers/user.handlers";
import {
  CreateUserByAdminPayload,
  CreateUserByAdminResponse,
} from "@/api/types/user.types";
import { queryClient } from "@/utils/queryClient";
import { queryKeys } from "@/utils/queryKeys";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const useCreateUserByAdmin = (): UseMutationResult<
  CreateUserByAdminResponse,
  AxiosError,
  CreateUserByAdminPayload
> =>
  useMutation({
    mutationFn: createUserByAdmin,
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
