import { logoutUser } from "@/api/handlers/auth.handlers";
import { LogoutUserResponse } from "@/api/types/auth.types";
import { routesPath } from "@/routes/routesPath";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useLogoutUser = (): UseMutationResult<
  LogoutUserResponse,
  AxiosError,
  void
> => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      navigate(routesPath.auth.login);
    },
    onError: () => {
      toast.error("no trudno");
    },
  });
};
