import { createUserByAdmin } from "@/api/handlers/user.handlers";
import {
  CreateUserByAdminPayload,
  CreateUserByAdminResponse,
} from "@/api/types/user.types";
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
    onSuccess: () => {
      toast.success("essa");
    },
    onError: () => {
      toast.error("no trudno ");
    },
  });
