import { apiUrls } from "../apiUrls";
import { Request } from "../Request";
import { LoginUserPayload, LoginUserResponse } from "../types/auth.types";

const request = new Request();

export const registerUser = async (
  payload: LoginUserPayload
): Promise<LoginUserResponse> => request.post(apiUrls.auth.register, payload);

export const loginUser = async (
  payload: LoginUserPayload
): Promise<LoginUserResponse> => request.post(apiUrls.auth.login, payload);
