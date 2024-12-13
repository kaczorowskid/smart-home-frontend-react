import { apiUrls } from "../apiUrls";
import { Request } from "../Request";
import {
  AuthorizeUserResponse,
  LoginUserPayload,
  LoginUserResponse,
  LogoutUserResponse,
  RefreshUserAccessTokenResponse,
} from "../types/auth.types";

const request = new Request();

export const registerUser = async (
  payload: LoginUserPayload
): Promise<LoginUserResponse> => request.post(apiUrls.auth.register, payload);

export const loginUser = async (
  payload: LoginUserPayload
): Promise<LoginUserResponse> => request.post(apiUrls.auth.login, payload);

export const authorizeUser = async (): Promise<AuthorizeUserResponse> =>
  request.get(apiUrls.auth.authorize);

export const refreshUserAccessToken =
  async (): Promise<RefreshUserAccessTokenResponse> =>
    request.get(apiUrls.auth.refresh);

export const logoutUser = async (): Promise<LogoutUserResponse> =>
  request.get(apiUrls.auth.logout);
