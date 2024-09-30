import { loginUser } from "@/api/handlers/auth.handlers";
import { LoginUserPayload, LoginUserResponse } from "@/api/types/auth.types";
import { routesPath } from "@/routes/routesPath";
import { useUserStore } from "@/stores/user";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useLogin = (): UseMutationResult<
  LoginUserResponse,
  AxiosError,
  LoginUserPayload
> => {
  const { setUser } = useUserStore();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: ({ id, email, name, surname, role, isVerified }) => {
      setUser({
        id,
        email,
        name,
        surname,
        role,
        isVerified,
        isLoggedIn: true,
      });
      navigate(routesPath.app.dashboard);
    },
    onError: () => {
      toast.error("no trudno ");
    },
  });
};
