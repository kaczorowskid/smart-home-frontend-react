import { loginUser } from "@/api/handlers/auth.handlers";
import { LoginUserPayload, LoginUserResponse } from "@/api/types/auth.types";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const useLogin = (): UseMutationResult<
  LoginUserResponse,
  AxiosError,
  LoginUserPayload
> =>
  useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      toast.success("essa");
    },
    onError: () => {
      toast.error("no trudno ");
    },
  });
