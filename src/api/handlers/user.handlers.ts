import { apiUrls } from "../apiUrls";
import { Request } from "../Request";
import { GetAllUsersResponse } from "../types/user.types";

const request = new Request();

export const getAllUsers = async (): Promise<GetAllUsersResponse> =>
  request.get(apiUrls.user.base);
