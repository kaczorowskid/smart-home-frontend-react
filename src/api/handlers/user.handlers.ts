import { apiUrls } from "../apiUrls";
import { Request } from "../Request";
import {
  type DeleteUserPayload,
  type GetOneUserPayload,
  type UpdateUserPayload,
  type DeleteUserResponse,
  type GetOneUserResponse,
  type UpdateUserResponse,
  type GetAllUsersResponse,
  type GetUserByTokenPayload,
  type GetUserByTokenResponse,
  type CreateUserByAdminPayload,
  type CreateUserByAdminResponse,
  type RegisterAndVerifyUserPayload,
  type RegisterAndVerifyUserResponse,
} from "../types/user.types";

const request = new Request();

export const getAllUsers = async (): Promise<GetAllUsersResponse> =>
  request.get(apiUrls.user.base);

export const getOneUser = async (
  payload: GetOneUserPayload
): Promise<GetOneUserResponse> => request.get(apiUrls.user.getUser(payload.id));

export const createUserByAdmin = async (
  payload: CreateUserByAdminPayload
): Promise<CreateUserByAdminResponse> =>
  request.post(apiUrls.user.base, payload);

export const getUserByToken = async (
  payload: GetUserByTokenPayload
): Promise<GetUserByTokenResponse> =>
  request.get(apiUrls.user.getUserByToken(payload.token));

export const registerAndVerifyUser = async (
  payload: RegisterAndVerifyUserPayload
): Promise<RegisterAndVerifyUserResponse> =>
  request.patch(apiUrls.user.verifyUser(payload.id), payload);

export const deleteUser = async (
  payload: DeleteUserPayload
): Promise<DeleteUserResponse> =>
  request.delete(apiUrls.user.getUser(payload.id));

export const updateUser = async (
  payload: UpdateUserPayload
): Promise<UpdateUserResponse> =>
  request.patch(apiUrls.user.getUser(payload.id), payload);
