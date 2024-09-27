import { registerUser } from "@/api/handlers/auth.handlers";
import {
  RegisterUserPayload,
  RegisterUserResponse,
} from "@/api/types/auth.types";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const useRegister = (): UseMutationResult<
  RegisterUserResponse,
  AxiosError,
  RegisterUserPayload
> =>
  useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      toast.success("essa");
    },
    onError: () => {
      toast.error("no trudno ");
    },
  });
