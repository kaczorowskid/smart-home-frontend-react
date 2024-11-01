import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";
import {
  CreateUserByAdminPayload,
  CreateUserByAdminResponse,
  DeleteUserPayload,
  DeleteUserResponse,
  GetAllUsersResponse,
  GetOneUserPayload,
  GetOneUserResponse,
  GetUserByTokenPayload,
  GetUserByTokenResponse,
  RegisterAndVerifyUserPayload,
  RegisterAndVerifyUserResponse,
  UpdateUserPayload,
  UpdateUserResponse,
} from "../types/user.types";
import { AxiosError } from "axios";
import {
  createUserByAdmin,
  deleteUser,
  getAllUsers,
  getOneUser,
  getUserByToken,
  registerAndVerifyUser,
  updateUser,
} from "../handlers/user.handlers";
import { toast } from "sonner";
import { queryClient } from "@/utils/queryClient";
import { queryKeys } from "@/utils/queryKeys";
import { useNavigate } from "react-router-dom";
import { routesPath } from "@/routes/routesPath";

export const useGetUserByToken = (
  payload: GetUserByTokenPayload
): UseQueryResult<GetUserByTokenResponse> =>
  useQuery({
    queryKey: [queryKeys.getOneUser],
    queryFn: () => getUserByToken({ token: payload.token }),
  });

export const useRegisterAndVerify = (): UseMutationResult<
  RegisterAndVerifyUserResponse,
  AxiosError,
  RegisterAndVerifyUserPayload
> => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: registerAndVerifyUser,
    onSuccess: () => {
      toast.success("essa");
      navigate(routesPath.auth.login);
    },
    onError: () => {
      toast.error("no trudno ");
    },
  });
};

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
    queryKey: [queryKeys.getOneUser, payload.id],
    queryFn: () => getOneUser({ id: payload.id }),
    enabled: !!payload.id,
  });

export const useGetAllUsers = (): UseQueryResult<GetAllUsersResponse> =>
  useQuery({
    queryKey: [queryKeys.getAllUsers],
    queryFn: getAllUsers,
  });
